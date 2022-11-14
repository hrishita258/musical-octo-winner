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

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by')
app.use(authToken(JWT_ACCESS_SECRET))

app.use('/', require('./Routes'))

app.get('/', async (req, res) => {
  // const result = await prisma.college.createMany({
  //   data: [
  //     {
  //       name: 'Techno india NJR',
  //       directorName: 'R.S Vyas',
  //       email: 'admin@technoindianjr.org',
  //       collegeWebsite: 'https://www.technoindianjr.org/',
  //       description:
  //         '“Education educates a man, but good education creates a man” is the belief of NJR Foundation which established Techno India NJR Institute of Technology in the year 2008. NJR Foundation, a registered trust, was established in the year 2003 in memory of Shri Navdeep Ranawat and Shri Jitendra Ranawat by Mrs. Meera Ranawat and Mr. Raj Shekhar Vyas, an alumnus of BITS, Pilani having more than 25 years of experience with Tata group and as Techno entrepreneur. Nine more highly qualified trustees with vast experience in the field of law, administration, finance research papers writing and business were inducted subsequently. Techno NJR was set up with a vision of providing international level engineering education to students of Udaipur so that they do not have to travel to Banglore, Pune, Jaipur for good engineering education.',
  //       logoSrc:
  //         'https://i0.wp.com/www.technonjr.org/wp-content/uploads/2022/03/Untitled-1-2.png?fit=420%2C88&ssl=1'
  //     },
  //     {
  //       name: 'Sharda University',
  //       directorName: 'Pradeep Kumar Gupta',
  //       email: 'admission.patna@sharda.ac.in',
  //       collegeWebsite: 'https://www.sharda.ac.in/',
  //       description:
  //         'SHARDA UNIVERSITY IS A LEADING EDUCATIONAL INSTITUTION BASED OUT OF GREATER NOIDA, DELHI NCR. A VENTURE OF THE RENOWNED SHARDA GROUP OF INSTITUTIONS (SGI), THE UNIVERSITY HAS ESTABLISHED ITSELF AS A HIGH QUALITY EDUCATION PROVIDER WITH PRIME FOCUS ON HOLISTIC LEARNING AND IMBIBING COMPETITIVE ABILITIES IN STUDENTS.',
  //       logoSrc:
  //         'https://www.edufever.com/wp-content/uploads/2022/05/Sharda-University-Greater-Noida-Admission-Procedure.jpeg'
  //     },
  //     {
  //       name: 'Kaziranga University',
  //       directorName: 'Dr. Sajal Saha',
  //       email: 'sajalsaha@kazirangauniversity.in',
  //       collegeWebsite: 'https://www.kazirangauniversity.in',
  //       description:
  //         'Kaziranga University was conceptualized with a vision towards holistic and world-class education. The entire idea is based on the premise that every human being finds identity, meaning and purpose of life through an enduring bonding with the community, with nature and with humanitarian values of compassion and peace. KU believes in and endorses the ideology of conjoining serenity of the natural environment with the best international standards of educational facilities',
  //       logoSrc: 'https://www.kzu.ac.in/storage/asset/front/logo.png'
  //     },
  //     {
  //       name: 'GD Goenka University',
  //       directorName: 'GDG Director',
  //       email: 'gdgdirector@gmail.com',
  //       collegeWebsite: 'http://www.gdgoenkauniversity.com',
  //       description: 'Awesome university in India.',
  //       logoSrc:
  //         'https://uploads.sarvgyan.com/2015/08/GD-Goenka-university-Gurgaon.jpg'
  //     }
  //   ]
  // })
  // console.log(result)
  // console.log(
  //   await prisma.user.create({
  //     data: {
  //       email: 'himanshu@hh.com',
  //       gender: 'Male',
  //       role: 'spoc',
  //       name: 'Hrishita',
  //       isAdmin: true,
  //       password: await hash('HH251911@', 10)
  //     }
  //   })
  // )
  // console.log(req.user)

  // const spec = await prisma.specialization.findMany({
  //   select: {
  //     id: true
  //   }
  // })
  // const specId = spec.map(item => item.id)
  // const result = await prisma.user.createMany({
  //   data: students.map(user => {
  //     return {
  //       email: user.email,
  //       password: '$2a$10$4PnzYJu8ZUNSZ0jLlojPkOz8yBGwW36BU42rhXjaWCCKiaM04nd4a',
  //       name: user.name,
  //       semester: user.role_name === 'student' ? 7 : null,
  //       collegeId: '91d4727d-37c1-4e29-9e33-03b3f288fd55',
  //       specializationId: specId[Math.floor(Math.random() * 10)],
  //       role: user.role_name === 'clg-admin' ? 'spoc' : user.role_name,
  //       gender: user.user_id % 2 === 0 ? 'Male' : 'Female',
  //       enrollmentYear: user.role_name === 'student' ? 2019 : null
  //     }
  //   })
  // })
  console.log(result)

  res.send('<p>haha working this is good</p>')
})

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
    console.log(foundRefreshToken, 'foundRefreshToken')

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
