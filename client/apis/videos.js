import request from 'superagent'

const rootUrl = '/api/v1/videos'

export default function fetchVideos(){

    return request 
      
      .get('/api/v1/videos')
      .then( res => {
          console.log("api get video",res.body)
           return res.body
      })
}