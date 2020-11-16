import React, { useState, useContext } from 'react';
import { NetflixContext } from '../context';
import { Redirect } from 'react-router-dom';

const LoginRegister = () => {
	const { signIn, signUp } = useContext(NetflixContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if ((e.target.id = 'signin')) {
			signIn(email, password);
			// const db = firebase.firestore();
			// db.settings({
			// 	timestampsInSnapshots: true,
			// });
		}
		if ((e.target.id = 'signup')) {
			signUp(email, password);
		}

		console.log('it is submitted');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='container  '>
				<div className='center'>
					<div className='form-group'>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className='form-group'>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className='form-group d-flex justify-content-between'>
						<button className='btn btn-secondary' id='signin'>
							Sign In
						</button>
						<button className='btn btn-light' id='signup'>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default LoginRegister;
