const express = require('express')

const db = require('../db/videodb')

const router = express.Router()

router.get('/', (req, res) => {
  db.getVideos()
    .then(videoList=> {
      console.log(videoList)
      res.json(videoList)
     // res.json({"name":"JV video"})
     
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Video playing went wrong' })
    })
})

module.exports = router
