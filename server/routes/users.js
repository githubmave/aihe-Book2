/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/users')

router.get('/', getTokenDecoder(), async (req, res) => {
  try {
    const users = await db.getUsers()
    res.json(users)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.patch('/', getTokenDecoder(), async (req, res) => {
  try {
    const newUser = req.body
    const id = req.user.id
    db.addUserDetails(id, newUser)
      .then(newUser => {
        res.status(201).json(newUser)
      })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/current', getTokenDecoder(), async (req, res) => {
  try {
    const id = req.user.id
    const user = await db.findUser(id)
    delete user.hash
    res.json(user)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.patch('/current', getTokenDecoder(), async (req, res) => {
  try {
    const updatedUser = req.body
    const id = req.user.id
    db.editUser(id, updatedUser)
      .then(updatedUser => {
        res.status(201).json(updatedUser)
      })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
