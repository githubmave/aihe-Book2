const express = require('express')

const db = require('../db/forum')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPosts()
    .then(posts => {
      res.json(posts)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  db.getPost(id)
    .then(post => {
      res.json(post)
    })
})

router.post('/', (req, res) => {
  const post = {
    title: req.body.title,
    paragraphs: req.body.paragraphs
  }

  db.createPost(post)
    .then(id => db.getPost(id))
    .then(post => {
      res.json(post)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id

  const post = {
    title: req.body.title,
    paragraphs: req.body.paragraphs
  }

  db.updatePost(id, post)
    .then(() => db.getPost(id))
    .then(post => {
      res.json(post)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  db.deletePost(id)
    .then(() => {
      res.sendStatus(200)
    })
})

router.get('/:postId/comments', (req, res) => {
  const postId = req.params.postId

  db.getPostComments(postId)
    .then(comments => {
      res.json(comments)
    })
})

router.patch('/:postId/comments', (req, res) => {
  const postId = req.params.postId

  const comment = {
    comment: req.body.comment,
    post_id: postId
  }

  db.createComment(comment)
    .then(id => {
      res.json({
        id: id,
        postId: postId,
        comment: req.body.comment
      })
    })
})

module.exports = router
