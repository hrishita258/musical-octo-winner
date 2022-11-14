module.exports = (req, res, next) => {
  const user = req.user
  if (!user) {
    res.json({ message: 'not authenticated', status: 403 })
  }
  next()
}
