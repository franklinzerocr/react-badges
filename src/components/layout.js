import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css';
import './styles/Global.css';

import Navbar from './navbar';

function Layout (props){
	return 	<React.Fragment>
				<Navbar />
				{props.children}
			</React.Fragment>
			;
}

export default Layout;