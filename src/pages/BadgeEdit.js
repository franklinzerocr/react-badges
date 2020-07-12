import React from 'react';

import './styles/BadgeEdit.css';

import header from '../images/platziconf-logo.svg';

import Badge from '../components/badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';

import API from '../api';

class BadgeEdit extends React.Component{

	state = {
		loading: false,
		error: null, 
		form : {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: ""
		} 	
	};

	componentDidMount(){
		this.fetchData();
	};

	async fetchData(e){
		this.setState({loading: true, error:null})
		try{
			const data= await API.badges.read(this.props.match.params.badgeId)
			this.setState({loading:false,form: data})
			// this.props.history.push('/badges');
		}catch(error){
			this.setState({loading:false,error})
		}
	}

	handleChange = e => {
		this.setState({
			form:{ 
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		this.setState({loading : true, error: null })

		try{
			await API.badges.update(this.props.match.params.badgeId,this.state.form)
			this.setState({loading : false, error: null })
			this.props.history.push('/badges');
		}catch(error){
			this.setState({loading : false, error: error })
		}

	}

	render(){
		if (this.state.loading){
			return <PageLoading />
		}
		return	<React.Fragment> 
					<div className="BadgeEdit__hero my-auto text-center">
						<img className="img-fluid badge_hero-image" src={header} alt="header"/>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-6 my-auto text-center">
								<Badge 
									firstName={this.state.form.firstName || 'firstName'} 
									lastName={this.state.form.lastName || 'lastName'} 
									jobTitle={this.state.form.jobTitle || 'jobTitle'}
									twitter={this.state.form.twitter || 'twitter'}
									email={this.state.form.email || 'franklin@roisdigital.com'}
									// {... this.state.form }
									avatarUrl="https://www.gravatar.com/avatar" 
								/>
							</div>
							<div className="col-6">
								<BadgeForm 
									onSubmit={this.handleSubmit} 
									onChange={this.handleChange} 
									formValues={this.state.form}
									error={this.state.error}  
									title="Edit"
								/>
							</div>
						</div>
					</div>
				</React.Fragment>
				;	
	}
}

export default BadgeEdit;