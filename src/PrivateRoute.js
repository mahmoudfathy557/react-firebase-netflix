import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { NetflixContext } from './context';

const PrivateRoute = ({ children, ...rest }) => {
	const { isUser } = useContext(NetflixContext);
	// const user = true;
	return (
		<Route
			{...rest}
			render={() => {
				return isUser ? children : <Redirect to='/login' />;
			}}
		/>
	);
};

export default PrivateRoute;
