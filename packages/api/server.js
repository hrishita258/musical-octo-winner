import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import { randomBytes } from 'crypto'
import express from 'express'
import jwt from 'jsonwebtoken'
import { MeiliSearch } from 'meilisearch'
import puppeteer from 'puppeteer'
import initScheduledJobs from './cronjobs/OpportunityCrons.js'
import APIRoutes from './Routes/index.js'

const client = new MeiliSearch({
  host: 'https://ms-10cf7dd0c824-1050.sgp.meilisearch.io',
  apiKey: '78dc5f0674d379eba942767e92eca10803d86078'
})

const app = express()

const prisma = new PrismaClient()
const PORT = 4000

const ACCESS_TOKEN_EXPIRE_TIME = 3600
const JWT_ACCESS_SECRET = 'access_secret_HH'

const authTokenMiddleware = secret => {
  return (req, res, next) => {
    const token = req.headers['authorization']
    if (token) {
      try {
        const user = jwt.verify(token, secret)
        req.user = user
      } catch (err) {
        console.log(err)
      }
    }
    next()
  }
}

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(authTokenMiddleware(JWT_ACCESS_SECRET))

app.disable('x-powered-by')

app.use('/api', APIRoutes)

app.get('/mlh', async (req, res) => {
  const response = await client.index('mlh').getDocuments({ limit: 1000 })
  res.json({ response })
})

app.get('/', (req, res) => {
  res.json({ user: req.user })
})

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body
  const userAgent = req.headers['user-agent']
  console.log({ userAgent })
  if (!userAgent)
    return res.send({ status: 401, msg: 'user-agent not found......' })
  const user = await prisma.user.findFirst({
    where: { email }
  })
  if (!user || !user.isActive)
    return res.send({
      status: 401,
      msg: 'user not found or user is inactive...!'
    })
  if (!(await bcrypt.compare(password, user.password)))
    return res.send({
      status: 401,
      msg: 'user credentials not found'
    })
  const { accessToken, refreshToken, issuedAt, expiresAt } =
    generateTokens(user)
  try {
    await prisma.refreshTokens.create({
      data: {
        userAgent,
        token: refreshToken,
        userId: user.id
      }
    })
  } catch (err) {
    console.log(err)
  }
  res.status(200).json({
    result: {
      userId: user.id,
      role: user.role,
      email: user.email,
      fullname: user.name,
      profileImage: user.profileImage,
      accessToken,
      refreshToken,
      issuedAt,
      expiresAt
    },
    status: 200
  })
})

app.post('/refresh', async (req, res) => {
  console.log('called', req.body)
  const { token } = req.body
  if (!token) return res.status(400).json({ msg: 'token not provided' })
  const userAgent = req.headers['user-agent']
  if (!userAgent) res.status(400).json({ msg: 'user-agent not provided' })
  try {
    const foundRefreshToken = await prisma.refreshTokens.findFirst({
      where: {
        token
      }
    })
    console.log({ foundRefreshToken })
    if (!foundRefreshToken || !foundRefreshToken.isActive)
      return res.status(403).json({
        msg: 'no refresh token is found'
      })

    const user = await prisma.user.findFirst({
      where: {
        id: foundRefreshToken.userId
      }
    })
    if (!user)
      return res.status(401).json({ msg: 'no user found with that token' })
    if (!user.isActive)
      return res.status(403).json({ msg: 'user is not active' })
    const { accessToken, refreshToken, issuedAt, expiresAt } =
      generateTokens(user)
    await prisma.refreshTokens.update({
      where: {
        id: foundRefreshToken.id
      },
      data: {
        token: refreshToken,
        userAgent
      }
    })

    return res.status(200).json({
      userId: user.id,
      role: user.role,
      email: user.email,
      fullname: user.name,
      profileImage: user.profileImage,
      accessToken,
      refreshToken,
      issuedAt,
      expiresAt
    })
  } catch (error) {
    console.log(error)
  }
})

app.post('/api/admin/activeSessions', async (req, res) => {
  try {
    const { token } = req.body
    if (!token)
      return res.status(400).json({ status: 403, msg: 'token not provided' })
    const refreshToken = await prisma.refreshTokens.findMany({
      where: {
        userId: req.user.id,
        isActive: true
      }
    })

    refreshToken.forEach(rf => {
      if (rf.token !== token) {
        rf.token = ''
      }
    })

    res.json({ status: 200, result: refreshToken })
  } catch (error) {
    console.log(error)
  }
})

