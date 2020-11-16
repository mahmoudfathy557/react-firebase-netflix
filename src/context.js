import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const NetflixContext = React.createContext();

const NetflixProvider = ({ children }) => {
	const [ user, setUser ] = useState('');

	const signIn = (email, password) => {
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, password);
		if (promise) {
			setUser(promise);
		}

		promise.catch((err) => {
			console.log('signin failed');

			console.log(err);
		});
	};

	const signUp = (email, password) => {
		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email, password);
		promise
			.then((res) => {
				console.log('signup success');
				console.log(res, 'ssssssssssssign up');

				setUser(res);
			})
			.catch((err) => {
				console.log('signup failed');

				console.log(err);
			});
	};

	const logOut = () => {
		firebase
			.auth()
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
				signIn,
				signUp,
				logOut,
			}}>
			{children}
		</NetflixContext.Provider>
	);
};

export { NetflixProvider, NetflixContext };
