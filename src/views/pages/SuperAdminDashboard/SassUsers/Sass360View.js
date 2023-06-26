import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Currencies from '../../../components/ClientDetails/Currencies';
import ClientOverview from '../../../components/ClientDetails/Overview';
import Users from '../../../components/ClientDetails/Users';
import '../../PidvaDashboard/ClientManagement/ClientManagement.scss'
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import MaterialTable from 'material-table';
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const Sass360View = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Client 360 View</h1>
				<Tabs
					defaultActiveKey="Overview"
					transition={true}
					className="common-tabs common-tabs-layout-2"
				>
					<Tab eventKey="Overview" title="Overview">
						<div className='row'>
							<div className='col-lg-8 d-flex'>
								<div className='repeat-white-bx'>
									<h2> Overview </h2>
									<div className='row'>
										<div className='col-lg-4 mb-5'>
											<DashboardOverviewBx
												title="Credits"
												value="1,234"
												icon="pidva-icons/credits-icon.svg"
												color="#9B55E5"
											/>
										</div>
										<div className='col-lg-4 mb-5'>
											<DashboardOverviewBx
												title="BGC"
												value="3,456"
												icon="pidva-icons/interim-icon.svg"
												iconClass="white-icon"
												color="#F9327A"
											/>
										</div>
										<div className='col-lg-4 mb-5'>
											<DashboardOverviewBx
												title="KYC"
												value="1,234"
												icon="pidva-icons/bgc-servicies-icon.svg"
												color="#42DABF"
											/>
										</div>
										<div className='col-lg-4'>
											<DashboardOverviewBx
												title="Alerts"
												value="234"
												icon="pidva-icons/reports-icon.svg"
												color="#FCC103"
											/>
										</div>
										<div className='col-lg-4'>
											<DashboardOverviewBx
												title="Clients"
												value="3,456"
												icon="pidva-icons/alerts-icon.svg"
												color="#69C848"
											/>
										</div>
										<div className='col-lg-4'>
											<DashboardOverviewBx
												title="Active Sub Services"
												value="2,345"
												icon="pidva-icons/kyc-services-icon.svg"
												color="#35BAE9"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className='col-lg-4 d-flex'>
								<div className='repeat-white-bx'>
									<div className='clientDetails'>
										<div className='row'>
											<div className='col-lg-6'>
												<h4>SaaS Name</h4>
												<p>XYZ Ltd</p>
											</div>
											<div className='col-lg-6'>
												<h4>Office Address</h4>
												<p>307, 3rd Floor Reliance Centre</p>
											</div>
											<div className='col-lg-6'>
												<h4>Country Of Incorporation</h4>
												<p>Kenya</p>
											</div>
											<div className='col-lg-6'>
												<h4>Countries of Operation</h4>
												<p>Kenya Rwanda Uganda Nigeria</p>
											</div>
											<div className='col-lg-6'>
												<h4>Date Created</h4>
												<p>17 Oct 2021</p>
											</div>
											<div className='col-lg-6'>
												<h4>Created By</h4>
												<p>Christy Yen</p>
											</div>
											<div className='col-lg-6'>
												<h4>Date Verified</h4>
												<p>17 Oct 2021</p>
											</div>
											<div className='col-lg-6'>
												<h4>Verified by</h4>
												<p className='mb-0'>Jane Doe</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='repeat-white-bx mt-5'>
									<h2> Metrics </h2>
									<div className='row'>
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
										<div className='col-lg-12 mt-5 mt-lg-0'>
											<Bar
												data={{
													labels: ['ID', 'Education', 'Employment', 'Criminal', 'Company Reg', 'Credit', 'Business Reg', 'Social Media'],
													datasets: [{
														data: [12, 30, 25, 5, 12, 11, 9, 5],
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
											<h4 className='mt-3 text-center mb-0'>Annual Requests</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Tab>
					<Tab eventKey="Users" title="Users">
						<MaterialTable
							title="Users"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{
									title: 'User Pic', field: 'UserPic',
									render: (rowData) => {
										return (
											<img src={rowData.UserPic} className="tableUserImage" alt="user" />
										)
									}
								},
								{ title: 'User Name', field: 'UserName' },
								{ title: 'ID Number.', field: 'IDNumber' },
								{ title: 'Email Address', field: 'EmailAddress' },
								{ title: 'Role', field: 'Role' },
								{ title: 'Main Service', field: 'MainService' },
								{
									title: 'Status', field: 'Status',
									render: (rowData) => {
										return (
											rowData.Status === "0" ? <span className="badge badge-danger">Deactivated</span> :
												rowData.Status === "1" ? <span className="badge badge-success">Active</span> :
													rowData.Status === "3" ? <span className="badge badge-warning">Dormant</span> : null
										)
									}
								},
							]}
							data={[
								{ UserPic: "/images/notification-img1.png", UserName: "Yas Min", IDNumber: "1234567", EmailAddress: "ali@ Codinput.co", Role: "Client Admin", MainService: "KYC, BGC", Status: "1", },
								{ UserPic: "/images/notification-img1.png", UserName: "Yas Min", IDNumber: "1234567", EmailAddress: "rr@codin.co", Role: "Team Member", MainService: "KYC, BGC", Status: "3", },
								{ UserPic: "/images/notification-img1.png", UserName: "Yas Min", IDNumber: "1234567", EmailAddress: "hm@codin.co", Role: "Team Member", MainService: "KYC, BGC", Status: "0", },
							]}
							options={{
								actionsColumnIndex: -1,
								pageSize: 10
							}}
						/>
					</Tab>
					<Tab eventKey="Currencies" title="Currencies">
						<Currencies />
					</Tab>
				</Tabs>
			</section>
		</>
	);
}

export default Sass360View
