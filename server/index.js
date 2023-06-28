// Our dependencies
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require('bcrypt');
const saltRound = 10;

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3002",
        methods: "GET, POST",
        credentials: true,
	})
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use (
    session ({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

// Creating our database(mysql)
const db = mysql.createConnection({
	user: 'root',
	host: '127.0.0.1',
	password: 'root',
	database: 'cryptodb',
	port: 8889
});

console.log('Connection to database ok')

//Register
app.post('/register', (req, res)=> {
	const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password,saltRound, (err, hash) => {
    if (err) {
            console.log(err)
        }
        db.execute(
            "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
            [email,username, hash],
            (err, result)=> {
                console.log(err);
            }
        );
    })
});

//login
app.get("/", (req, res) => {
	if (req.session.user) {
	  res.send({ loggedIn: true, user: req.session.user });
	} else {
	  res.send({ loggedIn: false });
	}
  });

  app.post('/', (req, res) => {
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;

	db.execute(
		   "SELECT * FROM users WHERE username = ?;",
		   [email, username],
		   (err, result)=> {
			   if (err) {
				   res.send({err: err});
			   }
			   if (result.length > 0) {
				   bcrypt.compare(password, result[0].password, (error, response) => {
					   if (response) {
						   req.session.user = result;
						   console.log(req.session.user);
						   res.send(result);
					   } else{
						   res.send({message: "Wrong username/ password comination!"});
					   }
				   });
			   } else {
				   res.send({ message: "User doesn't exists"});
			   }
		   }
	   );
   });


// Run the server
app.listen(3002, () => {
	console.log('Server is running on port 3002')
});
