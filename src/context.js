import React, { useState, useEffect } from 'react';
import { auth, firestore } from './firebase';

const NetflixContext = React.createContext();

const NetflixProvider = ({ children }) => {
	const [ isUser, setIsUser ] = useState(null);
	const [ movies, setMovies ] = useState([]);

	const signIn = (email, password) => {
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise
			.then(() => {
				console.log('singed in successfully');
			})
			.catch((err) => {
				console.log('signin failed');

				console.log(err);
			});
	};

	const signUp = (email, password) => {
		const promise = auth.createUserWithEmailAndPassword(email, password);
		promise
			.then((res) => {
				return firestore.collection('users').doc(res.user.uid);
			})
			.then(() => {
				console.log('signup success');
			})
			.catch((err) => {
				console.log(err);
				console.log('signup failed');
			});
	};

	const logOut = () => {
		auth
			.signOut()
			.then(() => {
				console.log('logged out');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// const getUser = () => {
	// 	console.log('useEffect occurred');
	// 	return
	// };

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log('user is signed in.');
				setIsUser(user);
			}
		});
	}, []);

	const getMovies = () => {
		const movies = firestore.collection('/movies');
		movies.get().then((docs) => {
			let moviesList = [];
			docs.forEach((doc) => {
				let id = doc.id;
				let data = doc.data();
				moviesList.push({ data, id });
			});
			setMovies(moviesList);
		});
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<NetflixContext.Provider
			value={{
				isUser,
				signIn,
				signUp,
				logOut,
				movies,
			}}>
			{children}
		</NetflixContext.Provider>
	);
};

export { NetflixProvider, NetflixContext };
