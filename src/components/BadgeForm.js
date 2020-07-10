import React from 'react';

class BadgeForm extends React.Component{

	handleChange = e => {
		let value=e.target.value;
		let name=e.target.name;
		console.log({name:name, value :value });
	};

	handleClick = e => {
		console.log("button was clicked");
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log("form was submitted");
	};

	render(){
		return	<div>
					<h1>New attendant</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label >First Name</label>
							<input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
						</div>
						<button onClick={this.handleClick} className="btn btn-primary">Save</button>
					</form>
				</div>
				;
	};
}

export default BadgeForm;