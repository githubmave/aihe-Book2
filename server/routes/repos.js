const express = require('express')
const router = express.Router()

const db = require('../db/repos')

router.get('/', (req, res) => {
  db.listRepos()
    .then(repos => {
      return res.json(repos)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getRepoById(id)
    .then(repo => {
      return res.json(repo)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newRepo = req.body

  // console.log( "fr. router.post",req.body)
  db.addRepo(newRepo)
    .then(newRepo => {
      return res.json(newRepo)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
module.exports = router
