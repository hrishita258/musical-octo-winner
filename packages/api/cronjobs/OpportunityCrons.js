import cron from 'node-cron'
import puppeteer from 'puppeteer'
import MeiliSearchClient from '../../db/MeiliSearch.js'

export default () => {
  cron.schedule('0 * * * *', async () => {
    await updateUnstoppedOpportunities()
  })
}

const updateUnstoppedOpportunities = async () => {
  const AllNewOpportunities = []

  const unstopOpportunitiesEnded = await MeiliSearchClient.index(
    'unstop'
  ).search('', {
    filter: `end_date_filter < ${Date.now()}`
  })
  const unstopOpportunitiesAll = await MeiliSearchClient.index('unstop').search(
    '',
    {
      limit: 10000
    }
  )

  const unstopOpportunitiesIds = unstopOpportunitiesEnded?.hits.map(
    opportunity => opportunity.id
  )
  await MeiliSearchClient.index('unstop').deleteDocuments(
    unstopOpportunitiesIds
  )

  const browser = await puppeteer.launch()
  for (let i = 1; i <= 25; i++) {
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
