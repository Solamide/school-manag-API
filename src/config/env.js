const dotenv = require("dotenv")

dotenv.config()

const config = Object.freeze({
    password: process.env.PASSWORD
})

module.exports = {config}