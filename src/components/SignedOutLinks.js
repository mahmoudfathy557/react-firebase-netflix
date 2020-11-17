import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<div>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<NavLink className='nav-link' to='/login'>
						Login & Signup
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedOutLinks;
