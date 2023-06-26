import React from 'react';
import { LinkButton } from '../../components/Button/Button';
import '../../components/ComingSoon/ComingSoon.scss'

function LoggedOut() {
	return (
		<section className='repeat-section bg-section comingSoon'>
			<img src='/images/loggedout.svg' alt="vector" width={350} />
			<h2>You’ve been logged out</h2>
			<p>For security reasons you are automatically logged out <br /> when you have inactive for more than 1 hour.</p>
			<LinkButton
				text="Login"
				to="/login"
				className="btn-secondary"
			/>
		</section>
	);
}



export default LoggedOut;
