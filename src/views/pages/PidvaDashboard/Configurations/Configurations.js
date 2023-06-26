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

const Configurations = (props) => {
	const [CreateInstitutionModalState, setCreateInstitutionModalState] = useState(false);

	const CreateInstitutionModalClose = () => setCreateInstitutionModalState(false);
	const CreateInstitutionModalShow = () => setCreateInstitutionModalState(true);
	const viewDetails = () => {
		props.history.push('/pidva/client-details')
	}
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Education Configuration</h1>

				<div className='row'>
					<div className='col-lg-12'>
						<MaterialTable
							title=" Institution"
							columns={[
								{ title: 'Institution', field: 'institution' },
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
								{ title: 'Institution Code', field: 'institution_code' },
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
								{ title: 'Contact Person', field: `client_name` },
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
								{ institution: "Moi University", institution_code: "MU", comp_incop_certif_url: { name: "Kenya", logo_url: '/images/flag1.png' }, client_name: "Ann Nyamu ", contact_email_address: "registrar@nyu.edu", contact_numbers: "+1 212-998-4800", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 1 },
								{ institution: "Nairobi University", institution_code: "NU", comp_incop_certif_url: { name: "Nigeria", logo_url: '/images/flag1.png' }, client_name: "Ann Nyamu ", contact_email_address: "registrar@nyu.edu", contact_numbers: "+1 212-998-4800", created_by: "Kip Lang", date_created: "12 Aug 22 5:50 pm", status: 2 },
							]}
							options={{
								actionsColumnIndex: -1,
								numberOfPagesAround: 10
							}}
							actions={[
								{
									icon: 'Add Institution',
									iconProps: { className: 'btn btn-secondary FreeAction' },
									isFreeAction: true,
									onClick: (event) => { CreateInstitutionModalShow() }
								}
							]}
						/>
					</div>
				</div>
			</section>
			<Modal show={CreateInstitutionModalState} onHide={CreateInstitutionModalClose} centered className='commonModal form-modal modal-90w'>
				<Modal.Header closeButton>
					<Modal.Title>Add Institution</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-3'>
								<InputText
									type="text"
									name="institution_name"
									placeholder="Enter Institution"
									labelText="Institution"
									pattern=".{1,}"
									error="Institution  is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-3'>
								<InputText
									pattern=".{1,}"
									type="text"
									name="institution_code"
									placeholder="Enter Institution Code"
									labelText="Institution Code"
									error="Institution Code Required!"
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

export default Configurations