const express = require('express')
const router = express.Router()

const db = require('../db/videodb')

router.post('/', (req, res) => {
  db.addVideo(req.body.title, req.body.link)
    .then((video) => res.status(201).json(video))
    .catch(() => res.sendStatus(500))
})

