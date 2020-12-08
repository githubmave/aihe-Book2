import request from 'superagent'
// c
export function postVideo (newVideo) {
  return request
    .post('/api/v1/videos')
    .send({ video_name: newVideo.video_name, 
            video_link: newVideo.video_link, video_category: newVideo.video_category})
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
