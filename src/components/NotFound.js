import React from 'react';

import DeadLink from '../images/dead-link.jpg';

class NotFound extends React.Component{
	render(){
		return 	<div className="home_hero my-auto text-center ">
					<img className="img-fluid" src={DeadLink} alt="dead link" />
				</div>
				;
	}
}


export default NotFound;