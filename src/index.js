import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NetflixProvider } from './context';
// import firebaseConfig from './fbConfig';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { FirebaseAuthProvider, FirebaseAuthConsumer } from '@react-firebase/auth';

import firebase from 'firebase/app';
import 'firebase/auth';

ReactDOM.render(
	<React.StrictMode>
		<FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
			<NetflixProvider>
				<App />
			</NetflixProvider>
		</FirebaseAuthProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
