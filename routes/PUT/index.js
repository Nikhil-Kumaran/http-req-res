const express = require('express')

const fs = require('fs')
const path = require('path')

const usersPath = path.join(__dirname, '..', '..', 'data', 'users.json')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send('BaseURL for all the PUT routes')
})

router.put('/users/update/:id', (req, res) => {
  let users = JSON.parse(fs.readFileSync(usersPath))
  let index = -1
  let user = users.find((user, idx) => {
    index = idx
    return user.id === parseInt(req.params.id)
  })
  if (!user) {
    return res.status(404).end()
  }
  const updatedUser = Object.assign({}, user, req.body)
  users[index] = updatedUser
  fs.writeFileSync(usersPath, JSON.stringify(users))
  res.status(201).send(updatedUser)
})

router.get('/*', (req, res) => {
  res.status(404).send()
})

module.exports = router
