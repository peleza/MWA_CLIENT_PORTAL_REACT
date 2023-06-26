import React from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown } from 'react-bootstrap';
import { BiCheckCircle, BiCommentEdit, BiBlock, BiDotsVerticalRounded } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import '../../auth/Auth.scss'
import '../../../components/Button/Button.scss'
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Link } from 'react-router-dom';

const DataSource = (props) => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Data Source Management</h1>
				<div className='row'>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Data Sources"
							value="57"
							icon="pidva-icons/client-icon.svg"
							color="#9B55E5"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Sub Services"
							value="119"
							icon="pidva-icons/bgc-servicies-icon.svg"
							color="#F9327A"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Countries"
							value="85"
							icon="pidva-icons/kyc-services-icon.svg"
							color="#42DABF"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Searches"
							value="123,859"
							icon="pidva-icons/active-services-icon.svg"
							color="#FCC103"
						/>
					</div>
				</div>
				<MaterialTable
					title="Data Source"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Data Source Ref #', field: 'data_source_ref' },
						{ title: 'Data Source Name', field: `data_source_name` },
						{
							title: 'Logo', field: 'data_source_url',
							render: (rowData) => {
								return (
									<>
										<img src={rowData.data_source_url.logo_url} alt="flag" width={30} />
										<span>&nbsp; {rowData.data_source_url.name}</span>
									</>
								)
							}
						},
						{ title: 'Country', field: 'country_name' },
						{
							title: 'Sub Service', field: 'sub_service',
							render: (rowData) => {
								return (
									rowData.sub_service.map((value, index) => <p className='mb-1'>{value}</p>)
								)
							}
						},
						{ title: 'Contact Person', field: 'contact_person' },
						{ title: 'Designation', field: 'designation' },
						{ title: 'Contact Numbers', field: 'contact_numbers' },
						{ title: 'Contact Email Address', field: 'contact_email_address' },
						{
							title: 'Office Address', field: 'office_address',
							render: (rowData) => {
								return (
									rowData.office_address.map((value, index) => {
										return (
											<>
												<span key={index} className="d-block">{value.name}</span>
											</>
										)
									})
								)
							}
						},
						{
							title: 'Status', field: 'status',
							render: (rowData) => {
								return (
									rowData.status === 1 ? <span className="badge badge-success">Active</span> :
										rowData.status === 2 ? <span className="badge badge-danger">Deactivated</span> :
											rowData.status === 3 ? <span className="badge badge-warning">Dormant</span> :
												rowData.status === 4 ? <span className="badge badge-primary">Verified</span> : null
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
											<Link to="/admin/sass-360-view" className='dropdown-item'><TbEye /> View</Link>
											{rowData.status === 1 || rowData.status === 3 || rowData.status === 4 ?
												<button className='dropdown-item'><BiBlock /> Deactivate</button>
												:
												<button className='dropdown-item'><BiCheckCircle /> Activate</button>
											}
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ data_source_ref: "P - xn17x", data_source_name: "IPRS", data_source_url: { name: "", logo_url: '/images/flag1.png' }, country_name: "Kenya", sub_service: ["National Identity", "Passport", "Alien ID"], contact_person: "Ali Jane ", designation: "Director", contact_numbers: "0712 345 671", contact_email_address: "ali@Codinput.co", office_address: [{ name: "307, reliance Centre, Westlands, Nairobi,Kenya" }], status: 1 },
						{ data_source_ref: "P - v8m1 ", data_source_name: "Datazoo", data_source_url: { name: "", logo_url: '/images/flag1.png' }, country_name: "Uganda Tanzania Ethiopia", sub_service: ["Retail"], contact_person: "Jen Still", designation: "CEO", contact_numbers: "0712 345 671", contact_email_address: "Jen@Dataent.com", office_address: [{ name: "307, reliance Centre, Westlands, Nairobi,Kenya" }], status: 2 },
						{ data_source_ref: "P - oqh6a", data_source_name: "Metropol", data_source_url: { name: "", logo_url: '/images/flag1.png' }, country_name: "Nigeria", sub_service: ["Construction"], contact_person: "Kim Cez", designation: "Account Manager", contact_numbers: "0712 345 671", contact_email_address: "Kim@Vinzino.com", office_address: [{ name: "307,reliance Centre, Westlands, Nairobi,Kenya" }], status: 3 },
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 10
					}}
					actions={[
						{
							icon: 'Create a Data Source',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
						}
					]}
				/>
			</section>
		</>
	);
}

export default DataSource
