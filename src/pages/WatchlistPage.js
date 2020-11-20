import React, { useContext, useState, useEffect } from 'react';
import MoviesFilter from '../components/MoviesFilter';
import { NetflixContext } from '../context';
import { firestore } from '../firebase';

const WatchlistPage = (props) => {
	const userId = props.match.params.id;
	const [ watchlistMovies, setWatchlistMovies ] = useState();

	const { sortMovies, filter } = useContext(NetflixContext);
	const { search, year } = filter;

	const getMovies = () => {
		firestore.doc(`watchlist/${userId}`).get().then((docs) => {
			const movies = [];
			docs.data().movies.map((item) => {
				movies.push(item);
			});

			setWatchlistMovies(movies);
		});
	};

	useEffect(() => {
		getMovies();
		console.log(sortMovies(watchlistMovies, search, year));
		return () => {};
	}, []);

	// console.log(watchlistMovies);

	// const sortedMovies = sortMovies(watchlistMovies, search, year);
	console.log();

	return (
		<div>
			<div className='info d-flex justify-content-between mx-5 '>
				<h1 className='text-capitalize my-3   '>genere 1</h1>
				<MoviesFilter filter={filter} />
			</div>
		</div>
	);
};

export default WatchlistPage;
