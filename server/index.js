// Our dependencies
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json())
app.use(cors())

// Run the server
app.listen(3002, ()=>{
	console.log('Server is running on port 3002')
})

// Creating our database(mysql)
 const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: 'root',
	database: 'cryptodb',
	port: 8889,
 })
 console.log('Connection to database ok')

// Create route to the server that will register a new user
app.post('/register', (req, res)=>{
	// We need to get variables sent from the form
	const sentEmail = req.body.Email
	const sentUserName = req.body.UserName
	const sentPassword = req.body.Password
	// Lets create SQL statement to insert the user data to the database table users
	const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'
	// We are going to enter these values through a variable
	const Values = [sentEmail, sentUserName, sentPassword]

	console.log('Values', Values)

	// Query to execute the sql statement stated above
	db.query(SQL, Values, (err, results)=>{
		if(err){
			res.send(err)
		} else {
			console.log('User inserted successfully!')
			res.send({message: 'User added!'})
		}
	})
})