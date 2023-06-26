import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import '../../PidvaDashboard/Dashboard/Dashboard.scss';
import './CreditManagement.scss';
import { InputText, SelectBox, TextArea } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';

const CreditsPurchasesPrepay = () => {
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
				<h1 className='dashboard-title'>Credits Purchases Prepay</h1>
				<MaterialTable
					title="Credits Purchases Prepay"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Date', field: 'date' },
						{ title: 'Client Name', field: 'client_name' },
						{ title: 'Transaction.', field: 'transaction', },
						{ title: 'Amount', field: 'amount' },
						{ title: 'Payment Mode', field: 'payment_mode' },
						{
							title: 'Action', field: 'Action',
							render: (rowData) => {
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item' onClick={AddInvoiceModalOpen}><BiCommentEdit /> Edit</button>
											<button className='dropdown-item' onClick={AddInvoiceModalOpen}><TbEye /> View</button>
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ date: "25 Apr 2022", client_name: "EABL", transaction: "Credits Purchase invoice P/2022/2279", amount: "KES 2,991,987", payment_mode: "Credit Card",},
						{ date: "25 Apr 2022", client_name: "Vivo", transaction: "Credits Purchase invoice P/2022/2279", amount: "KES 2,991,987", payment_mode: "Bank Transfer",},
						{ date: "25 Apr 2022", client_name: "Twiga", transaction: "Credits Purchase invoice P/2022/2279", amount: "KES 2,991,987", payment_mode: "M-pesa",},
						{ date: "25 Apr 2022", client_name: "Vivo", transaction: "Credits Purchase invoice P/2022/2279", amount: "KES 2,991,987", payment_mode: "Bank Transfer",},
						{ date: "25 Apr 2022", client_name: "Vivo", transaction: "Credits Purchase invoice P/2022/2279", amount: "KES 2,991,987", payment_mode: "Credit Card",},
						{ date: "25 Apr 2022", client_name: "EABL", transaction: "Credits Purchase invoice P/2022/2279", amount: "KES 2,991,987", payment_mode: "M-pesa",},
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

export default CreditsPurchasesPrepay