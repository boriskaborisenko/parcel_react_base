import React,{Component} from 'react';
import { connect } from 'react-redux';




class Basic extends Component{
	addItem() {
	this.props.onAddItem(this.trackInput.value);
	this.trackInput.value = '';
	}
	
	render(){
		console.log(this.props.testStore)
		return(
			<div>
				<h2>Parcel. React + Redux</h2>
				<input type="text" ref={(input) => {this.trackInput = input}}/>
				<button onClick={this.addItem.bind(this)}>Add Item</button>
				<div>
					{this.props.testStore.map((item, i) => <li key={i}>{item}</li>)}
				</div>
				
			</div>
			
		)
	}
	
}


export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({
		onAddItem:  (itemName) => {
			dispatch({type: 'ADD_ITEM', payload: itemName})
		}
	})
)(Basic);