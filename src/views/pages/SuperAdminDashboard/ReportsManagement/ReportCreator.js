import React from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiBlock, BiCommentEdit, BiCheckCircle } from 'react-icons/bi'
import { LinkButton } from '../../../components/Button/Button';


const ReportCreator = () => {


	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Report Creator
					<LinkButton
						text="Create Data Entry From"
						to="/admin/data-entry-form-creator"
						type="submit"
						className="btn-secondary btn-sm"
					/>
				</h1>
				<MaterialTable
					title="Report Creator"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Report Name', field: 'report_name' },
						{ title: 'Data Entry Form Name', field: 'data_entry_form_name' },
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
						{ report_name: "Kenya Criminal History", data_entry_form_name: "Kenya Criminal History", sub_service: "Criminal History- Kenya", created_by: "Eli Kana", date_created: "13th Jan 2022 1400hrs", status: 1, },
						{ report_name: "Degree Education", data_entry_form_name: "Kenya Criminal History", sub_service: "Education", created_by: "Eli Kana", date_created: "13th Jan 2022 1400hrs", status: 0, },
						{ report_name: "Employment", data_entry_form_name: "Kenya Criminal History", sub_service: "Employment History", created_by: "Eli Kana", date_created: "13th Jan 2022 1400hrs", status: 1, },
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

export default ReportCreator
