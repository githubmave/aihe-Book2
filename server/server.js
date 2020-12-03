const express = require('express')
const path = require('path')
const repos = require('./routes/repos')
const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1', repos)

module.exports = server
