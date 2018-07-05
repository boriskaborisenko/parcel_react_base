import React from 'react';




class Basic extends React.Component{
	
	constructor(){
		super();
		
	}
	
	render(){
		return(
			<h1>React Parcel Component {this.props.name}</h1>
		)
	}
	
}


export default Basic;