import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { InnerBanner } from '../../components/InnerBanner/InnerBanner'
import './Faq.scss';

const Faq = () => {
	return (
		<>
			<InnerBanner
				title="FAQ's"
			/>
			<section className='repeat-section faq-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<SectionTitle title="Frequently Asked Questions" subHeading="" className={'section-title-center'} />
						</div>
						<div className='col-lg-6'>
							<div className='faq-bx'>
								<h5>Am unable to Login to my account?</h5>
								<p>
									Try resetting your password by clicking forgot password on the Login page. If this does not work send us an email to <a href="mailto:support@mwangaza.africa">support@mwangaza.africa</a> or contact your account manager for further assistance.
								</p>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='faq-bx'>
								<h5>Upon sign up, why do you verify my information?</h5>
								<p>
									The information you handle is regulated and as such we are required to know you and your company; therefore, we conduct KYC on our customers. Only once the information is verified will your account be created and activated.
								</p>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='faq-bx'>
								<h5>Can I use the system now and pay later and what modes of payment do you accept?</h5>
								<p>
									The service is on prepaid terms and we accept payments via Mpesa, debit/credit cards & direct back transfers
								</p>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='faq-bx'>
								<h5>How safe is data shared on Mwangaza?</h5>
								<p>
									We know security and privacy are important to you and they are important to us too. We have incorporated 2-step verification for every access, data encryption, data in transit is always protected using HTTPS or TLS and our servers are managed by Oracle & protected through firewalls against cyber-attacks.
								</p>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='faq-bx'>
								<h5>The country I need services in is not listed</h5>
								<p>
									Get in touch with our team at <a href="mailto:hello@mwangaza.africa">hello@mwangaza.africa</a> specifying the country and services you require in that country.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='repeat-section bg-section'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className='still-questions'>
								<img src='/images/email-icon.svg' alt='Still Have Questions?' />
								<h5>Still Have Questions?</h5>
								<p>
									can't find the answer you're looking for? Please Email to our Team <a href="mailto:hello@mwangaza.africa">hello@mwangaza.africa</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}

export default Faq
