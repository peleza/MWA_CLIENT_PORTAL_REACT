import React from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiBlock, BiCommentEdit, BiCheckCircle } from 'react-icons/bi'
import { LinkButton } from '../../../components/Button/Button';
import DashboardInfoBx from '../../../components/DashboardInfoBx/DashboardInfoBx';


const DataEntryForm = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Data Entry Forms
					<LinkButton
						text="Create Data Entry From"
						to="/admin/data-entry-form-creator"
						type="submit"
						className="btn-secondary btn-sm"
					/>
				</h1>
				<div className='row row-col-4'>
					<div className='col mb-5'>
						<DashboardInfoBx
							color="baby-blue-color"
							title="Data Entry Forms"
							value="54"
							icon="pidva-icons/new-request-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="pink-color"
							title="Report Forms"
							value="74"
							icon="pidva-icons/nearing-tat-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="green-color2"
							title="Active"
							value="432"
							icon="pidva-icons/complete-reports-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="coral-color"
							title="Deactivated"
							value="21"
							icon="pidva-icons/complete-reports-icon.svg"
						/>
					</div>
				</div>
				<MaterialTable
					title="Data Entry Forms"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Form Name', field: 'form_name' },
						{ title: 'Sub Service', field: 'sub_service' },
						{ title: 'Created By', field: 'created_by' },
						{ title: 'Date Created', field: 'date_created' },
						{
							title: 'Status', field: 'status',
							render: (rowData) => {
								return (
									rowData.status === 1 ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Deactivated</span>
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
											{rowData.status === 1 ?
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
						{ form_name: "Kenya Criminal History", sub_service: "Criminal History- Kenya", created_by: "Eli Kana", date_created: "13th Jan 2022 1400hrs", status: 1, },
						{ form_name: "Degree Education", sub_service: "Education", created_by: "Eli Kana", date_created: "13th Jan 2022 1400hrs", status: 0, },
						{ form_name: "Employment", sub_service: "Employment History", created_by: "Eli Kana", date_created: "13th Jan 2022 1400hrs", status: 1, },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10,
					}}
				/>
			</section>
		</>
	);
}

export default DataEntryForm
