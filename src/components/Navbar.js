import React from 'react';
import { Link } from 'react-router-dom';
import { NetflixContext } from '../context';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
	const { isUser } = React.useContext(NetflixContext);
	const links = isUser ? <SignedInLinks /> : <SignedOutLinks />;

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark  d-flex'>
			<div className='container nav-container justify-content-center p-0 '>
				<Link className='navbar-brand' to='/'>
					Netflix
				</Link>
				{links}
			</div>
		</nav>
	);
};

export default Navbar;
