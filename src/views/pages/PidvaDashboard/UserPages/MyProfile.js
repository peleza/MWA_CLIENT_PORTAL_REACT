import React from 'react';
import '../../PsmtDashboard/BackgroundCheck/BackgroundCheck.scss'
import { Tab, Tabs } from 'react-bootstrap';
import { BiUserCircle, BiMapPin } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import '../../PsmtDashboard/UserPages/UserPages.scss'
import { Overview } from '../../../components/PidvaProfile/Overview';
import { Security } from '../../../components/PidvaProfile/Security';
import { Billing } from '../../../components/PidvaProfile/Billing';
import { View360 } from '../../../components/PidvaProfile/View360';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import './UserPages.scss'

const MyProfile = () => {
	const ProfileProgress = 34;
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>My Profile</h1>

				<div className='repeat-white-bx ProfileOverview mb-5'>
					<div className='edit-profile-pic'>
						<div className='editProfilePic'>
							<img src="/images/dummy-profile.jpg" alt="icon" />
							<div className='profile-status'></div>
						</div>
						<div className='editProfileDetails'>
							<h2>Rob Nate</h2>
							<p>Account Creation Date: 12 March 2022</p>
							<div className='profileQuickInfo'>
								<span><BiUserCircle /> Verifications Team Leader</span>
								<span><BiUserCircle /> Quality Assurance</span>
								<span><BiMapPin /> Reliance Centre</span>
								<span><HiOutlineMail /> rob.fernandes@one.com</span>
							</div>
							<div className='profileCompletePlan'>
								<div>
									<div className='CurrentPlanBx'>
										<h2>Service Credits</h2>
										<h4>KES 123,456</h4>
									</div>
									<div className='CurrentPlanBx'>
										<h2>Subscription Plan</h2>
										<h4>GOLD</h4>
									</div>
								</div>

								<ProgressBar
									progress={`${ProfileProgress}%`}
									label={ProfileProgress}
									title="Profile Complete"
									theme="green-color2"
								/>
							</div>
						</div>
					</div>
				</div>

				<Tabs
					defaultActiveKey="Overview"
					transition={true}
					className="common-tabs common-tabs-layout-2"
				>
					<Tab eventKey="Overview" title="Overview">
						<Overview />
					</Tab>
					<Tab eventKey="Security" title="Security">
						<Security />
					</Tab>
					<Tab eventKey="Billing" title="Billing">
						<Billing />
					</Tab>
					<Tab eventKey="360View" title="360View">
						<View360 />
					</Tab>
				</Tabs>
			</section>
		</>
	);
}

export default MyProfile
