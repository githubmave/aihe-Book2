
import request from 'superagent'

export function getCommentsByPostId (postId) {
  return request.get(`/v1/posts/${postId}/comments`)
    .then(res => {
      validateNoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('GET', '/v1/posts/:id/comments'))
}

export function addCommentByPostId (postId, comment) {
  return request.post(`/v1/posts/${postId}/comments`)
    .send(comment)
    .then(res => {
      validateNoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('POST', '/v1/posts/:id/comments'))
}

export function updateComment (comment) {
  return request.patch(`/v1/comments/${comment.id}`)
    .send(comment)
    .then(res => {
      validateNoSnakeCase(res.body)
      return res.body
    })
    .catch(errorHandler('PATCH', '/v1/comments/:id'))
}

export function deleteComment (commentId) {
  return request.del(`/v1/comments/${commentId}`)
    .then(res => res)
    .catch(errorHandler('DELETE', '/v1/comments/:id'))
}