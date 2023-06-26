import React, { useState } from 'react';
import MaterialTable from "material-table";
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { InputText, SelectBox, TextArea } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { TbEye } from 'react-icons/tb'

const SaaSBillingContacts = () => {
	const [EditCreditsModalState, setEditCreditsModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: ''
	});

	const EditCreditsModalOpen = () => setEditCreditsModalState(true);
	const EditCreditsModalClose = () => setEditCreditsModalState(false);

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
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>SaaS Billing Contacts</h1>
				<MaterialTable
					title="SaaS Billing Contacts"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'SaaS Name', field: 'saas_name' },
						{ title: 'Names', field: `names` },
						{ title: 'Email', field: 'email' },
						{ title: 'Alternative Email', field: 'alternative_email' },
						{ title: 'Phone No.', field: 'phone_no' },
						{ title: 'Billing Address', field: 'billing_address' },
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
											<button className='dropdown-item'><TbEye /> View</button>
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
						{ saas_name: "Darubini", names: "Franc Kim", email: "Franc.kim@eabl.com", alternative_email: "Franc.kim@eabl.com", phone_no: "+254 111 222 333 ", billing_address: "Reliance Centre, Woodvale Groove, Nairobi, Kenya", status: 0 },
						{ saas_name: "Darubini", names: "Franc Kim", email: "Franc.kim@eabl.com", alternative_email: "Franc.kim@eabl.com", phone_no: "+254 111 222 333 ", billing_address: "Reliance Centre, Woodvale Groove, Nairobi, Kenya", status: 1 },
						{ saas_name: "Darubini", names: "Franc Kim", email: "Franc.kim@eabl.com", alternative_email: "Franc.kim@eabl.com", phone_no: "+254 111 222 333 ", billing_address: "Reliance Centre, Woodvale Groove, Nairobi, Kenya", status: 0 },
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 5
					}}
					actions={[
						{
							icon: "Create Billing Contact",
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { EditCreditsModalOpen() }
						}
					]}
				/>
			</section>


			<Modal show={EditCreditsModalState} onHide={EditCreditsModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>Create Billing Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<InputText
							type="text"
							name="saas_name"
							placeholder="Enter SaaS Name"
							labelText="SaaS Name"
							FormGroupClass="form-control-md form-control-style2"
							pattern='.{1,}$'
							error="SaaS Name Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="names"
							placeholder="Enter Names"
							labelText="Names"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Names is Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="email"
							name="email"
							placeholder="Enter Email"
							labelText="Email"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Email is Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="alternative_email"
							placeholder="Enter Email"
							labelText="Alternative Email"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Alternative Email is Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="phone_no"
							placeholder="Enter Phone No."
							labelText="Phone No."
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Phone No. is Required!"
							required="required"
							onChange={onChange}
						/>
						<TextArea
							FormGroupClass="form-control-md form-control-style2"
							placeholder="Enter Billing Address"
							labelText="Billing Address"
							pattern=".{1,}"
							error="Billing Address is Required!"
							required="required"
							onChange={onChange}
						/>
						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={EditCreditsModalClose}
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


export default SaaSBillingContacts;