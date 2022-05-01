require('dotenv').config()
const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3006

routes(app)

ten(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app