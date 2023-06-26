import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { InnerBanner } from '../../components/InnerBanner/InnerBanner'
import { NavHashLink } from 'react-router-hash-link';


const Partners = () => {
	return (
		<>
			<InnerBanner
				title="Partners"
			/>
			<section className='repeat-section'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-7'>
							<div className='image-bx text-center'>
								<img src='/images/work-with-partners.svg' alt="We Work With The Best Partners" />
							</div>
						</div>
						<div className='col-lg-5'>
							<SectionTitle
								title="We Work With The Best"
								subHeading="Join us in building the future of people information infrastructure as we empower organizations to make informed decisions and mitigate the risk of fraud."
								className={''}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='repeat-section bg-dark-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<SectionTitle
								title="Let’s Work Together… Are You"
							/>
							<ul className='list-design yellow-check'>
								<li>University or collage</li>
								<li>A credit reference Bureau / provide credit information</li>
								<li>Government institution that provides people information such as Identity, Driving licenses, criminal records, company registry.</li>
								<li>Income information</li>
								<li>Location and address information</li>
								<li>Corporate employer</li>
								<li>Provide Sanction, watchlist, politically exposed persons, adverse media information </li>
								<li>Social media information</li>
							</ul>
							<NavHashLink to="#getInTouch" className="btn btn-white"> Become a Partner</NavHashLink>
						</div>
						<div className='col-lg-6'>
							<img src="/images/work-together.svg" alt="University or collage" />
						</div>
					</div>
				</div>
			</section>
			<section className='repeat-section bg-section'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6 order-lg-last'>
							<SectionTitle
								title="Why Partner with Mwangaza?"
							/>
							<ul className='list-design purple-check'>
								<li>Additional Source of revenue</li>
								<li>We help you streamline your processes</li>
								<li>Easy Integration</li>
								<li>Proven track record</li>
							</ul>
						</div>
						<div className='col-lg-6'>
							<img src="/images/partner-with-mwangaza.svg" alt="partner-with-mwangaza" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Partners
