const express = require('express')
const path = require('path')

const getRoutes = require('./routes/GET')
const headRoutes = require('./routes/HEAD')
const postRoutes = require('./routes/POST')
const putRoutes = require('./routes/PUT')
const patchRoutes = require('./routes/PATCH')

const app = express()
const port = process.env.PORT || '8000'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/get', getRoutes)
// app.use('/head',headRoutes)
app.use('/post', postRoutes)
// app.use('/put',putRoutes)
// app.use('/patch',patchRoutes)

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Welcome: The is the baseURL for awesome set of API end points')
})

app.listen(port, () => {
  console.log(`Listening to requests on PORT: ${port}`)
})
