import React from 'react';
import { NetflixContext } from '../context';
import Genere from '../components/Genere';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../providers/userProvider';
const Home = () => {
	const user = React.useContext(UserContext);
	console.log(user);
	return (
		<div className='movies-list     '>
			<div className='row'>
				<div className='col-12 ml-0 genere-container'>
					<Link to='/generes/:id' className='btn '>
						<h1 className='text-capitalize my-3 ml-5 '>genere 1</h1>
					</Link>

					<Genere />
				</div>
			</div>
			<div className='row'>
				<div className='col-12 ml-0 genere-container'>
					<h1 className='text-capitalize my-3  ml-5'>genere 1</h1>

					<Genere />
				</div>
			</div>
		</div>
	);
};

export default Home;
