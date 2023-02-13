import { PrismaClient } from '@prisma/client'
import async from 'async'
import bcrypt from 'bcryptjs'
import cheerio from 'cheerio'
import cors from 'cors'
import { randomBytes } from 'crypto'
import express from 'express'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import { MeiliSearch } from 'meilisearch'
import puppeteer from 'puppeteer'
import QuizLinks from './allQuizzes.js'
import initScheduledJobs from './cronjobs/OpportunityCrons.js'
import postgres from './db/Prisma.js'
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

app.get('/quiz/add', async (req, res) => {
  const scrappedData = []

  try {
    const newD = scrappedData?.map(
      ({ result: [{ title, quizImage, description }, ...questions] }) => {
        return {
          title,
          quizImage,
          description,
          questions: questions.map(({ ques, options, correctOption }) => ({
            question: ques,
            options: options.map(option => ({
              option,
              isCorrect: option === correctOption
            }))
          }))
        }
      }
    )

    const faculties = await postgres.user.findMany({
      where: {
        role: 'faculty'
      }
    })
    const specializations = await postgres.specialization.findMany()

    const newQuiz = await Promise.all(
      newD.map(async ({ title, quizImage, description, questions }) => {
        const newQuiz = await postgres.quiz.create({
          data: {
            name: title,
            description,
            createdById: faculties[Math.floor(Math.random() * 13) + 1].id,
            collegeId: '91d4727d-37c1-4e29-9e33-03b3f288fd55',
            isPublished: false,
            specializationId:
              specializations[Math.floor(Math.random() * 3) + 1],
            Questions: {
              createMany: {
                data: questions.map(({ question, options }) => ({
                  question,
                  type: 'MCQ',
                  Choices: {
                    createMany: {
                      data: options.map(({ option, isCorrect }) => ({
                        text: option,
                        isCorrect
                      }))
                    }
                  }
                }))
              }
            }
          }
        })
        return newQuiz
      })
    )

    res.send(newQuiz)
  } catch (err) {
    console.log(err)
  }
})

app.get('/transformData', (req, res) => {
  // Read the JSON file
  fs.readFile('allQuizzesWithTopics.json', 'utf8', (err, data) => {
    if (err) throw err

    // Parse the JSON data
    let jsonData = JSON.parse(data)
    // Iterating over all the quizzes
    jsonData.allQuizzes.forEach(quiz => {
      // Convert the quizzez array to set and again convert to array
      quiz.quizzes = [...new Set(quiz.quizzes)]
    })

    // Write the updated JSON data to a new file
    fs.writeFile(
      'data-no-duplicates.json',
      JSON.stringify(jsonData),
      'utf8',
      err => {
        if (err) throw err
        console.log('Duplicates removed!')
      }
    )
  })
})

app.get('/build', async (req, res) => {
  console.log('called')
  const urls = []

  const browser = await puppeteer.launch({ headless: true })
  const data = []
  const errors = []
  const limit = 5

  async.eachLimit(
    urls,
    limit,
    async url => {
      try {
        console.log(`Processing ${url}`)
        const page = await browser.newPage()
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 })

        // Extract data from the page
        const result = await page.evaluate(() => {
          let s = []
          Array.from(
            document.getElementsByClassName('questions-list')[0]?.children || []
          )?.map(question => {
            let ques =
              question.getElementsByClassName('question-text')[0]?.innerText
            let options = Array.from(
              question.getElementsByClassName('answers-list')[0]?.children || []
            )?.map(op => op.getElementsByClassName('opt_text')[0]?.innerText)
            s.push({
              ques,
              options,
              title: document.title,
              quizImage: document.getElementsByClassName('image_class')[0]?.src,
              questionImage: question.getElementsByTagName('img')[0]?.src,
              description:
                document.getElementsByClassName('question_text')[0].innerText
            })
          })
          return s
        })
        await page.click('button[name="mySubmit"]')
        await page.waitForSelector('#progressBar', { timeout: 90000 })
        // Extract correct answers
        const correct = await page.evaluate(
          async (url, result) => {
            let queryParams = url.split('?')[1]

            if (!queryParams) {
              console.error('URL does not contain any query parameters')
              return
            }

            let title = queryParams.split('&').find(p => p.startsWith('title='))

            if (!title) {
              console.error('URL does not contain a title parameter')
              return
            }

            title = title.split('=')[1]

            let requests = result.map(async (question, index) => {
              try {
                const response = await fetch(
                  `https://www.proprofs.com/quiz-school/_ajax_quizshow_free.php?title=${title}&q=${
                    index + 1
                  }`
                )
                const res = await response.text()
                let parser = new DOMParser()
                let doc = parser.parseFromString(res, 'text/html')
                return doc.getElementsByClassName('correctTxt')[0].innerText
              } catch (err) {
                console.log(err, 'ye correct option')
              }
            })
            return await Promise.all(requests)
          },
          url,
          result
        )
        data.push({ result, correct })
        await page.close()
      } catch (error) {
        console.log(error, 'thhoda uppar')
        errors.push({ url, error: error.toString() })
      }
    },
    async err => {
      if (err) {
        console.log(err, 'niche')
      } else {
        console.log('All URLs have been processed.')
        await browser.close()
        // Send the final data and errors
        let finalData = data.map((d, i) => {
          let result = d.result?.map((r, j) => {
            return {
              ...r,
              correctOption: d?.correct[j]
            }
          })
          return {
            index: i,
            result
          }
        })
        res.send({ finalData, errors })
      }
    }
  )
})

app.get('/final', async (req, res) => {
  const data = []
  const errors = []

  fs.readFile('data-no-duplicates.json', 'utf8', async (err, json) => {
    if (err) throw err

    const keywords = [
      'C Programming',
      'Web',
      'javascript',
      'Programming',
      'computer',
      'C++',
      'C#',
      'Java',
      'SQL',
      'Ruby',
      'Perl',
      'Swift',
      'Objective-C',
      'Scala',
      'Haskell',
      'MATLAB',
      'Lisp',
      'Clojure',
      'Dart',
      'Rust',
      'Elixir',
      'Erlang',
      'Prolog',
      'F#',
      'TypeScript',
      'Kotlin',
      'Groovy',
      'xml',
      'network',
      'html',
      'css',
      'jquery',
      'bootstrap',
      'angular',
      'react',
      'vue',
      'node',
      'express',
      'mongodb',
      'mysql',
      'sql',
      'php',
      'python',
      'website',
      'excel',
      'networking',
      'apptitude',
      'CCNA',
      'cisco',
      'Cloud',
      'Cyber',
      'data',
      'database',
      'design',
      'desktop',
      'Engineer',
      'Engineering',
      'Fundamental',
      'Fundamentals',
      'google',
      'Graphic',
      'Information',
      'Innovation',
      'Integrated',
      'Intelligence',
      'Internet',
      'security',
      'Microsoft',
      'Certification',
      'Linux',
      'Machine',
      'Object',
      'Office',
      'Placement',
      'Powerpoint',
      'production',
      'Programmer',
      'product',
      'project',
      'professional',
      'protocol',
      'server',
      'admin',
      'software'
    ]
    const allQuizzes = JSON.parse(json).allQuizzes
    const quizzes = allQuizzes.filter(quiz => {
      return keywords.some(keyword =>
        quiz.topic.toLowerCase().includes(keyword.toLowerCase())
      )
    })

    const browser = await puppeteer.launch({ headless: false })

    await async.eachLimit(
      quizzes.slice(120, 180),
      1,
      async quiz => {
        const uniqueUrls = [...new Set(quiz.quizzes)]
        const limit = 2
        console.log('Processing topic', quiz.topic)
        for (let i = 0; i < uniqueUrls.length; i += limit) {
          const pagePromises = uniqueUrls
            .slice(i, i + limit)
            .map(async (url, i) => {
              const page = await browser.newPage()
              try {
                console.log(`${i + 1} of ${uniqueUrls.length}`)
                await page.goto(url, {
                  waitUntil: 'networkidle2',
                  timeout: 60000
                })

                if ((await page.title()).includes('404')) throw '404'

                const pageHtml = await page.content()
                const $ = cheerio.load(pageHtml)

                const result = $('.questions-list')
                  .children()
                  .map((i, question) => {
                    const ques = $(question).find('.question-text').text()
                    const options = $(question)
                      .find('.answers-list')
                      .children()
                      .map((i, option) => {
                        return $(option).find('.opt_text').text()
                      })
                      .get()
                    return {
                      ques,
                      options,
                      title: $('title').text(),
                      quizImage: $('.image_class').attr('src'),
                      questionImage: $(question).find('img').attr('src'),
                      description: $('.question_text').text()
                    }
                  })
                  .get()

                await page.waitForSelector('button[name="mySubmit"]', {
                  timeout: 60000
                })

                await page.click('button[name="mySubmit"]')

                await page.waitForRequest(request =>
                  request.url().includes('quiz-school/quizstart.php')
                )

                await page.waitForSelector('.qs_show_wrap')

                const correct = await page.evaluate(
                  async (url, result) => {
                    let queryParams = url.split('?')[1]

                    if (!queryParams) {
                      console.error('URL does not contain any query parameters')
                      return
                    }

                    let title = queryParams
                      .split('&')
                      .find(p => p.startsWith('title='))

                    if (!title) {
                      console.error('URL does not contain a title parameter')
                      return
                    }

                    title = title.split('=')[1]

                    let requests = result.map(async (question, index) => {
                      try {
                        const response = await fetch(
                          `https://www.proprofs.com/quiz-school/_ajax_quizshow_free.php?title=${title}&q=${
                            index + 1
                          }`
                        )
                        const res = await response.text()

                        return res
                      } catch (err) {
                        console.log(err, 'ye correct option')
                      }
                    })
                    return await Promise.all(requests)
                  },
                  url,
                  result
                )
                await page.close()

                let correctAnswers = correct?.map((c, i) => {
                  let $ = cheerio.load(c)

                  let correct = Array.from($('.correctTxt')).map(s =>
                    s?.children[0]?.data?.replace('(Correct Answer)', '')
                  )

                  return {
                    correct,
                    question:
                      $('.after_question').text() ||
                      Array.from($('.question_text_area'))[0]?.children[0]?.data
                  }
                })

                data.push({
                  result,
                  correctAnswers,
                  topic: quiz.topic
                })
              } catch (error) {
                console.error(error.toString())
                await page.close()
                errors.push({ url, error: error.toString() })
              }
            })
          await Promise.all(pagePromises)
        }
      },
      async err => {
        if (err) {
          console.log(err)
        }
        await browser.close()
        console.log(data.length, errors.length)

        fs.writeFile(
          'quizDataAll7.json',
          JSON.stringify({
            data,
            errors
          }),
          'utf8',
          err => {
            if (err) throw err
            console.log('done dona done done')
          }
        )
      }
    )
  })
})

app.get('/api/v1/quiz', async (req, res) => {
  console.log('processing')
  const urls = []

  const browser = await puppeteer.launch()
  const allQuizzes = []
  const concurrency = 5
  let currentPage = 0
  const errors = []

  const pages = await browser.pages()
  async.eachLimit(
    urls.slice(0, 30),
    concurrency,
    async url => {
      let paginatedPage = null
      console.log(currentPage)
      const page = pages[currentPage++] || (await browser.newPage())
      try {
        await page.goto(url, { timeout: 60000 })
        let obj = {
          topic: '',
          quizzes: []
        }
        console.log(await page.$eval('.classh1', el => el.innerText))
        obj.topic = await page.$eval('.classh1', el => el.innerText)
        if ((await page.$('.pages')) !== null) {
          let pages = await page.$$eval('.pages p', el => {
            return parseInt(el[0].children[el[0].children.length - 2].innerText)
          })

          for (let i = 1; i <= pages; i++) {
            await page.goto(`${url}/${i}`, { timeout: 60000 })
            paginatedPage = i
            console.log('page child', i)
            await page.waitForSelector('.pop_main_updated a')
            let paginatedUrls = await page.$$eval('.pop_main_updated a', el => {
              return el.map(elem => elem.href)
            })
            obj.quizzes.push(...paginatedUrls)
          }
          allQuizzes.push(obj)
        } else {
          let singleUrls = await page.$$eval('.pop_main_updated a', el => {
            return el.map(elem => elem.href)
          })
          obj.quizzes.push(...singleUrls)
          allQuizzes.push(obj)
        }
      } catch (error) {
        console.log(url, error.toString(), paginatedPage)
        errors.push({ error: error.toString(), url, paginatedPage })
      } finally {
        await page.close()
      }
    },
    err => {
      if (err) throw err
      if (allQuizzes.length > 0)
        fs.writeFile(
          'allQuizzesWithTopics.json',
          JSON.stringify({ allQuizzes, errors }),
          err => {
            if (err) throw err
            console.log('Data written to file')
          }
        )
      browser.close()
    }
  )
})

app.get('/api/quizzes', async (req, res) => {
  const browser = await puppeteer.launch({ headless: false })
  const data = []
  const errors = []
  for (let i = 0; i < 5; i++) {
    console.log('processing' + ' ' + i, QuizLinks[i])
    try {
      let page = await browser.newPage()
      await page.goto(QuizLinks[i])
      const result = await page.evaluate(i => {
        let s = []
        Array.from(
          document.getElementsByClassName('questions-list')[0].children
        ).map(question => {
          let ques =
            question.getElementsByClassName('question-text')[0].innerText
          let options = Array.from(
            question.getElementsByClassName('answers-list')[0].children
          ).map(op => op.getElementsByClassName('opt_text')[0].innerText)
          s.push({
            ques,
            options,
            title: document.title,
            quizImage: document.getElementsByClassName('image_class')[0].src,
            description:
              document.getElementsByClassName('question_text')[0].innerText
          })
        })
        return s
      }, i)
      await page.click('button[name="mySubmit"]')
      data.push({ index: i, result })
    } catch (error) {
      console.log(error)
      errors.push({ index: i, error, url: QuizLinks[i] })
    }
  }
  // console.log(JSON.stringify(data))
  // console.log(JSON.stringify(errors))
})

