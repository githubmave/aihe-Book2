const express = require('express')
const path = require('path')

const auth = require('./routes/users')
const repos = require('./routes/repos')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', auth)
server.use('/api/v1/repos', repos)

module.exports = server
