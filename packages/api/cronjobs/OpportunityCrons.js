import cron from 'node-cron'
import MeiliSearchClient from '../../db/MeiliSearch.js'
export default () => {
  cron.schedule('0 * * * *', async () => {
    await updateUnstoppedOpportunities()
  })
}

const updateUnstoppedOpportunities = async () => {
  const unstopOpportunities = await MeiliSearchClient.index('unstop').search(
    '',
    {
      filter: `end_date_filter < ${Date.now()}`
    }
  )

  console.log(unstopOpportunities)
}
