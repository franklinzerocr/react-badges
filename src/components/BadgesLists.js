import React from 'react';
import {Link} from 'react-router-dom';

import './styles/BadgesList.css';

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
					      <li key={badge.id} className="BadgesListItem">
					         <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar"/>
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
					   )
					})}
				</ul> 
				;	
	}
}

export default BadgesList;