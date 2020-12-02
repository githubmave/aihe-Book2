import { response } from 'express'
import request from 'superagent'

// postVideo will tell send the title and link to the database 
// the data should pickup the what the user entered as these 
// parameters.
export function postVideo(title, link){
    console.log(title)
    console.log(link)
    return request
    .post('/api/v1/videos')
    .send({title, link})
    .then(response => response.body)
}

export function getVideos(){
    return request
    .get('/api/v1/videos')
    .then(response=>response.body)
}

export function patchVideo(id, patchInfo){
    return request
    .patch('/api/v1/videos/'+id)
    .send(patchInfo)
    .then(response => response.body)
}

export function deleteVideo(id){
    
}