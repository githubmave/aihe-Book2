const express = require('express')
const db = require('../db/forum')

const router = express.Router()

router.patch('/:id', (req,res) => {
  const id = req.params.id

  const comment = {
    id: id,
    comment: req.body.comment
  }

  db.updateComment(comment)
  .then(count => {
    res.json(comment)
  })
})

router.delete('/:id', (req,res) => {
  const id = req.params.id

  db.deleteComment(id)
  .then(() => {
    res.sendStatus(200)
  })
})


module.exports = router