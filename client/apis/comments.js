import request from 'superagent'

export function getAllComments (postId) {
  return request
    .get(`/api/v1/posts/${postId}/comments`)
    .then(res => {
      NoSnakeCase(res.body)
      return res.body
    })
}
// this is breaking the addComment
// this is the client api
export function addCommentByForumPost (postId, comment) {
  console.log(postId, comment)
  // the postId is the id from the post seed file
  // is this the right route to be hitting?
  return request
    .post(`/api/v1/posts/${postId}/comments`)
    .send({ postId, comment })
    .then(res => {
      NoSnakeCase(res.body)
      return res.body
    })
}

export function updateComment (comment) {
  return request
    .patch(`/api/v1/comments/${comment.id}`)
    .send(comment)
    .then(res => {
      NoSnakeCase(res.body)
      return res.body
    })
}

export function deleteComment (commentId) {
  return request
    .del(`/api/v1/comments/${commentId}`)
    .then(res => res)
}

function NoSnakeCase (response) {
  const hasSnakeCase = Object.keys(response).some(key => key.includes('_'))
  if (hasSnakeCase) {
    throw Error('Error: you should not be returning properties in snake_case')
  }
}
