import React from 'react';
import { NetflixContext } from '../context';
import Genere from '../components/Genere';
import { Link, Redirect } from 'react-router-dom';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
const Home = () => {
	return (
		<FirebaseAuthConsumer>
			{({ isSignedIn, user, providerId }) => {
				// if (!user.uid) return <Redirect to='/login' />;
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
			}}
		</FirebaseAuthConsumer>
	);
};

export default Home;
