// Our dependencies
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// Run the server

app.listen(3002, ()=>{
	console.log('Server is running on port 3002')
})

// Creating our database(mysql)
 const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: '',
	database: 'cryptodb',
 })

// Create route to the server that will register a new user

app.post('/register', (req, res) =>{
	// wen need to get variables sent from the form

})