import React, { useState } from 'react';
import MaterialTable from "material-table";
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit } from 'react-icons/bi'
import { InputText, SelectBox} from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { TbEye } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const DataSourceCredits = () => {
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
				<h1 className='dashboard-title'>Data Source Credits</h1>
				<MaterialTable
					title="Data Source credits"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Data Source Name', field: 'data_source_name' },
						{ title: 'Country', field: `country` },
						// { title: 'Sub Service', field: `sub_service` },
						// { title: 'Unit Cost', field: `unit_cost` },
						{
							title: 'Sub Service', field: 'sub_service_unit_cost',
							render: (rowData) => {
								return (
									rowData.sub_service_unit_cost.map((value, index) => {
										return (
											<p className='mb-1 no-wrap'>{value.sub_service}</p>
										)
									})
								)
							}
						},
						{
							title: 'Unit Cost', field: 'sub_service_unit_cost',
							render: (rowData) => {
								return (
									rowData.sub_service_unit_cost.map((value, index) => {
										return (
											<p className='mb-1 no-wrap'>{value.unit_cost}</p>
										)
									})
								)
							}
						},
						{ title: 'Searches Balance', field: 'searches_balance' },
						{ title: 'Credits Balance', field: 'credits_balance' },
						{ title: 'Payment Plan', field: 'payment_plan' },
						{ title: 'Payment Terms', field: 'payment_terms' },
						{
							title: 'Action', field: 'Action',
							render: (rowData) => {
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item'><BiCommentEdit /> Edit</button>
											<Link to="/admin/data-source-credits/65" className='dropdown-item'><TbEye /> View</Link>
											<button className='dropdown-item'><AiOutlinePlus /> Top up Credits</button>
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ data_source_name: "IPRS", country: "Kenya", sub_service_unit_cost: [{ sub_service: "Passport", unit_cost: "KES 5" }, { sub_service: "National Identity", unit_cost: "KES 5" }, { sub_service: "Alien", unit_cost: "KES 5" }], searches_balance: "10,000", credits_balance: "KES 50,000 ", payment_plan: "Prepaid", payment_terms: "0 days", },
						{ data_source_name: "Metropol", country: "Kenya", sub_service_unit_cost: [{ sub_service: "Credit", unit_cost: "KES 5" }], searches_balance: "10,000", credits_balance: "KES 50,000 ", payment_plan: "Prepaid", payment_terms: "0 days", },
						{ data_source_name: "Datazoo", country: "Global", sub_service_unit_cost: [{ sub_service: "Global Watchlist", unit_cost: "KES 5" }], searches_balance: "10,000", credits_balance: "KES 50,000 ", payment_plan: "Prepaid", payment_terms: "0 days", },
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 5
					}}
					actions={[
						{
							icon: "Data Source credits",
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { EditCreditsModalOpen() }
						}
					]}
				/>
			</section>


			<Modal show={EditCreditsModalState} onHide={EditCreditsModalClose} centered className='commonModal form-modal modal-70w'  >
				<Modal.Header closeButton>
					<Modal.Title>Data Source Credits</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="data_source_name"
									placeholder="Enter Data Source Name"
									labelText="Data Source Name"
									FormGroupClass="form-control-md form-control-style2"
									pattern='.{1,}$'
									error="Data Source Name is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="country"
									placeholder="Enter Country"
									labelText="Country"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Country is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="sub_service"
									placeholder="Enter Sub Service"
									labelText="Sub Service"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Sub Service is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="unit_cost"
									placeholder="Enter Unit Cost"
									labelText="Unit Cost"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Unit Cost is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="searches_balance"
									placeholder="Enter Searches Balance"
									labelText="Searches Balance"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Searches Balance is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="credits_balance"
									placeholder="Enter Credits Balance"
									labelText="Credits Balance"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Credits Balance is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="payment_plan"
									FormGroupClass="form-control-md form-control-style2"
									labelText="Payment Plan"
									onChange={onChange}
									optionData={
										<>
											<option value="" hidden>Select Plan</option>
											<option value="1">Prepaid</option>
											<option value="2">Postpaid</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="payment_terms"
									placeholder="Enter Payment Terms"
									labelText="Payment Terms"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Payment Terms is Required!"
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


export default DataSourceCredits;