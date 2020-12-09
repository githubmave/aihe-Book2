const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/videodb')

// router.post('/', getTokenDecoder(), (req, res) => {

router.post('/', getTokenDecoder(), (req, res) => {
  const newVideo = req.body
  const user = req.user
  db.addVideo(newVideo, user)
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
