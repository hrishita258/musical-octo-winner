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

module.exports = authTokenMiddleware
