import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/public.scss';

import Home from './pages/Home.jsx';

class App extends Component {
	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route path="/" component={ Home } exact />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;