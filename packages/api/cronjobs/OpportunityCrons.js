import fs from 'fs'
import cron from 'node-cron'
import puppeteer from 'puppeteer'
import MeiliSearchClient from '../db/MeiliSearch.js'

const initScheduledJobs = async () => {
  const updateUnstoppedOpportunities = cron.schedule(
    '*/30 * * * *',
    async () => {
      console.log('Updating Unstopped Opportunities')
      const AllNewOpportunities = []

      const unstopOpportunitiesEnded = await MeiliSearchClient.index(
        'unstop'
      ).search('', {
        filter: `end_date_filter < ${Date.now()}`
      })

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

      await MeiliSearchClient.index('unstop').deleteDocuments(
        unstopOpportunitiesIds
      )

      const browser = await puppeteer.launch()
      for (let i = 1; i <= 30; i++) {
        const page = await browser.newPage()
        await page.goto(
          'https://unstop.com/api/public/opportunity/search-new?page=' + i
        )
        await page.waitForSelector('pre')
        let element = await page.$('pre')
        let value = await page.evaluate(el => el.textContent, element)
        await page.close()

        const scrapedData = JSON.parse(value)?.data?.data?.filter(
          s => Date.parse(s?.end_date) > Date.now()
        )

        AllNewOpportunities.push(...scrapedData)
      }
      const updatedData = unstopOpportunitiesAll?.hits?.filter(
        uoa => !AllNewOpportunities?.find(sd => sd.id === uoa.id)
      )

      await MeiliSearchClient.index('unstop').addDocuments(
        updatedData?.map(s => ({
          ...s,
          end_date_filter: Date.parse(s?.end_date)
        }))
      )

      await MeiliSearchClient.index('unstop').updateFilterableAttributes([
        'end_date_filter',
        'type'
      ])
    }
  )

  updateUnstoppedOpportunities.start()
}

export default initScheduledJobs
