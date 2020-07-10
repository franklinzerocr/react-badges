// eslint-disable-next-line 
import React from 'react';
import ReactDOM from 'react-dom';

// import Badge from './components/badge.js';
import BadgeNew from './pages/BadgeNew';
 
const container = document.querySelector('#app');

/*ReactDOM.render(
	<Badge 
		firstName="Franklin" 
		lastName="Noriega" 
		jobTitle="Kickass Web Developer" 
		twitter="franklinzerocr" 
		avatarUrl="https://www.gravatar.com/avatar" 
	/>,container
);*/

ReactDOM.render(<BadgeNew/>,container);
