const express = require('express')

const users = require('../../data/users')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send('BaseURL for all the GET routes')
})

router.get('/users', (req, res) => {
  res.status(200).send(users)
})

router.get('/users/:id', (req, res) => {
  const user = users.filter(user => user.id === parseInt(req.params.id))
  if (user.length === 0) {
    res.status(404).send()
  }
  res.status(200).send(user[0])
})

router.get('/*', (req, res) => {
  res.status(404).send()
})

module.exports = router
