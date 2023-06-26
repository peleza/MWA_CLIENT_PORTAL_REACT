import React from 'react';
import MaterialTable from '@material-table/core';
import './SassUsers.scss';
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'

const SassUsersRequests = (props) => {
	const userDetails = () => {
		props.history.push('sass-user-details/25')
	}
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>SaaS Pending Activation</h1>
				<div className='no-wrap-table'>
					<MaterialTable
						title="Requests"
						columns={[
							{ title: 'S.NO', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
							{ title: 'SaaS Ref #', field: 'saas_ref' },
							{ title: 'SaaS Name', field: 'saas_name' },
							{ title: 'Reg No.', field: 'reg_no' },
							{
								title: 'Incorporation Certificate', field: 'incorporation_certificate',
								render: (rowData) => {
									return <img src={rowData.incorporation_certificate} width={30} alt="flag" />
								}
							},
							{ title: 'Country of Incorporation', field: 'country_incorporation' },
							{ title: 'Address', field: 'address' },
							{ title: 'Industry', field: 'industry' },
							{ title: 'Contact Person', field: 'contact_person' },
							{ title: 'Designation', field: 'designation' },
							{ title: 'Contact Number', field: 'contact_number' },
							{ title: 'Company Email Address', field: 'company_email_id' },
							{ title: 'Main Service', field: 'main_service' },
							{
								title: 'Status', field: 'status',
								render: (rowData) => {
									console.log("rowData", rowData);
									return (
										<>
											{
												rowData.verified === true
													?
													<span className="badge badge-success">Verify</span>
													:
													<span className="badge badge-danger">Unverified</span>
											}
										</>
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
												<button className='dropdown-item' onClick={() => userDetails(rowData)}><TbEye /> User Details</button>
											</Dropdown.Menu>
										</Dropdown>
									)
								}
							}
						]}
						data={[
							{ saas_ref: " P - xn17x", saas_name: "Codinput", reg_no: "PVT- 9v55", incorporation_certificate: "/images/flag1.png", country_incop: 2, country_incorporation: "Kenya", address: "3rd Floor Reliance Centre, ", industry: "Healthcare", contact_person: "Ali Jane", designation: "HR Manager", contact_number: "0712 345 671", company_email_id: "ali@ Codinput.co", main_service: "KYC", status: 1, verified: true, },
							{ saas_ref: " P - oqh6a", saas_name: "Vinzino", reg_no: "PVT- 88a5", incorporation_certificate: "/images/flag1.png", country_incop: 2, country_incorporation: "Kenya", address: "3rd Floor Reliance Centre, ", industry: "Construction", contact_person: "Kim Cez", designation: "Compliance Manager", contact_number: "0712 345 671", company_email_id: "Kim@ Vinzino.com", main_service: "KYC", },
						]}
						options={{
							actionsColumnIndex: -1,
							pageSize: 10
						}}
					/>
				</div>
			</section>
		</>
	);
}

export default SassUsersRequests
