import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import './styles/Badges.css';

// Imgs
import confLogo from '../images/badge-header.svg';

// Components
import BadgesLists from '../components/BadgesLists';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

// Files
import API from '../api'; 


class Badges extends React.Component{
 
	constructor(props){
		super(props); 

		this.state= { 
			loading: true,
			error: null,
			data : undefined,
		}; 
	};

	componentDidMount(){ 
		this.fetchData()
	};

	async fetchData(){
		this.setState({loading:true, error:null})
		try{
			const data=await API.badges.list();
			this.setState({loading:false, data:data}); 
		}catch(error){
			this.setState({loading:false, error:error}); 
		}
	};

	componentDidUpdate(prevProps, prevState){ 
	}

	componentWillUnmount(){
	}
 

	render(){
		if (this.state.loading===true){
			return <PageLoading />;
		}

		if (this.state.error){
			return 	<PageError error={this.state.error}/>
					;
		}
		return 	<React.Fragment>
					<div className="Badges">
						<div className="Badges__hero">
							<div className="Badges__container">
								<img src={confLogo} className="Badges_conf-logo"  alt="conf logo"/>
							</div>
						</div>
					</div>

					<div className="Badges__container">
						<div className="Badges__buttons">
							<Link to="/badges/new" className="btn btn-primary">
								New Badge
							</Link>
						</div>
					</div> 
					
					<div className="Badges__list">
						<div className="Badges__container"> 
							<BadgesLists badges={this.state.data} /> 
						</div>
					</div>


				</React.Fragment>
				;
	}
}

export default Badges;