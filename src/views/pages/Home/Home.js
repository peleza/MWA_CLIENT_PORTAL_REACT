import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { LinkButton } from '../../components/Button/Button'
import OwlCarousel from 'react-owl-carousel';
import { FeaturesCard } from '../../components/FeaturesCard/FeaturesCard';
import 'owl.carousel/dist/assets/owl.carousel.css';

import './Home.scss';

const Home = () => {
	const options = {
		items: 4,
		margin: 15,
		loop: true,
		center: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause:true,
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
			<section className='main-banner'>
				<div className='container-fluid'>
					<div className='row align-items-center'>
						<div className='col-xl-6'>
							<h1>Automate your KYC <br className="d-none d-lg-block" />& Background Check Services</h1>
							<div className='heading-shape'><img src='/images/heading-border-shape.svg' alt='shape' /></div>
							{/* <h5>Make Better Informed Decisions And Onboard Them Faster</h5> */}
							<p>Automate your processes with our cutting-edge technology that sets a new standard for information accuracy and speed trusted by thousands of organizations to better inform onboarding decisions by providing real time reports whilst preventing fraud. </p>
							<LinkButton to="/signup" className="btn-secondary" text="Get Started" />
						</div>

						<div className='col-xl-6'>
							<div className='banner-image'>
								<img src='/images/banner-image.svg' alt="Automate your KYC" />
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className='repeat-section bg-dark-section service-slider'>
				<div className='container-fluid-full'>
					<SectionTitle title="Evolve with Mwangaza" subHeading="Our technology empowers compliance experts, corporate recruiters and background screening companies like yours" className={'section-title-center'} />

					<OwlCarousel {...options}>
						<div className='item'>
							<FeaturesCard
								IconUrl="automated-process-icon.svg"
								alt="Automate processes"
								title="Automate processes"
								Description="No more manual work. Improve verification accuracy Increase productivity. Streamline operations Increase your capacity to handle more"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="faster-report-icon.svg"
								alt="Faster Reports TAT"
								title="Faster Reports TAT"
								Description="Screen potential & existing employees / companies faster with our real time primary source checks"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="white-label-icon.svg"
								alt="White Label"
								title="White Label"
								Description="The software & reports are branded with your logo."
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="reduced-cost-icon.svg"
								alt="Reduced Cost"
								title="Reduced Cost"
								Description="Automate without incurring the high cost of developing technology. Reduce service costs"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="happy-clients.svg"
								alt="Happier Clients"
								title="Happier Clients"
								Description="Your clients are able to view progress of their requests on a real time basis"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="analytics-icon.svg"
								alt="Insights & Analytics"
								title="Insights & Analytics"
								Description="Do more with data In addition to KYC and background checks, inform your clients with insights & analytics"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="api-integrations.svg"
								alt="API Integrations"
								title="API Integrations"
								Description="Through the API, Integrate with your clients for a more efficient and seamless experience"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="local-internation-data-icon.svg"
								alt="Local & International Data Sources"
								title="Local & International Data Sources"
								Description="Leverage our partnerships to increase your capability to do checks across the globe"
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="risk-maintain-icon.svg"
								alt="Mitigate Risk MaintainCompliance"
								title="Mitigate Risk MaintainCompliance"
								Description="Provide legally compliant verification reports adhering to data protection laws whilst safeguarding your clients against frauds."
							/>
						</div>
						<div className='item'>
							<FeaturesCard
								IconUrl="secure-bank-icon.svg"
								alt="Bank Level Secure"
								title="Bank Level Secure"
								Description="Highest level of security of security standards, all data shared is encrypted. Threat monitoring to ensure data security & privacy."
							/>
						</div>
					</OwlCarousel>
				</div>
			</section>


			<section className='repeat-section features-section'>
				<div className='container'>
					<SectionTitle title="Be ahead of the pack… Mwangaza is the smart way to provide Know your Customer (KYC) & Background Check Services" subHeading="Bespoke features to befit your needs, our platform gives you excellence" className={'section-title-center'} />
				</div>
				<div className='container-fluid-full margin-top-custom'>
					<div className='row align-items-center'>
						<div className='col-lg-5'>
							<div className='list-bx'>
								<h2>PSMT</h2>
								<p>Your branded client self-service platform where they can</p>
								<ul className='list-design'>
									<li>Make Request for Services</li>
									<li>Monitor Service Request</li>
									<li>View Reports on Real Time</li>
									<li>Download Service Reports</li>
									<li>Access Insights & Analytics Services</li>
									<li>Manage Their Profile & Users</li>
									<li>Make Payments</li>
									<li>View Activity Reports & Metrics</li>
								</ul>
								<LinkButton to="/signup" className="btn-secondary" text="Get started" />
							</div>

						</div>
						<div className='col-lg-7 px-0 list-right-img'>
							<div className='image-bx'>
								<img src='/images/psmt-image.png' alt="PSMT" />
							</div>
						</div>
					</div>
				</div>
				<div className='container-fluid-full margin-top-custom'>
					<div className='row align-items-center'>
						<div className='col-lg-7 px-0 list-left-img'>
							<div className='image-bx'>
								<img src='/images/pidva-image.png' alt="PSMT" />
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='list-bx m-0'>
								<h2>PIDVA</h2>
								<p>Your admin platform where you can</p>
								<ul className='list-design'>
									<li>View and Update your Client Requests with Verified Data</li>
									<li>Manage your Clients</li>
									<li>Manage Client Services & Packages</li>
									<li>Manage your Users</li>
									<li>View Staff Productivity </li>
									<li>Manage Payments</li>
									<li>Manage Candidates</li>
									<li>Verified Data Collection Module</li>
									<li>View Activity Report & Metrics</li>
								</ul>
								<LinkButton to="/signup" className="btn-secondary" text="Get started" />
							</div>

						</div>
					</div>
				</div>

				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='candidate-experience-bx'>
								<h2>Candidate Experience</h2>
								<p>A Platform where Candidates can Submit their Documents for Verification.</p>
								<p className='fw-400'>The most valuable asset of your company needs to feel confident and comfortable while background checks are being conducted on them. This platform gives them just about that. </p>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='image-bx'>
								<img src='/images/candidate-experience-image.svg' alt="Candidate Experience" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='repeat-section bg-section'>
				<div className='container'>
					<SectionTitle title="Trusted by Thousands of Organizations" subHeading="Over 500,000 checks have been conducted with our valuable customers" className={'section-title-center'} />
					<div className='row align-items-center'>
						<div className='col-lg-7'>
							<img src='/images/trusted-organizations.svg' alt="Built to inform decisions on onboarding staff, partners, customers, creditors, investees" />
						</div>
						<div className='col-lg-5'>
							<div className='trusted-organizations'>
								<h2>Built to inform decisions on onboarding staff, partners, customers, creditors, investees</h2>
								<p>Mwangaza platform offers solutions for all industries</p>
								<ul className='list-design'>
									<li>A Bank Onboarding a Customer (Individual/Company)</li>
									<li>A Fintech Onboarding a Customer (Individual/Company)</li>
									<li>A Taxi Haling Company Onboarding a Partner Driver</li>
									<li>An Investor Conducting Due Diligence on an Investee</li>
									<li>A Credit Provider Evaluating a Creditor</li>
									<li>A Hiring Manager Recruiting/Promoting an Employee</li>
									<li>A Hospital Hiring a Licensed Doctor/Nurse</li>
									<li>A Tea Farm Requiring Tea Pickers</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}

export default Home
