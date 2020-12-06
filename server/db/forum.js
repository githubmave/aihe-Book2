const utils = require('./utils')
const connection = require('./connection')

// gets the list of posts, then parses them and changes them
// to be storeable in the db.
function getPosts(db = connection) {
  return db('Posts')
    .then((posts) => posts.map(parseParagraphs))
    .then((posts) => posts.map(utils.convertKeysSnakeCaseToCamelCase))
}

// grabs a single post and makes it readable
function getPost(id, db = connection) {
  return db('Posts')
    .where('id', id)
    .first()
    .then(parseParagraphs)
    .then(utils.convertKeysSnakeCaseToCamelCase)
}

// takes in res (one post), stringify's it.
function createPost(post, db = connection) {
  post.dateCreated = new Date(Date.now())
  post = stringifyParagraphs(post)
  post = utils.convertKeysCamelCaseToSnakeCase(post)

  return db('Posts')
    .insert(post)
    .then(([id]) => id)
}

// updates a post with new data
function updatePost(id, post, db = connection) {
  post = stringifyParagraphs(post)
  post = utils.convertKeysCamelCaseToSnakeCase(post)

  return db('Posts').update(post).where('id', id)
}

// deletes a post depending on selection
function deletePost(id, db = connection) {
  return db('Posts').where('id', id).delete()
}

// grabs comments based on postId
function getPostComments(postId) {
  return db('Comments')
    .where('post_id', postId)
    .then((comments) => comments.map(utils.convertKeysSnakeCaseToCamelCase))
}

// makes new comment and shows all the new comments
// for that post
function createComment(comment) {
  comment.datePosted = new Date(Date.now())
  comment = utils.convertKeysCamelCaseToSnakeCase(comment)

  return db('Comments')
    .insert(comment)
    .then(([id]) => id)
}

// updates specific comment
function updateComment(comment) {
  comment = utils.convertKeysCamelCaseToSnakeCase(comment)

  return db('Comments').update(comment).where('id', comment.id)
}

// deletes selected comment
function deleteComment(id) {
  return db('Comments').where('id', id).delete()
}

// converts json object into json strings
function stringifyParagraphs(post) {
  post.paragraphs = JSON.stringify(post.paragraphs)

  return post
}

// takes json string and turns it into json obj/value
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
