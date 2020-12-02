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

