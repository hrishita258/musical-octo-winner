const { verify } = require('jsonwebtoken')

const authTokenMiddleware = secret => {
  return (req, res, next) => {
    const token = req.headers['authorization']
    console.log({ token: req.headers['authorization'] })
    if (token) {
      try {
        const user = verify(token, secret)
        console.log({ user })
        req.user = user
      } catch (err) {
        console.log(err)
      }
    }
    next()
  }
}

module.exports = authTokenMiddleware
