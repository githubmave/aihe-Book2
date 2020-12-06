const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists,
  getUserByName,
  editUser
}

function createUser (user, db = connection) {
  return userExists(user.email, db)
    .then(exists => {
      if (exists) {
        throw new Error('User exists')
      }
      return null
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      return db('users').insert({ username: user.username, email: user.email, password: passwordHash })
    })
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

function findUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .select()
    .first()
}

function editUser (id, updatedUser, db = connection) {
  return db('users')
    .where({ id })
    .update(updatedUser)
    .then(user => {
      return findUser(id)
    })
}
