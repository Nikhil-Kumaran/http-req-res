const express = require('express')

const fs = require('fs')
const path = require('path')

const usersPath = path.join(__dirname, '..', '..', 'data', 'users.json')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send('BaseURL for all the GET routes')
})

router.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersPath))
  res.status(200).send(users)
})

router.get('/users/:id', (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersPath))
  const user = users.find(user => user.id === parseInt(req.params.id))

  if (!user) {
    return res.status(404).end()
  }
  res.status(200).send(user)
})

router.get('/*', (req, res) => {
  res.status(404).send()
})

module.exports = router
