import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import '../../PidvaDashboard/Dashboard/Dashboard.scss';
import './CreditManagement.scss';
import { InputText, SelectBox, TextArea } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';

const ClientBillingContacts = () => {
	const [AddContactModalState, setAddContactModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: ''
	});

	const AddContactModalOpen = () => setAddContactModalState(true);
	const AddContactModalClose = () => setAddContactModalState(false);

	const onChange = (e) => {
		const { name, value } = e.target
		setAddServiceFields((preValue) => {
			return {
				...preValue,
				[name]: value,
			}
		})
	}

	return (
		<>
			<section className='dashboard-section pidvaDashboard no-wrap-table'>
				<h1 className='dashboard-title'>Client Billing Contacts</h1>
				<MaterialTable
					title="Client Billing Contacts"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Client Name', field: 'client_name' },
						{ title: 'Main Service', field: 'main_service' },
						{ title: 'Plan', field: 'plan', },
						{ title: 'Names', field: 'names' },
						{ title: 'Email', field: 'email' },
						{ title: 'Alternative Email', field: 'alternative_email' },
						{ title: 'Phone No.', field: 'phone_no' },
						{ title: 'Billing Address', field: 'billing_address' },
						{
							title: 'Status', field: 'status',
							render: (rowData) => {
								return (
									rowData.status === 0 ? <span className="badge badge-danger">Deactivated</span> :
										rowData.status === 1 ? <span className="badge badge-success">Active</span> : null
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
											<button className='dropdown-item' onClick={AddContactModalOpen}><BiCommentEdit /> Edit</button>
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
						{ client_name: "EABL", main_service: "KYC", plan: "Postpay", names: "Franc Kim", email: "mwangza@yopmail.com", alternative_email: "mwangza123@yopmail.com", phone_no: "+254 111 222 333", billing_address: "Reliance Centre, Woodvale, Groove, Nairobi, Kenya", status: 1 },
						{ client_name: "EABL", main_service: "KYC", plan: "Postpay", names: "Franc Kim", email: "mwangza@yopmail.com", alternative_email: "mwangza123@yopmail.com", phone_no: "+254 111 222 333", billing_address: "Reliance Centre, Woodvale, Groove, Nairobi, Kenya", status: 0 },
						{ client_name: "EABL", main_service: "KYC", plan: "Postpay", names: "Franc Kim", email: "mwangza@yopmail.com", alternative_email: "mwangza123@yopmail.com", phone_no: "+254 111 222 333", billing_address: "Reliance Centre, Woodvale, Groove, Nairobi, Kenya", status: 0 },
						{ client_name: "EABL", main_service: "KYC", plan: "Postpay", names: "Franc Kim", email: "mwangza@yopmail.com", alternative_email: "mwangza123@yopmail.com", phone_no: "+254 111 222 333", billing_address: "Reliance Centre, Woodvale, Groove, Nairobi, Kenya", status: 1 },
						{ client_name: "EABL", main_service: "KYC", plan: "Postpay", names: "Franc Kim", email: "mwangza@yopmail.com", alternative_email: "mwangza123@yopmail.com", phone_no: "+254 111 222 333", billing_address: "Reliance Centre, Woodvale, Groove, Nairobi, Kenya", status: 1 },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Create Billing Contact',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { AddContactModalOpen() }
						}
					]}
				/>
			</section>

			<Modal show={AddContactModalState} onHide={AddContactModalClose} centered className='commonModal form-modal modal-70w'  >
				<Modal.Header closeButton>
					<Modal.Title>Add Client Billing Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<SelectBox
									name="client_name"
									labelText="Client Name"
									FormGroupClass="form-control-md form-control-style2"
									required="required"
									onChange={onChange}
									error="Please Select Client Name!"
									optionData={
										<>
											<option value="" hidden>Select Client Name</option>
											<option value="1">Jhon</option>
											<option value="2">Same</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="main_service"
									labelText="Main Service"
									FormGroupClass="form-control-md form-control-style2"
									required="required"
									onChange={onChange}
									error="Please Select Main Service!"
									optionData={
										<>
											<option value="" hidden>Select Main Service</option>
											<option value="1">KYC</option>
											<option value="2">BGC</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="plan"
									labelText="Plan"
									FormGroupClass="form-control-md form-control-style2"
									required="required"
									onChange={onChange}
									error="Please Select Plan!"
									optionData={
										<>
											<option value="" hidden>Select Plan</option>
											<option value="1">Postpay</option>
											<option value="2">Prepaid</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="name"
									placeholder="Enter Name"
									labelText="Name"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Name is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="email"
									name="name"
									placeholder="Enter Email"
									labelText="Email"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Email is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="email"
									name="name"
									placeholder="Enter Alternative Email"
									labelText="Alternative Email"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Alternative Email is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="phone_number"
									placeholder="Enter Phone No"
									labelText="Phone No"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Phone No is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="phone_number"
									placeholder="Enter Phone No"
									labelText="Phone No"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Phone No is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-12'>
								<TextArea
									FormGroupClass="form-control-md form-control-style2"
									placeholder="Enter Address"
									labelText="Billing Address"
									pattern=".{1,}"
									error="Billing Address is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
						</div>
						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={AddContactModalClose}
							/>
							<Button
								btnName="Submit"
								type="submit"
								className="btn-xs btn-secondary"
							/>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ClientBillingContacts