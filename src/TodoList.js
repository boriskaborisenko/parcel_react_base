import React, {Component} from 'react';
import TodoItem from './TodoItem';





class TodoList extends Component{
	
	
	
	
	render(){
		
		return(
			<div>
				<ul>
					{this.props.testStore}
				</ul>	
				<button>Add Item</button>
			</div>
			
		);
	}
	
	

}






export default (TodoList);