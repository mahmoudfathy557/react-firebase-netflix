import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyA6qfhNOg54A8Evfe0G2PeRS2h4f81Pt3k',
	authDomain: 'oppa-coding-challenge.firebaseapp.com',
	databaseURL: 'https://oppa-coding-challenge.firebaseio.com',
	projectId: 'oppa-coding-challenge',
	storageBucket: 'oppa-coding-challenge.appspot.com',
	messagingSenderId: '246738910516',
	appId: '1:246738910516:web:155d7bef48ef1f1132f961',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// -generateUserDocument-, which will then return the user data with the help of another function called -getUserDocument-.
export const generateUserDocument = async (user, additionalData) => {
	if (!user) return;
	const userRef = firestore.doc(`users/${user.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { email, displayName, photoURL } = user;
		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				...additionalData,
			});
		} catch (error) {
			console.error('Error creating user document', error);
		}
	}
	return getUserDocument(user.uid);
};
const getUserDocument = async (uid) => {
	if (!uid) return null;
	try {
		const userDocument = await firestore.doc(`users/${uid}`).get();
		return {
			uid,
			...userDocument.data(),
		};
	} catch (error) {
		console.error('Error fetching user', error);
	}
};
