import React, { useEffect } from 'react';
import DashboardInfoBx from '../../../components/DashboardInfoBx/DashboardInfoBx';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import NotificationCol from '../../../components/NotificationCol/NotificationCol';
import { Bar, Pie } from 'react-chartjs-2'
import { Chart, registerables} from 'chart.js';
import { Link, useHistory } from 'react-router-dom'
import { SelectBox } from '../../../components/InputText/InputText';
import { useDispatch } from 'react-redux';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import './Dashboard.scss';
Chart.register(...registerables);

const PsmtDashboard = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		dispatch(getTitleAction("Dashboard"))
	}, [dispatch])

	const ExperiencedProgress = 60;
	const ProfessionalProgress = 76;
	const VendorKYCProgress = 82;
	const DriverProgress = 34;
	const EntryProgress = 67;

	return (
		<>
			<section className='dashboard-section'>
				<div className='row'>
					<div className='col-lg-9'>
						<div className='row'>
							<div className='col-lg-3'>
								<DashboardInfoBx
									color="baby-blue-color"
									title="Background Checked"
									value="3,557"
									icon="bg-checked-icon.svg"
									URL="/psmt/background-check"
								/>
							</div>
							<div className='col-lg-3'>
								<DashboardInfoBx
									color="purple-color"
									title="KYC Conducted"
									value="5,691"
									icon="kyc-conducted-icon.svg"
									URL="/psmt/kyc-dashboard"
								/>
							</div>
							<div className='col-lg-3'>
								<DashboardInfoBx
									color="pink-color"
									title="Hires"
									value="885"
									icon="hires-icon.svg"
									URL="/psmt/dashboard"
								/>
							</div>
							<div className='col-lg-3'>
								<DashboardInfoBx
									color="yellow-color"
									title="Information Reports"
									value="97"
									icon="information-icon.svg"
									URL="/psmt/reports"
								/>
							</div>
							<div className='col-lg-6'>
								<div className='repeat-white-bx mt-5 pb-2'>
									<h2>Background Checks</h2>
									<ul className='chat-indicators'>
										<li><span className='baby-blue-color'></span> ID</li>
										<li><span className='purple-color'></span> Criminal</li>
										<li><span className='pink-color'></span> Employment</li>
										<li><span className='yellow-color'></span> Driving</li>
										<li><span className='green-color'></span> Education</li>
									</ul>
									<Bar
										data={{
											labels: ['', '', '', '', ''],
											datasets: [{
												data: [12, 19, 3, 5, 2],
												backgroundColor: [
													'#35BAE9',
													'#9B55E5',
													'#F9327A',
													'#FCC103',
													'#42DABF'
												],
												borderColor: [
													'rgba(54, 162, 235, 1)',
													'rgba(153, 102, 255, 1)',
													'rgba(255, 99, 132, 1)',
													'rgba(255, 206, 86, 1)',
													'rgba(75, 192, 192, 1)'
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
							</div>
							<div className='col-lg-6'>
								<div className='repeat-white-bx mt-5 pb-2'>
									<h2>KYC</h2>
									<ul className='chat-indicators'>
										<li><span className='baby-blue-color'></span> Shareholding & Directorship</li>
										<li><span className='purple-color'></span> Credit</li>
										<li><span className='pink-color'></span> Site Visit</li>
										<li><span className='yellow-color'></span> Customer Reference</li>
									</ul>
									<Bar
										data={{
											labels: ['', '', '', ''],
											datasets: [{
												label: '',
												data: [12, 19, 3, 5],
												backgroundColor: [
													'#35BAE9',
													'#9B55E5',
													'#F9327A',
													'#FCC103'
												],
												borderColor: [
													'rgba(54, 162, 235, 1)',
													'rgba(153, 102, 255, 1)',
													'rgba(255, 99, 132, 1)',
													'rgba(255, 206, 86, 1)'
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
							</div>
							<div className='col-lg-6'>
								<div className='repeat-white-bx mt-5'>
									<h2>Recruitment</h2>
									<div className='row'>
										<div className='col-lg-6'>
											<Pie
												data={{
													labels: ['', '', '', ''],
													datasets: [{
														label: '# of Votes',
														data: [12, 19, 3, 5],
														backgroundColor: [
															'#35BAE9',
															'#9B55E5',
															'#F9327A',
															'#FCC103'
														],
														borderColor: [
															'rgba(54, 162, 235, 1)',
															'rgba(153, 102, 255, 1)',
															'rgba(255, 99, 132, 1)',
															'rgba(255, 206, 86, 1)'
														],
														borderWidth: 1
													}]
												}}
												height={100}
												options={{
													yAxes: [{
														gridLines: {
															drawBorder: false,
														},
													}],
													plugins: {
														datalabels: {
															display: true,
															align: 'bottom',
															backgroundColor: '#ccc',
															borderRadius: 3,
															font: {
																size: 18,
															}
														},
														legend: {
															display: false
														}
													},
													barThickness: 30,
												}}
											/>
										</div>
										<div className='col-lg-5 offset-lg-1 align-self-center'>
											<ul className='chat-indicators half'>
												<li><span className='baby-blue-color'></span> Executive</li>
												<li><span className='purple-color'></span> Senior</li>
												<li><span className='pink-color'></span> Mid</li>
												<li><span className='yellow-color'></span> Entry</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='repeat-white-bx mt-5 pb-2'>
									<h2> Analytics </h2>
									<ul className='chat-indicators'>
										<li><span className='baby-blue-color'></span> Male</li>
										<li><span className='yellow-color'></span> Female</li>
									</ul>
									<Bar
										data={{
											labels: ['Q1', 'Q2', 'Q3', 'Q4'],
											datasets: [{
												label: "Male",
												type: "bar",
												stack: "Male",
												backgroundColor: "#FCC103",
												data: [30, 31, 32, 33, 34, 35, 36],
											}, {
												label: "Female",
												type: "bar",
												stack: "Female",
												backgroundColor: "#35BAE9",
												data: [10, 11, 12, 13, 14, 15, 16]
											}]
										}}
										height={125}
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
							</div>
						</div>
					</div>
					<div className='col-lg-3'>
						<div className='dashboard-side-info'>
							<div className='dashboard-side-col'>
								<div className='creditBalanceBx' onClick={() => history.push("/psmt/payments-postpay")}>
									<h2>Credits Balance <Link to="/">Top Up</Link></h2>
									<strong>654, 321 KES</strong>
								</div>
							</div>
							<div className='dashboard-side-col'>
								<h2>Top Packages</h2>
								<ProgressBar
									progress={`${ExperiencedProgress}%`}
									label={ExperiencedProgress}
									title="Experienced"
									theme="baby-blue-color"
								/>
								<ProgressBar
									progress={`${ProfessionalProgress}%`}
									label={ProfessionalProgress}
									title="Professional"
									theme="purple-color"
								/>
								<ProgressBar
									progress={`${VendorKYCProgress}%`}
									label={VendorKYCProgress}
									title="Vendor KYC"
									theme="pink-color"
								/>
								<ProgressBar
									progress={`${DriverProgress}%`}
									label={DriverProgress}
									title="Driver"
									theme="yellow-color"
								/>
								<ProgressBar
									progress={`${EntryProgress}%`}
									label={EntryProgress}
									title="Entry"
									theme="green-color"
								/>
							</div>
							<div className='dashboard-side-col'>
								<h2>Recent Activities</h2>
								<NotificationCol
									image="notification-img1.png"
									activity="Keith Jensen requested for background checks"
									time="20 mins ago"
								/>
								<NotificationCol
									image="notification-img2.png"
									activity="Harry Simpson viewed reports"
									time="2 hours ago"
								/>
								<NotificationCol
									image="notification-img3.png"
									activity="Sara Met requested KYC"
									time="1 day ago"
								/>
								<NotificationCol
									image="notification-img4.png"
									activity="Brian Aseto requested for Insight reports"
									time="1 day ago"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PsmtDashboard
