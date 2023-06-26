import React from 'react';
import MaterialTable from '@material-table/core';
import './SassUsers.scss';
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit, BiCheckCircle, BiBlock } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import { Link } from 'react-router-dom';

const SaasRetention = (props) => {
	const userDetails = () => {
		props.history.push('sass-user-details/25')
	}
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>SaaS Retention</h1>
				<div className='no-wrap-table'>
					<MaterialTable
						title="Requests"
						columns={[
							{ title: 'S.NO', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
							{ title: 'SaaS Ref #', field: 'saas_ref' },
							{ title: 'SaaS Name', field: 'saas_name' },
							{ title: 'Country of Operation', field: 'country_operation' },
							{ title: 'Main Service', field: 'main_service' },
							{ title: 'Start date', field: 'start_date' },
							{ title: 'Contract End date', field: 'contract_end_date' },
							{ title: 'Contract Running Period', field: 'contract_running_period' },
							{ title: 'Lifetime Value of SaaS', field: 'lifetime_value_saaS' },
							{ title: 'Subscription Expiry date', field: 'subscription_expiry_date' },
							{
								title: 'Status', field: 'status',
								render: (rowData) => {
									return (
										rowData.status === 1 ? <span className="badge badge-success">Active</span> :
											rowData.status === 2 ? <span className="badge badge-danger">Terminated</span> :
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
													<button className='dropdown-item'><BiBlock /> Terminated</button>
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
							{ saas_ref: " P - xn17x", saas_name: "Codinput", country_operation: "Kenya", main_service: "KYC", start_date: "1st Jan 2022", contract_end_date: "-", contract_running_period: "234 days", lifetime_value_saaS: "KES 5,678,901", subscription_expiry_date: "24th oct 2022", status: 1, },
							{ saas_ref: " P - xn17x", saas_name: "Codinput", country_operation: "Kenya", main_service: "KYC", start_date: "1st Jan 2022", contract_end_date: "-", contract_running_period: "234 days", lifetime_value_saaS: "KES 5,678,901", subscription_expiry_date: "24th oct 2022", status: 2, },
							{ saas_ref: " P - xn17x", saas_name: "Codinput", country_operation: "Kenya", main_service: "KYC", start_date: "1st Jan 2022", contract_end_date: "-", contract_running_period: "234 days", lifetime_value_saaS: "KES 5,678,901", subscription_expiry_date: "24th oct 2022", status: 3, },
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

export default SaasRetention
