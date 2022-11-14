const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const { PrismaClient } = require('@prisma/client')
const app = express()
const { hash } = require('bcryptjs')
const { authToken } = require('./middlewares')

const prisma = new PrismaClient()
const PORT = 4000

const ACCESS_TOKEN_EXPIRE_TIME = 3600
const JWT_ACCESS_SECRET = 'access_secret_HH'
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(authToken(JWT_ACCESS_SECRET))

app.disable('x-powered-by')

app.use('/', require('./Routes'))

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body
  const userAgent = req.headers['user-agent']
  if (!userAgent) return res.send({ msg: 'user-agent not found......' })
  const user = await prisma.user.findFirst({
    where: { email }
  })
  if (!user || !user.isActive)
    return res.send({ msg: 'user not found or user is inactive...!' })
  if (!(await bcrypt.compare(password, user.password))) return
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
const generateRandomString = () => crypto.randomBytes(128).toString('hex')

app.listen(PORT, console.log('server started on port' + ' ' + PORT))
