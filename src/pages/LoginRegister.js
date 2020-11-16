import React, { useState } from 'react';
import { NetflixContext } from '../context';
import { auth, generateUserDocument } from '../firebase';

const LoginRegister = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');

	const signInWithEmailAndPasswordHandler = (event, email, password) => {
		event.preventDefault();
		auth.signInWithEmailAndPassword(email, password).catch((error) => {
			setError('Error signing in with password and email!');
			console.error('Error signing in with password and email', error);
		});
		console.log('ssssssssssss');
	};

	const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
		event.preventDefault();
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			generateUserDocument(user);
		} catch (error) {
			setError('Error Signing up with email and password');
		}
		setEmail('');
		setPassword('');
		console.log('signed up successfully');
	};

	return (
		<form>
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
						<button
							type='submit'
							className='btn btn-secondary'
							id='signin'
							onClick={(event) => {
								signInWithEmailAndPasswordHandler(event, email, password);
							}}>
							Sign In
						</button>
						<button
							type='submit'
							className='btn btn-light'
							id='signup'
							onClick={(event) => {
								createUserWithEmailAndPasswordHandler(event, email, password);
							}}>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default LoginRegister;
