const connection = require('./connection')
function listRepos (db = connection) {
  return db('repos').select()
}

module.exports = {
  listRepos
}
