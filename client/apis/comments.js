
import request from 'superagent'

export function getAllComments (postId) {
  return request
    .get(`/api/v1/posts/${postId}/comments`)
    .then(res => {
      NoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('GET', '/api/v1/posts/:id/comments'))
}

export function addCommentByForumPost (postId, comment) {
  return request
    .post(`/api/v1/posts/${postId}/comments`)
    .send(comment)
    .then(res => {
      NoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('POST', '/api/v1/posts/:id/comments'))
}

export function updateComment (comment) {
  return request
    .patch(`/api/v1/comments/${comment.id}`)
    .send(comment)
    .then(res => {
      NoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('PATCH', '/api/v1/comments/:id'))
}

export function deleteComment (commentId) {
  return request
    .del(`/api/v1/comments/${commentId}`)
    .then(res => res)
    .catch(errorHandler('DELETE', '/api/v1/comments/:id'))
}

function NoSnakeCase (response) {
  const hasSnakeCase = Object.keys(response).some(key => key.includes('_'))
  if (hasSnakeCase) {
    throw Error('Error: you should not be returning properties in snake_case')
  }
}