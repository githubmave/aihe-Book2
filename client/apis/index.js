import { response } from 'express'
import request from 'superagent'

// c 
export function postVideo(title, link) {
  console.log(title)
  console.log(link)
  return request
    .post('/api/v1/videos')
    .send({ title, link })
    .then((response) => response.body)
}
// r
export function getVideos() {
  return request.get('/api/v1/videos').then((response) => response.body)
}
// u
export function patchVideo(id, patchInfo) {
  return request
    .patch('/api/v1/videos/' + id)
    .send(patchInfo)
    .then((response) => response.body)
}
// d
export function deleteVideo(id) {}
