import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import homepage from './components/Homepage/homepage';
class App extends Component {
	render() {
		return (
			<div className='App'>
				<Route path='/' exact component={homepage} />
			</div>
		);
	}
}

export default App;
