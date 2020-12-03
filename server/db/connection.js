const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function listRepos (db = connection) {
  return db('repos')
  .select()
}

module.exports = connection
