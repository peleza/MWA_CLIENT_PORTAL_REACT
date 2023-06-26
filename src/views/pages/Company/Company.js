import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { InnerBanner } from '../../components/InnerBanner/InnerBanner'
import { FeaturesCard } from '../../components/FeaturesCard/FeaturesCard';

const Company = () => {
	const options = {
		items: 4,
		margin: 15,
		loop: true,
		center: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 2,
			},
			480: {
				items: 2,
			},
			992: {
				items: 4,
				margin: 30,
			}
		}
	};

	return (
		<>
			<InnerBanner
				title="Company"
			/>
			<section className='repeat-section' id="about">
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-7'>
							<div className='image-bx'>
								<img src='/images/our-goal.svg' alt="Our Goal" />
							</div>
						</div>
						<div className='col-lg-5'>
							<SectionTitle title="Our Goal" subHeading="We are passionate about creating people infrastructure for Africa" className={''} />
							<p className='f-20'>
								With this technology platform, our solutions enable timely
								access of accurate information to support informed
								decisions.
							</p>
							<p className='f-20'>
								We make hiring, credit evaluation, investment, customer/
								partner/ vendor onboarding faster, easier and more
								compliant.
							</p>
							<p className='f-20'>
								We believe in fair opportunities.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='repeat-section pt-0'>
				<div className='container'>
					<div className='row align-items-end'>
						<div className='col-lg-5'>
							<SectionTitle title="Our Story" subHeading="Digital access to information in Africa has
								proven to be quite the challenge let alone
								it being convenient." className={''} />
							<p className='f-20'>
								Its decentrality adds onto this impediment.
							</p>
							<p className='f-20'>
								A corporate leader will have to find pieces of information
								from different external sources to support in making an
								informed decision and this has cost many time, resources
								and opportunities.
							</p>
						</div>
						<div className='col-lg-7'>
							<div className='image-bx text-center'>
								<img src='/images/our-story.svg' alt="Our Story" />
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-7 mt-5'>
							<h5>We are on a mission to change this…</h5>
							<p className='f-20'>We spotted an opportunity to aggregate data and built a self-service platform, a future where at your convenience and comfort you have digital access to that much needed piece of information quickly, affordably and legally compliant.
							</p>
						</div>
						<div className='col-lg-5 mt-5'>
							<h5>And we envision this for Africa… an information powerhouse</h5>
							<p className='f-20'>At Mwangaza, we are in a pursuit to restore trust and establish truth in every day decisions.</p>
							<p className='f-20'>We envisage a world where a hiring manager looking through a verified CV having no doubt of the authenticity of credentials, an investor being confident in their investment decision, a business onboarding the right partner/customers/ vendor faster without being skeptical. </p>
						</div>
					</div>
				</div>
			</section>


			<section className='repeat-section bg-dark-section service-slider'>
				<div className='container-fluid-full p-0'>
					<SectionTitle title="Our Values" subHeading="Our values reflect our commitment to making a positive impact on our customers, our staff and the community" className={'section-title-center'} />

					<OwlCarousel {...options}>
						<div className='item'>
							<FeaturesCard
								IconUrl="data-security.svg"
								alt="Data Security"
								title="Data Security"
								Description="We protect your data as if our life depended on it"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="integrity.svg"
								alt="Integrity"
								title="Integrity"
								Description="We don’t compromise, we do it the right way while being honest, trustworthy & reliable"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="happy-clients.svg"
								alt="Customer Satisfaction"
								title="Customer Satisfaction"
								Description="We set the set the highest standard of quality services that meet your expectations"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="impact.svg"
								alt="Impact"
								title="Impact"
								Description="We want to make a difference and be the difference-restoring trust and establishing truth"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="white-label-icon.svg"
								alt="Excellence"
								title="Excellence"
								Description="We don’t settle for status quo & neither are we mediocre "
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="innovation.svg"
								alt="Innovation"
								title="Innovation"
								Description="We are always finding ways to better our best and evolve"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="partnerships.svg"
								alt="Partnerships"
								title="Partnerships"
								Description="We build relationships that drive success"
							/>
						</div>
					</OwlCarousel>
				</div>
			</section>

			<section className='repeat-section bg-section' id={'coverage'}>
				<div className='container'>
					<SectionTitle
						title="Coverage"
						subHeading="Started in Kenya and spreading the cheer to the rest of the continent, we have strong roots in"
						className={'section-title-center'}
					/>
				</div>
				<div className='container-fluid'>
					<div className='coverage-map text-center mb-5'>
						<img src="/images/coverage-map.svg" alt="map" />
					</div>
				</div>
			</section>

		</>
	);
}

export default Company
