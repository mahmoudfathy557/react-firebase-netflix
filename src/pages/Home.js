import React from 'react';
import { NetflixContext } from '../context';
import Genere from '../components/Genere';
import { Link, Redirect } from 'react-router-dom';

const Home = () => {
	const { moviesGenres } = React.useContext(NetflixContext);
	const genres = Object.values(moviesGenres);
	return (
		<div className='movies-list'>
			{genres &&
				genres.map((genre, idx) => {
					return <Genere genre={genre} key={idx} />;
				})}
		</div>
	);
};

export default Home;
