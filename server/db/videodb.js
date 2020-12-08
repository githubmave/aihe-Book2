const connection = require('./connection')

function findVideo (id, db = connection) {
  return db('videos').where({ id }).select().first()
}

// c
//function addVideo (title, link, db = connection) {
  function addVideo (newVideo, db = connection) {
    return db('videos')
    .insert(newVideo)
    .then((ids) => {
      return findVideo(ids[0], db)

      // return db('videoCats')
      // .insert(newVideo.cat_id)
    })
}

// r
function getVideos (db = connection) {
  return db('videos').select()
}

// u
function updateVideos () {}

// d
function deleteVideos () {}

module.exports = {
  findVideo,
  addVideo,
  getVideos,
  updateVideos,
  deleteVideos
}
