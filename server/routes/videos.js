const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/videodb')

router.post('/', getTokenDecoder(), (req, res) => {
  db.addVideo(req.body.title, req.body.link)
    .then((video) => res.status(201).json(video))
    .catch((err) => res.status(500).send(err.message))
})

router.get('/', (req, res) => {
  db.getVideos()
    // eslint-disable-next-line promise/always-return
    .then((videoList) => {
      res.json(videoList)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Video playing went wrong' })
    })
})

module.exports = router
