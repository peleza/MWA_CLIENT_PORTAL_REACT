import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Button } from '../../../components/Button/Button'
import '../../../components/Button/Button.scss';
import '../../PsmtDashboard/BackgroundCheck/BackgroundCheck.scss'
import './Configurations.scss';
import { Dropdown, Form, Modal  } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit,} from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import {  FileUpload, InputText, SelectBox } from '../../../components/InputText/InputText';


const Course = (props) => {
	const [CreateCourseModalState, setCreateCourseModalState] = useState(false);

	const CreateCourseModalClose = () => setCreateCourseModalState(false);
	const CreateCourseModalShow = () => setCreateCourseModalState(true);
	const viewDetails = () => {
		props.history.push('/pidva/client-details')
	}
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Education Course</h1>

				<div className='row'>
					<div className='col-lg-12'>
						<MaterialTable
							title=" Course"
							columns={[
								{ title: 'Course', field: 'course' },
								{ title: 'Course Code', field: `course_code` },
								{ title: 'Faculty', field: `faculty` },
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
								{ course: "Bachelor Of Commerce", course_code: "BOC", faculty: "Faculty Of Commerce", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 1 },
								{ course: "Bachelor In Nursing", course_code: "BIN", faculty: "School of Medicine", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 2 },
							]}
							options={{
								actionsColumnIndex: -1,
								numberOfPagesAround: 10
							}}
							actions={[
								{
									icon: 'Add Course',
									iconProps: { className: 'btn btn-secondary FreeAction' },
									isFreeAction: true,
									onClick: (event) => { CreateCourseModalShow() }
								}
							]}
						/>
					</div>
				</div>
			</section>

			<Modal show={CreateCourseModalState} onHide={CreateCourseModalClose} centered className='commonModal form-modal'>
				<Modal.Header closeButton>
					<Modal.Title>Add Course</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="course_name"
									placeholder="Enter Course"
									labelText="Course"
									pattern=".{1,}"
									error="Course  is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="course_code"
									placeholder="Enter Course Code"
									labelText="Course Code"
									error="Course Code Required!"
									required="required"
								/>
							</div>

							<div className='col-lg-6'>

								<InputText
									pattern=".{1,}"
									type="text"
									name="Faculty"
									placeholder="Enter Faculty "
									labelText="Faculty"
									error="Faculty  Required!"
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

export default Course