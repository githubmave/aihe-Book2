import request from 'superagent'

import { getAuthorizationHeader } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }
// c
export function postVideo (newVideo) {
  return request
    .post('/api/v1/videos')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send({
      video_name: newVideo.video_name,
      video_link: newVideo.video_link,
      video_category: newVideo.video_category
    })
    .then((response) => response.body)
    .catch(logError)
}
// r
export function fetchVideos () {
  return request
    .get('/api/v1/videos')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
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
    throw new Error('Only the user who added the video may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/videos.js):',
      err.message
    )
    throw err
  }
}
