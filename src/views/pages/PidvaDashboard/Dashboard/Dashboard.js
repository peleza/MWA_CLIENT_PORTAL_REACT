import React from 'react';
import DashboardInfoBx from '../../../components/DashboardInfoBx/DashboardInfoBx';
import { Bar, Pie, Doughnut } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { Link } from 'react-router-dom';
import { SelectBox } from '../../../components/InputText/InputText';
import { LinkButton } from '../../../components/Button/Button';
import './Dashboard.scss';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
// import NotificationCol from '../../../components/NotificationCol/NotificationCol';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
Chart.register(...registerables);

const PidvaDashboard = () => {
	const ExperiencedProgress = 60;
	const ProfessionalProgress = 76;
	const VendorKYCProgress = 82;
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Leader Board</h1>
				<div className='row row-col-5'>
					<div className='col mb-5'>
						<DashboardInfoBx
							URL=""
							color="baby-blue-color"
							title="New Requests"
							value="3,557"
							icon="pidva-icons/new-request-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="pink-color"
							title="Requests Nearing TAT"
							value="3,557"
							icon="pidva-icons/nearing-tat-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="red-color"
							title="Interim Past TAT"
							value="3,557"
							icon="pidva-icons/interim-past-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="coral-color"
							title="Urgent"
							value="885"
							icon="pidva-icons/complete-reports-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="grey-color"
							title="Checks Not Started"
							value="885"
							icon="pidva-icons/reports-not-started-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="purple-color"
							title="In Progress"
							value="5,691"
							icon="pidva-icons/in-progress-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="orange-color"
							title="Interim"
							value="885"
							icon="pidva-icons/interim-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="aqua-color"
							title="Reports Pending Review"
							value="885"
							icon="pidva-icons/pending-review-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="yellow-color"
							title="Pending Client Action"
							value="97"
							icon="pidva-icons/pending-action-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL=""
							color="green-color2"
							title="Complete"
							value="97"
							icon="pidva-icons/complete-icon.svg"
						/>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Most Requested Checks</h2>
							<div className='row'>
								<div className='col-lg-7'>
									<Pie
										data={{
											labels: ['Credit', 'Criminal', 'ID', 'Education'],
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
								<div className='col-lg-5 align-self-center'>
									<ul className='chat-indicators full'>
										<li><span className='baby-blue-color'></span> Credit</li>
										<li><span className='purple-color'></span> Criminal</li>
										<li><span className='pink-color'></span> ID</li>
										<li><span className='yellow-color'></span> Education</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Top Clients</h2>
							<div className='contentWithImgBx'>
								<div className='contentImg'>
									<img src="/images/bfa-global.png" alt="bfa" />
								</div>
								<div className='content'>
									<h2>BFA Global</h2>
									<p>23,000 Requests</p>
								</div>
								<Link to="/" className="text-btn ms-auto">View</Link>
							</div>
							<div className='contentWithImgBx'>
								<div className='contentImg'>
									<img src="/images/bfa-global.png" alt="bfa" />
								</div>
								<div className='content'>
									<h2>BFA Global</h2>
									<p>23,000 Requests</p>
								</div>
								<Link to="/" className="text-btn ms-auto">View</Link>
							</div>
							<div className='contentWithImgBx'>
								<div className='contentImg'>
									<img src="/images/bfa-global.png" alt="bfa" />
								</div>
								<div className='content'>
									<h2>BFA Global</h2>
									<p>23,000 Requests</p>
								</div>
								<Link to="/" className="text-btn ms-auto">View</Link>
							</div>
							<div className='contentWithImgBx'>
								<div className='contentImg'>
									<img src="/images/bfa-global.png" alt="bfa" />
								</div>
								<div className='content'>
									<h2>BFA Global</h2>
									<p>23,000 Requests</p>
								</div>
								<Link to="/" className="text-btn ms-auto">View</Link>
							</div>
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Top Countries</h2>
							<div className='row'>
								<div className='col-lg-6 mb-4'>
									<div className='contentWithImgBx'>
										<div className='contentImg'>
											<img src="/images/flag1.png" alt="bfa" />
										</div>
										<div className='content'>
											<h2>Nigeria</h2>
											<p>23,000 Requests</p>
										</div>
									</div>
								</div>
								<div className='col-lg-6 mb-4'>
									<div className='contentWithImgBx'>
										<div className='contentImg'>
											<img src="/images/flag2.png" alt="bfa" />
										</div>
										<div className='content'>
											<h2>Ghana</h2>
											<p>23,000 Requests</p>
										</div>
									</div>
								</div>
								<div className='col-lg-6 mb-4'>
									<div className='contentWithImgBx'>
										<div className='contentImg'>
											<img src="/images/flag3.png" alt="bfa" />
										</div>
										<div className='content'>
											<h2>Kenya</h2>
											<p>23,000 Requests</p>
										</div>
									</div>
								</div>
								<div className='col-lg-6 mb-4'>
									<div className='contentWithImgBx'>
										<div className='contentImg'>
											<img src="/images/flag4.png" alt="bfa" />
										</div>
										<div className='content'>
											<h2>South Africa</h2>
											<p>23,000 Requests</p>
										</div>
									</div>
								</div>
								<div className='col-lg-6 mb-4'>
									<div className='contentWithImgBx'>
										<div className='contentImg'>
											<img src="/images/flag3.png" alt="bfa" />
										</div>
										<div className='content'>
											<h2>Uganda</h2>
											<p>23,000 Requests</p>
										</div>
									</div>
								</div>
								<div className='col-lg-6 mb-4'>
									<div className='contentWithImgBx'>
										<div className='contentImg'>
											<img src="/images/flag4.png" alt="bfa" />
										</div>
										<div className='content'>
											<h2>Tanzania</h2>
											<p>23,000 Requests</p>
										</div>
									</div>
								</div>
								<div className='col-lg-6 mb-4'>
									<div className='contentWithImgBx'>
										<div className='contentImg'>
											<img src="/images/flag3.png" alt="bfa" />
										</div>
										<div className='content'>
											<h2>Senegal</h2>
											<p>23,000 Requests</p>
										</div>
									</div>
								</div>
								<div className='col-lg-6 mb-4'>
									<div className='contentWithImgBx'>
										<div className='contentImg'>
											<img src="/images/flag4.png" alt="bfa" />
										</div>
										<div className='content'>
											<h2>Ethiopia</h2>
											<p>23,000 Requests</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='repeat-white-bx mt-5 mb-5'>
					<h2>
						Team Productivity
						<div className='d-flex align-items-center'>
							<SelectBox
								name="filter_data"
								FormGroupClass="mb-0 form-control-sm form-control-style2"
								optionData={
									<>
										<option value="">Last Month</option>
										<option value="1"> Last Week  </option>
									</>
								}
							/>
							<LinkButton
								text="View All"
								to="/pidva/team-productivity"
								className="btn-secondary btn-sm ms-2"
							/>
						</div>
					</h2>

					<div className='row'>
						<div className='col-lg-4'>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Within TAT",
										type: "bar",
										stack: "Within TAT",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Past TAT",
										type: "bar",
										stack: "Past TAT",
										backgroundColor: "#F9327A",
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
							<h4 className='mt-3 mb-0 text-center'>Final Reports TAT</h4>
						</div>
						<div className='col-lg-4'>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Within TAT",
										type: "bar",
										stack: "Within TAT",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Past TAT",
										type: "bar",
										stack: "Past TAT",
										backgroundColor: "#F9327A",
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
							<h4 className='mt-3 mb-0 text-center'>In progress Reports TAT</h4>
						</div>
						<div className='col-lg-4'>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Within TAT",
										type: "bar",
										stack: "Within TAT",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Past TAT",
										type: "bar",
										stack: "Past TAT",
										backgroundColor: "#F9327A",
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
							<h4 className='mt-3 mb-0 text-center'>Interim Reports TAT</h4>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-8'>
						<div className='repeat-white-bx best-performer'>
							<h2>
								Best Performer

								<LinkButton
									text="View All"
									to="/pidva/team-productivity"
									className="btn-secondary btn-xs ms-2"
								/>
							</h2>
							<div className='row'>
								<div className='col-lg-4'>
									<div className='best-performer-col'>
										<div className='user-profile-progress'>
											<img src="/images/notification-img1.png" alt="" />
											<span className='profile-progress'>70%</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={104} height={104} viewBox="0 0 104 104"> <defs> <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n      #Ellipse_2368 {\n          stroke-dasharray: 314;\n            transform: translate(1077px, 235px) rotate(270deg);\n            transform-origin: center;\n            transform-box: fill-box;\n      }\n    " }} /> </defs> <g id="profile-complete" transform="translate(-1075 -233)"> <g id="Ellipse_2356" data-name="Ellipse 2356" transform="translate(1078 236)" fill="none" stroke="#dfdfdf" strokeWidth={1}> <circle cx="49.033" cy="49.033" r="49.033" stroke="none" /> <circle cx="49.033" cy="49.033" r="49.533" fill="none" /> </g> <circle id="Ellipse_2368" data-name="Ellipse 2368" cx={50} cy={50} r={50} transform="translate(1077 235)" strokeDashoffset="235.5" fill="none" stroke="#F9327A" strokeWidth={4} /> </g> </svg>
										</div>
										<div className='progress-col'>
											<h2 className='mb-3'>Jen Ali</h2>
											<ProgressBar
												progress={`${ExperiencedProgress}%`}
												label={ExperiencedProgress}
												title="Finals Within TAT"
												theme="baby-blue-color"
											/>
											<ProgressBar
												progress={`${ProfessionalProgress}%`}
												label={ProfessionalProgress}
												title="Final Past TAT"
												theme="purple-color"
											/>
											<ProgressBar
												progress={`${VendorKYCProgress}%`}
												label={VendorKYCProgress}
												title="In Progress"
												theme="pink-color"
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-4'>
									<div className='best-performer-col'>
										<div className='user-profile-progress'>
											<img src="/images/notification-img1.png" alt="" />
											<span className='profile-progress'>70%</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={104} height={104} viewBox="0 0 104 104"> <defs> <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n      #Ellipse_2368 {\n          stroke-dasharray: 314;\n            transform: translate(1077px, 235px) rotate(270deg);\n            transform-origin: center;\n            transform-box: fill-box;\n      }\n    " }} /> </defs> <g id="profile-complete" transform="translate(-1075 -233)"> <g id="Ellipse_2356" data-name="Ellipse 2356" transform="translate(1078 236)" fill="none" stroke="#dfdfdf" strokeWidth={1}> <circle cx="49.033" cy="49.033" r="49.033" stroke="none" /> <circle cx="49.033" cy="49.033" r="49.533" fill="none" /> </g> <circle id="Ellipse_2368" data-name="Ellipse 2368" cx={50} cy={50} r={50} transform="translate(1077 235)" strokeDashoffset="235.5" fill="none" stroke="#F9327A" strokeWidth={4} /> </g> </svg>
										</div>
										<div className='progress-col'>
											<h2 className='mb-3'>Jen Ali</h2>
											<ProgressBar
												progress={`${ExperiencedProgress}%`}
												label={ExperiencedProgress}
												title="Finals Within TAT"
												theme="baby-blue-color"
											/>
											<ProgressBar
												progress={`${ProfessionalProgress}%`}
												label={ProfessionalProgress}
												title="Final Past TAT"
												theme="purple-color"
											/>
											<ProgressBar
												progress={`${VendorKYCProgress}%`}
												label={VendorKYCProgress}
												title="In Progress"
												theme="pink-color"
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-4'>
									<div className='best-performer-col'>
										<div className='user-profile-progress'>
											<img src="/images/notification-img1.png" alt="" />
											<span className='profile-progress'>70%</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={104} height={104} viewBox="0 0 104 104"> <defs> <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n      #Ellipse_2368 {\n          stroke-dasharray: 314;\n            transform: translate(1077px, 235px) rotate(270deg);\n            transform-origin: center;\n            transform-box: fill-box;\n      }\n    " }} /> </defs> <g id="profile-complete" transform="translate(-1075 -233)"> <g id="Ellipse_2356" data-name="Ellipse 2356" transform="translate(1078 236)" fill="none" stroke="#dfdfdf" strokeWidth={1}> <circle cx="49.033" cy="49.033" r="49.033" stroke="none" /> <circle cx="49.033" cy="49.033" r="49.533" fill="none" /> </g> <circle id="Ellipse_2368" data-name="Ellipse 2368" cx={50} cy={50} r={50} transform="translate(1077 235)" strokeDashoffset="235.5" fill="none" stroke="#F9327A" strokeWidth={4} /> </g> </svg>
										</div>
										<div className='progress-col'>
											<h2 className='mb-3'>Jen Ali</h2>
											<ProgressBar
												progress={`${ExperiencedProgress}%`}
												label={ExperiencedProgress}
												title="Finals Within TAT"
												theme="baby-blue-color"
											/>
											<ProgressBar
												progress={`${ProfessionalProgress}%`}
												label={ProfessionalProgress}
												title="Final Past TAT"
												theme="purple-color"
											/>
											<ProgressBar
												progress={`${VendorKYCProgress}%`}
												label={VendorKYCProgress}
												title="In Progress"
												theme="pink-color"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='row'>
							<div className='col-lg-6 d-flex'>
							</div>

							<div className='col-lg-6 d-flex'>
								<div className='repeat-white-bx leave-application'>
									<h2>
										Leave Application

										<LinkButton
											text="View All"
											to="/"
											className="btn-secondary btn-xs ms-2"
										/>
									</h2>
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
								</div>
							</div>
						</div> */}

						<div className='repeat-white-bx leave-application mt-5'>
							<h2>
								Overview

								<SelectBox
									name="filter_data"
									FormGroupClass="mb-0 form-control-sm form-control-style2"
									optionData={
										<>
											<option value="">Last Month</option>
											<option value="1"> Last Week  </option>
										</>
									}
								/>
							</h2>

							<div className='row'>
								<div className='col-lg-4 mb-5'>
									<DashboardOverviewBx
										title="Checks"
										value="567,890"
										icon="pidva-icons/checks-icon.svg"
										color="#9B55E5"
									/>
								</div>
								<div className='col-lg-4 mb-5'>
									<DashboardOverviewBx
										title="Alerts"
										value="4,123"
										icon="pidva-icons/alerts-icon.svg"
										color="#F9327A"
									/>
								</div>
								<div className='col-lg-4 mb-5'>
									<DashboardOverviewBx
										title="Reports"
										value="7,345"
										icon="pidva-icons/reports-icon.svg"
										color="#42DABF"
									/>
								</div>
								<div className='col-lg-4'>
									<DashboardOverviewBx
										title="Clients"
										value="97"
										icon="pidva-icons/client-icon.svg"
										color="#FCC103"
									/>
								</div>
								<div className='col-lg-4'>
									<DashboardOverviewBx
										title="Candidates"
										value="18,987"
										icon="pidva-icons/candidates-icon.svg"
										color="#69C848"
									/>
								</div>
								<div className='col-lg-4'>
									<DashboardOverviewBx
										title="Companies"
										value="563,789"
										icon="pidva-icons/companies-icon.svg"
										color="#35BAE9"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx'>
							<h2>
								Job distribution

								<SelectBox
									name="filter_data"
									FormGroupClass="mb-0 form-control-sm form-control-style2"
									optionData={
										<>
											<option value="">Last Month</option>
											<option value="1"> Last Week  </option>
										</>
									}
								/>
							</h2>
							<ul className='chat-indicators mb-5'>
								<li><span className='purple-color'></span> Ongoing</li>
								<li><span className='pink-color'></span> New</li>
								<li><span className='green-color'></span> Not Started</li>
								<li><span className='grey-color'></span> Overdue</li>
							</ul>
							<div className='row'>
								<div className='col-lg-6 mb-5'>
									<Doughnut
										data={{
											labels: ['Ongoing', 'New', 'Not Started', 'Overdue'],
											datasets: [{
												label: '# of Votes',
												data: [12, 19, 3, 5],
												backgroundColor: [
													'#9B55E5',
													'#F9327A',
													'#42DABF',
													'#7E7E7E',
												],
												borderColor: [
													'rgba(153, 102, 255, 1)',
													'rgba(255, 99, 132, 1)',
													'rgba(66, 218, 191, 1)',
													'rgba(126, 126, 126, 1)',
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
									<h3 className='text-center mt-3'>Nephat <small>Total 58</small></h3>
								</div>
								<div className='col-lg-6 mb-5'>
									<Doughnut
										data={{
											labels: ['Ongoing', 'New', 'Not Started', 'Overdue'],
											datasets: [{
												label: '# of Votes',
												data: [12, 19, 3, 5],
												backgroundColor: [
													'#9B55E5',
													'#F9327A',
													'#42DABF',
													'#7E7E7E',
												],
												borderColor: [
													'rgba(153, 102, 255, 1)',
													'rgba(255, 99, 132, 1)',
													'rgba(66, 218, 191, 1)',
													'rgba(126, 126, 126, 1)',
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
									<h3 className='text-center mt-3'>Ken <small>Total 107</small></h3>
								</div>
								<div className='col-lg-6'>
									<Doughnut
										data={{
											labels: ['Ongoing', 'New', 'Not Started', 'Overdue'],
											datasets: [{
												label: '# of Votes',
												data: [12, 19, 3, 5],
												backgroundColor: [
													'#9B55E5',
													'#F9327A',
													'#42DABF',
													'#7E7E7E',
												],
												borderColor: [
													'rgba(153, 102, 255, 1)',
													'rgba(255, 99, 132, 1)',
													'rgba(66, 218, 191, 1)',
													'rgba(126, 126, 126, 1)',
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
									<h3 className='text-center mt-3'>Ken <small>Total 107</small></h3>
								</div>
								<div className='col-lg-6'>
									<Doughnut
										data={{
											labels: ['Ongoing', 'New', 'Not Started', 'Overdue'],
											datasets: [{
												label: '# of Votes',
												data: [12, 19, 3, 5],
												backgroundColor: [
													'#9B55E5',
													'#F9327A',
													'#42DABF',
													'#7E7E7E',
												],
												borderColor: [
													'rgba(153, 102, 255, 1)',
													'rgba(255, 99, 132, 1)',
													'rgba(66, 218, 191, 1)',
													'rgba(126, 126, 126, 1)',
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
									<h3 className='text-center mt-3'>Ken <small>Total 107</small></h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PidvaDashboard
