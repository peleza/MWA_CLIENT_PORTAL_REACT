import React from 'react';
import { TheHeader, TheContent } from './index';
import Footer from '../views/components/Footer/Footer';

export default function TheLayout () {
	return (
		<>
			<TheHeader />
			<TheContent />
			<Footer />
		</>
	);
};

