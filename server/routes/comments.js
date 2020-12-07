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

// router.get('/:postId/comments', (req, res) => {
//   const postId = req.params.postId

//   db.getPostComments(postId)
//     .then(comments => {
//       res.json(comments)
//     })
// })

// router.patch('/:postId/comments', (req, res) => {
//   const postId = req.params.postId

//   const comment = {
//     comment: req.body.comment,
//     post_id: postId
//   }

//   db.createComment(comment)
//     .then(id => {
//       res.json({
//         id: id,
//         postId: postId,
//         comment: req.body.comment
//       })
//     })
// })

module.exports = router