import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { NetflixContext } from '../context';

const LoginRegister = () => {
	const { signIn, signUp, isUser } = useContext(NetflixContext);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	if (isUser) return <Redirect to='/' />;

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
							className='btn btn-secondary'
							id='signin'
							type='submit'
							onClick={(e) => {
								e.preventDefault();
								signIn(email, password);
							}}>
							Sign In
						</button>
						<button
							className='btn btn-light'
							id='signup'
							type='submit'
							onClick={(e) => {
								e.preventDefault();
								signUp(email, password);
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
