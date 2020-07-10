import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';

import Navbar from '../components/navbar';
import Badge from '../components/badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
	render(){
		return	<div> 
					<Navbar/>
					<div className="BadgeNew__hero">
						<img className="img-fluid" src={header} alt="header"/>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-6">
								<Badge 
									firstName="F!" 
									lastName="El Magnifico" 
									jobTitle="Kickass Web Developer" 
									twitter="franklinzerocr" 
									avatarUrl="https://www.gravatar.com/avatar" 
								/>
							</div>
							<div className="col-6">
								<BadgeForm />
							</div>
						</div>
					</div>
				</div>
				;	
	}
}

export default BadgeNew;