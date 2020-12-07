const connection = require('./connection')



function getPostComments(postId, db = connection) {
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

function updateComment(comment, db = connection) {
  comment = convertKeysCamelCaseToSnakeCase(comment)

  return db('Comments')
  .update(comment)
  .where('id', comment.id)
}

function deleteComment(id, db = connection) {
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
  getPostComments,
  createComment,
  updateComment,
  deleteComment
}