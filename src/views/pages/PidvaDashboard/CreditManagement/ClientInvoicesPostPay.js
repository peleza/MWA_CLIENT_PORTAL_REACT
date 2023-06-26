import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit, BiMailSend } from 'react-icons/bi'
import '../../PidvaDashboard/Dashboard/Dashboard.scss';
import './CreditManagement.scss';
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';

const ClientInvoicesPostPayNew = () => {
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
				<h1 className='dashboard-title'>Client Invoices Post Pay</h1>
				<MaterialTable
					title="Client Invoices Post Pay"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Date', field: 'date' },
						{ title: 'Client Name', field: 'client_name' },
						{ title: 'Invoice No.', field: 'invoice_no', },
						{ title: 'Invoice Amount', field: 'invoice_amount' },
						{ title: 'Ageing', field: 'ageing' },
						{ title: 'Payment date', field: 'payment_date' },
						{ title: 'Purchase Order Number', field: 'purchase_order_number' },
						{
							title: 'Purchase Order', field: 'purchase_order',
							render: (rowData) => {
								return (
									<a href={rowData.purchase_order} download="" className='text-center d-block'>
										<img src="/images/pdf-icon.svg" alt="icon" />
									</a>
								)
							}
						},
						{
							title: 'Payment Status', field: 'status',
							render: (rowData) => {
								return (
									rowData.status === 0 ? <span className="badge badge-success">PO Received</span> :
										rowData.status === 1 ? <span className="badge badge-warning">Pending</span> :
											rowData.status === 2 ? <span className="badge badge-danger">Pending</span> : null
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
											<button className='dropdown-item' onClick={AddInvoiceModalOpen}><BiCommentEdit /> Edit</button>
											{rowData.status === 1 || rowData.status === 2 ?
												<button className='dropdown-item'><BiMailSend /> Send Mail</button>
												:
												null
											}
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ date: "25 Apr 2022", client_name: "EABL", invoice_no: "PI/2022/2279", invoice_amount: "KES 2,991,987", ageing: "0 days", purchase_order_number: "P0 1234ASED", payment_date: "25 Apr 2022", purchase_order: "", status: 0, },
						{ date: "25 Apr 2022", client_name: "EABL", invoice_no: "PI/2022/2279", invoice_amount: "KES 2,991,987", ageing: "0 days", purchase_order_number: "P0 1234ASED", payment_date: "25 Apr 2022", purchase_order: "", status: 1, },
						{ date: "25 Apr 2022", client_name: "EABL", invoice_no: "PI/2022/2279", invoice_amount: "KES 2,991,987", ageing: "0 days", purchase_order_number: "P0 1234ASED", payment_date: "25 Apr 2022", purchase_order: "", status: 0, },
						{ date: "25 Apr 2022", client_name: "EABL", invoice_no: "PI/2022/2279", invoice_amount: "KES 2,991,987", ageing: "0 days", purchase_order_number: "P0 1234ASED", payment_date: "25 Apr 2022", purchase_order: "", status: 2, },
						{ date: "25 Apr 2022", client_name: "EABL", invoice_no: "PI/2022/2279", invoice_amount: "KES 2,991,987", ageing: "0 days", purchase_order_number: "P0 1234ASED", payment_date: "25 Apr 2022", purchase_order: "", status: 1, },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: () =>
								<SelectBox
									name="client_name"
									FormGroupClass="form-control-md form-control-style2 mb-0"
									onChange={onChange}
									optionData={
										<>
											<option value="" hidden>Client Name</option>
											<option value="1">John</option>
											<option value="1">Same</option>
										</>
									}
								/>
							,
							iconProps: { className: 'FreeAction' },
							isFreeAction: true,
						},
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
						},
						{
							icon: 'Create an invoice',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { }
						},
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

export default ClientInvoicesPostPayNew