app.get('/trans', (req, res) => {
  fs.readFile('quizDataAll5.json', 'utf8', async (err, json) => {
    if (err) throw err
    const { Quizzez, errors } = JSON.parse(json)
    console.log(Quizzez.length)

    let newData = { quizzes: [] }
    const specializationsData = (
      await prisma.user.findMany({
        where: {
          role: 'faculty'
        },
        select: {
          id: true,
          specialization: true
        }
      })
    )?.map(user => ({
      id: user.id,
      specializationId: user.specialization.id,
      specialization: user.specialization.name
    }))

    try {
      Quizzez.forEach(data => {
        let quiz = {
          name: data.result[0]?.title
            ? data.result[0]?.title
            : data.result[1]?.title,
          topic: data?.topic,
          questions: [],
          description: data.result[0]?.description,
          quizImage: data.result[0]?.quizImage
        }
        data.result.forEach(question => {
          if (question.ques?.trim().length === 0) return // Skip the question if it's empty
          let cleanQuestion = question.ques?.trim().replace(/\s+/g, ' ')

          let correctAnswers = data.correctAnswers?.find(answers => {
            return (
              answers.question?.trim().replace(/\s+/g, ' ') === cleanQuestion
            )
          })
          if (correctAnswers) {
            question.options = question.options.map(option => {
              return {
                text: option?.trim().replace(/\s+/g, ' '),
                isCorrect: correctAnswers.correct.some(
                  answer =>
                    answer?.trim().replace(/\s+/g, ' ') ===
                    option?.trim().replace(/\s+/g, ' ')
                )
              }
            })
            let correctCount = question.options.filter(
              option => option.isCorrect === true
            ).length
            question.type = correctCount > 1 ? 'multiple' : 'single'
          }

          if (
            question.options.findIndex(option => option.isCorrect === true) !==
            -1
          ) {
            quiz.questions.push({
              question: question.ques,
              type: question.type,
              options: question.options
            })
          }
        })
        newData.quizzes.push(quiz)
      })
    } catch (error) {
      console.log(error)
    }

    try {
      for (const quiz of newData.quizzes.filter(s => s.questions.length > 0)) {
        console.log(quiz.name)
        const existingQuiz = await prisma.quiz.findFirst({
          where: { name: quiz.name.replace('- ProProfs Quiz', '') }
        })
        if (existingQuiz) {
          console.log(`Quiz ${quiz.name} already exists, skipping...`)
          continue
        }
        let sd = specializationsData.find(
          s =>
            s.specialization.trim() ===
            quiz.topic.replace('Quizzes & Trivia', '').trim()
        )
        if (sd) {
          const createdQuiz = await prisma.quiz.create({
            data: {
              name: quiz.name.replace('- ProProfs Quiz', ''),
              description: quiz.description,
              image: quiz.quizImage,
              collegeId: '301ae32b-db28-4ef8-b9fe-6ffc3b2b8eee',
              specializationId: sd.specializationId,
              isPublished: true,
              createdById: sd.id,
              duration: quiz.questions.length * 2
            }
          })

          for (const question of quiz.questions) {
            const createdQuestion = await prisma.quizQuestions.create({
              data: {
                question: question.question,
                type: question.type === 'multiple' ? 'MCQ' : 'Single',
                quizId: createdQuiz.id,
                Choices: {
                  createMany: {
                    data: question.options.map(option => {
                      return {
                        text: option.text,
                        isCorrect: option.isCorrect
                      }
                    })
                  }
                }
              }
            })
          }
        }
      }
      console.log('Quiz created successfully')
    } catch (error) {
      console.log(error)
    }
  })
})

