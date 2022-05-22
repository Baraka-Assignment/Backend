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

// start app
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
    console.log(`localhost:${port}/`)
})