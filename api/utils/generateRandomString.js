const generateRandomString = () => crypto.randomBytes(128).toString()

module.exports = generateRandomString