app.get('build', async (req, res) => {
  const urls = [
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-ui-java-developer-assessment-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-c-software-developer-interview-questions',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-adobe-campaign-developer-assessment-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-how-well-do-you-know-front-end-developer-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-mje4odg0nq925t',
    'https://www.proprofs.com/quiz-school/story.php?title=pp-mjk0ntk3nqkfc6',
    'https://www.proprofs.com/quiz-school/story.php?title=mjc1mdgynafhri',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-intelligent-sql-server-2012-developer-assessment-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-what-do-you-know-about-adobe-campaign-developer',
    'https://www.proprofs.com/quiz-school/story.php?title=njq3mzuz2jaf',
    'https://www.proprofs.com/quiz-school/story.php?title=web-developer-skill-test',
    'https://www.proprofs.com/quiz-school/story.php?title=nzy5odqyvxlc',
    'https://www.proprofs.com/quiz-school/story.php?title=mjy2mzmzmaibly',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-php-web-developer-assessment-testvv',
    'https://www.proprofs.com/quiz-school/story.php?title=state-new-jersey-private-developer',
    'https://www.proprofs.com/quiz-school/story.php?title=why-type-game-developer-are-you',
    'https://www.proprofs.com/quiz-school/story.php?title=mtg3ntm1natkbg',
    'https://www.proprofs.com/quiz-school/story.php?title=are-you-worthy-to-be-super-smash-flash-2-developer',
    'https://www.proprofs.com/quiz-school/story.php?title=computer-game-development-quiz-1',
    'https://www.proprofs.com/quiz-school/story.php?title=java_237',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-how-well-do-you-know-sharepoint-2013-test',
    'https://www.proprofs.com/quiz-school/story.php?title=mju3nzu3c3fm',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-teradata-database-administration-12-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-what-do-you-know-about-big-data-sqoop-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-how-well-do-you-know-scrum-master-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-how-well-do-you-know-3ds-max',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-do-you-know-santa-monica-studio',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-intelligent-ibm-db2-assessment-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-what-do-you-know-about-watir-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-ssis-software-trivia-quiz',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-a-quiz-about-gnu',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-can-you-survive-this-blizzard-game-challenge',
    'https://www.proprofs.com/quiz-school/story.php?title=abap-tcodes-1',
    'https://www.proprofs.com/quiz-school/story.php?title=09-developing-film-part-1',
    'https://www.proprofs.com/quiz-school/story.php?title=drafting-1-quiz-2',
    'https://www.proprofs.com/quiz-school/story.php?title=java-quiz-for-beginners',
    'https://www.proprofs.com/quiz-school/story.php?title=exit-1-fundamentals-of-sw-testing',
    'https://www.proprofs.com/quiz-school/story.php?title=sql-practice-test',
    'https://www.proprofs.com/quiz-school/story.php?title=njy2mtay1et0',
    'https://www.proprofs.com/quiz-school/story.php?title=nzezodi3pur3',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-ruby-on-rails-interview-questions',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-what-do-you-know-about-the-movie-two-weeks-notice',
    'https://www.proprofs.com/quiz-school/story.php?title=asc_91p9',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-microsoft-mcsa-70290-exam-prep',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-what-do-you-know-about-bryanboy-trivia-facts-quiz',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-trivia-quiz-how-well-do-you-know-about-blogger-bryanboy',
    'https://www.proprofs.com/quiz-school/story.php?title=mjyymzq1nwqbuu',
    'https://www.proprofs.com/quiz-school/story.php?title=which-ssbb-character-are-you',
    'https://www.proprofs.com/quiz-school/story.php?title=databases-revision-quiz',
    'https://www.proprofs.com/quiz-school/story.php?title=programming-algorithms',
    'https://www.proprofs.com/quiz-school/story.php?title=mta5ode5mw1eeh',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-smalltalk-basic-programming-test',
    'https://www.proprofs.com/quiz-school/story.php?title=nty0mzi1',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-clojure-basic-programming-test',
    'https://www.proprofs.com/quiz-school/story.php?title=njexotey',
    'https://www.proprofs.com/quiz-school/story.php?title=mtuwody4ngm550',
    'https://www.proprofs.com/quiz-school/story.php?title=mty5mtq3mwc1sl',
    'https://www.proprofs.com/quiz-school/story.php?title=mjy2mdm5ngt59v',
    'https://www.proprofs.com/quiz-school/story.php?title=cprogramming_1',
    'https://www.proprofs.com/quiz-school/story.php?title=robot-c-quiz-2',
    'https://www.proprofs.com/quiz-school/story.php?title=fundamentals-programming-2-1',
    'https://www.proprofs.com/quiz-school/story.php?title=commands-of-programming-language-quiz_296',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-common-lisp-basic-programming-test',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-python-3-basic-programming-test',
    'https://www.proprofs.com/quiz-school/story.php?title=quiz-extreme-programming-xp-1',
    'https://www.proprofs.com/quiz-school/story.php?title=java_168',
    'https://www.proprofs.com/quiz-school/story.php?title=integer-programming-goal-programming_1',
    'https://www.proprofs.com/quiz-school/story.php?title=cobol-mock-test-1',
    'https://www.proprofs.com/quiz-school/story.php?title=mtuwmjc4naae8c',
    'https://www.proprofs.com/quiz-school/story.php?title=et156-quiz-1',
    'https://www.proprofs.com/quiz-school/story.php?title=computer-programming-1-prelim-exam',
    'https://www.proprofs.com/quiz-school/story.php?title=c-programming_20',
    'https://www.proprofs.com/quiz-school/story.php?title=pp-true-false-pandas',
    'https://www.proprofs.com/quiz-school/story.php?title=mcq-on-c-programming-language',
    'https://www.proprofs.com/quiz-school/story.php?title=compro_12zi',
    'https://www.proprofs.com/quiz-school/story.php?title=3dq-easytrieve-programming-language-quiz',
    'https://www.proprofs.com/quiz-school/story.php?title=python-assessment_3tz'
  ]

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const data = []
  for (let i = 0; i < urls.length; i++) {
    await page.goto(urls[i])
    const result = await page.evaluate(() => {
      Array.from(
        document.getElementsByClassName('questions-list')[0].children
      ).map(question => {
        let ques = question.innerText
        let options = []
      })
    })
    data.push(result)
  }
})

const generateTokens = user => {
  const iat = Math.floor(Date.now() / 1000)
  const expire = Math.floor(Date.now() / 1000) + ACCESS_TOKEN_EXPIRE_TIME
  const accessToken = jwt.sign(
    {
      id: user.id,
      role: user.role,
      iat,
      expire
    },
    JWT_ACCESS_SECRET
  )
  const refreshToken = generateRandomString()
  return {
    accessToken,
    refreshToken,
    issuedAt: iat,
    expiresAt: expire
  }
}
const generateRandomString = () => randomBytes(128).toString('hex')
initScheduledJobs()

app.listen(PORT, console.log('server started on port' + ' ' + PORT))
