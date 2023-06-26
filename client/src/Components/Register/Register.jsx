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


function Register () {

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
				<form action="" method="post" onSubmit={handleSubmit} className='form grid'>
					<div className="inputDiv">
						<label htmlFor="email">Email</label>
						<div className="input flex">
						<MdMarkEmailRead className='icon'/>
						<input type="email" name="email" id="email" placeholder='Enter Email'
						value={email}
						onChange={e => setEmail(e.target.value)}/>
						</div>
					</div>
					<div className="inputDiv">
						<label htmlFor="username">Username</label>
						<div className="input flex">
						<FaUserShield className='icon'/>
						<input type="text" name="username" id="username" placeholder='Enter Username'
						value={username}
						onChange={e => setUserName(e.target.value)}/>
						</div>
					</div>
					<div className="inputDiv">
						<label htmlFor="password">Password</label>
						<div className="input flex">
						<BsFillShieldLockFill className='icon'/>
						<input type="password" name="password" id="password" placeholder='Enter Password'
						value={password}
						onChange={e => setPassword(e.target.value)}/>
						</div>
					</div>
					<button type="submit" value="Login" className='btn flex'>
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