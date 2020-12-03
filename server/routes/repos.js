const express = require('express')
const router = express.Router()

const db = require('../db/connection')

router.get('/', (req, res) => {
  db.listRepos()
  .then(repos => {
    res.json(repos)
    return null
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

module.exports = router