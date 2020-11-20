import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MoviesFilter from '../components/MoviesFilter';
import { NetflixContext } from '../context';

const GenerePage = (props) => {
	const { moviesGenres, sortMovies, filter } = useContext(NetflixContext);
	const { search, year } = filter;
	const genre = props.match.params.id;
	const movies = moviesGenres[genre];
	const sortedMovies = sortMovies(movies.movies, search, year);

	if (movies) {
		return (
			<div>
				<div className='info d-flex justify-content-between  mx-5 my-3 '>
					<h1 className='text-capitalize ml-3   '>{genre}</h1>
					<MoviesFilter filter={filter} />
				</div>
				<div className='  d-flex flex-wrap ml-5'>
					{sortedMovies.map((movie, idx) => {
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
};

export default GenerePage;
