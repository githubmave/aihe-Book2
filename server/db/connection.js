const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

const _ = require('lodash')

function listRepos (db = connection) {
  return db('repos')
    .select()
}

function getPostComments(postId) {
  return db('Comments')
  .where('post_id', postId)
  .then(comments => comments.map(convertKeysSnakeCaseToCamelCase))
}

function createComment(comment) {
  comment.datePosted = new Date(Date.now())
  comment = convertKeysCamelCaseToSnakeCase(comment)

  return db('Comments')
  .insert(comment)
  .then(([id]) => id)
}

function updateComment(comment) {
  comment = convertKeysCamelCaseToSnakeCase(comment)

  return db('Comments')
  .update(comment)
  .where('id', comment.id)
}

function deleteComment(id) {
  return db('Comments')
  .where('id', id)
  .delete()
}

function convertKeysSnakeCaseToCamelCase(obj) {
  return _.mapKeys(obj, (value, key) => {
    return _.camelCase(key)
  })
}

function convertKeysCamelCaseToSnakeCase(obj) {
  return _.mapKeys(obj, (value, key) => {
    return _.snakeCase(key)
  })
}

module.exports = {
  listRepos,
  getPostComments,
  createComment,
  updateComment,
  deleteComment
}
