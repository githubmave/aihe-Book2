const express = require('express')
const path = require('path')

const auth = require('./routes/auth')
const videoRoutes = require('./routes/videos')
const repos = require('./routes/repos')
const posts = require('./routes/posts')
const users = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', auth)
server.use('/api/v1/videos', videoRoutes)
server.use('/api/v1/repos', repos)
server.use('/api/v1/posts', posts)
server.use('/api/v1/users', users)
server.use('/api/v1/comments')

module.exports = server
