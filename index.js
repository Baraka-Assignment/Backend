const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries/users')
// initilize app
const app = express()
const port = 8080

// read and write proper json format
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// allow cross origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// inital base route
app.get('/', (request, response) => {
    response.json({ info: 'Baraka Dashboard API' })
})

// initlize user routes
app.post('/users', db.createUser)
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.put('/users/:id/:firstname/:lastname', db.updateUser)
app.delete('/users/:id', db.deleteUser)

// start app
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
    console.log(`localhost:${port}/`)
})