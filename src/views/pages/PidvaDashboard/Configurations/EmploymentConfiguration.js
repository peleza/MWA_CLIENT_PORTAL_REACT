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

const EmploymentConfiguration = (props) => {
	const [CreateServiceModalState, setCreateEmploymentModalState] = useState(false);

	const CreateEmploymentModalClose = () => setCreateEmploymentModalState(false);
	const CreateEmploymentModalShow = () => setCreateEmploymentModalState(true);
	const viewDetails = () => {
		props.history.push('/pidva/client-details')
	}
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Education Employment Configuration</h1>

				<div className='row'>
					<div className='col-lg-12'>
						<MaterialTable
							title=" Employment Configuration"
							columns={[
								{ title: 'Employer', field: 'employer' },
								{
									title: 'Logo', field: 'comp_incop_certif_url',
									render: (rowData) => {
										return (
											<>
												<img src={rowData.comp_incop_certif_url.logo_url} alt="flag" width={30} />
												<span>&nbsp; {rowData.comp_incop_certif_url.name}</span>
											</>
										)
									}
								},
								{ title: 'Employer Code', field: 'employer_code' },
								{
									title: 'Country', field: 'comp_incop_certif_url',
									render: (rowData) => {
										return (
											<>
												{rowData.comp_incop_certif_url.name}
											</>
										)
									}
								},
								{ title: 'Contact Person', field: `contact_person` },
								{ title: 'Designation', field: `designation` },
								{ title: 'Contact Email', field: 'contact_email_address' },
								{ title: 'Contact Phone', field: 'contact_numbers' },
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
								{ employer: "Safaricom", comp_incop_certif_url: { name: "Kenya", logo_url: '/images/flag1.png' }, employer_code: "SAF",  contact_person: "Ann Nyamu ", designation: "HR Manager",  contact_email_address: "Ann.nyamu@saf.com", contact_numbers: "+254 212-998-480", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 1 },
								{ employer: "Coca Cola", comp_incop_certif_url: { name: "Nigeria", logo_url: '/images/flag1.png' }, employer_code: "CC",  contact_person: "Ann Nyamu ", designation: "HR Manager",  contact_email_address: "Ann.nyamu@saf.com", contact_numbers: "+254 212-998-480", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 1 },
							]}
							options={{
								actionsColumnIndex: -1,
								numberOfPagesAround: 10
							}}
							actions={[
								{
									icon: 'Add Employer',
									iconProps: { className: 'btn btn-secondary FreeAction' },
									isFreeAction: true,
									onClick: (event) => { CreateEmploymentModalShow() }
								}
							]}
						/>
					</div>
				</div>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateEmploymentModalClose} centered className='commonModal form-modal modal-90w'>
				<Modal.Header closeButton>
					<Modal.Title>Add Employer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-3'>
								<InputText
									type="text"
									name="employer_name"
									placeholder="Enter Employer"
									labelText="Employer"
									pattern=".{1,}"
									error="Employer  is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-3'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="employer_code"
									placeholder="Enter Employer Code"
									labelText="Employer Code"
									error="Employer Code Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-3'>
								<SelectBox
									name="country_name"
									required="required"
									labelText="Country"
									error="Please Select Country"
									optionData={
										<>
											<option value="" hidden>Select Country</option>
											<option value="">Kenya</option>
											<option value="">Nigeria</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-3'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="person_name"
									placeholder="Enter Person"
									labelText="Contact Person"
									error="Contact Person Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-3'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="designation_name"
									placeholder="Enter Designation"
									labelText="Designation"
									error="Designation Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-3'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="contact_email"
									placeholder="Enter Email"
									labelText="Contact Person Email"
									error="It should be a valid email address!"
									required="required"
								/>
							</div>
							<div className='col-lg-3'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="contact_phone"
									placeholder="Enter Phone No."
									labelText="Contact Person Phone No."
									error="Valid Contact Person Phone No. Required!"
									required="required"
								/>
							</div>

							<div className='col-lg-6'>
								<FileUpload
									labelText="Logo"
									name="logo"
									accept='Jpeg, PNG, PDF'
									error="Please Upload Logo!"
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

export default EmploymentConfiguration