import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './Basic';
import './scss/main.scss';

import { Provider } from 'react-redux';
import { createStore } from 'redux';



const initialState = [
	'Item one', 'item two'
];

function items(state = initialState, action) {
	if(action.type === 'ADD_ITEM'){
		return [
			...state,
			action.payload
		]
	}
	return state;
}

const store = createStore(items);

ReactDOM.render(
<Provider store={store}>
	<Basic name="test"/>	
</Provider>

,document.getElementById('root'));