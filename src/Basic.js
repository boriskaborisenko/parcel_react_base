import React from 'react';




class Basic extends React.Component{
	
	constructor(){
		super();
		this.variable = 'Dude';
		
		
	}
	
	render(){
		return(
			<div>
				<h1>React + Parcel</h1>
				<div>{this.props.name} {this.variable}</div>
			</div>
			
		)
	}
	
}


export default Basic;