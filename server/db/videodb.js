const connection = require('./connection')

function findVideo (id, db = connection) {
  return db('videos').where({ id }).select().first()
}

function addVideo (newVideo, db = connection) {
  return db('videos')
    .insert(newVideo)
    .then((ids) => {
      return findVideo(ids[0], db)
    })
}

function getVideos (db = connection) {
  return db('videos').select()
}


module.exports = {
  findVideo,
  addVideo,
  getVideos
}
