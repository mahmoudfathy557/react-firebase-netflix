import React, { useState, useEffect } from 'react';
import { auth, firestore } from './firebase';

const NetflixContext = React.createContext();

const NetflixProvider = ({ children }) => {
	const [ isUser, setIsUser ] = useState(null);
	const [ movies, setMovies ] = useState([]);
	const [ moviesGenres, setMoviesGenres ] = useState([]);

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

	const getMovies = async () => {
		let moviesList = [];
		const movies = firestore.collection('/movies');
		movies
			.get()
			.then((docs) => {
				docs.forEach((doc) => {
					let id = doc.id;
					let data = doc.data();
					moviesList.push({ data, id });
				});
				setMovies(moviesList);
				return moviesList;
			})
			.then((res) => {
				// getting sorted genres
				moviesData(res);
			});
	};

	const moviesData = (films) => {
		let aflam = films.map((movie) => {
			const { genres, originalTitle, storyline, posterurl } = movie.data;
			const { id } = movie;
			const singleMovie = {
				title: originalTitle,
				description: storyline,
				img: posterurl,
				genres: genres,
				id: id,
			};

			return singleMovie;
		});

		const uniqueGenres = new Set();
		let genres = films.map((movie) => {
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
			const moviesOfSingleGenre = aflam.filter((film) => film.genres.includes(item));
			genreMovies[item] = { genre: item, movies: moviesOfSingleGenre };
		}

		setMoviesGenres(genreMovies);
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
				moviesGenres,
			}}>
			{children}
		</NetflixContext.Provider>
	);
};

export { NetflixProvider, NetflixContext };
