const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries/users')
// initilize app
const app = express()
const port = 8080

// inital base route
app.get('/', (request, response) => {
    response.json({ info: 'Baraka Dashboard API' })
})

// initlize user routes
app.get('/users', db.getUsers)

// start app
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
    console.log(`localhost:${port}/`)
})