import React from 'react';
import DashboardInfoBx from '../../../components/DashboardInfoBx/DashboardInfoBx';
import { Bar, Line, Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { Link } from 'react-router-dom';
import '../../PidvaDashboard/Dashboard/Dashboard.scss';
import { Dropdown } from "react-bootstrap";
import { MdNotificationsActive } from 'react-icons/md';
Chart.register(...registerables);

const AdminDashboard = () => {
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
							URL="/pidva/bgc"
							color="baby-blue-color"
							title="Candidates"
							value="3,557"
							icon="pidva-icons/new-request-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="pink-color"
							title="Companies"
							value="3,557"
							icon="pidva-icons/nearing-tat-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="green-color2"
							title="Recruitments"
							value="3,557"
							icon="pidva-icons/interim-past-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="coral-color"
							title="Insights"
							value="885"
							icon="pidva-icons/complete-reports-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="grey-color"
							title="Data Sources"
							value="885"
							icon="pidva-icons/reports-not-started-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="purple-color"
							title="Countries"
							value="5,691"
							icon="pidva-icons/in-progress-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="orange-color"
							title="Services"
							value="885"
							icon="pidva-icons/interim-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="aqua-color"
							title="Sub Services"
							value="885"
							icon="pidva-icons/pending-review-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="yellow-color"
							title="Active SaaS"
							value="97"
							icon="pidva-icons/pending-action-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							URL="/pidva/bgc"
							color="red-color"
							title="Alerts"
							value="97"
							icon="pidva-icons/complete-icon.svg"
						/>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-6 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Top SaaS <small>by sales</small></h2>
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
					<div className='col-lg-6 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Top SaaS <small>By requests</small></h2>
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
					<div className='col-lg-6 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Top Countries <small>by sales</small></h2>
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
					<div className='col-lg-6 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Top Countries <small>by requests</small></h2>
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
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Service Demand</h2>
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
										<li><span className='baby-blue-color'></span> Insights</li>
										<li><span className='purple-color'></span> KYC</li>
										<li><span className='pink-color'></span> Recruitment</li>
										<li><span className='yellow-color'></span> Education</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Sub Service Demand</h2>
							<Bar
								data={{
									labels: ['Criminal', 'Employment', 'Education', 'Identity',],
									datasets: [{
										data: [600, 500, 700, 1000,],
										backgroundColor: [
											'#00B0F0',
											'#F4B183',
											'#FFC000',
											'#E0A8E9',
										],
										borderColor: [
											'rgba(0, 176, 240, 1)',
											'rgba(244, 177, 131, 1)',
											'rgba(255, 192, 0, 1)',
											'rgba(224, 168, 233, 1)',
										],
										borderWidth: 1
									}]
								}}
								height={100}
								options={{
									indexAxis: 'y',
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
									barThickness: 20
								}}
							/>
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Data Source Demand</h2>
							<div className='row'>
								<div className='col-lg-7'>
									<Pie
										data={{
											labels: ['DCI', 'IPRS', 'Metropol', 'QC'],
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
										<li><span className='baby-blue-color'></span> DCI</li>
										<li><span className='purple-color'></span> IPRS</li>
										<li><span className='pink-color'></span> QC</li>
										<li><span className='yellow-color'></span> Metropol</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx lifetimeRevenue mt-5'>
							<h2>Lifetime Revenue</h2>
							<h3>KES 987,654,321</h3>
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>New vs Recurrent Revenue</h2>
							<div className='row'>
								<div className='col-lg-7'>
									<Pie
										data={{
											labels: ['New', 'Recurrent',],
											datasets: [{
												label: '# of Votes',
												data: [12, 19,],
												backgroundColor: [
													'#35BAE9',
													'#FCC103'
												],
												borderColor: [
													'rgba(54, 162, 235, 1)',
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
										<li><span className='baby-blue-color'></span> New</li>
										<li><span className='yellow-color'></span> Recurrent</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Subscription vs Sub Service Revenue</h2>
							<div className='row'>
								<div className='col-lg-7'>
									<Pie
										data={{
											labels: ['Subscription', 'Sub Service Revenue',],
											datasets: [{
												label: '# of Votes',
												data: [14, 17,],
												backgroundColor: [
													'#FCC103',
													'#9B55E5'
												],
												borderColor: [
													'rgba(255, 206, 86, 1)',
													'rgba(153, 102, 255, 1)'
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
										<li><span className='purple-color'></span> Subscription</li>
										<li><span className='yellow-color'></span> Sub Service Revenue</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* <div className='col-lg-4'>
						<div className='repeat-white-bx mt-5'>
							<h2>Notifications</h2>
							<div className='notification-bx dashboardNotification'>
								<Link to="/" className="dropdown-item">
									<span><MdNotificationsActive /></span>
									<div>
										<p>Your visit has been rescheduled.</p>
										<small>08/20/2020</small>
									</div>
								</Link>
								<Link to="/" className="dropdown-item">
									<span><MdNotificationsActive /></span>
									<div>
										<p>Trial Application Rescheduled For Screening</p>
										<small>08/20/2020</small>
									</div>
								</Link>
								<Link to="/" className="dropdown-item">
									<span><MdNotificationsActive /></span>
									<div>
										<p>Your visit has been rescheduled.</p>
										<small>08/20/2020</small>
									</div>
								</Link>
								<Link to="/" className="dropdown-item">
									<span><MdNotificationsActive /></span>
									<div>
										<p>Trial Application Rescheduled For Screening</p>
										<small>08/20/2020</small>
									</div>
								</Link>
							</div>
						</div>
					</div> */}
					<div className='col-lg-12 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Revenue</h2>
							<div className='row'>
								<div className='col-lg-6'>
									<Line
										data={{
											labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
											datasets: [{
												label: 'REVENUE',
												data: [400, 500, 600, 500, 600, 900, 1000, 1200, 1300, 1000, 1550, 1700,],
												fill: false,
												borderColor: 'rgb(75, 192, 192)',
												tension: 0.1,
												type: "bar",
												backgroundColor: "#9B55E5",
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
								<div className='col-lg-6'>
									<ul className='chat-indicators'>
										<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Subscription</li>
										<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Service Credits</li>
									</ul>
									<Bar
										data={{
											labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
											datasets: [{
												label: "Subscription",
												type: "bar",
												stack: "Subscription",
												backgroundColor: "#9B55E5",
												data: [400, 500, 600, 500, 600, 900, 1000, 1200, 1300, 1000, 1550, 1700,],
											}, {
												label: "Service Credits",
												type: "bar",
												stack: "Service Credits",
												backgroundColor: "#F9327A",
												data: [400, 500, 600, 500, 600, 900, 1000, 1200, 1300, 1000, 1550, 1700,],
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
											barThickness: 10
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-12 d-flex'>
						<div className='repeat-white-bx mt-5'>
							<h2>Most Alerts</h2>
							<div className='row'>
								<div className='col-lg-6'>
									<Bar
										data={{
											labels: ['Wrong employment dates', 'Employment Termination', 'Adverse Social Media', 'Bad Credit', 'Forged Certificate', 'Did not Graduate'],
											datasets: [{
												data: [600, 500, 700, 1000, 700, 1000,],
												backgroundColor: [
													'#00B0F0',
													'#F4B183',
													'#FFC000',
													'#E0A8E9',
												],
												borderColor: [
													'rgba(0, 176, 240, 1)',
													'rgba(244, 177, 131, 1)',
													'rgba(255, 192, 0, 1)',
													'rgba(224, 168, 233, 1)',
												],
												borderWidth: 1
											}]
										}}
										height={100}
										options={{
											indexAxis: 'y',
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
											barThickness: 20
										}}
									/>
								</div>
								<div className='col-lg-6'>
									{/* <ul className='chat-indicators'>
										<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
										<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
									</ul> */}
									<Bar
										data={{
											labels: ['Identity', 'Criminal', 'Adverse Social Media', 'Credit', 'Employment', 'Education'],
											datasets: [{
												data: [600, 500, 700, 1000, 700, 1000,],
												backgroundColor: [
													'#00B0F0',
													'#F4B183',
													'#FFC000',
													'#E0A8E9',
												],
												borderColor: [
													'rgba(0, 176, 240, 1)',
													'rgba(244, 177, 131, 1)',
													'rgba(255, 192, 0, 1)',
													'rgba(224, 168, 233, 1)',
												],
												borderWidth: 1
											}]
										}}
										height={100}
										options={{
											indexAxis: 'y',
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
											barThickness: 20
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default AdminDashboard
