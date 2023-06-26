import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Button } from '../../../components/Button/Button'
import '../../../components/Button/Button.scss';
import '../../PsmtDashboard/BackgroundCheck/BackgroundCheck.scss'
import './Configurations.scss';
import { Dropdown, Form, Modal } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit,} from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import {  FileUpload, InputText, SelectBox } from '../../../components/InputText/InputText';


	const Faculty = (props) => {
		const [CreateFacilityModalState, setCreateFacilityModalState] = useState(false);

		const CreateFacilityModalClose = () => setCreateFacilityModalState(false);
		const CreateFacilityModalShow = () => setCreateFacilityModalState(true);
		const viewDetails = () => {
			props.history.push('/pidva/client-details')
	}
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Education Faculty</h1>

				<div className='row'>
					<div className='col-lg-12'>
						<MaterialTable
							title=" Faculty"
							columns={[
								{ title: 'Faculty', field: 'faculty' },
								{ title: 'Faculty Code', field: `faculty_code` },
								{ title: 'Created by', field: 'created_by' },
								{ title: 'Date Created', field: 'date_created' },
								{
									title: 'Action', field: 'Action',
									render: (rowData) => {
										console.log("row data is single view", rowData)
										return (
											<Dropdown className='tableActionDropdown'>
												<Dropdown.Toggle variant="" id="action" > <BiDotsVerticalRounded /> </Dropdown.Toggle>

												<Dropdown.Menu>
													<button className='dropdown-item' onClick={viewDetails}><TbEye /> View Details</button>
													<button className='dropdown-item'><BiCommentEdit /> Edit</button>
												</Dropdown.Menu>
											</Dropdown>
										)
									}
								}
							]}
							data={[
								{ faculty: "Faculty Of Commerce", faculty_code: "FOC", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 1 },
								{ faculty: "School of Medicine", faculty_code: "SOM", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 2 },
							]}
							options={{
								actionsColumnIndex: -1,
								numberOfPagesAround: 10
							}}
							actions={[
								{
									icon: 'Add Faculty',
									iconProps: { className: 'btn btn-secondary FreeAction' },
									isFreeAction: true,
									onClick: (event) => { CreateFacilityModalShow() }
								}
							]}
						/>
					</div>
				</div>
			</section>
			<Modal show={CreateFacilityModalState} onHide={CreateFacilityModalClose} centered className='commonModal form-modal'>
				<Modal.Header closeButton>
					<Modal.Title>Add Faculty</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="faculty_name"
									placeholder="Enter Faculty"
									labelText="Faculty"
									pattern=".{1,}"
									error="faculty  is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="faculty_code"
									placeholder="Enter Faculty Code"
									labelText="Faculty Code"
									error="Faculty Code Required!"
									required="required"
								/>
							</div>
						</div>
					</Form>
					<Modal.Footer>
						<Button
							btnName="Submit"
							type="submit"
							className="btn-secondary"
						/>
					</Modal.Footer>
				</Modal.Body>

				
			</Modal>
		</>
	);
}

export default Faculty