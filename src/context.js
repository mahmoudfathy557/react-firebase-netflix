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

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
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

	const moviesData = () => {
		let films = movies.map((movie) => {
			const { genres, title, storyline, posterurl } = movie.data;
			const { id } = movie;
			const singleMovie = { title: title, description: storyline, img: posterurl, genres: genres, id: id };

			return singleMovie;
		});

		const uniqueGenres = new Set();
		let genres = movies.map((movie) => {
			return movie.data.genres.map((genre) => uniqueGenres.add(genre));
		});
		/*
		shape of data => [
			{
				genre:'action'
				movies:[...]
			}
		]
		*/

		const genreMovies = {};

		for (let item of uniqueGenres.values()) {
			const moviesOfSingleGenre = films.filter((film) => film.genres.includes(item));
			genreMovies[item] = { genre: item, movies: moviesOfSingleGenre };
		}

		console.log(genreMovies);
	};

	useEffect(() => {
		moviesData();
	}, []);

	console.log(moviesData());

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
