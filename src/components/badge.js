import React from 'react';
 
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';


class Badge extends React.Component{
	render(){

		return <div className="badge">
					<header className="badge_header">
						<img src={confLogo} alt="Logo"/>
					</header>
					<div className="badge_section-name">
						<img className="badge_avatar" src={this.props.avatarUrl} alt="Avatar" />
						<h1>{this.props.firstName}<br />{this.props.lastName}</h1>
					</div>
					<div className="badge_section-info">
						<h3>{this.props.jobTitle}</h3>
						<div>@{this.props.twitter}</div>
					</div>
					<footer className="badge_footer">#Platziconf</footer> 
				</div>
				;
	}
}


export default Badge;