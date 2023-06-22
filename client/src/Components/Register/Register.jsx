/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import '../../App.css'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Import our assets
import video from '../../LoginAssets/video bitcoin.mp4'
import logo from '../../LoginAssets/logo.png'

// Imported Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'


const Register = () => {

	const [state, setState] = useState({
		email: "",
		username: "",
		password: ""
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setState({
		...state,
		[e.target.name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
		email: state.email,
		username: state.username,
		password: state.password
		};

		axios.post("http://localhost:3002/register", userData).then((response) => {
		console.log(response.status, response.data);
	});


	// const [email, setEmail] = useState('')
	// const [userName, setUserName] = useState('')
	// const [password, setPassword] = useState('')

	// React.useEffect(() => {
	// 	axios.get(`${baseURL}/register`).then((response) => {
	// 	setPost(response.data);
	// 	});
	// }, []);

	// // Onclick let us get  what user has entered

	// function createUser() {
	// 	// We shall require Axios to create an API that connects to the server
	// 	axios.post(baseURL, {
	// 		// create variable to send to the server through the route
	// 		Email: email,
	// 		UserName: userName,
	// 		Password: password
	// 	})
	// 	.then((response) => {
	// 		setPost(response.data);
	// 		console.log('User has been created')
	// 	});
	}

  return (
	<div className='registerPage flex'>
		<div className='container flex'>
			<div className="videoDiv">
				<video src={video} autoPlay muted loop></video>
				<div className="textDiv">
					<h2 className="title">Create And Sell products</h2>
					<p>Adopt the peace...</p>
				</div>
				<div className="footerDiv flex">
					<span  className="text">have an account?</span>
					<Link to={'/'}>
						<button className='btn'>Login</button>
					</Link>
				</div>
			</div>
			<div className="formDiv flex">
				<div className="headerDiv">
					<img src={logo} alt="Logo Image"/>
					<h3>REGISTER</h3>
				</div>
				<form onSubmit={handleSubmit} className='form grid'>
					<div className="inputDiv">
						<label htmlFor="email">Email</label>
						<div className="input flex">
						<MdMarkEmailRead className='icon'/>
						<input type="email" name="email" id="email" placeholder='Enter Email'
						value={state.email}
						onChange={handleChange}/>
						</div>
					</div>
					<div className="inputDiv">
						<label htmlFor="username">Username</label>
						<div className="input flex">
						<FaUserShield className='icon'/>
						<input type="text" name="username" id="username" placeholder='Enter Username'
						value={state.username}
						onChange={handleChange}/>
						</div>
					</div>
					<div className="inputDiv">
						<label htmlFor="password">Password</label>
						<div className="input flex">
						<BsFillShieldLockFill className='icon'/>
						<input type="password" name="password" id="password" placeholder='Enter Password'
						value={state.password}
						onChange={handleChange}/>
						</div>
					</div>
					<button type="submit" className='btn flex'>
						<span>Register</span>
						<AiOutlineSwapRight className='icon' />
					</button>

					<span className='forgotPassword'>Forgot your Password?<a href="">Click here</a></span>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Register