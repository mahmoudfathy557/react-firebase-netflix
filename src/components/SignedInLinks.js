import React, { useContext } from 'react';
import { NetflixContext } from '../context';

const SignedInLinks = () => {
	const { logOut } = useContext(NetflixContext);
	return (
		<div>
			<ul className='navbar-nav'>
				<li className='nav-item  '>
					<a className='nav-link ' href='/'>
						Home <span className='sr-only'>(current)</span>
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link ' href='/watchlist'>
						Watchlist
					</a>
				</li>
				<li className='nav-item'>
					<a className='nav-link' onClick={logOut}>
						Log Out
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SignedInLinks;
