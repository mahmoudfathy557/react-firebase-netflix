import React, { useState, useEffect } from 'react';
import firebase, { auth, firestore } from './firebase';

const NetflixContext = React.createContext();

const NetflixProvider = ({ children }) => {
	const [ isUser, setIsUser ] = useState(null);
	const [ movies, setMovies ] = useState([]);
	const [ moviesGenres, setMoviesGenres ] = useState([]);
	const [ error, setError ] = useState('');
	const [ search, setSearch ] = useState('');
	const [ year, setYear ] = useState('Sort By Year');
	const filter = { search, setSearch, year, setYear };

	const signIn = (email, password) => {
		firebase
			.auth()
			.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => {
				return auth.signInWithEmailAndPassword(email, password);
			})
			.catch((err) => {
				setError(err.messages);
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
			const { genres, originalTitle, storyline, posterurl, year, title } = movie.data;
			const { id } = movie;
			const singleMovie = {
				title: title,
				description: storyline,
				img: posterurl,
				genres: genres,
				id: id,
				originalTitle,
				year,
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

	const sortMovies = (moviesToSort, search, year) => {
		let tempMovies = [ ...moviesToSort.movies ];

		if (search.length > 0) {
			tempMovies = tempMovies.filter((item) => {
				let tempSearch = search.toLowerCase();
				let tempTitle = item.title.toLowerCase().slice(0, search.length);
				if (tempSearch === tempTitle) {
					return item;
				}
			});
		}
		if (year === 'descending') {
			tempMovies = tempMovies.sort((a, b) => b.year - a.year);
		}
		if (year === 'ascending') {
			tempMovies = tempMovies.sort((a, b) => a.year - b.year);
		}

		return tempMovies;
	};

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setIsUser(user);
				getMovies();
			}
		});
	}, []);

	return (
		<NetflixContext.Provider
			value={{
				isUser,
				signIn,
				error,
				signUp,
				logOut,
				movies,
				moviesGenres,
				sortMovies,
				filter,
			}}>
			{children}
		</NetflixContext.Provider>
	);
};

export { NetflixProvider, NetflixContext };
