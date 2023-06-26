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

const Levels = (props) => {
	const [CreateLevelsModalState, setCreateLevelsModalState] = useState(false);

	const CreateLevelsModalClose = () => setCreateLevelsModalState(false);
	const CreateLevelsModalShow = () => setCreateLevelsModalState(true);
	const viewDetails = () => {
		props.history.push('/pidva/client-details')
	}
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Education Levels</h1>

				<div className='row'>
					<div className='col-lg-12'>
						<MaterialTable
							title=" Levels"
							columns={[
								{ title: 'Levels', field: 'levels' },
								{ title: 'Level  Code', field: `level_code` },
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
								{ levels: "Certificate", level_code: "CERT", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 1 },
								{ levels: "Degree", level_code: "DEG", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 1 },
							]}
							options={{
								actionsColumnIndex: -1,
								numberOfPagesAround: 10
							}}
							actions={[
								{
									icon: 'Add Level',
									iconProps: { className: 'btn btn-secondary FreeAction' },
									isFreeAction: true,
									onClick: (event) => { CreateLevelsModalShow() }
								}
							]}
						/>
					</div>
				</div>
			</section>

			<Modal show={CreateLevelsModalState} onHide={CreateLevelsModalClose} centered className='commonModal form-modal'>
				<Modal.Header closeButton>
					<Modal.Title>Add Levels</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="levels_name"
									placeholder="Enter Levels"
									labelText="Levels"
									pattern=".{1,}"
									error="Levels  is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="level_code"
									placeholder="Enter Level Code"
									labelText="Level Code"
									error="level Code Required!"
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

export default Levels