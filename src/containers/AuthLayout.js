import React from 'react';
import TheContent from './TheContent'
import AuthHeader from '../views/components/Header/AuthHeader'

export default function AuthLayout () {
	return (
		<>
			<AuthHeader />
			<TheContent />
		</>
	);
};

