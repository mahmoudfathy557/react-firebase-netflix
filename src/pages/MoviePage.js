import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import { NetflixContext } from '../context';

const MoviePage = (props) => {
	const id = props.match.params.id;
	const { movies, moviesGenres } = React.useContext(NetflixContext);
	const movie = movies.filter((item) => item.id === id);
	const genre = movie[0].data.genres[0];
	const relatedMovies = moviesGenres[genre];
	const filterd = relatedMovies.movies.filter((item) => item.id !== id);

	return (
		<div>
			<Hero movie={movie[0].data} />
			<h1 className='p-5'>Related Movies</h1>

			<div className='d-flex flex-wrap  ml-5'>
				{filterd.map((movie, idx) => {
					return (
						<Link to={`/movie/${movie.id}`} key={movie.id || idx}>
							<MovieCard movie={movie} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default MoviePage;
