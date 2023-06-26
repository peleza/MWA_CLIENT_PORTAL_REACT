import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const RouteApiResponse = useSelector(state => state.auth)

	console.log("RouteApiResponse", RouteApiResponse);

	return (
		<Route
			{...rest}
			render={(props) => (RouteApiResponse.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/login" />)}
		/>
	);
};

export default PrivateRoute;
