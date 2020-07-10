import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './styles/Navbar.css';
import logo from "../images/logo.svg"

class Navbar extends React.Component{
	render(){
		return	<div className="Navbar">
					<div className="container-fluid"></div>
					<a href="/" className="Navbar__brand">
						<img className="Navbar__brand-logo" src={logo} alt="logo"/>
						<span className="font-weight-light">Platzi</span>
						<span className="font-weight-bold">Conf</span>
					</a>
				</div>
				;	
	}
} 

export default Navbar;