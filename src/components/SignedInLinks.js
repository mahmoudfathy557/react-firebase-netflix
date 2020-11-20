import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NetflixContext } from '../context';

const SignedInLinks = () => {
	const { logOut, isUser } = useContext(NetflixContext);
	const userId = isUser.uid;
	return (
		<div>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<NavLink className='nav-link' to='/'>
						Home
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink className='nav-link ' to={`/watchlist/${userId}`}>
						Watchlist
					</NavLink>
				</li>
				<li className='nav-item'>
					<a className='nav-link btn' href='/login' onClick={logOut}>
						Log Out
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SignedInLinks;
