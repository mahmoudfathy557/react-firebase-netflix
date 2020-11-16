import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import MoviePage from './pages/MoviePage';
import GenerePage from './pages/GenerePage';
import WatchlistPage from './pages/WatchlistPage';
import Navbar from './components/Navbar';
const Application = () => {
	const user = null;
	return !user ? (
		<LoginRegister />
	) : (
		<Router>
			<Route>
				<Navbar />
			</Route>

			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route path='/generes/:genere'>
					<GenerePage />
				</Route>
				<Route path='/movie/:id'>
					<MoviePage />
				</Route>
				<Route path='/watchlist'>
					<WatchlistPage />
				</Route>
			</Switch>
		</Router>
	);
};

export default Application;
