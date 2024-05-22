const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// GET: / | displayHome()
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

// GET: /users | getUsers()
app.get('/users', db.getUsers)
// GET: /users/:id | getUserById()
app.get('/users/:id', db.getUserById)
// POST: /users | createUser()
app.post('/users', db.createUser)
// PUT: /users/:id | updateUser()
app.put('/users/:id', db.updateUser)
// DELETE: /users/:id | deleteUser()
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})