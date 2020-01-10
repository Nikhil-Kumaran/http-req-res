const express = require('express')

const fs = require('fs')
const path = require('path')

const usersPath = path.join(__dirname, '..', '..', 'data', 'users.json')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send('BaseURL for all the POST routes')
})

router.post('/users/add', (req, res) => {
  let users = JSON.parse(fs.readFileSync(usersPath))
  const id = users.length + 1
  const newUser = {
    id,
    ...req.body,
  }
  users.push(newUser)
  fs.writeFileSync(usersPath, JSON.stringify(users))
  res.status(201).send(newUser)
})

router.get('/*', (req, res) => {
  res.status(404).send()
})

module.exports = router