app.get('/trans2', (req, res) => {
  fs.readFile('quizlib.json', 'utf8', async (err, json) => {
    const outerArray = JSON.parse(json)
    const filteredQuestions = []
    try {
      const questions = outerArray.map(x => x.results)
      let allQuestions = []
      questions.forEach(question => {
        allQuestions = [...allQuestions, ...question]
      })
      for (let i = 0; i < allQuestions.length; i++) {
        const question = allQuestions[i]
        const category = question.category
        let categoryExists = false

        for (let j = 0; j < filteredQuestions.length; j++) {
          if (filteredQuestions[j].name === category) {
            let options = [{ text: question.correct_answer, isCorrect: true }]
            if (question.incorrect_answers) {
              options = [
                ...options,
                ...question.incorrect_answers.map(x => ({
                  text: x,
                  isCorrect: false
                }))
              ]
            }
            filteredQuestions[j].questions.push({
              question: question.question,
              type: question.type,
              options: options
            })
            categoryExists = true
            break
          }
        }

        if (!categoryExists) {
          let options = [{ text: question.correct_answer, isCorrect: true }]
          if (question.incorrect_answers) {
            options = [
              ...options,
              ...question.incorrect_answers.map(x => ({
                text: x,
                isCorrect: false
              }))
            ]
          }
          filteredQuestions.push({
            name: category,
            questions: [
              {
                question: question.question,
                type: question.type,
                options: options
              }
            ]
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
    for (let i = 0; i < filteredQuestions.length; i++) {
      const quiz = filteredQuestions[i]
      if (quiz.questions.length > 30) {
        const parts = []
        let currentPart = { name: '', questions: [] }
        for (let j = 0; j < quiz.questions.length; j++) {
          const question = quiz.questions[j]
          if (currentPart.questions.length === 0) {
            currentPart.name = `${quiz.name} - Part 1`
          } else if (currentPart.questions.length === 30) {
            parts.push(currentPart)
            currentPart = {
              name: `${quiz.name} - Part ${parts.length + 1}`,
              questions: []
            }
          }
          currentPart.questions.push(question)
        }
        parts.push(currentPart)
        filteredQuestions.splice(i, 1, ...parts)
      }
    }

    res.send(filteredQuestions)
  })
})

app.get('/mediusa', async (req, res) => {
  // fs.readFile('mediusaData.json', 'utf8', async (err, json) => {
  //   const browser = await puppeteer.launch({
  //     headless: false
  //   })
  //   const lpage = await browser.newPage()
  //   await lpage.goto('https://b2b.mediusa.com/account/signin?ReturnUrl=%2F')
  //   await lpage.type('#email', 'cs@medicaleshop.com')
  //   await lpage.type('#password', 'Ab1098Zx++')
  //   await lpage.click('button[type="submit"]')

  //   const finalData = []
  //   const errors = []

  //   async.eachLimit(
  //     JSON.parse(json),
  //     5,
  //     async product => {
  //       try {
  //         console.log(product.product_url)
  //         const page = await browser.newPage()
  //         await page.goto('https://b2b.mediusa.com' + product.product_url)
  //         await page.waitForSelector('.table-wrapper')
  //         let others = await page.evaluate(() => {
  //           return document
  //             .getElementById('sizing')
  //             .getElementsByTagName('img')[0].src
  //         })
  //         const html = await page.$eval('.table-wrapper', e => e.innerHTML)
  //         await page.goto('https://www.convertjson.com/html-table-to-json.htm')

  //         await page.evaluate(html => {
  //           document.querySelector('#txt1').value = html
  //         }, html)
  //         await page.click('#txt1')
  //         finalData.push({
  //           ...product,
  //           childrens: JSON.parse(await page.$eval('#txta', e => e.value)),
  //           others
  //         })
  //         await page.close()
  //       } catch (error) {
  //         console.log(error)
  //         errors.push({ productId: product.product_url, error })
  //       }
  //     },
  //     err => {
  //       if (err) {
  //         console.log(err)
  //       }
  //       fs.writeFile(
  //         'mediusaData2.json',
  //         JSON.stringify(finalData),
  //         'utf8',
  //         () => {
  //           console.log('done')
  //         }
  //       )
  //       console.log('done')
  //     }
  //   )
  // })
  fs.readFile('mediusa.json', 'utf8', async (err, json) => {
    const data = JSON.parse(json)
    const newData = data.results[0].hits.map(x => {
      return {
        name: x.Name,
        price: x.Price,
        formated_price: x.PriceFormated,
        msrp: x.MSRP,
        formated_msrp: x.MSRPFormated,
        description: x.Description,
        thumbnail: x.MediThumbURL,
        product_url: x.URL,
        stock: x.stock,
        imageUrl: x.MediImageURL,
        product_id: x.ProductID,
        isMedical: x.IsMedical,
        isCEP: x.IsCEP,
        isTopicalGear: x.IsTopicalGear,
        category: x.MediNavigation,
        subcategory: x.CEPNavigation,
        subsubcategory: x.TopicalGearNavigation
      }
    })
    fs.writeFile('mediusaData.json', JSON.stringify(newData), 'utf8', err => {
      if (err) {
        console.log(err)
      }
      res.send('done')
    })
  })
})

app.get('/mediusatrans', (req, res) => {
  fs.readFile('mediusaData2.json', 'utf8', async (err, json) => {
    const data = JSON.parse(json)
    const newData = data.map(x => ({
      ...x,
      childrens: x.childrens
        .filter(child => {
          return Object.values(child).every(value => value !== '')
        })
        .map(child => {
          let keys = Object.keys(child)
          return keys.map(key => {
            const string = child[key]
            const firstSplit = string.split(' ')
            if (firstSplit.length > 3) {
              const stockStauts = firstSplit[0] + ' ' + firstSplit[1]
              const priceSkuString = firstSplit[firstSplit.length - 1]
              const secondSplit = priceSkuString.split('.')
              const price =
                secondSplit[0] + '.' + secondSplit[1].substring(0, 2)
              const sku = secondSplit[1].slice(2)
              let obj = {
                price,
                sku,
                stockStauts: stockStauts.includes('<i class=')
                  ? 'special order'
                  : stockStauts,
                [keys[0]]: child[keys[0]],
                size: key
              }
              return obj
            }
          })
        })
        .flat()
        .filter(s => s)
    }))

    fs.writeFile('mediusaData3.json', JSON.stringify(newData), 'utf8', err => {
      if (err) {
        console.log(err)
      }
      res.send('done')
    })
  })
})

app.get('/edx', async (req, res) => {
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en;q=0.6',
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyYWE2NTE4Mi02YzAyLTA3MDQtYzEwZi01MmUyMDQ0ODA3YzQiLCJleHAiOjE2NzQ4OTQ3MjYsImFjY291bnRHdWlkIjoiMTk0NDJkODAtMzUyNC04ZDA0LTgxODAtZmM1ZmIzOTJlYjM2IiwibWFzdGVyQWNjb3VudEd1aWQiOiIxOTQ0MmQ4MC0zNTI0LThkMDQtODE4MC1mYzVmYjM5MmViMzYiLCJpbnRlZ3JhdGlvbk5pZCI6IjE3Mzk2MTQyIiwidGVuYW50SWQiOm51bGwsImFjY2Vzc0Rpc3BsYXkiOmZhbHNlLCJyb2xlcyI6WyJhbm9ueW1vdXMgdXNlciJdLCJjb21wYW55SWQiOm51bGx9.SYb--HrJ2w44zlslpGshP_u7G4YSfAYKgwvbJFLWRvQ',
    'Content-Type': 'application/json',
    Cookie:
      '	os_external_domain=false; osano_consentmanager_uuid=5d8966c2-2177-437c-8ee8-116dcfade7d0; osano_consentmanager=38q90vnzYkfosXfiN4-d_ZSw1n_VeN4eF2h_hj2weP4D93yVO15yp2KhHrQ-uD07IN6aiqNjCi0tqG-4fQZ_UmYnEaAcQg3ADIJwwxPIfwJy-MjFfyjwroKqX94v5H9Z8dCehcPcSwAt9WH2mOJE9_t0xckXjZSWp0VFOfdoahMuDMZDJxhP4yeabUrPhn-PgM0ioNM-KGsNvgWXOhE_hmwmXhqbqbCB6A1pUnfhdVKDa1m1wnqHR0n0fjpnvtr9MEFHEpXvDqg4eNk5DqY2IN96RUZ7R27HxYhxRw==; drift_campaign_refresh=f555971c-050a-49d4-810a-7418485ac6be; drift_aid=66c5dfa3-5d65-4226-a794-99130b3053db; driftt_aid=66c5dfa3-5d65-4226-a794-99130b3053db; os_integration_name=; os_sec=63D4348B%3Baf9fb7344fa6f43e2ca9e77fd1d2217e20ee408d0bce2f0ef3cf8a774962c4fd%3B704928243'
  }

  async function fetchData(offset, data = []) {
    try {
      const response = await fetch(
        `https://www.opensesame.com/api/v3/search:view?count=25&offset=${offset}&sortField=_score&sortDirection=desc`,
        {
          method: 'post',
          headers,
          body: JSON.stringify({
            filters: {
              includeSubtitleLanguages: true,
              audioTranslated: true,
              subtitlesTranslated: true
            }
          })
        }
      )
      const json = await response.json()
      console.log('offset', offset)
      data.push(json)
      if (offset === 9975) {
        return data
      } else {
        return fetchData(offset + 25, data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  fetchData(10000).then(data => {
    // data is an array of all the API responses
    // you can use a library like fs to write the data to a json file
    fs.writeFile('sea2.json', JSON.stringify(data), 'utf8', err => {
      if (err) {
        console.log(err)
      }
      res.send('done')
    })
  })
})

app.get('/insert', async (req, res) => {
  fs.readFile('opensesameAllCourses.json', 'utf8', async (err, data) => {
    if (err) {
      console.log(err)
    }
    res.send(await client.index('opensesame').getDocuments({ limit: 25 }))
  })
  const s = {
    facetValues: {
      publishersFacet: [
        {
          name: 'HSI - ej4',
          count: 1752,
          id: '742'
        },
        {
          name: 'Lumofy',
          count: 1716,
          id: '909837'
        },
        {
          name: 'Cegos',
          count: 1517,
          id: '5663'
        },
        {
          name: 'RedVector',
          count: 1390,
          id: '10370'
        },
        {
          name: 'UL Solutions',
          count: 1272,
          id: '4927'
        },
        {
          name: 'LearnNowOnline',
          count: 1157,
          id: '11689'
        },
        {
          name: 'Litmos',
          count: 966,
          id: '66573'
        },
        {
          name: 'Wolters Kluwer - CCH CPELink',
          count: 833,
          id: '308229'
        },
        {
          name: 'Vubiz',
          count: 795,
          id: '4308'
        },
        {
          name: 'Mind Channel',
          count: 756,
          id: '393449'
        },
        {
          name: 'TED',
          count: 659,
          id: '716084'
        },
        {
          name: 'Packt',
          count: 613,
          id: '15530'
        },
        {
          name: 'Skilla',
          count: 585,
          id: '895233'
        },
        {
          name: 'Sollah Interactive',
          count: 545,
          id: '1682'
        },
        {
          name: 'Skillshub',
          count: 511,
          id: '669780'
        },
        {
          name: 'Pineapple Academy',
          count: 501,
          id: '921485'
        },
        {
          name: 'Integrity Training',
          count: 473,
          id: '650033'
        },
        {
          name: 'Syntrio',
          count: 467,
          id: '919'
        },
        {
          name: 'JJ Keller',
          count: 457,
          id: '5104'
        },
        {
          name: 'HSI - Vado',
          count: 451,
          id: '5637'
        },
        {
          name: '7 Dimensions',
          count: 449,
          id: '574686'
        },
        {
          name: 'HSI - Martech Media',
          count: 440,
          id: '21132'
        },
        {
          name: 'Hard Hat Training Series',
          count: 434,
          id: '679329'
        },
        {
          name: 'The Jeff Havens Company',
          count: 428,
          id: '11091'
        },
        {
          name: 'Vector Solutions',
          count: 426,
          id: '14739'
        },
        {
          name: 'HCPro',
          count: 420,
          id: '173328'
        },
        {
          name: 'PINKTUM - formerly Pink University',
          count: 404,
          id: '855467'
        },
        {
          name: 'ServiceSkills',
          count: 400,
          id: '69350'
        },
        {
          name: 'Training Today',
          count: 394,
          id: '7625'
        },
        {
          name: 'Infobase',
          count: 381,
          id: '1452'
        },
        {
          name: 'Technology Transfer Services',
          count: 368,
          id: '7134'
        },
        {
          name: 'Traliant',
          count: 355,
          id: '679828'
        },
        {
          name: 'HSI - Vivid Learning Systems',
          count: 344,
          id: '4990'
        },
        {
          name: 'Marcom',
          count: 338,
          id: '5077'
        },
        {
          name: 'Axonify',
          count: 300,
          id: '672289'
        },
        {
          name: 'Intellezy',
          count: 283,
          id: '11079'
        },
        {
          name: 'The Access Group',
          count: 267,
          id: '882864'
        },
        {
          name: 'Kallidus',
          count: 243,
          id: '5716'
        },
        {
          name: 'Human Logic',
          count: 226,
          id: '478129'
        },
        {
          name: 'Safety Instruct',
          count: 221,
          id: '729187'
        },
        {
          name: 'Bigger Brains',
          count: 219,
          id: '8437'
        },
        {
          name: 'iAM Learning',
          count: 217,
          id: '291287'
        },
        {
          name: 'TalentQuest',
          count: 216,
          id: '551861'
        },
        {
          name: 'Management Pocketbooks',
          count: 195,
          id: '815988'
        },
        {
          name: 'Mindscaling',
          count: 187,
          id: '64480'
        },
        {
          name: 'Chart Learning Solutions',
          count: 185,
          id: '654123'
        },
        {
          name: 'The URL dr',
          count: 181,
          id: '1032022'
        },
        {
          name: 'Kineo',
          count: 178,
          id: '961784'
        },
        {
          name: 'Real Projects',
          count: 177,
          id: '8146'
        },
        {
          name: 'Eleventure by TorranceLearning',
          count: 173,
          id: '853916'
        },
        {
          name: 'ITC Learning',
          count: 158,
          id: '15849'
        },
        {
          name: 'THRIVE',
          count: 153,
          id: '815587'
        },
        {
          name: 'Blinkist',
          count: 151,
          id: '869730'
        },
        {
          name: 'Online Training Masters',
          count: 150,
          id: '6667'
        },
        {
          name: 'SONIC Performance Support',
          count: 148,
          id: '1451'
        },
        {
          name: 'AMC',
          count: 141,
          id: '731781'
        },
        {
          name: 'eLearning Brothers',
          count: 138,
          id: '162821'
        },
        {
          name: 'The Expert Academy',
          count: 137,
          id: '157881'
        },
        {
          name: 'Channel 1 Creative Media',
          count: 136,
          id: '775172'
        },
        {
          name: 'MindEdge',
          count: 134,
          id: '5118'
        },
        {
          name: 'TrainingABC',
          count: 129,
          id: '22314'
        },
        {
          name: 'EntrepreneurNOW',
          count: 129,
          id: '759083'
        },
        {
          name: 'American Management Association',
          count: 127,
          id: '665784'
        },
        {
          name: 'IT University Online',
          count: 126,
          id: '36368'
        },
        {
          name: 'The Galvanizing Group',
          count: 126,
          id: '741844'
        },
        {
          name: 'A.D.A.M. - a business unit of Ebix',
          count: 113,
          id: '11956'
        },
        {
          name: 'Video Arts',
          count: 111,
          id: '15536'
        },
        {
          name: 'lawpilots',
          count: 108,
          id: '800728'
        },
        {
          name: 'The Security Company',
          count: 107,
          id: '853228'
        },
        {
          name: 'Skill Boosters',
          count: 106,
          id: '11113'
        },
        {
          name: 'Enspark',
          count: 104,
          id: '8395'
        },
        {
          name: 'Assemble You',
          count: 103,
          id: '970352'
        },
        {
          name: 'Healthy Minds Program',
          count: 100,
          id: '881569'
        },
        {
          name: 'Amplify Voices',
          count: 99,
          id: '974624'
        },
        {
          name: 'Trüpp',
          count: 96,
          id: '771216'
        },
        {
          name: 'Global eTraining',
          count: 94,
          id: '884594'
        },
        {
          name: 'Intuition Know-How',
          count: 94,
          id: '920650'
        },
        {
          name: 'SunShower Learning',
          count: 91,
          id: '272'
        },
        {
          name: 'Mind Tools for Business',
          count: 88,
          id: '651339'
        },
        {
          name: '100 Effective Ltd',
          count: 82,
          id: '19591'
        },
        {
          name: 'Webucator Training',
          count: 76,
          id: '6519'
        },
        {
          name: 'Global Learning Systems',
          count: 67,
          id: '649560'
        },
        {
          name: "Bob's Business",
          count: 66,
          id: '710258'
        },
        {
          name: 'Enerdynamics',
          count: 64,
          id: '7565'
        },
        {
          name: 'SkillON365',
          count: 64,
          id: '787462'
        },
        {
          name: 'Prositions',
          count: 61,
          id: '20207'
        },
        {
          name: 'Simon Sez IT',
          count: 60,
          id: '902034'
        },
        {
          name: 'DiscoverLink',
          count: 58,
          id: '15107'
        },
        {
          name: 'Tortal Training',
          count: 58,
          id: '850937'
        },
        {
          name: 'OpenDoors',
          count: 54,
          id: '892355'
        },
        {
          name: 'RW3 CultureWizard',
          count: 53,
          id: '973070'
        },
        {
          name: '360 Immersive',
          count: 52,
          id: '793982'
        },
        {
          name: 'Coaching Culture',
          count: 49,
          id: '669831'
        },
        {
          name: 'Speexx',
          count: 47,
          id: '6645'
        },
        {
          name: 'Restaurant Playbooks',
          count: 47,
          id: '780724'
        },
        {
          name: 'OpenMind',
          count: 46,
          id: '764298'
        },
        {
          name: 'The Success Group',
          count: 45,
          id: '6408'
        },
        {
          name: 'Driving Dynamics',
          count: 43,
          id: '703288'
        },
        {
          name: 'Me Learning',
          count: 40,
          id: '153102'
        },
        {
          name: 'Evolve e-Learning Solutions',
          count: 40,
          id: '7047'
        },
        {
          name: 'GOPAS - Office Computer Skills',
          count: 39,
          id: '12784'
        },
        {
          name: 'WILL Interactive',
          count: 37,
          id: '15373'
        },
        {
          name: 'Pearson',
          count: 37,
          id: '9025'
        },
        {
          name: 'On This Topic',
          count: 36,
          id: '797041'
        },
        {
          name: 'Leadership-Link',
          count: 35,
          id: '926360'
        },
        {
          name: 'IBIS Consulting Group',
          count: 32,
          id: '934315'
        },
        {
          name: 'Sales Help - Customer Service Skills',
          count: 31,
          id: '11936'
        },
        {
          name: 'FutureThink',
          count: 31,
          id: '819494'
        },
        {
          name: 'Breaking Barriers United',
          count: 31,
          id: '939982'
        },
        {
          name: 'TeachPrivacy',
          count: 30,
          id: '234865'
        },
        {
          name: 'Pronto Spanish',
          count: 30,
          id: '4222'
        },
        {
          name: 'Everything Is On The Record',
          count: 30,
          id: '773333'
        },
        {
          name: 'The Big Canvas',
          count: 28,
          id: '804811'
        },
        {
          name: 'Mike Veny',
          count: 27,
          id: '860019'
        },
        {
          name: 'Learn iT Anytime',
          count: 26,
          id: '17179'
        },
        {
          name: 'Maestro',
          count: 25,
          id: '6722'
        },
        {
          name: 'Ideas for Leaders',
          count: 25,
          id: '702025'
        },
        {
          name: 'Activica',
          count: 25,
          id: '739930'
        },
        {
          name: 'Framework Tech Media',
          count: 24,
          id: '5283'
        },
        {
          name: 'Direction Hospitality Training',
          count: 23,
          id: '710276'
        },
        {
          name: 'Soundview',
          count: 23,
          id: '985874'
        },
        {
          name: 'Kantola Training',
          count: 21,
          id: '11651'
        },
        {
          name: 'WatchIT',
          count: 21,
          id: '1597'
        },
        {
          name: 'Symmetra',
          count: 21,
          id: '774590'
        },
        {
          name: 'Cyber Eclipse',
          count: 21,
          id: '962378'
        },
        {
          name: 'Ally Safety',
          count: 20,
          id: '1045502'
        },
        {
          name: "Lou Adler's Performance-Based Hiring™",
          count: 20,
          id: '290'
        },
        {
          name: 'EZLearn University',
          count: 20,
          id: '5121'
        },
        {
          name: 'Popcorn',
          count: 20,
          id: '738684'
        },
        {
          name: 'LearningPlanet',
          count: 19,
          id: '65549'
        },
        {
          name: 'SmartMouth Communications',
          count: 18,
          id: '182200'
        },
        {
          name: 'Filtered',
          count: 16,
          id: '49155'
        },
        {
          name: 'Obsidian Learning',
          count: 16,
          id: '777731'
        },
        {
          name: 'Entrepreneurial Sales Institute',
          count: 15,
          id: '798661'
        },
        {
          name: 'ITpreneurs',
          count: 15,
          id: '879503'
        },
        {
          name: 'Society of Quality Assurance',
          count: 14,
          id: '755336'
        },
        {
          name: 'Shatterproof',
          count: 14,
          id: '855260'
        },
        {
          name: 'Cognistar',
          count: 13,
          id: '70173'
        },
        {
          name: 'Spencer Stuart',
          count: 12,
          id: '22413'
        },
        {
          name: 'Ed4Online',
          count: 12,
          id: '44250'
        },
        {
          name: 'Create a Better You ®',
          count: 12,
          id: '682553'
        },
        {
          name: 'Aptara',
          count: 12,
          id: '685491'
        },
        {
          name: 'Ninja Academy',
          count: 12,
          id: '831395'
        },
        {
          name: 'Automated Learning',
          count: 10,
          id: '4718'
        },
        {
          name: 'Validation Institute',
          count: 10,
          id: '682554'
        },
        {
          name: 'The Nova Collective - Coming Soon to OpenSesame Plus',
          count: 10,
          id: '939675'
        },
        {
          name: 'The Moxie Exchange',
          count: 9,
          id: '1048983'
        },
        {
          name: 'Dr. Roger Firestien',
          count: 9,
          id: '772763'
        },
        {
          name: 'Inspired eLearning',
          count: 9,
          id: '853040'
        },
        {
          name: 'E-SEC E-Learning',
          count: 8,
          id: '1036127'
        },
        {
          name: 'KNOLSKAPE',
          count: 8,
          id: '684308'
        },
        {
          name: 'HSI - Summit Training Source',
          count: 8,
          id: '986303'
        },
        {
          name: 'InfoAware',
          count: 7,
          id: '76790'
        },
        {
          name: 'Moxie Media',
          count: 6,
          id: '7131'
        },
        {
          name: 'Always Food Safe',
          count: 6,
          id: '961103'
        },
        {
          name: 'Vector International',
          count: 5,
          id: '579468'
        },
        {
          name: 'The Dagoba Group',
          count: 5,
          id: '920229'
        },
        {
          name: 'SaferHub',
          count: 4,
          id: '166161'
        },
        {
          name: 'Qreform Ltd',
          count: 4,
          id: '738751'
        },
        {
          name: 'GoLeanSixSigma',
          count: 3,
          id: '696364'
        },
        {
          name: 'Thomas Wolfe',
          count: 2,
          id: '10515'
        },
        {
          name: 'FourThirds',
          count: 2,
          id: '26677'
        },
        {
          name: 'HowToo',
          count: 2,
          id: '6887'
        },
        {
          name: 'JB Training Solutions',
          count: 1,
          id: '1004'
        },
        {
          name: 'The FISH Philosophy',
          count: 1,
          id: '440926'
        },
        {
          name: 'Speak and Write Inc',
          count: 1,
          id: '4534'
        },
        {
          name: 'KAZ Keyboard Typing',
          count: 1,
          id: '6119'
        },
        {
          name: 'Technology Ed',
          count: 1,
          id: '6951'
        }
      ],
      courseStyle: [
        {
          name: 'INTERACTIVE',
          count: 32198
        }
      ],
      ratingsRanges: [
        {
          name: 'All courses',
          count: 32909
        },
        {
          name: '1 star & up',
          count: 12740,
          from: 20
        },
        {
          name: '2 stars & up',
          count: 12449,
          from: 40
        },
        {
          name: '3 stars & up',
          count: 11981,
          from: 60
        },
        {
          name: '4 stars & up',
          count: 9332,
          from: 80
        }
      ],
      durationRanges: [
        {
          name: '1 - 10 minutes',
          count: 11065,
          to: 11
        },
        {
          name: '11 - 30 minutes',
          count: 10713,
          from: 11,
          to: 31
        },
        {
          name: '31 - 59 minutes',
          count: 2967,
          from: 31,
          to: 60
        },
        {
          name: '1 hour +',
          count: 8164,
          from: 60
        }
      ],
      isPlus: [
        {
          name: 'true',
          count: 23849
        },
        {
          name: 'false',
          count: 9060
        }
      ],
      languages: [
        {
          name: 'en',
          count: 26824,
          children: [
            {
              name: 'en-US',
              count: 23113
            },
            {
              name: 'en-GB',
              count: 3327
            },
            {
              name: 'en-AU',
              count: 742
            }
          ]
        },
        {
          name: 'es',
          count: 6857,
          children: [
            {
              name: 'es-419',
              count: 5521
            },
            {
              name: 'es-ES',
              count: 1180
            }
          ]
        },
        {
          name: 'fr',
          count: 4771,
          children: [
            {
              name: 'fr-FR',
              count: 3670
            },
            {
              name: 'fr-CA',
              count: 3459
            }
          ]
        },
        {
          name: 'ar',
          count: 4090,
          children: []
        },
        {
          name: 'pt',
          count: 3941,
          children: [
            {
              name: 'pt-BR',
              count: 3434
            },
            {
              name: 'pt-PT',
              count: 1575
            }
          ]
        },
        {
          name: 'de',
          count: 3922
        },
        {
          name: 'zh',
          count: 3848,
          children: [
            {
              name: 'zh-Hans',
              count: 3747
            },
            {
              name: 'zh-Hant',
              count: 1480
            },
            {
              name: 'zh-cmn',
              count: 127
            },
            {
              name: 'zh-yue',
              count: 55
            },
            {
              name: 'zh-TW',
              count: 8
            }
          ]
        },
        {
          name: 'ja',
          count: 3233
        },
        {
          name: 'it',
          count: 1731
        },
        {
          name: 'ko',
          count: 1492
        },
        {
          name: 'ru',
          count: 1456
        },
        {
          name: 'tr',
          count: 1449
        },
        {
          name: 'nl',
          count: 1403
        },
        {
          name: 'id',
          count: 1177
        },
        {
          name: 'ro',
          count: 994
        },
        {
          name: 'pl',
          count: 969
        },
        {
          name: 'hi',
          count: 933
        },
        {
          name: 'th',
          count: 907
        },
        {
          name: 'vi',
          count: 846
        },
        {
          name: 'sv',
          count: 769
        },
        {
          name: 'hu',
          count: 700
        },
        {
          name: 'fa',
          count: 643
        },
        {
          name: 'da',
          count: 605
        },
        {
          name: 'he',
          count: 583
        },
        {
          name: 'lv',
          count: 580
        },
        {
          name: 'sh',
          count: 555,
          children: [
            {
              name: 'sh-SR',
              count: 504
            },
            {
              name: 'sh-HR',
              count: 401
            },
            {
              name: 'sh-BS',
              count: 42
            }
          ]
        },
        {
          name: 'ms',
          count: 545
        },
        {
          name: 'et',
          count: 527
        },
        {
          name: 'el',
          count: 486
        },
        {
          name: 'uk',
          count: 468
        },
        {
          name: 'my',
          count: 350
        },
        {
          name: 'bg',
          count: 315
        },
        {
          name: 'cs',
          count: 315
        },
        {
          name: 'ku',
          count: 302
        },
        {
          name: 'sk',
          count: 214
        },
        {
          name: 'sq',
          count: 202
        },
        {
          name: 'lt',
          count: 201
        },
        {
          name: 'fi',
          count: 161
        },
        {
          name: 'ca',
          count: 158
        },
        {
          name: 'gl',
          count: 154
        },
        {
          name: 'mn',
          count: 150
        },
        {
          name: 'mr',
          count: 143
        },
        {
          name: 'sl',
          count: 124
        },
        {
          name: 'mk',
          count: 123
        },
        {
          name: 'hy',
          count: 119
        },
        {
          name: 'no',
          count: 111,
          children: [
            {
              name: 'no-NB',
              count: 95
            }
          ]
        },
        {
          name: 'ka',
          count: 100
        },
        {
          name: 'uz',
          count: 71
        },
        {
          name: 'be',
          count: 68
        },
        {
          name: 'ur',
          count: 62
        },
        {
          name: 'gu',
          count: 59
        },
        {
          name: 'kk',
          count: 57
        },
        {
          name: 'te',
          count: 50
        },
        {
          name: 'ta',
          count: 46
        },
        {
          name: 'az',
          count: 44
        },
        {
          name: 'bn',
          count: 39
        },
        {
          name: 'sw',
          count: 38
        },
        {
          name: 'eu',
          count: 34
        },
        {
          name: 'si',
          count: 26
        },
        {
          name: 'eo',
          count: 23
        },
        {
          name: 'ne',
          count: 21
        },
        {
          name: 'km',
          count: 18
        },
        {
          name: 'ml',
          count: 16
        },
        {
          name: 'ig',
          count: 14
        },
        {
          name: 'tl',
          count: 12
        },
        {
          name: 'ug',
          count: 12
        },
        {
          name: 'ps',
          count: 11
        },
        {
          name: 'af',
          count: 8
        },
        {
          name: 'am',
          count: 8
        },
        {
          name: 'tg',
          count: 8
        },
        {
          name: 'tt',
          count: 7
        },
        {
          name: 'ky',
          count: 5
        },
        {
          name: 'lo',
          count: 4
        },
        {
          name: 'bo',
          count: 3
        },
        {
          name: 'mg',
          count: 3
        },
        {
          name: 'so',
          count: 3
        },
        {
          name: 'kn',
          count: 2
        },
        {
          name: 'sc',
          count: 2
        },
        {
          name: 'is',
          count: 1
        }
      ],
      courseGatingsFacet: [
        {
          name: 'Ungated',
          count: 7961,
          id: '2015'
        },
        {
          name: 'Partially Gated',
          count: 4190,
          id: '2014'
        },
        {
          name: 'Fully Gated',
          count: 3359,
          id: '2013'
        }
      ],
      isBundleOnly: [
        {
          name: 'false',
          count: 32431
        },
        {
          name: 'true',
          count: 478
        }
      ],
      accreditationFacet: [
        {
          name: 'Project Management Institute (PMI)',
          count: 1985,
          id: '1446'
        },
        {
          name: 'National Association of State Boards of Accountancy (NASBA)',
          count: 910,
          id: '1444'
        },
        {
          name: 'The CPD Certification Service UK',
          count: 874,
          id: '1833'
        },
        {
          name: 'Board of Certified Safety Professionals (BCSP)',
          count: 116,
          id: '2178'
        },
        {
          name: 'HR Certificate Institute (HRCI)',
          count: 98,
          id: '1479'
        },
        {
          name: 'International Accreditors for Continuing Education and Training (IACET)',
          count: 94,
          id: '1437'
        },
        {
          name: 'The Institute of Certified Public Accountants of Singapore (ICPAS)',
          count: 88,
          id: '1455'
        },
        {
          name: 'Certified Public Accountants (Ireland)',
          count: 88,
          id: '2164'
        },
        {
          name: 'Chartered Accountants Ireland',
          count: 88,
          id: '2166'
        },
        {
          name: 'CPA Canada',
          count: 88,
          id: '2170'
        },
        {
          name: 'CPA Australia',
          count: 86,
          id: '2169'
        },
        {
          name: 'UK Association of Chartered Certified Accountants (ACCA)',
          count: 81,
          id: '2176'
        },
        {
          name: 'UK Chartered Institute of Management Accountants (CIMA)',
          count: 78,
          id: '2177'
        },
        {
          name: 'Society for Human Resource Management (SHRM)',
          count: 77,
          id: '1550'
        },
        {
          name: 'Chartered Alternative Investment Analyst Association (CAIA)',
          count: 70,
          id: '2165'
        },
        {
          name: 'Certified International Trade Professional (CITP) (FITT)',
          count: 59,
          id: '2163'
        },
        {
          name: 'Chartered Insurance Institute (CII)',
          count: 48,
          id: '2167'
        },
        {
          name: 'The Australian Financials Markets Association (AFMA)',
          count: 47,
          id: '2162'
        },
        {
          name: 'American Dental Association (ADA)',
          count: 29,
          id: '2158'
        },
        {
          name: 'Investment Industry Regulatory Organization of Canada (IIROC)',
          count: 26,
          id: '2174'
        },
        {
          name: 'CFA Institute',
          count: 21,
          id: '1435'
        },
        {
          name: "Professional Risk Managers' International (PRMIA)",
          count: 16,
          id: '2175'
        },
        {
          name: 'California Board of Registered Nursing',
          count: 14,
          id: '1598'
        },
        {
          name: 'Global Association of Risk Professionals (GARP)',
          count: 14,
          id: '2172'
        },
        {
          name: 'Institute of Internal Auditors (IIA)',
          count: 13,
          id: '2173'
        },
        {
          name: 'Accrediting Professional Managers Globally (APMG)',
          count: 9,
          id: '1465'
        },
        {
          name: 'Chartered Institute for Securities & Investment (CISI)',
          count: 9,
          id: '2168'
        },
        {
          name: 'FP Canada',
          count: 9,
          id: '2171'
        },
        {
          name: 'American National Standards Institute (ANSI)',
          count: 6,
          id: '2180'
        },
        {
          name: 'Other',
          count: 5,
          id: '1544'
        },
        {
          name: 'Certified Fund Raising Executive International (CFRE)',
          count: 5,
          id: '1551'
        },
        {
          name: 'Illinois Department of Financial and Professional Regulation (IDFPR)',
          count: 2,
          id: '2073'
        },
        {
          name: 'Certified Financial Planner Board (CFP)',
          count: 1,
          id: '1434'
        },
        {
          name: 'Exin',
          count: 1,
          id: '1503'
        },
        {
          name: 'American Nurses Credentialing Center (ANCC)',
          count: 1,
          id: '1597'
        },
        {
          name: 'Association of Nutrition and Foodservice Professionals',
          count: 1,
          id: '1658'
        }
      ],
      priceRanges: [
        {
          name: 'under $20',
          count: 22058,
          to: 2000
        },
        {
          name: '$20 - $40',
          count: 6481,
          from: 2000,
          to: 4100
        },
        {
          name: '$41 - $60',
          count: 2198,
          from: 4100,
          to: 6100
        },
        {
          name: '$61 - $100',
          count: 1319,
          from: 6100,
          to: 10001
        },
        {
          name: 'over $100',
          count: 853,
          from: 10001
        }
      ],
      featuresFacet: [
        {
          name: 'Audio Narration',
          count: 22455,
          id: '12'
        },
        {
          name: 'Post-Assessment',
          count: 20177,
          id: '19'
        },
        {
          name: 'Video',
          count: 19546,
          id: '13'
        },
        {
          name: 'Inline Activities',
          count: 19364,
          id: '1938'
        },
        {
          name: 'Supplemental Resources',
          count: 14496,
          id: '1044'
        },
        {
          name: 'Animated Video',
          count: 4036,
          id: '1937'
        },
        {
          name: 'Offline Exercises',
          count: 741,
          id: '2074'
        }
      ],
      productType: [
        {
          name: 'course',
          count: 32255
        },
        {
          name: 'list',
          count: 654
        }
      ],
      categoriesFacet: [
        {
          name: 'Business Skills',
          count: 14256,
          id: '122',
          hierarchy: '|Business Skills',
          children: [
            {
              name: 'Communication',
              count: 2956,
              id: '1001',
              hierarchy: '|Business Skills|Communication',
              children: [
                {
                  name: 'Presentation Skills',
                  count: 505,
                  id: '1139',
                  hierarchy:
                    '|Business Skills|Communication|Presentation Skills'
                },
                {
                  name: 'Listening',
                  count: 351,
                  id: '1872',
                  hierarchy: '|Business Skills|Communication|Listening'
                },
                {
                  name: 'Telephone Skills',
                  count: 338,
                  id: '1142',
                  hierarchy: '|Business Skills|Communication|Telephone Skills'
                },
                {
                  name: 'Influence',
                  count: 280,
                  id: '2183',
                  hierarchy: '|Business Skills|Communication|Influence'
                },
                {
                  name: 'Feedback',
                  count: 149,
                  id: '2182',
                  hierarchy: '|Business Skills|Communication|Feedback'
                }
              ]
            },
            {
              name: 'Teamwork',
              count: 1548,
              id: '1141',
              hierarchy: '|Business Skills|Teamwork',
              children: [
                {
                  name: 'Remote Working',
                  count: 504,
                  id: '1316',
                  hierarchy: '|Business Skills|Teamwork|Remote Working',
                  children: [
                    {
                      name: 'Hybrid Working',
                      count: 45,
                      id: '2196',
                      hierarchy:
                        '|Business Skills|Teamwork|Remote Working|Hybrid Working'
                    },
                    {
                      name: 'Remote Teamwork',
                      count: 42,
                      id: '2197',
                      hierarchy:
                        '|Business Skills|Teamwork|Remote Working|Remote Teamwork'
                    }
                  ]
                },
                {
                  name: 'Collaboration',
                  count: 80,
                  id: '2199',
                  hierarchy: '|Business Skills|Teamwork|Collaboration'
                }
              ]
            },
            {
              name: 'Sales',
              count: 1393,
              id: '1002',
              hierarchy: '|Business Skills|Sales',
              children: [
                {
                  name: 'Prospecting',
                  count: 83,
                  id: '2198',
                  hierarchy: '|Business Skills|Sales|Prospecting'
                },
                {
                  name: 'Account Development',
                  count: 44,
                  id: '1870',
                  hierarchy: '|Business Skills|Sales|Account Development'
                },
                {
                  name: 'Territory Planning',
                  count: 19,
                  id: '1869',
                  hierarchy: '|Business Skills|Sales|Territory Planning'
                }
              ]
            },
            {
              name: 'Finance',
              count: 1387,
              id: '1160',
              hierarchy: '|Business Skills|Finance',
              children: [
                {
                  name: 'Accounting',
                  count: 919,
                  id: '1004',
                  hierarchy: '|Business Skills|Finance|Accounting'
                },
                {
                  name: 'Taxes',
                  count: 613,
                  id: '1856',
                  hierarchy: '|Business Skills|Finance|Taxes'
                },
                {
                  name: 'Auditing',
                  count: 123,
                  id: '1857',
                  hierarchy: '|Business Skills|Finance|Auditing'
                }
              ]
            },
            {
              name: 'Customer Service',
              count: 1111,
              id: '1158',
              hierarchy: '|Business Skills|Customer Service'
            },
            {
              name: 'Business Strategy',
              count: 903,
              id: '998',
              hierarchy: '|Business Skills|Business Strategy',
              children: [
                {
                  name: 'Strategic Planning',
                  count: 427,
                  id: '1876',
                  hierarchy:
                    '|Business Skills|Business Strategy|Strategic Planning'
                },
                {
                  name: 'Competitive Intelligence',
                  count: 12,
                  id: '2181',
                  hierarchy:
                    '|Business Skills|Business Strategy|Competitive Intelligence'
                }
              ]
            },
            {
              name: 'Project Management',
              count: 838,
              id: '1098',
              hierarchy: '|Business Skills|Project Management',
              children: [
                {
                  name: 'Agile Methodology',
                  count: 66,
                  id: '2195',
                  hierarchy:
                    '|Business Skills|Project Management|Agile Methodology'
                }
              ]
            },
            {
              name: 'Relationship Building',
              count: 772,
              id: '1877',
              hierarchy: '|Business Skills|Relationship Building'
            },
            {
              name: 'Emotional Intelligence',
              count: 696,
              id: '1864',
              hierarchy: '|Business Skills|Emotional Intelligence',
              children: [
                {
                  name: 'Self-Awareness',
                  count: 193,
                  id: '2184',
                  hierarchy:
                    '|Business Skills|Emotional Intelligence|Self-Awareness'
                }
              ]
            },
            {
              name: 'Professional Development',
              count: 613,
              id: '2050',
              hierarchy: '|Business Skills|Professional Development',
              children: [
                {
                  name: 'Personal Goal Setting',
                  count: 128,
                  id: '2194',
                  hierarchy:
                    '|Business Skills|Professional Development|Personal Goal Setting'
                }
              ]
            },
            {
              name: 'Time Management',
              count: 587,
              id: '1143',
              hierarchy: '|Business Skills|Time Management'
            },
            {
              name: 'Motivation',
              count: 578,
              id: '1874',
              hierarchy: '|Business Skills|Motivation'
            },
            {
              name: 'Conflict Resolution',
              count: 549,
              id: '1106',
              hierarchy: '|Business Skills|Conflict Resolution'
            },
            {
              name: 'Human Resources Administration',
              count: 532,
              id: '1003',
              hierarchy: '|Business Skills|Human Resources Administration',
              children: [
                {
                  name: 'Hiring and Selection',
                  count: 138,
                  id: '2186',
                  hierarchy:
                    '|Business Skills|Human Resources Administration|Hiring and Selection'
                },
                {
                  name: 'Recruiting',
                  count: 41,
                  id: '2187',
                  hierarchy:
                    '|Business Skills|Human Resources Administration|Recruiting'
                }
              ]
            },
            {
              name: 'Customer Focus',
              count: 488,
              id: '1871',
              hierarchy: '|Business Skills|Customer Focus'
            },
            {
              name: 'Talent Development',
              count: 480,
              id: '1875',
              hierarchy: '|Business Skills|Talent Development',
              children: [
                {
                  name: 'Training & Facilitation',
                  count: 57,
                  id: '2204',
                  hierarchy:
                    '|Business Skills|Talent Development|Training & Facilitation'
                }
              ]
            },
            {
              name: 'Business Operations',
              count: 451,
              id: '1163',
              hierarchy: '|Business Skills|Business Operations'
            },
            {
              name: 'Organizational Skills',
              count: 428,
              id: '2051',
              hierarchy: '|Business Skills|Organizational Skills'
            },
            {
              name: 'Marketing',
              count: 427,
              id: '1135',
              hierarchy: '|Business Skills|Marketing',
              children: [
                {
                  name: 'Digital Marketing',
                  count: 137,
                  id: '1578',
                  hierarchy: '|Business Skills|Marketing|Digital Marketing'
                },
                {
                  name: 'Brand Management',
                  count: 119,
                  id: '1581',
                  hierarchy: '|Business Skills|Marketing|Brand Management'
                }
              ]
            },
            {
              name: 'Problem Solving',
              count: 419,
              id: '1516',
              hierarchy: '|Business Skills|Problem Solving',
              children: [
                {
                  name: 'Critical Thinking',
                  count: 32,
                  id: '2190',
                  hierarchy:
                    '|Business Skills|Problem Solving|Critical Thinking'
                }
              ]
            },
            {
              name: 'Negotiation',
              count: 402,
              id: '1137',
              hierarchy: '|Business Skills|Negotiation'
            },
            {
              name: 'Meetings',
              count: 396,
              id: '2053',
              hierarchy: '|Business Skills|Meetings'
            },
            {
              name: 'Process Improvement',
              count: 371,
              id: '1935',
              hierarchy: '|Business Skills|Process Improvement'
            },
            {
              name: 'Business Writing',
              count: 343,
              id: '1863',
              hierarchy: '|Business Skills|Business Writing'
            },
            {
              name: 'Etiquette',
              count: 323,
              id: '1288',
              hierarchy: '|Business Skills|Etiquette',
              children: [
                {
                  name: 'Digital Etiquette',
                  count: 59,
                  id: '2185',
                  hierarchy: '|Business Skills|Etiquette|Digital Etiquette'
                }
              ]
            },
            {
              name: 'Innovation',
              count: 271,
              id: '1880',
              hierarchy: '|Business Skills|Innovation'
            },
            {
              name: 'Risk Management',
              count: 270,
              id: '1878',
              hierarchy: '|Business Skills|Risk Management',
              children: [
                {
                  name: 'Business Continuity Planning',
                  count: 30,
                  id: '1129',
                  hierarchy:
                    '|Business Skills|Risk Management|Business Continuity Planning'
                }
              ]
            },
            {
              name: 'Interview Skills',
              count: 267,
              id: '1133',
              hierarchy: '|Business Skills|Interview Skills',
              children: [
                {
                  name: 'Interviewing Candidates',
                  count: 132,
                  id: '2189',
                  hierarchy:
                    '|Business Skills|Interview Skills|Interviewing Candidates'
                },
                {
                  name: 'Interviewee Skills',
                  count: 91,
                  id: '2188',
                  hierarchy:
                    '|Business Skills|Interview Skills|Interviewee Skills'
                }
              ]
            },
            {
              name: 'Sustainability',
              count: 215,
              id: '1076',
              hierarchy: '|Business Skills|Sustainability',
              children: [
                {
                  name: 'Sustainable Energy',
                  count: 24,
                  id: '1279',
                  hierarchy:
                    '|Business Skills|Sustainability|Sustainable Energy'
                }
              ]
            },
            {
              name: 'Digital Transformation',
              count: 205,
              id: '1969',
              hierarchy: '|Business Skills|Digital Transformation'
            },
            {
              name: 'Creativity',
              count: 196,
              id: '2072',
              hierarchy: '|Business Skills|Creativity'
            },
            {
              name: 'Networking',
              count: 191,
              id: '1879',
              hierarchy: '|Business Skills|Networking'
            },
            {
              name: 'Trust',
              count: 180,
              id: '1873',
              hierarchy: '|Business Skills|Trust'
            },
            {
              name: 'Business Math',
              count: 178,
              id: '2200',
              hierarchy: '|Business Skills|Business Math'
            },
            {
              name: 'Accountability',
              count: 157,
              id: '1881',
              hierarchy: '|Business Skills|Accountability'
            },
            {
              name: 'International Business',
              count: 154,
              id: '1413',
              hierarchy: '|Business Skills|International Business'
            },
            {
              name: 'Language Learning',
              count: 141,
              id: '2191',
              hierarchy: '|Business Skills|Language Learning',
              children: [
                {
                  name: 'Learning English',
                  count: 73,
                  id: '2192',
                  hierarchy:
                    '|Business Skills|Language Learning|Learning English'
                },
                {
                  name: 'Learning Spanish',
                  count: 36,
                  id: '2193',
                  hierarchy:
                    '|Business Skills|Language Learning|Learning Spanish'
                }
              ]
            },
            {
              name: 'Mentoring',
              count: 126,
              id: '1866',
              hierarchy: '|Business Skills|Mentoring'
            },
            {
              name: 'Lean Methodology',
              count: 119,
              id: '1865',
              hierarchy: '|Business Skills|Lean Methodology'
            },
            {
              name: 'Entrepreneurship',
              count: 112,
              id: '1132',
              hierarchy: '|Business Skills|Entrepreneurship'
            },
            {
              name: 'Corporate Social Responsibility',
              count: 99,
              id: '1131',
              hierarchy: '|Business Skills|Corporate Social Responsibility'
            },
            {
              name: 'Decision Making',
              count: 96,
              id: '2201',
              hierarchy: '|Business Skills|Decision Making'
            },
            {
              name: 'Six Sigma Methodology',
              count: 92,
              id: '2010',
              hierarchy: '|Business Skills|Six Sigma Methodology'
            },
            {
              name: 'Small Business',
              count: 84,
              id: '1140',
              hierarchy: '|Business Skills|Small Business'
            },
            {
              name: 'Design Thinking',
              count: 81,
              id: '1934',
              hierarchy: '|Business Skills|Design Thinking'
            },
            {
              name: 'Personality Assessments',
              count: 78,
              id: '1273',
              hierarchy: '|Business Skills|Personality Assessments'
            },
            {
              name: 'Handling Change',
              count: 60,
              id: '2202',
              hierarchy: '|Business Skills|Handling Change'
            },
            {
              name: 'Onboarding',
              count: 50,
              id: '2203',
              hierarchy: '|Business Skills|Onboarding'
            },
            {
              name: 'Personal Effectiveness',
              count: 47,
              id: '1770',
              hierarchy: '|Business Skills|Personal Effectiveness'
            },
            {
              name: 'Flexibility',
              count: 26,
              id: '2038',
              hierarchy: '|Business Skills|Flexibility'
            },
            {
              name: 'Business Valuation',
              count: 24,
              id: '1130',
              hierarchy: '|Business Skills|Business Valuation'
            },
            {
              name: 'Mergers & Acquisitions',
              count: 4,
              id: '1136',
              hierarchy: '|Business Skills|Mergers & Acquisitions'
            }
          ]
        },
        {
          name: 'Industry Specific',
          count: 6978,
          id: '997',
          hierarchy: '|Industry Specific',
          children: [
            {
              name: 'Healthcare',
              count: 1819,
              id: '535',
              hierarchy: '|Industry Specific|Healthcare',
              children: [
                {
                  name: 'Healthcare Administration',
                  count: 424,
                  id: '1023',
                  hierarchy:
                    '|Industry Specific|Healthcare|Healthcare Administration',
                  children: [
                    {
                      name: 'Medical Coding & Billing',
                      count: 217,
                      id: '1311',
                      hierarchy:
                        '|Industry Specific|Healthcare|Healthcare Administration|Medical Coding & Billing'
                    }
                  ]
                },
                {
                  name: 'Post-Acute Care',
                  count: 354,
                  id: '1852',
                  hierarchy: '|Industry Specific|Healthcare|Post-Acute Care',
                  children: [
                    {
                      name: 'Medical Long Term Care',
                      count: 299,
                      id: '1152',
                      hierarchy:
                        '|Industry Specific|Healthcare|Post-Acute Care|Medical Long Term Care'
                    }
                  ]
                },
                {
                  name: 'Hospitals',
                  count: 251,
                  id: '2234',
                  hierarchy: '|Industry Specific|Healthcare|Hospitals',
                  children: [
                    {
                      name: 'Hospital Food Service',
                      count: 195,
                      id: '2236',
                      hierarchy:
                        '|Industry Specific|Healthcare|Hospitals|Hospital Food Service'
                    },
                    {
                      name: 'Hospital Environmental Services',
                      count: 50,
                      id: '2235',
                      hierarchy:
                        '|Industry Specific|Healthcare|Hospitals|Hospital Environmental Services'
                    }
                  ]
                },
                {
                  name: 'Healthcare Safety',
                  count: 249,
                  id: '1264',
                  hierarchy: '|Industry Specific|Healthcare|Healthcare Safety',
                  children: [
                    {
                      name: 'Infection Control',
                      count: 50,
                      id: '2231',
                      hierarchy:
                        '|Industry Specific|Healthcare|Healthcare Safety|Infection Control'
                    },
                    {
                      name: 'Patient Safety',
                      count: 24,
                      id: '2233',
                      hierarchy:
                        '|Industry Specific|Healthcare|Healthcare Safety|Patient Safety'
                    },
                    {
                      name: 'Patient Handling',
                      count: 8,
                      id: '2232',
                      hierarchy:
                        '|Industry Specific|Healthcare|Healthcare Safety|Patient Handling'
                    }
                  ]
                },
                {
                  name: 'Disease',
                  count: 223,
                  id: '1211',
                  hierarchy: '|Industry Specific|Healthcare|Disease',
                  children: [
                    {
                      name: 'Infectious Diseases',
                      count: 195,
                      id: '1147',
                      hierarchy:
                        '|Industry Specific|Healthcare|Disease|Infectious Diseases',
                      children: [
                        {
                          name: 'Coronavirus/COVID-19',
                          count: 98,
                          id: '2022',
                          hierarchy:
                            '|Industry Specific|Healthcare|Disease|Infectious Diseases|Coronavirus/COVID-19'
                        }
                      ]
                    },
                    {
                      name: 'Diabetes',
                      count: 3,
                      id: '1206',
                      hierarchy:
                        '|Industry Specific|Healthcare|Disease|Diabetes'
                    }
                  ]
                },
                {
                  name: 'Nursing',
                  count: 202,
                  id: '1020',
                  hierarchy: '|Industry Specific|Healthcare|Nursing'
                },
                {
                  name: 'Clinical Documentation Improvement',
                  count: 200,
                  id: '1846',
                  hierarchy:
                    '|Industry Specific|Healthcare|Clinical Documentation Improvement'
                },
                {
                  name: 'Medical Emergency',
                  count: 154,
                  id: '1148',
                  hierarchy: '|Industry Specific|Healthcare|Medical Emergency',
                  children: [
                    {
                      name: 'First Aid',
                      count: 154,
                      id: '1175',
                      hierarchy:
                        '|Industry Specific|Healthcare|Medical Emergency|First Aid'
                    }
                  ]
                },
                {
                  name: 'Bloodborne Pathogens',
                  count: 103,
                  id: '1145',
                  hierarchy:
                    '|Industry Specific|Healthcare|Bloodborne Pathogens'
                },
                {
                  name: 'Case Management',
                  count: 61,
                  id: '1848',
                  hierarchy: '|Industry Specific|Healthcare|Case Management'
                },
                {
                  name: 'Dentistry',
                  count: 36,
                  id: '1064',
                  hierarchy: '|Industry Specific|Healthcare|Dentistry'
                },
                {
                  name: 'Behavioral Health',
                  count: 31,
                  id: '1778',
                  hierarchy: '|Industry Specific|Healthcare|Behavioral Health'
                },
                {
                  name: 'Clinical Research',
                  count: 24,
                  id: '1184',
                  hierarchy: '|Industry Specific|Healthcare|Clinical Research'
                }
              ]
            },
            {
              name: 'Construction',
              count: 1100,
              id: '1060',
              hierarchy: '|Industry Specific|Construction',
              children: [
                {
                  name: 'Welding',
                  count: 78,
                  id: '1257',
                  hierarchy: '|Industry Specific|Construction|Welding'
                }
              ]
            },
            {
              name: 'Electrical',
              count: 1067,
              id: '1168',
              hierarchy: '|Industry Specific|Electrical',
              children: [
                {
                  name: 'Power Generation/Distribution',
                  count: 570,
                  id: '1272',
                  hierarchy:
                    '|Industry Specific|Electrical|Power Generation/Distribution'
                }
              ]
            },
            {
              name: 'Manufacturing',
              count: 993,
              id: '1036',
              hierarchy: '|Industry Specific|Manufacturing'
            },
            {
              name: 'Mechanical',
              count: 771,
              id: '1315',
              hierarchy: '|Industry Specific|Mechanical'
            },
            {
              name: 'Oil & Gas',
              count: 577,
              id: '1128',
              hierarchy: '|Industry Specific|Oil & Gas'
            },
            {
              name: 'Engineering',
              count: 528,
              id: '1169',
              hierarchy: '|Industry Specific|Engineering'
            },
            {
              name: 'Food Service',
              count: 492,
              id: '1038',
              hierarchy: '|Industry Specific|Food Service'
            },
            {
              name: 'Transportation',
              count: 396,
              id: '1026',
              hierarchy: '|Industry Specific|Transportation',
              children: [
                {
                  name: 'Trucking & Shipping',
                  count: 342,
                  id: '1254',
                  hierarchy:
                    '|Industry Specific|Transportation|Trucking & Shipping'
                },
                {
                  name: 'Automotive',
                  count: 8,
                  id: '1256',
                  hierarchy: '|Industry Specific|Transportation|Automotive'
                }
              ]
            },
            {
              name: 'Banking',
              count: 353,
              id: '1034',
              hierarchy: '|Industry Specific|Banking'
            },
            {
              name: 'Hospitality',
              count: 334,
              id: '1249',
              hierarchy: '|Industry Specific|Hospitality'
            },
            {
              name: 'Retail',
              count: 267,
              id: '1035',
              hierarchy: '|Industry Specific|Retail',
              children: [
                {
                  name: 'Grocery',
                  count: 19,
                  id: '2237',
                  hierarchy: '|Industry Specific|Retail|Grocery'
                }
              ]
            },
            {
              name: 'Nonprofit & Government',
              count: 125,
              id: '2057',
              hierarchy: '|Industry Specific|Nonprofit & Government'
            },
            {
              name: 'Dietetics',
              count: 113,
              id: '2239',
              hierarchy: '|Industry Specific|Dietetics'
            },
            {
              name: 'Education',
              count: 110,
              id: '270',
              hierarchy: '|Industry Specific|Education',
              children: [
                {
                  name: 'Higher Education',
                  count: 28,
                  id: '2230',
                  hierarchy: '|Industry Specific|Education|Higher Education'
                },
                {
                  name: 'Language',
                  count: 4,
                  id: '581',
                  hierarchy: '|Industry Specific|Education|Language'
                },
                {
                  name: 'Writing',
                  count: 3,
                  id: '1103',
                  hierarchy: '|Industry Specific|Education|Writing'
                },
                {
                  name: 'K-12',
                  count: 2,
                  id: '1032',
                  hierarchy: '|Industry Specific|Education|K-12'
                }
              ]
            },
            {
              name: 'Grounds & Facility Management',
              count: 100,
              id: '1250',
              hierarchy: '|Industry Specific|Grounds & Facility Management'
            },
            {
              name: 'Architecture',
              count: 75,
              id: '2062',
              hierarchy: '|Industry Specific|Architecture'
            },
            {
              name: 'Supply Chain Management',
              count: 62,
              id: '2157',
              hierarchy: '|Industry Specific|Supply Chain Management'
            },
            {
              name: 'Anatomy & Physiology',
              count: 61,
              id: '2238',
              hierarchy: '|Industry Specific|Anatomy & Physiology'
            },
            {
              name: 'Green Building',
              count: 58,
              id: '1185',
              hierarchy: '|Industry Specific|Green Building'
            },
            {
              name: 'Insurance',
              count: 44,
              id: '1033',
              hierarchy: '|Industry Specific|Insurance'
            },
            {
              name: 'Water Management',
              count: 44,
              id: '1248',
              hierarchy: '|Industry Specific|Water Management'
            },
            {
              name: 'Law Enforcement',
              count: 32,
              id: '2240',
              hierarchy: '|Industry Specific|Law Enforcement'
            },
            {
              name: 'Maritime',
              count: 19,
              id: '2012',
              hierarchy: '|Industry Specific|Maritime'
            },
            {
              name: 'Real Estate',
              count: 1,
              id: '1059',
              hierarchy: '|Industry Specific|Real Estate'
            }
          ]
        },
        {
          name: 'Safety',
          count: 5495,
          id: '124',
          hierarchy: '|Safety',
          children: [
            {
              name: 'Construction Safety',
              count: 923,
              id: '1115',
              hierarchy: '|Safety|Construction Safety'
            },
            {
              name: 'Workplace Safety',
              count: 782,
              id: '1025',
              hierarchy: '|Safety|Workplace Safety'
            },
            {
              name: 'Hazardous Materials',
              count: 657,
              id: '1122',
              hierarchy: '|Safety|Hazardous Materials'
            },
            {
              name: 'OSHA',
              count: 599,
              id: '1027',
              hierarchy: '|Safety|OSHA',
              children: [
                {
                  name: 'OSHA Regulations',
                  count: 300,
                  id: '2259',
                  hierarchy: '|Safety|OSHA|OSHA Regulations'
                },
                {
                  name: 'OSHA Overview',
                  count: 65,
                  id: '2258',
                  hierarchy: '|Safety|OSHA|OSHA Overview'
                }
              ]
            },
            {
              name: 'Safe Driving',
              count: 505,
              id: '1116',
              hierarchy: '|Safety|Safe Driving',
              children: [
                {
                  name: 'Defensive Driving',
                  count: 73,
                  id: '2261',
                  hierarchy: '|Safety|Safe Driving|Defensive Driving'
                },
                {
                  name: 'Distracted Driving',
                  count: 22,
                  id: '2262',
                  hierarchy: '|Safety|Safe Driving|Distracted Driving'
                }
              ]
            },
            {
              name: 'Personal Protective Equipment (PPE)',
              count: 429,
              id: '1933',
              hierarchy: '|Safety|Personal Protective Equipment (PPE)',
              children: [
                {
                  name: 'Respirators',
                  count: 69,
                  id: '1268',
                  hierarchy:
                    '|Safety|Personal Protective Equipment (PPE)|Respirators'
                }
              ]
            },
            {
              name: 'Chemical Safety',
              count: 428,
              id: '1114',
              hierarchy: '|Safety|Chemical Safety'
            },
            {
              name: 'Alcohol & Food Safety',
              count: 410,
              id: '1113',
              hierarchy: '|Safety|Alcohol & Food Safety'
            },
            {
              name: 'Industrial & Warehouse Safety',
              count: 306,
              id: '2267',
              hierarchy: '|Safety|Industrial & Warehouse Safety'
            },
            {
              name: 'Hazard Communication',
              count: 299,
              id: '1123',
              hierarchy: '|Safety|Hazard Communication'
            },
            {
              name: 'Emergency Response',
              count: 259,
              id: '1252',
              hierarchy: '|Safety|Emergency Response'
            },
            {
              name: 'Ergonomics',
              count: 257,
              id: '1118',
              hierarchy: '|Safety|Ergonomics',
              children: [
                {
                  name: 'Office Ergonomics',
                  count: 101,
                  id: '2257',
                  hierarchy: '|Safety|Ergonomics|Office Ergonomics'
                },
                {
                  name: 'Industrial Ergonomics',
                  count: 40,
                  id: '2256',
                  hierarchy: '|Safety|Ergonomics|Industrial Ergonomics'
                }
              ]
            },
            {
              name: 'Forklifts & Powered Industrial Trucks',
              count: 253,
              id: '1124',
              hierarchy: '|Safety|Forklifts & Powered Industrial Trucks'
            },
            {
              name: 'Fire Safety',
              count: 249,
              id: '1121',
              hierarchy: '|Safety|Fire Safety'
            },
            {
              name: 'Electrical Safety',
              count: 237,
              id: '1117',
              hierarchy: '|Safety|Electrical Safety'
            },
            {
              name: 'Fall Prevention',
              count: 229,
              id: '1120',
              hierarchy: '|Safety|Fall Prevention'
            },
            {
              name: 'Workplace Infection Prevention',
              count: 228,
              id: '2260',
              hierarchy: '|Safety|Workplace Infection Prevention',
              children: [
                {
                  name: 'COVID-19 in the Workplace',
                  count: 171,
                  id: '2263',
                  hierarchy:
                    '|Safety|Workplace Infection Prevention|COVID-19 in the Workplace'
                }
              ]
            },
            {
              name: 'HAZWOPER',
              count: 174,
              id: '1159',
              hierarchy: '|Safety|HAZWOPER'
            },
            {
              name: 'Back/Spinal Safety',
              count: 153,
              id: '1269',
              hierarchy: '|Safety|Back/Spinal Safety'
            },
            {
              name: 'Violence Prevention',
              count: 153,
              id: '2054',
              hierarchy: '|Safety|Violence Prevention'
            },
            {
              name: 'Ladder & Scaffolding Safety',
              count: 130,
              id: '1224',
              hierarchy: '|Safety|Ladder & Scaffolding Safety'
            },
            {
              name: 'Environmental Safety',
              count: 115,
              id: '2071',
              hierarchy: '|Safety|Environmental Safety'
            },
            {
              name: 'Laboratory Safety',
              count: 107,
              id: '1271',
              hierarchy: '|Safety|Laboratory Safety'
            },
            {
              name: 'Eye, Face, & Head Safety',
              count: 83,
              id: '1119',
              hierarchy: '|Safety|Eye, Face, & Head Safety'
            },
            {
              name: 'Lockout/Tagout',
              count: 83,
              id: '2030',
              hierarchy: '|Safety|Lockout/Tagout'
            },
            {
              name: 'Hand & Arm Safety',
              count: 80,
              id: '2146',
              hierarchy: '|Safety|Hand & Arm Safety'
            },
            {
              name: 'Crane Safety',
              count: 70,
              id: '2055',
              hierarchy: '|Safety|Crane Safety'
            },
            {
              name: 'Active Shooter',
              count: 67,
              id: '1923',
              hierarchy: '|Safety|Active Shooter'
            },
            {
              name: 'Hearing Safety',
              count: 64,
              id: '2147',
              hierarchy: '|Safety|Hearing Safety'
            },
            {
              name: 'IOSH',
              count: 46,
              id: '2156',
              hierarchy: '|Safety|IOSH'
            },
            {
              name: 'Heat Safety',
              count: 46,
              id: '2266',
              hierarchy: '|Safety|Heat Safety'
            },
            {
              name: 'Aerial & Scissor Lifts',
              count: 44,
              id: '2148',
              hierarchy: '|Safety|Aerial & Scissor Lifts'
            },
            {
              name: 'Material Handling',
              count: 35,
              id: '2056',
              hierarchy: '|Safety|Material Handling'
            },
            {
              name: 'Security & Fire Systems',
              count: 19,
              id: '1295',
              hierarchy: '|Safety|Security & Fire Systems'
            },
            {
              name: 'Cold Safety',
              count: 19,
              id: '2264',
              hierarchy: '|Safety|Cold Safety'
            },
            {
              name: 'Climate',
              count: 18,
              id: '1255',
              hierarchy: '|Safety|Climate'
            },
            {
              name: 'Safety Sharps',
              count: 5,
              id: '1855',
              hierarchy: '|Safety|Safety Sharps'
            }
          ]
        },
        {
          name: 'Leadership & Management',
          count: 4343,
          id: '2241',
          hierarchy: '|Leadership & Management',
          children: [
            {
              name: 'Management',
              count: 2231,
              id: '999',
              hierarchy: '|Leadership & Management|Management',
              children: [
                {
                  name: 'Transition to Management',
                  count: 64,
                  id: '2252',
                  hierarchy:
                    '|Leadership & Management|Management|Transition to Management'
                },
                {
                  name: 'Remote Management',
                  count: 62,
                  id: '2251',
                  hierarchy:
                    '|Leadership & Management|Management|Remote Management'
                }
              ]
            },
            {
              name: 'Leadership',
              count: 1697,
              id: '1161',
              hierarchy: '|Leadership & Management|Leadership',
              children: [
                {
                  name: 'Developing Leadership Skills',
                  count: 92,
                  id: '2247',
                  hierarchy:
                    '|Leadership & Management|Leadership|Developing Leadership Skills'
                },
                {
                  name: 'Inspirational Leadership',
                  count: 68,
                  id: '2248',
                  hierarchy:
                    '|Leadership & Management|Leadership|Inspirational Leadership'
                },
                {
                  name: 'Leadership Styles',
                  count: 51,
                  id: '2249',
                  hierarchy:
                    '|Leadership & Management|Leadership|Leadership Styles'
                },
                {
                  name: 'Remote Leadership',
                  count: 34,
                  id: '2250',
                  hierarchy:
                    '|Leadership & Management|Leadership|Remote Leadership'
                }
              ]
            },
            {
              name: 'Performance Management',
              count: 1001,
              id: '1862',
              hierarchy: '|Leadership & Management|Performance Management',
              children: [
                {
                  name: 'Feedback as a Manager',
                  count: 128,
                  id: '2253',
                  hierarchy:
                    '|Leadership & Management|Performance Management|Feedback as a Manager'
                },
                {
                  name: 'Goal Setting for Managers',
                  count: 70,
                  id: '2254',
                  hierarchy:
                    '|Leadership & Management|Performance Management|Goal Setting for Managers'
                },
                {
                  name: 'Performance Reviews',
                  count: 52,
                  id: '2255',
                  hierarchy:
                    '|Leadership & Management|Performance Management|Performance Reviews'
                }
              ]
            },
            {
              name: 'Coaching',
              count: 403,
              id: '1861',
              hierarchy: '|Leadership & Management|Coaching'
            },
            {
              name: 'Change Management',
              count: 332,
              id: '1134',
              hierarchy: '|Leadership & Management|Change Management'
            },
            {
              name: 'Team Development',
              count: 187,
              id: '2245',
              hierarchy: '|Leadership & Management|Team Development'
            },
            {
              name: 'Delegation',
              count: 86,
              id: '2242',
              hierarchy: '|Leadership & Management|Delegation'
            },
            {
              name: 'Workplace Culture',
              count: 71,
              id: '2246',
              hierarchy: '|Leadership & Management|Workplace Culture'
            },
            {
              name: 'Mission, Vision, and Value Setting',
              count: 70,
              id: '2244',
              hierarchy:
                '|Leadership & Management|Mission, Vision, and Value Setting'
            },
            {
              name: 'Succession Planning',
              count: 38,
              id: '1586',
              hierarchy: '|Leadership & Management|Succession Planning'
            },
            {
              name: 'Executive Presence',
              count: 22,
              id: '2243',
              hierarchy: '|Leadership & Management|Executive Presence'
            }
          ]
        },
        {
          name: 'Technology',
          count: 4332,
          id: '125',
          hierarchy: '|Technology',
          children: [
            {
              name: 'Software',
              count: 2053,
              id: '996',
              hierarchy: '|Technology|Software',
              children: [
                {
                  name: 'Microsoft Office/Office 365',
                  count: 1249,
                  id: '1010',
                  hierarchy: '|Technology|Software|Microsoft Office/Office 365',
                  children: [
                    {
                      name: 'Microsoft Excel',
                      count: 343,
                      id: '1191',
                      hierarchy:
                        '|Technology|Software|Microsoft Office/Office 365|Microsoft Excel'
                    },
                    {
                      name: 'Microsoft Word',
                      count: 154,
                      id: '1189',
                      hierarchy:
                        '|Technology|Software|Microsoft Office/Office 365|Microsoft Word'
                    },
                    {
                      name: 'Microsoft Powerpoint',
                      count: 139,
                      id: '1192',
                      hierarchy:
                        '|Technology|Software|Microsoft Office/Office 365|Microsoft Powerpoint'
                    },
                    {
                      name: 'Microsoft Outlook',
                      count: 89,
                      id: '1195',
                      hierarchy:
                        '|Technology|Software|Microsoft Office/Office 365|Microsoft Outlook'
                    },
                    {
                      name: 'Microsoft SharePoint',
                      count: 89,
                      id: '1837',
                      hierarchy:
                        '|Technology|Software|Microsoft Office/Office 365|Microsoft SharePoint'
                    },
                    {
                      name: 'Microsoft Access',
                      count: 80,
                      id: '1197',
                      hierarchy:
                        '|Technology|Software|Microsoft Office/Office 365|Microsoft Access'
                    },
                    {
                      name: 'Microsoft Project',
                      count: 17,
                      id: '1305',
                      hierarchy:
                        '|Technology|Software|Microsoft Office/Office 365|Microsoft Project'
                    },
                    {
                      name: 'Microsoft Publisher',
                      count: 5,
                      id: '1343',
                      hierarchy:
                        '|Technology|Software|Microsoft Office/Office 365|Microsoft Publisher'
                    }
                  ]
                },
                {
                  name: 'Email',
                  count: 247,
                  id: '1888',
                  hierarchy: '|Technology|Software|Email'
                },
                {
                  name: 'Spreadsheet Software',
                  count: 210,
                  id: '1164',
                  hierarchy: '|Technology|Software|Spreadsheet Software'
                },
                {
                  name: 'Business Software',
                  count: 169,
                  id: '1167',
                  hierarchy: '|Technology|Software|Business Software'
                },
                {
                  name: 'Presentation Software',
                  count: 125,
                  id: '1162',
                  hierarchy: '|Technology|Software|Presentation Software'
                },
                {
                  name: 'Word Processing',
                  count: 119,
                  id: '1075',
                  hierarchy: '|Technology|Software|Word Processing'
                },
                {
                  name: 'Web Applications',
                  count: 110,
                  id: '1073',
                  hierarchy: '|Technology|Software|Web Applications'
                },
                {
                  name: 'Adobe',
                  count: 92,
                  id: '1012',
                  hierarchy: '|Technology|Software|Adobe',
                  children: [
                    {
                      name: 'Photoshop',
                      count: 17,
                      id: '1188',
                      hierarchy: '|Technology|Software|Adobe|Photoshop'
                    }
                  ]
                },
                {
                  name: 'Computer-aided Design',
                  count: 53,
                  id: '2273',
                  hierarchy: '|Technology|Software|Computer-aided Design'
                },
                {
                  name: 'Design Software',
                  count: 51,
                  id: '1165',
                  hierarchy: '|Technology|Software|Design Software'
                },
                {
                  name: 'Open Source',
                  count: 40,
                  id: '1909',
                  hierarchy: '|Technology|Software|Open Source'
                },
                {
                  name: 'Virtualization',
                  count: 33,
                  id: '1304',
                  hierarchy: '|Technology|Software|Virtualization',
                  children: [
                    {
                      name: 'VMware',
                      count: 27,
                      id: '1916',
                      hierarchy: '|Technology|Software|Virtualization|VMware'
                    }
                  ]
                },
                {
                  name: 'Apple Software',
                  count: 30,
                  id: '1071',
                  hierarchy: '|Technology|Software|Apple Software'
                },
                {
                  name: 'Image Editing',
                  count: 24,
                  id: '1072',
                  hierarchy: '|Technology|Software|Image Editing'
                },
                {
                  name: 'Video Editing',
                  count: 13,
                  id: '1174',
                  hierarchy: '|Technology|Software|Video Editing'
                },
                {
                  name: 'Web Browser',
                  count: 11,
                  id: '1166',
                  hierarchy: '|Technology|Software|Web Browser'
                }
              ]
            },
            {
              name: 'Programming',
              count: 1077,
              id: '1006',
              hierarchy: '|Technology|Programming',
              children: [
                {
                  name: 'Java',
                  count: 204,
                  id: '1187',
                  hierarchy: '|Technology|Programming|Java',
                  children: [
                    {
                      name: 'Jakarta EE',
                      count: 65,
                      id: '1907',
                      hierarchy: '|Technology|Programming|Java|Jakarta EE'
                    },
                    {
                      name: 'Java SE',
                      count: 51,
                      id: '1908',
                      hierarchy: '|Technology|Programming|Java|Java SE'
                    }
                  ]
                },
                {
                  name: 'Python',
                  count: 144,
                  id: '1412',
                  hierarchy: '|Technology|Programming|Python'
                },
                {
                  name: 'dot NET',
                  count: 112,
                  id: '1213',
                  hierarchy: '|Technology|Programming|dot NET',
                  children: [
                    {
                      name: 'ASP.NET',
                      count: 93,
                      id: '1904',
                      hierarchy: '|Technology|Programming|dot NET|ASP.NET'
                    }
                  ]
                },
                {
                  name: 'C#',
                  count: 50,
                  id: '1214',
                  hierarchy: '|Technology|Programming|C#'
                },
                {
                  name: 'C',
                  count: 20,
                  id: '1244',
                  hierarchy: '|Technology|Programming|C'
                },
                {
                  name: 'Games',
                  count: 18,
                  id: '1355',
                  hierarchy: '|Technology|Programming|Games'
                },
                {
                  name: 'R',
                  count: 9,
                  id: '1911',
                  hierarchy: '|Technology|Programming|R'
                },
                {
                  name: 'React',
                  count: 8,
                  id: '2007',
                  hierarchy: '|Technology|Programming|React'
                },
                {
                  name: 'Microsoft Visual Basic',
                  count: 5,
                  id: '1915',
                  hierarchy: '|Technology|Programming|Microsoft Visual Basic'
                },
                {
                  name: 'Perl',
                  count: 3,
                  id: '1216',
                  hierarchy: '|Technology|Programming|Perl'
                },
                {
                  name: 'XML',
                  count: 2,
                  id: '1217',
                  hierarchy: '|Technology|Programming|XML'
                }
              ]
            },
            {
              name: 'Web Development',
              count: 368,
              id: '1156',
              hierarchy: '|Technology|Web Development',
              children: [
                {
                  name: 'Javascript',
                  count: 150,
                  id: '1232',
                  hierarchy: '|Technology|Web Development|Javascript'
                },
                {
                  name: 'PHP',
                  count: 6,
                  id: '1233',
                  hierarchy: '|Technology|Web Development|PHP'
                }
              ]
            },
            {
              name: 'Cloud Computing & Server Technology',
              count: 367,
              id: '1328',
              hierarchy: '|Technology|Cloud Computing & Server Technology',
              children: [
                {
                  name: 'Server Technology',
                  count: 98,
                  id: '1007',
                  hierarchy:
                    '|Technology|Cloud Computing & Server Technology|Server Technology'
                },
                {
                  name: 'AWS',
                  count: 91,
                  id: '1903',
                  hierarchy:
                    '|Technology|Cloud Computing & Server Technology|AWS'
                },
                {
                  name: 'Azure',
                  count: 65,
                  id: '1905',
                  hierarchy:
                    '|Technology|Cloud Computing & Server Technology|Azure'
                },
                {
                  name: 'Cloud Computing',
                  count: 41,
                  id: '2281',
                  hierarchy:
                    '|Technology|Cloud Computing & Server Technology|Cloud Computing'
                }
              ]
            },
            {
              name: 'Cybersecurity',
              count: 314,
              id: '2009',
              hierarchy: '|Technology|Cybersecurity',
              children: [
                {
                  name: 'Cybersecurity Methods',
                  count: 119,
                  id: '2268',
                  hierarchy: '|Technology|Cybersecurity|Cybersecurity Methods'
                },
                {
                  name: 'Enterprise Information Security',
                  count: 89,
                  id: '2269',
                  hierarchy:
                    '|Technology|Cybersecurity|Enterprise Information Security'
                },
                {
                  name: 'Application Security',
                  count: 4,
                  id: '1317',
                  hierarchy: '|Technology|Cybersecurity|Application Security'
                }
              ]
            },
            {
              name: 'Databases',
              count: 240,
              id: '1008',
              hierarchy: '|Technology|Databases',
              children: [
                {
                  name: 'SQL',
                  count: 164,
                  id: '1308',
                  hierarchy: '|Technology|Databases|SQL'
                },
                {
                  name: 'Microsoft SQL Server',
                  count: 137,
                  id: '1913',
                  hierarchy: '|Technology|Databases|Microsoft SQL Server'
                },
                {
                  name: 'SQL Server Business Intelligence (SQL Server BI)',
                  count: 70,
                  id: '1914',
                  hierarchy:
                    '|Technology|Databases|SQL Server Business Intelligence (SQL Server BI)'
                },
                {
                  name: 'Oracle Database',
                  count: 7,
                  id: '1198',
                  hierarchy: '|Technology|Databases|Oracle Database'
                }
              ]
            },
            {
              name: 'Data Management',
              count: 235,
              id: '2270',
              hierarchy: '|Technology|Data Management',
              children: [
                {
                  name: 'Data Analysis',
                  count: 183,
                  id: '1887',
                  hierarchy: '|Technology|Data Management|Data Analysis'
                },
                {
                  name: 'Big Data',
                  count: 65,
                  id: '1906',
                  hierarchy: '|Technology|Data Management|Big Data'
                },
                {
                  name: 'Business Intelligence',
                  count: 4,
                  id: '2271',
                  hierarchy: '|Technology|Data Management|Business Intelligence'
                }
              ]
            },
            {
              name: 'Mobile Devices',
              count: 181,
              id: '1074',
              hierarchy: '|Technology|Mobile Devices',
              children: [
                {
                  name: 'Mobile Development',
                  count: 118,
                  id: '1242',
                  hierarchy: '|Technology|Mobile Devices|Mobile Development'
                },
                {
                  name: 'Mobile Security',
                  count: 19,
                  id: '2272',
                  hierarchy: '|Technology|Mobile Devices|Mobile Security'
                }
              ]
            },
            {
              name: 'Operating Systems',
              count: 151,
              id: '1011',
              hierarchy: '|Technology|Operating Systems',
              children: [
                {
                  name: 'Windows',
                  count: 46,
                  id: '1889',
                  hierarchy: '|Technology|Operating Systems|Windows'
                },
                {
                  name: 'Linux',
                  count: 41,
                  id: '1303',
                  hierarchy: '|Technology|Operating Systems|Linux'
                },
                {
                  name: 'Mac OS',
                  count: 33,
                  id: '1890',
                  hierarchy: '|Technology|Operating Systems|Mac OS'
                },
                {
                  name: 'Mac OS X Lion (10.7)',
                  count: 1,
                  id: '1300',
                  hierarchy:
                    '|Technology|Operating Systems|Mac OS X Lion (10.7)'
                }
              ]
            },
            {
              name: 'Social Media',
              count: 149,
              id: '1068',
              hierarchy: '|Technology|Social Media'
            },
            {
              name: 'Google',
              count: 136,
              id: '1995',
              hierarchy: '|Technology|Google'
            },
            {
              name: 'Instructional Design',
              count: 122,
              id: '1353',
              hierarchy: '|Technology|Instructional Design'
            },
            {
              name: 'DevOps',
              count: 109,
              id: '1939',
              hierarchy: '|Technology|DevOps'
            },
            {
              name: 'Machine Learning',
              count: 104,
              id: '1999',
              hierarchy: '|Technology|Machine Learning'
            },
            {
              name: 'Web Design',
              count: 100,
              id: '1005',
              hierarchy: '|Technology|Web Design',
              children: [
                {
                  name: 'HTML/CSS',
                  count: 51,
                  id: '2274',
                  hierarchy: '|Technology|Web Design|HTML/CSS'
                },
                {
                  name: 'AJAX',
                  count: 4,
                  id: '1235',
                  hierarchy: '|Technology|Web Design|AJAX'
                }
              ]
            },
            {
              name: 'Artificial Intelligence',
              count: 87,
              id: '2058',
              hierarchy: '|Technology|Artificial Intelligence'
            },
            {
              name: 'IT Support',
              count: 62,
              id: '1176',
              hierarchy: '|Technology|IT Support'
            },
            {
              name: 'OWASP',
              count: 22,
              id: '1910',
              hierarchy: '|Technology|OWASP'
            },
            {
              name: 'Ruby',
              count: 12,
              id: '1912',
              hierarchy: '|Technology|Ruby'
            },
            {
              name: 'Information Security',
              count: 7,
              id: '1017',
              hierarchy: '|Technology|Information Security'
            },
            {
              name: 'Computer Security',
              count: 1,
              id: '1063',
              hierarchy: '|Technology|Computer Security'
            },
            {
              name: 'Assistive Technology',
              count: 1,
              id: '1069',
              hierarchy: '|Technology|Assistive Technology'
            }
          ]
        },
        {
          name: 'Compliance',
          count: 4080,
          id: '123',
          hierarchy: '|Compliance',
          children: [
            {
              name: 'Human Resources Compliance',
              count: 890,
              id: '1105',
              hierarchy: '|Compliance|Human Resources Compliance',
              children: [
                {
                  name: 'Discrimination',
                  count: 138,
                  id: '2220',
                  hierarchy:
                    '|Compliance|Human Resources Compliance|Discrimination'
                },
                {
                  name: 'Compensation & Benefits',
                  count: 59,
                  id: '2219',
                  hierarchy:
                    '|Compliance|Human Resources Compliance|Compensation & Benefits'
                },
                {
                  name: 'Fair Hiring Practices',
                  count: 54,
                  id: '2221',
                  hierarchy:
                    '|Compliance|Human Resources Compliance|Fair Hiring Practices'
                }
              ]
            },
            {
              name: 'Workplace Harassment',
              count: 866,
              id: '1018',
              hierarchy: '|Compliance|Workplace Harassment'
            },
            {
              name: 'Sexual Harassment',
              count: 762,
              id: '1079',
              hierarchy: '|Compliance|Sexual Harassment'
            },
            {
              name: 'Business Law',
              count: 539,
              id: '1109',
              hierarchy: '|Compliance|Business Law'
            },
            {
              name: 'Digital Compliance',
              count: 502,
              id: '2213',
              hierarchy: '|Compliance|Digital Compliance',
              children: [
                {
                  name: 'Cybersecurity Compliance',
                  count: 441,
                  id: '2214',
                  hierarchy:
                    '|Compliance|Digital Compliance|Cybersecurity Compliance'
                },
                {
                  name: 'Social Media Compliance',
                  count: 62,
                  id: '2215',
                  hierarchy:
                    '|Compliance|Digital Compliance|Social Media Compliance'
                }
              ]
            },
            {
              name: 'Business Ethics',
              count: 483,
              id: '1111',
              hierarchy: '|Compliance|Business Ethics'
            },
            {
              name: 'Privacy',
              count: 310,
              id: '1307',
              hierarchy: '|Compliance|Privacy',
              children: [
                {
                  name: 'Employee Privacy',
                  count: 26,
                  id: '2222',
                  hierarchy: '|Compliance|Privacy|Employee Privacy'
                }
              ]
            },
            {
              name: 'Financial Ethics',
              count: 273,
              id: '2024',
              hierarchy: '|Compliance|Financial Ethics'
            },
            {
              name: 'Environmental Compliance',
              count: 191,
              id: '1024',
              hierarchy: '|Compliance|Environmental Compliance'
            },
            {
              name: 'Ethics',
              count: 171,
              id: '2216',
              hierarchy: '|Compliance|Ethics',
              children: [
                {
                  name: 'Bribery',
                  count: 61,
                  id: '2217',
                  hierarchy: '|Compliance|Ethics|Bribery'
                },
                {
                  name: 'Code of Conduct',
                  count: 57,
                  id: '2218',
                  hierarchy: '|Compliance|Ethics|Code of Conduct'
                }
              ]
            },
            {
              name: 'Record Keeping',
              count: 161,
              id: '1107',
              hierarchy: '|Compliance|Record Keeping'
            },
            {
              name: 'DOT Compliance',
              count: 159,
              id: '2011',
              hierarchy: '|Compliance|DOT Compliance'
            },
            {
              name: 'HIPAA',
              count: 141,
              id: '1019',
              hierarchy: '|Compliance|HIPAA'
            },
            {
              name: 'Bystander Intervention',
              count: 131,
              id: '2034',
              hierarchy: '|Compliance|Bystander Intervention'
            },
            {
              name: 'GDPR',
              count: 130,
              id: '1834',
              hierarchy: '|Compliance|GDPR'
            },
            {
              name: 'Drugs and Alcohol at Work',
              count: 129,
              id: '1108',
              hierarchy: '|Compliance|Drugs and Alcohol at Work'
            },
            {
              name: 'Accessibility',
              count: 65,
              id: '1831',
              hierarchy: '|Compliance|Accessibility',
              children: [
                {
                  name: 'ADA',
                  count: 33,
                  id: '1126',
                  hierarchy: '|Compliance|Accessibility|ADA'
                }
              ]
            },
            {
              name: 'Human Trafficking',
              count: 38,
              id: '2223',
              hierarchy: '|Compliance|Human Trafficking'
            },
            {
              name: 'Credit Cards & PCI Compliance',
              count: 33,
              id: '1112',
              hierarchy: '|Compliance|Credit Cards & PCI Compliance'
            },
            {
              name: 'FLSA',
              count: 18,
              id: '2020',
              hierarchy: '|Compliance|FLSA'
            },
            {
              name: 'International Operations',
              count: 17,
              id: '1016',
              hierarchy: '|Compliance|International Operations',
              children: [
                {
                  name: 'Import/Export',
                  count: 15,
                  id: '1253',
                  hierarchy:
                    '|Compliance|International Operations|Import/Export'
                }
              ]
            },
            {
              name: 'Labor Relations',
              count: 14,
              id: '2224',
              hierarchy: '|Compliance|Labor Relations'
            }
          ]
        },
        {
          name: 'Wellness',
          count: 2317,
          id: '2136',
          hierarchy: '|Wellness',
          children: [
            {
              name: 'Stress Management',
              count: 577,
              id: '2021',
              hierarchy: '|Wellness|Stress Management'
            },
            {
              name: 'Mental Wellness',
              count: 405,
              id: '2138',
              hierarchy: '|Wellness|Mental Wellness'
            },
            {
              name: 'Corporate Wellness',
              count: 323,
              id: '1150',
              hierarchy: '|Wellness|Corporate Wellness'
            },
            {
              name: 'Mindfulness & Meditation',
              count: 284,
              id: '1996',
              hierarchy: '|Wellness|Mindfulness & Meditation'
            },
            {
              name: 'Positive Attitude',
              count: 260,
              id: '2140',
              hierarchy: '|Wellness|Positive Attitude'
            },
            {
              name: 'Resilience',
              count: 243,
              id: '2052',
              hierarchy: '|Wellness|Resilience'
            },
            {
              name: 'Compassion & Empathy',
              count: 229,
              id: '2035',
              hierarchy: '|Wellness|Compassion & Empathy'
            },
            {
              name: 'Work/Life Balance',
              count: 180,
              id: '2144',
              hierarchy: '|Wellness|Work/Life Balance'
            },
            {
              name: 'Growth Mindset',
              count: 128,
              id: '2137',
              hierarchy: '|Wellness|Growth Mindset'
            },
            {
              name: 'Exercise & Fitness',
              count: 119,
              id: '1183',
              hierarchy: '|Wellness|Exercise & Fitness'
            },
            {
              name: 'Lifestyle Management',
              count: 119,
              id: '1607',
              hierarchy: '|Wellness|Lifestyle Management'
            },
            {
              name: 'Personal Finance',
              count: 113,
              id: '1138',
              hierarchy: '|Wellness|Personal Finance'
            },
            {
              name: 'Cognitive Psychology',
              count: 93,
              id: '2063',
              hierarchy: '|Wellness|Cognitive Psychology'
            },
            {
              name: 'Anger Management',
              count: 67,
              id: '2276',
              hierarchy: '|Wellness|Anger Management'
            },
            {
              name: 'Personal Hygiene',
              count: 65,
              id: '2142',
              hierarchy: '|Wellness|Personal Hygiene'
            },
            {
              name: 'Sleep & Insomnia',
              count: 59,
              id: '2143',
              hierarchy: '|Wellness|Sleep & Insomnia'
            },
            {
              name: 'Habit Formation',
              count: 55,
              id: '2279',
              hierarchy: '|Wellness|Habit Formation'
            },
            {
              name: 'Caregiving & Parenting',
              count: 51,
              id: '2277',
              hierarchy: '|Wellness|Caregiving & Parenting'
            },
            {
              name: 'Social Wellness',
              count: 45,
              id: '2280',
              hierarchy: '|Wellness|Social Wellness'
            },
            {
              name: 'Nutrition',
              count: 41,
              id: '2139',
              hierarchy: '|Wellness|Nutrition'
            },
            {
              name: 'Addiction & Recovery',
              count: 33,
              id: '2275',
              hierarchy: '|Wellness|Addiction & Recovery'
            },
            {
              name: 'Personal Development',
              count: 14,
              id: '2141',
              hierarchy: '|Wellness|Personal Development'
            },
            {
              name: 'Grief & Loss',
              count: 12,
              id: '2278',
              hierarchy: '|Wellness|Grief & Loss'
            }
          ]
        },
        {
          name: 'Diversity, Equity, & Inclusion',
          count: 2007,
          id: '2031',
          hierarchy: '|Diversity, Equity, & Inclusion',
          children: [
            {
              name: 'Building Diverse Teams',
              count: 736,
              id: '2032',
              hierarchy:
                '|Diversity, Equity, & Inclusion|Building Diverse Teams'
            },
            {
              name: 'Inclusive Leadership',
              count: 477,
              id: '2041',
              hierarchy: '|Diversity, Equity, & Inclusion|Inclusive Leadership'
            },
            {
              name: 'Cultural Competence',
              count: 432,
              id: '2042',
              hierarchy: '|Diversity, Equity, & Inclusion|Cultural Competence'
            },
            {
              name: 'Bias',
              count: 396,
              id: '1867',
              hierarchy: '|Diversity, Equity, & Inclusion|Bias'
            },
            {
              name: 'Respect',
              count: 300,
              id: '2047',
              hierarchy: '|Diversity, Equity, & Inclusion|Respect'
            },
            {
              name: 'Mental Health Awareness',
              count: 179,
              id: '2043',
              hierarchy:
                '|Diversity, Equity, & Inclusion|Mental Health Awareness'
            },
            {
              name: 'Inclusion & Belonging',
              count: 159,
              id: '2228',
              hierarchy: '|Diversity, Equity, & Inclusion|Inclusion & Belonging'
            },
            {
              name: 'Bullying',
              count: 150,
              id: '2033',
              hierarchy: '|Diversity, Equity, & Inclusion|Bullying'
            },
            {
              name: 'Microaggressions',
              count: 146,
              id: '2044',
              hierarchy: '|Diversity, Equity, & Inclusion|Microaggressions'
            },
            {
              name: 'Age Diversity',
              count: 127,
              id: '2040',
              hierarchy: '|Diversity, Equity, & Inclusion|Age Diversity'
            },
            {
              name: 'Race & Ethnicity',
              count: 114,
              id: '2046',
              hierarchy: '|Diversity, Equity, & Inclusion|Race & Ethnicity'
            },
            {
              name: 'Gender Identity',
              count: 113,
              id: '2039',
              hierarchy: '|Diversity, Equity, & Inclusion|Gender Identity'
            },
            {
              name: 'Women in the Workplace',
              count: 99,
              id: '2049',
              hierarchy:
                '|Diversity, Equity, & Inclusion|Women in the Workplace'
            },
            {
              name: 'Neurodiversity',
              count: 57,
              id: '2045',
              hierarchy: '|Diversity, Equity, & Inclusion|Neurodiversity'
            },
            {
              name: 'Sexual Orientation',
              count: 48,
              id: '2048',
              hierarchy: '|Diversity, Equity, & Inclusion|Sexual Orientation'
            },
            {
              name: 'Disability Awareness',
              count: 42,
              id: '2036',
              hierarchy: '|Diversity, Equity, & Inclusion|Disability Awareness'
            },
            {
              name: 'Equity',
              count: 38,
              id: '2226',
              hierarchy: '|Diversity, Equity, & Inclusion|Equity'
            },
            {
              name: 'Holidays & Observances',
              count: 36,
              id: '2227',
              hierarchy:
                '|Diversity, Equity, & Inclusion|Holidays & Observances'
            },
            {
              name: 'Religion & Spirituality',
              count: 20,
              id: '2229',
              hierarchy:
                '|Diversity, Equity, & Inclusion|Religion & Spirituality'
            },
            {
              name: 'Employee Resource Groups',
              count: 14,
              id: '2225',
              hierarchy:
                '|Diversity, Equity, & Inclusion|Employee Resource Groups'
            }
          ]
        },
        {
          name: 'Certification Preparation',
          count: 853,
          id: '1347',
          hierarchy: '|Certification Preparation',
          children: [
            {
              name: 'Certification Test Prep',
              count: 233,
              id: '1284',
              hierarchy: '|Certification Preparation|Certification Test Prep'
            },
            {
              name: 'Microsoft Certification',
              count: 196,
              id: '1265',
              hierarchy: '|Certification Preparation|Microsoft Certification',
              children: [
                {
                  name: 'Microsoft Azure Certification',
                  count: 43,
                  id: '2212',
                  hierarchy:
                    '|Certification Preparation|Microsoft Certification|Microsoft Azure Certification'
                },
                {
                  name: 'Microsoft 365 Certification',
                  count: 25,
                  id: '2211',
                  hierarchy:
                    '|Certification Preparation|Microsoft Certification|Microsoft 365 Certification'
                }
              ]
            },
            {
              name: 'CompTIA',
              count: 129,
              id: '1357',
              hierarchy: '|Certification Preparation|CompTIA',
              children: [
                {
                  name: 'CompTIA Network+',
                  count: 39,
                  id: '1219',
                  hierarchy:
                    '|Certification Preparation|CompTIA|CompTIA Network+'
                },
                {
                  name: 'CompTIA A+',
                  count: 33,
                  id: '1220',
                  hierarchy: '|Certification Preparation|CompTIA|CompTIA A+'
                },
                {
                  name: 'CompTIA Security+',
                  count: 12,
                  id: '1222',
                  hierarchy:
                    '|Certification Preparation|CompTIA|CompTIA Security+'
                },
                {
                  name: 'CompTIA Advanced Security Practitioner (CASP)',
                  count: 5,
                  id: '1892',
                  hierarchy:
                    '|Certification Preparation|CompTIA|CompTIA Advanced Security Practitioner (CASP)'
                }
              ]
            },
            {
              name: 'Project Management Institute',
              count: 85,
              id: '1348',
              hierarchy:
                '|Certification Preparation|Project Management Institute',
              children: [
                {
                  name: 'PMI-ACP',
                  count: 23,
                  id: '1370',
                  hierarchy:
                    '|Certification Preparation|Project Management Institute|PMI-ACP'
                },
                {
                  name: 'PMP',
                  count: 2,
                  id: '1356',
                  hierarchy:
                    '|Certification Preparation|Project Management Institute|PMP'
                },
                {
                  name: 'CAPM',
                  count: 1,
                  id: '1885',
                  hierarchy:
                    '|Certification Preparation|Project Management Institute|CAPM'
                }
              ]
            },
            {
              name: 'Cisco Certification',
              count: 78,
              id: '1154',
              hierarchy: '|Certification Preparation|Cisco Certification',
              children: [
                {
                  name: 'CCNP',
                  count: 44,
                  id: '1227',
                  hierarchy:
                    '|Certification Preparation|Cisco Certification|CCNP'
                },
                {
                  name: 'CCNA',
                  count: 20,
                  id: '1226',
                  hierarchy:
                    '|Certification Preparation|Cisco Certification|CCNA'
                }
              ]
            },
            {
              name: 'AWS Certifications',
              count: 77,
              id: '2002',
              hierarchy: '|Certification Preparation|AWS Certifications',
              children: [
                {
                  name: 'Certified Solutions Architect - Associate',
                  count: 24,
                  id: '2209',
                  hierarchy:
                    '|Certification Preparation|AWS Certifications|Certified Solutions Architect - Associate'
                },
                {
                  name: 'Certified Cloud Practitioner',
                  count: 17,
                  id: '2206',
                  hierarchy:
                    '|Certification Preparation|AWS Certifications|Certified Cloud Practitioner'
                },
                {
                  name: 'Certified Security - Specialty',
                  count: 16,
                  id: '2208',
                  hierarchy:
                    '|Certification Preparation|AWS Certifications|Certified Security - Specialty'
                },
                {
                  name: 'Certified Developer - Associate',
                  count: 2,
                  id: '2207',
                  hierarchy:
                    '|Certification Preparation|AWS Certifications|Certified Developer - Associate'
                },
                {
                  name: 'Certified SysOps Administrator - Associate',
                  count: 2,
                  id: '2210',
                  hierarchy:
                    '|Certification Preparation|AWS Certifications|Certified SysOps Administrator - Associate'
                }
              ]
            },
            {
              name: 'ISACA',
              count: 55,
              id: '1901',
              hierarchy: '|Certification Preparation|ISACA',
              children: [
                {
                  name: 'CISSP',
                  count: 39,
                  id: '1895',
                  hierarchy: '|Certification Preparation|ISACA|CISSP'
                },
                {
                  name: 'CISA',
                  count: 10,
                  id: '1893',
                  hierarchy: '|Certification Preparation|ISACA|CISA'
                },
                {
                  name: 'CISM',
                  count: 6,
                  id: '1894',
                  hierarchy: '|Certification Preparation|ISACA|CISM'
                }
              ]
            },
            {
              name: 'EC-Council',
              count: 39,
              id: '1897',
              hierarchy: '|Certification Preparation|EC-Council',
              children: [
                {
                  name: 'CEH',
                  count: 26,
                  id: '1899',
                  hierarchy: '|Certification Preparation|EC-Council|CEH'
                },
                {
                  name: 'CHFI',
                  count: 11,
                  id: '1900',
                  hierarchy: '|Certification Preparation|EC-Council|CHFI'
                }
              ]
            },
            {
              name: 'Agile Certification',
              count: 32,
              id: '1369',
              hierarchy: '|Certification Preparation|Agile Certification'
            },
            {
              name: 'ITIL',
              count: 18,
              id: '1363',
              hierarchy: '|Certification Preparation|ITIL'
            },
            {
              name: 'AMA Certified Professional in Management',
              count: 17,
              id: '2159',
              hierarchy:
                '|Certification Preparation|AMA Certified Professional in Management'
            },
            {
              name: 'Six Sigma Certification',
              count: 12,
              id: '1830',
              hierarchy: '|Certification Preparation|Six Sigma Certification'
            },
            {
              name: 'CompTIA Cloud+',
              count: 8,
              id: '1896',
              hierarchy: '|Certification Preparation|CompTIA Cloud+'
            },
            {
              name: 'Oracle Certification',
              count: 3,
              id: '1883',
              hierarchy: '|Certification Preparation|Oracle Certification'
            },
            {
              name: 'Citrix Certification',
              count: 3,
              id: '1884',
              hierarchy: '|Certification Preparation|Citrix Certification'
            }
          ]
        }
      ]
    }
  }
  // const d = await client.index('opensesame').getDocuments({
  //   limit: 5
  // })
  // console.log(JSON.stringify(await client.getTask(1122)))
  // res.send(d)
})

app.get('/rank', async (req, res) => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await page.goto(
    'https://www.hackerrank.com/interview/preparation-kits/three-month-preparation-kit/three-month-week-one/challenges'
  )

  const data = await page.evaluate(() => {
    const challenges = Array.from(document.querySelectorAll('.interview-ch-li'))
    console.log(challenges)
    return challenges.map(challenge => ({
      title: challenge.querySelector('.interview-ch-li-title').innerText,
      url: ''
      // description: challenge.querySelector('p').innerText
    }))
  })

  console.log(data)
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
