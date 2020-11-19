import React, { Component } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import MoviePage from './pages/MoviePage';
import GenerePage from './pages/GenerePage';
import WatchlistPage from './pages/WatchlistPage';
import Navbar from './components/Navbar';
import PrivateRoute from './PrivateRoute';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<Navbar />
					<Switch>
						<Route exact path='/login' component={LoginRegister} />
						<PrivateRoute>
							<Route exact path='/' component={Home} />
							<Route exact path='/genres/:id' component={GenerePage} />
							<Route exact path='/movie/:id' component={MoviePage} />
							<Route exact path='/watchlist' component={WatchlistPage} />
						</PrivateRoute>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
