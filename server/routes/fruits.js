const express = require('express')

const db = require('../db/fruits')

const router = express.Router()
console.log("fruit route getFruits:", "fruits")
router.get('/', (req, res) => {
  console.log("fruit route getFruits:", "fruits2")
  db.getFruits()
    .then(results => {
      //console.log("fruit route getFruits:", results)
      res.json({ fruits: results.map(fruit => fruit.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
