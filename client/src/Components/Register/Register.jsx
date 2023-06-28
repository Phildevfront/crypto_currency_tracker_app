/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import Axios from 'axios'
import '../../App.css'
import './Register.css'
import { Link } from 'react-router-dom'

// Import our assets
import video from '../../LoginAssets/video bitcoin.mp4'
import logo from '../../LoginAssets/logo.png'

// Imported Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'


function Register () {
const [emailReg, setemailReg] = useState("");
const [usernameReg, setUsernameReg] = useState("");
const [passwordReg, setPasswordReg] = useState ("");

const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState ("");



Axios.defaults.withCredentials = true;
const register = () => {
    Axios.post("http://localhost:5173/register", {
	email : emailReg,
    username: usernameReg,
    password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
 };

//  const login = () => {
//  Axios.post("http://localhost:3001/login", {
//     username: username,
//     password: password,
//  }).then((response) => {
//     if (!response.data.message) {
//        setLoginStatus( response.data.message);
//     } else {
//        setLoginStatus (response.data[0].message);
//     }
//  });
//  };

// useEffect(() => {
//     Axios.get("http://localhost:3002/login").then((response) => {
//       if (response.data.loggedIn == true) {
//         setRole(response.data.user[0].role);
//       }
//     });
//   }, []);

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
				<form action="" method="post" className='form grid'>
					<div className="inputDiv">
						<label htmlFor="email">Email</label>
						<div className="input flex">
						<MdMarkEmailRead className='icon'/>
						<input type="email" name="email" id="email" placeholder='Enter Email'
						onChange={e => setemailReg(e.target.value)}/>
						</div>
					</div>
					<div className="inputDiv">
						<label htmlFor="username">Username</label>
						<div className="input flex">
						<FaUserShield className='icon'/>
						<input type="text" name="username" id="username" placeholder='Enter Username'
						onChange={(e) => {
							setUsernameReg(e.target.value);
						}}
						/>
						</div>
					</div>
					<div className="inputDiv">
						<label htmlFor="password">Password</label>
						<div className="input flex">
						<BsFillShieldLockFill className='icon'/>
						<input type="password" name="password" id="password" placeholder='Enter Password'
						onChange={e => setPasswordReg(e.target.value)}/>
						</div>
					</div>
					<button type="submit" value="Login" className='btn flex' onClick={register}>
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