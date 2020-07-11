import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Badges.css';

import astronauts from '../images/astronauts.svg';
import confLogo from '../images/platziconf-logo.svg';



function Home(){
	return <div className="Badges__hero home_hero ">
				<div className="row h-100 ">
					<div className="col-6 my-auto text-center">
						<img className="img-fluid" src={confLogo} alt="conf logo" />
						<div className="row">
							<div className="col-12 mt-3 text-center">
								<p className="white "><u>Print you Platzi Badges</u></p>
								<Link to="/badges" className="btn btn-primary">Start</Link>
							</div>
						</div>
					</div>
					<div className="col-6 my-auto">
						<img className="img-fluid" src={astronauts} alt="astronauts" />
					</div>
				</div> 
			</div>
			;
}

export default Home;