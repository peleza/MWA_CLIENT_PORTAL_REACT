import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Currencies from '../../../components/ClientDetails/Currencies';
import '../../PidvaDashboard/ClientManagement/ClientManagement.scss'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Button } from '../../../components/Button/Button';
import MaterialTable from '@material-table/core';
Chart.register(...registerables);


const DataSource360View = () => {
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
								<div className='repeat-white-bx w-100'>
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
												title="Sub Services"
												value="3"
												icon="pidva-icons/interim-icon.svg"
												iconClass="white-icon"
												color="#F9327A"
											/>
										</div>
										<div className='col-lg-4 mb-5'>
											<DashboardOverviewBx
												title="Searches"
												value="1,234"
												icon="pidva-icons/bgc-servicies-icon.svg"
												color="#42DABF"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className='col-lg-4 d-flex'>
								<div className='repeat-white-bx w-100'>
									<div className='clientDetails'>
										<div className='row'>
											<div className='col-lg-8'>
												<h4>Data Source Name</h4>
												<p>XYZ Ltd</p>
											</div>
											<div className='col-lg-4 text-end'>
												<Button
													btnName="Active"
													type="submit"
													className="btn-secondary btn-sm"
												/>
											</div>
											<div className='col-lg-12'>
												<h4>Office Address</h4>
												<p>307, 3rd Floor Reliance Centre</p>
											</div>
											<div className='col-lg-12'>
												<h4>Country</h4>
												<p>Kenya Rwanda Uganda Nigeria</p>
											</div>
											<div className='col-lg-12'>
												<h4>Sub Service:</h4>
												<p>National Identity Criminal Record History</p>
											</div>
											<div className='col-lg-12'>
												<h4>Date Created</h4>
												<p>17 Oct 2021</p>
											</div>
											<div className='col-lg-12'>
												<h4>Created By</h4>
												<p>Christy Yen</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-6 d-flex'>
								<div className='repeat-white-bx w-100 mt-5'>
									<h2> Annual Requests </h2>
									<div className='row'>
										<div className='col-lg-12'>
											<Bar
												data={{
													labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
													datasets: [{
														label: "National Identity",
														type: "bar",
														stack: "Jan",
														backgroundColor: "#FCC103",
														data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
													}, {
														label: "Passport",
														type: "bar",
														stack: "Jan",
														backgroundColor: "#42DABF",
														data: [30, 31, 32, 33, 34, 35, 36, 30, 31, 32, 33, 34],
													}, {
														label: "Alien ID",
														type: "bar",
														stack: "Jan",
														backgroundColor: "#F9327A",
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
											<h4 className='mt-3 text-center mb-0'>National Identity</h4>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-6 d-flex'>
								<div className='repeat-white-bx w-100 mt-5'>
									<h2> Annual Requests </h2>
									<div className='row'>
										<div className='col-lg-12 mt-5'>
											<Bar
												data={{
													labels: ['National ID', 'Passport', 'Alien ID'],
													datasets: [{
														data: [100, 400, 500],
														backgroundColor: [
															'#35BAE9',
															'#9B55E5',
															'#F9327A',
														],
														borderColor: [
															'rgba(54, 162, 235, 1)',
															'rgba(153, 102, 255, 1)',
															'rgba(255, 99, 132, 1)',
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
					<Tab eventKey="Users" title="Currencies">
						<MaterialTable
							title="Currencies"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'Currency', field: 'Currency', },
								{ title: 'Code', field: 'Code' },
								{ title: 'Date Added.', field: 'DateAdded' },
								{
									title: 'Primary Currency', field: 'PrimaryCurrency',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.PrimaryCurrency === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
							]}
							data={[
								{ Currency: "Kenya Shillings", Code: "KES", DateAdded: "18/01/2022", PrimaryCurrency: "1" },
								{ Currency: "US Dollar", Code: "USD", DateAdded: "18/01/2022", PrimaryCurrency: "0" },
								{ Currency: "British Pounds", Code: "POUNDS", DateAdded: "18/01/2022", PrimaryCurrency: "0" },
								{ Currency: "Japanese Yen", Code: "YEN", DateAdded: "18/01/2022", PrimaryCurrency: "0" },
							]}
							options={{
								actionsColumnIndex: -1,
								pageSize: 10
							}}
						/>
					</Tab>
					<Tab eventKey="Statement" title="Statement">
						<MaterialTable
							title="Statement"
							columns={[
								{ title: 'Date', field: 'Date',},
								{ title: 'Transaction', field: 'Transaction', },
								{ title: 'Sub Service', field: 'SubService' },
								{ title: 'No. of searches', field: 'NoSearches' },
								{ title: 'Total Credits used', field: 'TotalCreditsUsed' },
								{ title: 'Balance', field: 'Balance' },
							]}
							data={[
								{ Date: "25 Apr 2022", Transaction: "Used up credits", SubService: "National Identity", NoSearches: "-10,000", TotalCreditsUsed: "KES 50,000", Balance: "46,500" },
								{ Date: "24 Apr 2022", Transaction: "Used up credits", SubService: "Passport", NoSearches: "-700", TotalCreditsUsed: "KES 3,500", Balance: "96,500" },
								{ Date: "23 Apr 2022", Transaction: "Credits Top Up", SubService: "-", NoSearches: "20,000", TotalCreditsUsed: "-", Balance: "100,000" },
							]}
							options={{
								actionsColumnIndex: -1,
								pageSize: 10
							}}
						/>
					</Tab>
				</Tabs>
			</section>
		</>
	);
}

export default DataSource360View
