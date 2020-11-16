import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import MoviePage from './pages/MoviePage';
import GenerePage from './pages/GenerePage';
import WatchlistPage from './pages/WatchlistPage';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Route>
				<Navbar />
			</Route>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Router exact path='/login'>
					<LoginRegister />
				</Router>
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
}

export default App;
