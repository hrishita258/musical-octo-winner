import cron from 'node-cron'
import fetch from 'node-fetch'
import puppeteer from 'puppeteer'
import MeiliSearchClient from '../db/MeiliSearch.js'

const initScheduledJobs = async () => {
  // Schedule a cron job to run every 30 minutes
  const updateUnstoppedOpportunities = cron.schedule(
    '*/1 * * * *',
    async () => {
      try {
        console.log('Updating Unstopped Opportunities working...')

        // Search for opportunities in MeiliSearch that have an end date in the past
        const unstopOpportunitiesEnded = await MeiliSearchClient.index(
          'unstop'
        ).search('', {
          filter: `end_date_filter < ${Date.now()}`
        })

        const unstopOpportunitiesIds = unstopOpportunitiesEnded?.hits.map(
          opportunity => opportunity.id
        )

        // Delete the opportunities that have ended from MeiliSearch
        await MeiliSearchClient.index('unstop').deleteDocuments(
          unstopOpportunitiesIds
        )

        // Get all opportunities currently in MeiliSearch
        const unstopOpportunitiesAll = await MeiliSearchClient.index(
          'unstop'
        ).getDocuments({ limit: 10000 })

        // Scrape new opportunities from the Unstop website
        const browser = await puppeteer.launch()
        for (let i = 1; i <= 30; i++) {
          const response = await fetch(
            `https://unstop.com/api/public/opportunity/search-new?page=${i}`
          )
          const data = await response.json()
          const opportunities = data.data.data
          for (const opportunity of opportunities) {
            if (opportunity.end_date_filter < Date.now()) {
              await MeiliSearchClient.index('unstop').deleteDocument(
                opportunity.id
              )
            } else {
              const existingOpportunity = await MeiliSearchClient.index(
                'unstop'
              ).getDocument(opportunity.id)
              if (!existingOpportunity) {
                opportunity.end_date_filter = Date.parse(opportunity.end_date)
                await MeiliSearchClient.index('unstop').addDocument({
                  ...opportunity,
                  end_date_filter: Date.parse(opportunity?.end_date)
                })
              }
            }
          }
        }
        await MeiliSearchClient.index('unstop').updateFilterableAttributes([
          'end_date_filter',
          'type'
        ])
      } catch (error) {
        console.log(error)
      }
    }
  )
  updateUnstoppedOpportunities.start()
}

export default initScheduledJobs
