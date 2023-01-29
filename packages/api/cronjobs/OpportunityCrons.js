import fs from 'fs'
import cron from 'node-cron'
import fetch from 'node-fetch'
import puppeteer from 'puppeteer'
import MeiliSearchClient from '../db/MeiliSearch.js'

const initScheduledJobs = async () => {
  // Schedule a cron job to run every 30 minutes
  const updateUnstoppedOpportunities = cron.schedule(
    '*/1 * * * *',
    async () => {
      console.log('Updating Unstopped Opportunities')

      // Search for opportunities in MeiliSearch that have an end date in the past
      const unstopOpportunitiesEnded = await MeiliSearchClient.index(
        'unstop'
      ).search('', {
        filter: `end_date_filter < ${Date.now()}`
      })

      console.log(unstopOpportunitiesEnded.map(opportunity => opportunity.id))

      // Get all opportunities currently in MeiliSearch
      const unstopOpportunitiesAll = await MeiliSearchClient.index(
        'unstop'
      ).getDocuments({ limit: 10000 })

      fs.writeFile(
        'allIds.json',
        unstopOpportunitiesAll?.hits.map(opportunity => opportunity.id),
        'utf8',
        () => {
          console.log('done')
        }
      )
      const unstopOpportunitiesIds = unstopOpportunitiesEnded?.hits.map(
        opportunity => opportunity.id
      )

      fs.writeFile('endedids.json', unstopOpportunitiesIds, 'utf8', () => {
        console.log('done')
      })

      console.log(unstopOpportunitiesIds)

      // Delete the opportunities that have ended from MeiliSearch
      await MeiliSearchClient.index('unstop').deleteDocuments(
        unstopOpportunitiesIds
      )

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
    }
  )
  updateUnstoppedOpportunities.start()
}

export default initScheduledJobs
