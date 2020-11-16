import React from 'react';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
	return (
		<FirebaseAuthConsumer>
			{({ isSignedIn }) => {
				if (isSignedIn === true) {
					return (
						<nav className='navbar navbar-expand-lg navbar-dark bg-dark  d-flex'>
							<div className='container nav-container justify-content-center p-0 '>
								<div>
									<a className='navbar-brand   ' href='/'>
										Netflix
									</a>
								</div>

								<SignedInLinks />
							</div>
						</nav>
					);
				} else {
					return (
						<nav className='navbar navbar-expand-lg navbar-dark bg-dark  d-flex'>
							<div className='container nav-container justify-content-center p-0 '>
								<div>
									<a className='navbar-brand   ' href='/'>
										Netflix
									</a>
								</div>

								<SignedOutLinks />
							</div>
						</nav>
					);
				}
			}}
		</FirebaseAuthConsumer>
	);
};

export default Navbar;
