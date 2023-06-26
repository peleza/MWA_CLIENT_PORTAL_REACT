import React from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown } from 'react-bootstrap';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { BiDotsVerticalRounded, BiBlock, BiHistory, BiCommentEdit } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'


const ClientContracts = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Client Contracts</h1>
				<div className='row row-col-5'>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="Total Services"
							value="557"
							icon="pidva-icons/client-icon.svg"
							color="#9B55E5"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="BGC Services"
							value="2,691"
							icon="pidva-icons/bgc-servicies-icon.svg"
							color="#F9327A"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="KYC Services"
							value="885"
							icon="pidva-icons/kyc-services-icon.svg"
							color="#42DABF"
						/>
					</div>
					<div className='col'>
						<DashboardOverviewBx
							title="Active Services"
							value="885"
							icon="pidva-icons/active-services-icon.svg"
							color="#FCC103"
						/>
					</div>
					<div className='col'>
						<DashboardOverviewBx
							title="Dormant Clients"
							value="885"
							icon="pidva-icons/dormant-clients-icon.svg"
							color="#69C848"
						/>
					</div>
				</div>

				<MaterialTable
					title="Client Contracts"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Profile #', field: 'ClientRef' },
						{ title: 'Company Name', field: 'CompanyName' },
						{
							title: 'Country of Incorporation', field: 'CountryIncorporation',
							render: (rowData) => {
								return (
									<img src={rowData.CountryIncorporation} alt="flag" width={30} />
								)
							}
						},
						{ title: 'Main Service', field: 'MainService' },
						{ title: 'Contract Start Date', field: 'ContractStartDate' },
						{ title: 'Contract End Date', field: 'ContractEndDate' },
						{ title: 'Contract Running Period', field: 'ContractRunningPeriod' },
						{ title: 'Lifetime Value of Customer', field: 'LifetimeValueCustomer' },
						{
							title: 'Status', field: 'Status',
							render: (rowData) => {
								return (
									rowData.Status === "1" ? <span className="badge badge-success">Active</span> :
										rowData.Status === "2" ? <span className="badge badge-danger">Expired</span> :
											rowData.Status === "3" ? <span className="badge badge-warning">Dormant</span> : null
								)
							}
						},
						{
							title: 'Current Active Contract', field: 'CurrentActiveContract',
							render: (rowData) => {
								return (
									<a href={rowData.IncorporationCertificate} download="" className='text-center d-block'>
										<img src="/images/pdf-icon.svg" alt="icon" />
									</a>
								)
							}
						},
						{
							title: 'Action', field: 'Action',
							render: (rowData) => {
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item'><BiCommentEdit /> Edit</button>
											<button className='dropdown-item'><TbEye /> View</button>
											<button className='dropdown-item'><BiHistory /> Renew</button>
											<button className='dropdown-item'><BiBlock /> Terminate</button>
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ ClientRef: "P - xn17x", CompanyName: "Codinput", CountryIncorporation: "/images/flag1.png", MainService: "KYC, BGC", ContractStartDate: "01 Jan 2022", ContractEndDate: "31 Dec 2022", ContractRunningPeriod: "234 Days", LifetimeValueCustomer: "KES 5,678,901", Status: "1", CurrentActiveContract: "/images/flag1.png" },
						{ ClientRef: "P - xn17x", CompanyName: "Codinput", CountryIncorporation: "/images/flag1.png", MainService: "KYC, BGC", ContractStartDate: "01 Jan 2022", ContractEndDate: "31 Dec 2022", ContractRunningPeriod: "234 Days", LifetimeValueCustomer: "KES 5,678,901", Status: "2", CurrentActiveContract: "/images/flag1.png" },
						{ ClientRef: "P - xn17x", CompanyName: "Codinput", CountryIncorporation: "/images/flag1.png", MainService: "KYC, BGC", ContractStartDate: "01 Jan 2022", ContractEndDate: "31 Dec 2022", ContractRunningPeriod: "234 Days", LifetimeValueCustomer: "KES 5,678,901", Status: "3", CurrentActiveContract: "/images/flag1.png" },
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 10
					}}
				/>
			</section>
		</>
	);
}

export default ClientContracts
