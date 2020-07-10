import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';

import Navbar from '../components/navbar';
import Badge from '../components/badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{

	state = { form : {
		firstName: "",
		lastName: "",
		email: "",
		jobTitle: "",
		twitter: ""
	} };

	handleChange = e => {
		this.setState({
			form:{ 
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};

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
									firstName={this.state.form.firstName} 
									lastName={this.state.form.lastName} 
									jobTitle={this.state.form.jobTitle}
									twitter={this.state.form.twitter}
									// {... this.state.form }
									avatarUrl="https://www.gravatar.com/avatar" 
								/>
							</div>
							<div className="col-6">
								<BadgeForm onChange={this.handleChange} formValues={this.state.form} />
							</div>
						</div>
					</div>
				</div>
				;	
	}
}

export default BadgeNew;