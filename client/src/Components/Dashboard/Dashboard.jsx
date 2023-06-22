import React from 'react'
import '../../App.css'

const Dashboard = () => {
  return (
	<div className="dashboard_container">
		<div className="dashboard_wrapper">
			<h1 className="dashboard_title">This is Dashboard page</h1>
			<br />
			<a className="Logout" href="/"><p>Log Out</p></a>
		</div>
	</div>
  )
}

export default Dashboard