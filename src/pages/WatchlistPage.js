import React, { useContext } from 'react';
import MoviesFilter from '../components/MoviesFilter';
import { NetflixContext } from '../context';

const WatchlistPage = () => {
	const { sortMovies, filter } = useContext(NetflixContext);
	const { search, year } = filter;

	// const sortedMovies = sortMovies(movies, search, year);

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
