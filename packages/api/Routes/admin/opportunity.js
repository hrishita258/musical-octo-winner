import express from 'express'
import puppeteer from 'puppeteer'

const router = express.Router()

router.get('/hackathons/devpost', async (req, res) => {
  try {
    const pageN = req.query.page || 1
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://devpost.com/api/hackathons?page=' + pageN)

    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/hackathons/devfolio', async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      args: ['--disable-web-security', '--disable-features=IsolateOrigins']
    })
    const page = await browser.newPage()

    await page.evaluate(() => {
      var url = 'https://api.devfolio.co/api/search/hackathons'
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)

      xhr.setRequestHeader('Accept', 'application/json')
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          document.body.appendChild(document.createElement('pre'))
          document.getElementsByTagName('pre')[0].innerText = xhr.responseText
        }
      }

      var data = `{
            "type": "application_open",
          "from": 0,
          "size": 20
        }`

      xhr.send(data)
    })

    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/hackathons/unstop', async (req, res) => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(
      'https://unstop.com/api/public/opportunity/search-new?opportunity=all&filters=Open&types=oppstatus&atype=explore&showOlderResultForSearch=true'
    )
    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

export default router
