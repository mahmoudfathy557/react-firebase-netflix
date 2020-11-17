import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from './MovieCard';

export default function Genere({ genre }) {
	return (
		<div className='mx-5'>
			<Link to={`/genres/${genre.genre}`} key={genre.genre} className='btn'>
				<h1 className='text-capitalize my-3   '>{genre.genre}</h1>
			</Link>

			<div className='d-flex flex-wrap'>
				{genre.movies.map((movie, idx) => {
					return (
						<Link to={`/movie/${movie.id}`} key={movie.id || idx}>
							<MovieCard movie={movie} />
						</Link>
					);
				})}
			</div>
		</div>
	);
}
