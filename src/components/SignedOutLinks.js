import React from 'react';

const SignedOutLinks = () => {
	return (
		<div>
			<ul className='navbar-nav'>
				<li className='nav-item'>
					<a className='nav-link' href='/login'>
						Login & Signup
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SignedOutLinks;
