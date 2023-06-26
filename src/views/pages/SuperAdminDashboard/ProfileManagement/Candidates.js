import React from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'


const ProfileManagementCandidates = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Candidates</h1>
				<div className='no-wrap-table'>
					<MaterialTable
						title="Candidates"
						columns={[
							{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
							{ title: 'profile #', field: 'profile' },
							{ title: 'Candidate Name', field: 'candidate_name' },
							{ title: 'Country', field: 'country' },
							{ title: 'National ID Number', field: 'national_id_number' },
							{
								title: 'Report Information', field: 'report_information',
								render: (rowData) => {
									return (
										rowData.report_information.map((value, index) => <p className='mb-1'>{value}</p>)
									)
								}
							},
							{ title: 'Report Date', field: 'report_date' },
							{ title: 'SaaS Org', field: 'saas_org' },
							{
								title: 'Action', field: 'Action',
								render: (rowData) => {
									return (
										<Dropdown className='tableActionDropdown'>
											<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

											<Dropdown.Menu>
												<button className='dropdown-item'><TbEye /> View Report</button>
											</Dropdown.Menu>
										</Dropdown>
									)
								}
							}
						]}
						data={[
							{ profile: "P - xn17x", candidate_name: "Sara Nate", national_id_number: "1234567", country: "Kenya", report_information: ["National Identity", "Criminal History", "Employment History"], report_date: "12th Jan 2022 1534hrs", saas_org: "Darubini" },
							{ profile: "P - v8m1", candidate_name: "Kate Oluwa", national_id_number: "2345678", country: "Nigeria", report_information: ["National Identity", "Credit", "Education"], report_date: "12th Jan 2022 1534hrs", saas_org: "Arope" },
							{ profile: "P - v8m1", candidate_name: "Kate Oluwa", national_id_number: "2345678", country: "South Africa", report_information: ["National Identity", "Professional Membership", "Address"], report_date: "12th Jan 2022 1534hrs", saas_org: "Iverify" },
						]}
						options={{
							actionsColumnIndex: -1,
							numberOfPagesAround: 5
						}}
					/>
				</div>
			</section>
		</>
	);
}

export default ProfileManagementCandidates
