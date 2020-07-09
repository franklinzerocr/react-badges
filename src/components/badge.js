import React from 'react';

import confLogo from '../images/badge-header.svg'


class Badge extends React.Component{
	render(){
		return <div>
					<header>
						<img src={confLogo} alt="Logo"/>
					</header>
					<div>
						<img src="https://www.gravatar.com/avatar?d=franklinzerocr" alt="Avatar" />
						<h1>Franklin<br />Noriega</h1>
					</div>
					<footer>
						<p>Web Developer</p>
						<p>@Franklinzerocr</p>
						<p>#Platziconf</p>
					</footer>
				</div>
				;
	}
}


export default Badge;