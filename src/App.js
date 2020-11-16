import React from 'react';
import Application from './Application';
import UserProvider from './providers/userProvider';

function App() {
	return (
		<UserProvider>
			<Application />
		</UserProvider>
	);
}

export default App;
