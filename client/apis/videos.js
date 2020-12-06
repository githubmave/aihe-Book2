import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const acceptJsonHeader = { Accept: 'application/json' }

// c
export function postVideo (title, link) {
  return request
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .post('/api/v1/videos')
    .send({ title, link })
    .then((response) => response.body)
    .catch(logError)
}
// r
export function fetchVideos () {
  return request
    .set(acceptJsonHeader)
    .get('/api/v1/videos')
    .then((res) => {
      return res.body
    })
}
// u
export function patchVideo (id, patchInfo) {
  return request
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .patch('/api/v1/videos/' + id)
    .send(patchInfo)
    .then((response) => response.body)
}
// d
export function deleteVideo (id) {}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the fruit may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}
