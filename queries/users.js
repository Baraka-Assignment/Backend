const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

// update users, given ID
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const firstName = request.params.firstname
    const lastName = request.params.lastname
      
    pool.query(
      'UPDATE users SET firstname = $1, lastname = $2 WHERE id = $3',
      [firstName, lastName, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
}
  

  module.exports = {
    getUsers,
    updateUser,
  }