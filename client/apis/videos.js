import request from 'superagent'

const rootUrl = '/api/v1/videos'

export function fetchVideos() {
  console.log('api get video 1')
  return request.get('/api/v1/videos').then((res) => {
    console.log('api get video 2', res.body)
    return res.body
  })
}
