import React from 'react';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';

const MoviePage = () => {
	return (
		<div>
			<Hero />
			<h1>Related Movies</h1>

			<div className='d-flex flex-wrap   align-items-start '>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</div>
		</div>
	);
};

export default MoviePage;
