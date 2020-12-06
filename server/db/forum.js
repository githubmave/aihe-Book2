const utils = require('./utils')

const connection = require('./connection')

function getPosts(db = connection) {
  return db('Posts')
  .then(posts => posts.map(parseParagraphs))
  .then(posts => posts.map(utils.convertKeysSnakeCaseToCamelCase))
}

function getPost(id, db = connection) {
  return db('Posts')
  .where('id', id)
  .first()
  .then(parseParagraphs)
  .then(utils.convertKeysSnakeCaseToCamelCase)
}

function createPost(post, db = connection) {
  post.dateCreated = new Date(Date.now())
  post = stringifyParagraphs(post)
  post = utils.convertKeysCamelCaseToSnakeCase(post)

  return db('Posts')
  .insert(post)
  .then(([id]) => id)
}

function updatePost(id, post, db = connection) {
  post = stringifyParagraphs(post)
  post = utils.convertKeysCamelCaseToSnakeCase(post)

  return db('Posts').update(post).where('id', id)
}

function deletePost(id, db = connection) {
  return db('Posts')
  .where('id', id)
  .delete()
}

function getPostComments(postId) {
  return db('Comments')
  .where('post_id', postId)
  .then(comments => comments.map(utils.convertKeysSnakeCaseToCamelCase))
}

function createComment(comment) {
  comment.datePosted = new Date(Date.now())
  comment = utils.convertKeysCamelCaseToSnakeCase(comment)

  return db('Comments')
  .insert(comment)
  .then(([id]) => id)
}

function updateComment(comment) {
  comment = utils.convertKeysCamelCaseToSnakeCase(comment)

  return db('Comments')
  .update(comment)
  .where('id', comment.id)
}

function deleteComment(id) {
  return db('Comments')
  .where('id', id)
  .delete()
}

function stringifyParagraphs(post) {
  post.paragraphs = JSON.stringify(post.paragraphs)

  return post
}

function parseParagraphs(post) {
  post.paragraphs = JSON.parse(post.paragraphs)

  return post
}

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPostComments,
  createComment,
  updateComment,
  deleteComment,
}
