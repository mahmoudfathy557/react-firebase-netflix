import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { NetflixContext } from '../context';

const GenerePage = (props) => {
	const genre = props.match.params.id;
	const { moviesGenres } = React.useContext(NetflixContext);
	const movies = moviesGenres[genre];

	if (movies) {
		return (
			<div>
				<div className='info d-flex justify-content-between mx-5 '>
					<h1 className='text-capitalize my-3   '>{genre}</h1>
					<div className='search-section d-flex align-self-center  '>
						<input
							type='search'
							name='search'
							id='search'
							placeholder='search...'
							className='form-control mr-3'
						/>
						<select
							name='select'
							id='select'
							value='Sort By Year'
							className='custom-select'
							onChange={() => {}}>
							<option value='Sort By Year'>Sort By Year</option>
							<option value='opel'>Opel</option>
							<option value='audi'>Audi</option>
						</select>
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					{movies.movies.map((movie, idx) => {
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
