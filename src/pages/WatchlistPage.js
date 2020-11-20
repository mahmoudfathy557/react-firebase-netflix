import React, { useContext, useState, useEffect } from 'react';
import MoviesFilter from '../components/MoviesFilter';
import { NetflixContext } from '../context';
import MovieCard from '../components/MovieCard';

const WatchlistPage = (props) => {
	const userId = props.match.params.id;

	const { sortMovies, filter, watchlistMovies } = useContext(NetflixContext);
	const { search, year } = filter;

	const sortedMovies = sortMovies(watchlistMovies, search, year);
	console.log(sortedMovies);

	return (
		<div>
			<div className='info d-flex justify-content-between mx-5 '>
				<h1 className='text-capitalize my-3 text-muted text-center  '>My Watchlist</h1>
				<MoviesFilter filter={filter} />
			</div>
			<div className='d-flex flex-wrap  ml-5 '>
				{sortedMovies &&
					sortedMovies.map((movie, id) => {
						const singleMovie = {
							title: movie.title,
							description: movie.storyline,
							img: movie.posterurl,
							genres: movie.genres,

							originalTitle: movie.originalTitle,
							year: movie.year,
						};

						return <MovieCard movie={singleMovie} key={id} />;
					})}
			</div>
		</div>
	);
};

export default WatchlistPage;
