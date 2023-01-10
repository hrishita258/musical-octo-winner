import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import { randomBytes } from 'crypto'
import express from 'express'
import jwt from 'jsonwebtoken'
import { MeiliSearch } from 'meilisearch'
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
