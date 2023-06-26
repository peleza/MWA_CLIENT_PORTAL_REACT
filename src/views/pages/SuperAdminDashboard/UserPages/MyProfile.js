import React, { useState } from 'react';
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
import '../../PidvaDashboard/UserPages/UserPages.scss'
import { FileUpload, InputText } from '../../../components/InputText/InputText';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Bar, Pie } from 'react-chartjs-2'
import { SelectBox } from '../../../components/InputText/InputText';

const AdminMyProfile = () => {
	const [fileName, setFileName] = useState();
	const [Fields, setFields] = useState({
		org_id: "",
		email_id: "",
		password: ""
	})

	const getFileName = (e) => {
		setFileName(e.target.files[0])
	}

	const ProfileProgress = 34;

	const onChange = (e) => {
		const { name, value } = e.target;
		setFields((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		});
	}
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
							<h2>Rob Fernandes</h2>
							<p>Account Creation Date: 12 March 2022</p>
							<div className='profileQuickInfo'>
								<span><BiUserCircle /> Strategic Partnerships Lead</span>
								<span><BiUserCircle /> Strategic Partners</span>
								<span><BiMapPin /> Reliance Centre</span>
								<span><HiOutlineMail /> rob.fernandes@one.com</span>
							</div>
							<div className='profileCompletePlan mt-4'>
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
						<div className='repeat-white-bx'>
							<h2>Profile Details</h2>
							<div className='row'>
								<div className='col-lg-4'>
									<InputText
										type="text"
										labelText="Full Names"
										name="full_names"
										placeholder="Full Names"
										defaultValue="Rob Fernandes"
										hasLabel={true}
										onChange={onChange}
										pattern=".{1,}"
										error="Full Names Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-4'>
									<InputText
										type="text"
										labelText="ID Number"
										name="id_number"
										placeholder="ID Number"
										defaultValue="1234567"
										hasLabel={true}
										onChange={onChange}
										pattern=".{1,}"
										error="ID Number Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-4'>
									<InputText
										type="text"
										labelText="Staff Number"
										name="staff_number"
										placeholder="Staff Number"
										defaultValue="P00089"
										hasLabel={true}
										onChange={onChange}
										pattern=".{1,}"
										error="Staff Number Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-4'>
									<InputText
										type="text"
										labelText="User Profile"
										name="user_profile"
										placeholder="User Profile"
										defaultValue="Quality Assurance"
										hasLabel={true}
										onChange={onChange}
										pattern=".{1,}"
										error="User Profile Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-4'>
									<InputText
										type="text"
										labelText="Phone Number"
										name="phone"
										placeholder="Phone Number"
										defaultValue="+254 123 456 789"
										hasLabel={true}
										onChange={onChange}
										pattern=".{1,}"
										error="Phone Number Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-4'>
									<InputText
										type="text"
										labelText="Email"
										name="email"
										placeholder="Email"
										defaultValue="rob.fernandes@one.com"
										hasLabel={true}
										onChange={onChange}
										pattern=".{1,}"
										error="Email is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-12'>
									<InputText
										type="text"
										labelText="Physical Address"
										name="physical_address"
										placeholder="Physical Address"
										defaultValue="Reliance Centre, Westlands, Nairobi"
										hasLabel={true}
										onChange={onChange}
										pattern=".{1,}"
										error="Physical Address is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-4'>
									<FileUpload
										fileName={fileName && fileName.name}
										labelText="Update Profile Photo"
										FormGroupClass="mb-0"
										onChange={getFileName}
										name="profile_photo"
										accept='Jpeg, PNG'
										error="Please Upload Photo Certificate!"
										required="required"
									/>
								</div>
							</div>
						</div>
					</Tab>
					<Tab eventKey="Security" title="Security">
						<Security />
					</Tab>
					<Tab eventKey="360View" title="360View">
						{/* <View360 /> */}

						<div className='row'>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="SaaS"
									value="7"
									icon="kyc-conducted-icon.svg"
									color="#9B55E5"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="KYC"
									value="885"
									icon="bg-checked-icon.svg"
									iconClass="white-icon"
									color="#F9327A"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="BGC"
									value="2,691"
									icon="alerts-icon.svg"
									color="#e93535"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Recruitments"
									value="987"
									icon="hires-icon.svg"
									color="#FCC103"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Insights"
									value="85"
									icon="pidva-icons/complete-icon.svg"
									color="#69C848"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Active Sub Services"
									value="233"
									icon="pidva-icons/complete-reports-icon.svg"
									color="#35BAE9"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Candidates"
									value="7,653"
									icon="kyc-conducted-icon.svg"
									color="#e97735"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Companies"
									value="123"
									icon="pidva-icons/interim-icon.svg"
									color="#42DABF"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Alerts"
									value="431"
									icon="pidva-icons/interim-past-icon.svg"
									color="#9B55E5"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Data Sources"
									value="34"
									icon="pidva-icons/nearing-tat-icon.svg"
									color="#69C848"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Countries"
									value="24"
									icon="pidva-icons/in-progress-icon.svg"
									color="#35BAE9"
								/>
							</div>
							<div className='col-lg-3 mb-5'>
								<DashboardOverviewBx
									title="Team members"
									value="53"
									icon="pidva-icons/in-progress-icon.svg"
									color="#35BAE9"
								/>
							</div>
						</div>
						<div className='repeat-white-bx mt-5 pb-2'>
							<h2>Sub Services Spread
								<SelectBox
									name="filter_data"
									FormGroupClass="mb-0 form-control-sm form-control-style2"
									optionData={
										<>
											<option value="">Last 7 Days</option>
											<option value="1"> Today  </option>
										</>
									}
								/>
							</h2>

							<div className='col-lg-12'>
								<Bar
									data={{
										labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
										datasets: [{
											label: "Final Reports",
											type: "bar",
											stack: "Jan",
											backgroundColor: "#FCC103",
											data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
										}, {
											label: "BGC",
											type: "bar",
											stack: "Jan",
											backgroundColor: "#42DABF",
											data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
										}, {
											label: "Interim Reports",
											type: "bar",
											stack: "Jan",
											backgroundColor: "#F9327A",
											data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
										}, {
											label: "Credits",
											type: "bar",
											stack: "Jan",
											backgroundColor: "#9B55E5",
											data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
										}]
									}}
									height={125}
									options={{
										scales: {
											x: {
												stacked: true,
											},
											y: {
												stacked: true,
												beginAtZero: true
											}
										},
										plugins: {
											legend: {
												display: false
											}
										},
										barThickness: 25
									}}
								/>
								<h4 className='mt-3 text-center mb-0'>Annual Number of Requests</h4>
							</div>

							<ul className='chat-indicators mt-5'>
								<li><span style={{ background: '#4472C4' }}></span> Employment</li>
								<li><span style={{ background: '#FFC000' }}></span> Education</li>
								<li><span style={{ background: '#00B050' }}></span> Identity</li>
								<li><span style={{ background: '#7030A0' }}></span> Social Media </li>
								<li><span style={{ background: '#F4B183' }}></span> Gap Analysis</li>
								<li><span style={{ background: '#E0A8E9' }}></span> Site Visit</li>
								<li><span style={{ background: '#FFFF00' }}></span> Criminal</li>
								<li><span style={{ background: '#103247' }}></span> Global Watchlist </li>
								<li><span style={{ background: '#C00000' }}></span> Credit </li>
								<li><span style={{ background: '#00B0F0' }}></span> Company Registration </li>
							</ul>
							<Bar
								data={{
									labels: ['Employment', 'Education', 'Identity', 'Social Media', 'Gap Analysis', 'Site Visit', 'Criminal', 'Global Watchlist', 'Credit', 'Company Registration'],
									datasets: [{
										data: [12, 19, 3, 5, 2, 12, 19, 3, 5, 2],
										backgroundColor: [
											'#4472C4',
											'#FFC000',
											'#00B050',
											'#7030A0',
											'#F4B183',
											'#E0A8E9',
											'#FFFF00',
											'#103247',
											'#C00000',
											'#00B0F0',
										],
										borderColor: [
											'rgba(68, 114, 196, 1)',
											'rgba(255, 192, 0, 1)',
											'rgba(0, 176, 80, 1)',
											'rgba(112, 48, 160, 1)',
											'rgba(244, 177, 131, 1)',
											'rgba(224, 168, 233, 1)',
											'rgba(255, 255, 0, 1)',
											'rgba(16, 50, 71, 1)',
											'rgba(192, 0, 0, 1)',
											'rgba(0, 176, 240, 1)'
										],
										borderWidth: 1
									}]
								}}
								height={100}
								options={{
									scales: {
										y: {
											beginAtZero: true
										}
									},
									plugins: {
										legend: {
											display: false
										}
									},
									barThickness: 30
								}}
							/>
						</div>
					</Tab>
				</Tabs>
			</section>
		</>
	);
}

export default AdminMyProfile
