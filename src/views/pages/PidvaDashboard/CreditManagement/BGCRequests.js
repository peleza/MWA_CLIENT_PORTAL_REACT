import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit, BiMailSend, BiFile } from 'react-icons/bi'
import '../../PidvaDashboard/Dashboard/Dashboard.scss';
import './CreditManagement.scss';
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';

const BGCRequests = () => {
	console.log("tarun")
	const [AddInvoiceModalState, setAddInvoiceModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: ''
	});

	const AddInvoiceModalOpen = () => setAddInvoiceModalState(true);
	const AddInvoiceModalClose = () => setAddInvoiceModalState(false);

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
				<h1 className='dashboard-title'>BGC Requests</h1>
				<MaterialTable
					title="BGC Requests"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Date Requested', field: 'date_requested' },
						{ title: 'Client Name', field: 'client_name' },
						{ title: 'Profile #', field: 'profile', },
						{ title: 'Candidate Name', field: 'candidate_name' },
						{ title: 'Package', field: 'package' },
						{ title: 'Invoice Amount', field: 'invoice_amount' },
						{
							title: 'Report Status', field: 'checks_status',
							render: (rowData) => {
								return (
									rowData.checks_status === 0 ? <span className="badge badge-success">Complete</span> :
											rowData.checks_status === 2 ? <span className="badge badge-purple">Interim</span> : null
								)
							}
						},
						{ title: 'Completion date', field: 'completion_date' },
						{ title: 'Invoice No.', field: 'invoice_no' },
						{
							title: 'Payment Status', field: 'payment_status',
							render: (rowData) => {
								return (
									rowData.payment_status === 0 ? <span className="badge badge-success">Paid</span> :
										rowData.payment_status === 1 ? <span className="badge badge-warning">Pending</span> : null
								)
							}
						},
						{ title: 'Verification Specialist Assigned ', field: 'verification_specialist_assigned' },
						{ title: 'QA Specialist Assigned ', field: 'qa_specialist_assigned' },
						{
							title: 'Action', field: 'Action',
							render: (rowData) => {
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item' onClick={AddInvoiceModalOpen}><BiCommentEdit /> Edit</button>
											<button className='dropdown-item'><BiFile /> Invoice</button>
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ date_requested: "25 Apr 2022", client_name: "EABL", profile: "PR123", candidate_name: "Jen Ali", package: "Entry", invoice_amount: "KES 3,500", checks_status: 2, completion_date: "-", invoice_no: "-", payment_status: "-", verification_specialist_assigned: "Yas Min", qa_specialist_assigned: "Di Kwa", },
						{ date_requested: "25 Apr 2022", client_name: "EABL", profile: "PR123", candidate_name: "Jen Ali", package: "Entry", invoice_amount: "KES 3,500", checks_status: 1, completion_date: "-", invoice_no: "-", payment_status: 1, verification_specialist_assigned: "Yas Min", qa_specialist_assigned: "Di Kwa", },
						{ date_requested: "25 Apr 2022", client_name: "EABL", profile: "PR123", candidate_name: "Jen Ali", package: "Entry", invoice_amount: "KES 3,500", checks_status: 0, completion_date: "-", invoice_no: "-", payment_status: 0, verification_specialist_assigned: "Yas Min", qa_specialist_assigned: "Di Kwa", },
						{ date_requested: "25 Apr 2022", client_name: "EABL", profile: "PR123", candidate_name: "Jen Ali", package: "Entry", invoice_amount: "KES 3,500", checks_status: 0, completion_date: "-", invoice_no: "-", payment_status: "-", verification_specialist_assigned: "Yas Min", qa_specialist_assigned: "Di Kwa", },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: () =>
								<SelectBox
									name="main_service"
									FormGroupClass="form-control-md form-control-style2 mb-0"
									onChange={onChange}
									optionData={
										<>
											<option value="" hidden>This Month</option>
											<option value="1">Last Month</option>
										</>
									}
								/>
							,
							iconProps: { className: 'FreeAction' },
							isFreeAction: true,
						}
					]}
				/>
			</section>

			<Modal show={AddInvoiceModalState} onHide={AddInvoiceModalClose} centered className='commonModal form-modal modal-70w'  >
				<Modal.Header closeButton>
					<Modal.Title>Add Proforma Invoice</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="client_name"
									placeholder="Enter Client Name"
									labelText="Client Name"
									FormGroupClass="form-control-md form-control-style2"
									pattern='.{1,}$'
									error="Client Name is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="proforma_no"
									placeholder="Enter No"
									labelText="Proforma No"
									FormGroupClass="form-control-md form-control-style2"
									pattern='.{1,}$'
									error="Proforma No is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="proforma_amount"
									placeholder="Enter Amount"
									labelText="Proforma Amount No"
									FormGroupClass="form-control-md form-control-style2"
									pattern='.{1,}$'
									error="Proforma Amount is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="ageing"
									placeholder="Enter Ageing"
									labelText="Ageing"
									FormGroupClass="form-control-md form-control-style2"
									pattern='.{1,}$'
									error="Proforma Amount is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="purchase_order_number"
									placeholder="Enter Order Number"
									labelText="Purchase Order Number"
									FormGroupClass="form-control-md form-control-style2"
									pattern='.{1,}$'
									error="Purchase Order Number is Required!"
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
								onClick={AddInvoiceModalClose}
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

export default BGCRequests