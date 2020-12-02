const connection = require('./connection')


// c 
function addVideos(){}

// r 
function getVideos(db=connection){
    return db('videos').select()
}

// u 
function updateVideos(){}

// d 
function deleteVideos(){}

module.exports = {
    addVideos,
    getVideos,
    updateVideos,
    deleteVideos
}