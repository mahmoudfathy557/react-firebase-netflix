import React, { useState, useEffect } from 'react';
import { auth } from './firebase';

const NetflixContext = React.createContext();

const NetflixProvider = ({ children }) => {
	const [ user, setUser ] = useState('');

	const logOut = () => {
		auth
			.signOut()
			.then(() => {
				console.log('logged out');
				setUser({});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<NetflixContext.Provider
			value={{
				user,

				logOut,
			}}>
			{children}
		</NetflixContext.Provider>
	);
};

export { NetflixProvider, NetflixContext };
