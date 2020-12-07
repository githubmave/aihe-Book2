import request from 'superagent'
// c - I would delete the crud mnemonic after you are done with it
export function postVideo (title, link) {
  return request
    .post('/api/v1/videos')
    .send({ title, link })
    .then((response) => response.body)
    .catch(logError)
}
// r
export function fetchVideos () {
  return request
    .get('/api/v1/videos')
    .then((res) => {
      return res.body
    })
}
// u
export function patchVideo (id, patchInfo) {
  return request
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
