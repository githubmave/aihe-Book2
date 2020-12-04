const express = require('express')
const router = express.Router()

const db = require('../db/videodb')

router.post('/', (req, res) => {
  db.addVideo(req.body.title, req.body.link)
    .then((video) => res.status(201).json(video))
    .catch(() => res.sendStatus(500))
})

router.get('/', (req, res) => {
  db.getVideos()
    .then((videoList) => {
      console.log(videoList)
      res.json(videoList)
      // res.json({"name":"JV video"})
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Video playing went wrong' })
    })
})

module.exports = router
