import React from 'react';
import {Link} from 'react-router-dom';

import './styles/BadgesList.css';

import Gravatar from './Gravatar';

class BadgesList extends React.Component{
	render(){
		if (this.props.badges.length===0){
			return 	<React.Fragment>
						<h3>No hay badges</h3>
						<Link to="/badges/new" className="btn btn-primary">Add</Link>
					</React.Fragment>
					;
		}
		return 	<ul className="list-unstyled BadgesList">
					{this.props.badges.map((badge)=>{
					   return(
					   		<Link key={badge.id} to={'/badges/'+badge.id+'/edit'} className="text-reset text-decoration-none">
								<li  className="BadgesListItem">
								 <Gravatar className="BadgesListItem__avatar" email={badge.email}/>
								 <div>
								    <div><strong>{badge.firstName} {badge.lastName}</strong></div>
								    <div className="Twitter__name">
								       <a href={"https://twitter.com/"+badge.twitter}>
								       		<i className="fa fa-twitter"></i>@{badge.twitter}
								       	</a>
								    </div>
								    <div>{badge.jobTitle}</div>
								 </div>
								</li>
							</Link>
					   )
					})}
				</ul> 
				;	
	}
}

export default BadgesList;