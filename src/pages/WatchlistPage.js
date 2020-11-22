import React, { useContext, useState, useEffect } from 'react';
import MoviesFilter from '../components/MoviesFilter';
import { NetflixContext } from '../context';
import MovieCard from '../components/MovieCard';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';

const WatchlistPage = (props) => {
	const userId = props.match.params.id;
	const [ watchlistMovies, setWatchlistMovies ] = useState([]);
	const { sortMovies, filter } = useContext(NetflixContext);
	const { search, year } = filter;
	const sortedMovies = sortMovies(watchlistMovies, search, year);

	const getWatchlistMovies = () => {
		firestore.collection('watchlist').doc(userId).get().then((docs) => {
			setWatchlistMovies(docs.data().movies);
		});
	};

	useEffect(() => {
		getWatchlistMovies();
	}, []);

	return (
		<div>
			<div className='info d-flex justify-content-between mx-5 '>
				<h1 className='text-capitalize my-3 text-muted text-center  '>My Watchlist</h1>
				<MoviesFilter filter={filter} />
			</div>
			<div className='d-flex flex-wrap  ml-5 '>
				{sortedMovies &&
					sortedMovies.map((movie, id) => {
						console.log(movie);
						const singleMovie = {
							title: movie.title,
							description: movie.storyline,
							img: movie.posterurl,
							genres: movie.genres,
							id: movie.id,
							originalTitle: movie.originalTitle,
							year: movie.year,
						};

						return (
							<Link to={`/movie/${singleMovie.id}`} key={id}>
								<MovieCard movie={singleMovie} key={id} />
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default WatchlistPage;
