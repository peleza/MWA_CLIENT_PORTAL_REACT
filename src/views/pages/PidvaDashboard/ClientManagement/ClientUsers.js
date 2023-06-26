import React, {useState, useEffect} from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown } from 'react-bootstrap';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { BiDotsVerticalRounded, BiBlock, BiCheck, BiCommentEdit, BiCheckCircle } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import '../../../components/Button/Button.scss';


const ClientUsers = () => {


	
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Client Users</h1>
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
					title="Client Users"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Profile #', field: 'ClientRef' },
						{ title: 'Company Name', field: 'CompanyName' },
						{ title: 'User Name', field: 'UserName' },
						{
							title: 'Picture', field: 'Picture',
							render: (rowData) => {
								return (
									<img src={rowData.Picture} className="tableUserImage" alt="user" />
								)
							}
						},
						{ title: 'ID Number', field: 'IDNumber' },
						{ title: 'Email Address', field: 'EmailAddress' },
						{ title: 'Role', field: 'Role' },
						{ title: 'Main Service', field: 'MainService' },
						{ title: 'Packages Assigned', field: 'PackagesAssigned' },
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
							title: 'Action', field: 'Action',
							render: (rowData) => {
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item'><BiCommentEdit /> Edit</button>
											<button className='dropdown-item'><TbEye /> View</button>
											{rowData.status === 1 ?
												<button className='dropdown-item'><BiCheckCircle /> Activate</button>
												:
												<button className='dropdown-item'><BiBlock /> Deactivate</button>
											}
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ ClientRef: "P - xn17x", CompanyName: "Codinput", UserName: "Yas Min", Picture: "/images/notification-img1.png", IDNumber: "1234567", EmailAddress: "ym@codin.co", Role: "Client Admin", MainService: "KYC, BGC", Status: "1", PackagesAssigned: "Packages Assigned", status: 0, },
						{ ClientRef: "P - xn17x", CompanyName: "Codinput", UserName: "Yas Min", Picture: "/images/notification-img1.png", IDNumber: "1234567", EmailAddress: "ym@codin.co", Role: "Client Admin", MainService: "KYC, BGC", Status: "2", PackagesAssigned: "Packages Assigned", status: 2,},
						{ ClientRef: "P - xn17x", CompanyName: "Codinput", UserName: "Yas Min", Picture: "/images/notification-img1.png", IDNumber: "1234567", EmailAddress: "ym@codin.co", Role: "Client Admin", MainService: "KYC, BGC", Status: "3", PackagesAssigned: "Packages Assigned", status: 3,},
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 10
					}}
					actions={[
						{
							icon: 'Create Client User',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { }
						}
					]}
				/>
			</section>
		</>
	);
}

export default ClientUsers
