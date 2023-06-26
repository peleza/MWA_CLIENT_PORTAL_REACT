import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle, BiTrash } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import { MultiSelect } from "react-multi-select-component";
import moment from 'moment';


const Package = () => {

	const [MultiSelected, setMultiSelected] = useState([]);
	const SelectedSubServices = MultiSelected.map(value => value.value)
	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		package_name: '',
		sub_service_ids: SelectedSubServices,
		package_sla: '',
		package_cost: '',
		package_price: '',
		created_by: ''
	});

	console.log("addServiceFields", addServiceFields);
	console.log("MultiSelected", MultiSelected);

	const CreateServiceModalClose = () => setCreateServiceModalState(false);
	const CreateServiceModalShow = () => setCreateServiceModalState(true);

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
				<h1 className='dashboard-title'>Package</h1>
				<div className='row row-col-5'>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="Total Services"
							value="557"
							icon="pidva-icons/client-icon.svg"
							color="#9B55E5"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="BGC Services"
							value="2,691"
							icon="pidva-icons/bgc-servicies-icon.svg"
							color="#F9327A"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="KYC Services"
							value="885"
							icon="pidva-icons/kyc-services-icon.svg"
							color="#42DABF"
						/>
					</div>
					<div className='col'>
						<DashboardOverviewBx
							title="Active Services"
							value="885"
							icon="pidva-icons/active-services-icon.svg"
							color="#FCC103"
						/>
					</div>
					<div className='col'>
						<DashboardOverviewBx
							title="Active Packages"
							value="885"
							icon="pidva-icons/reports-icon.svg"
							color="#69C848"
						/>
					</div>
				</div>

				<MaterialTable
					title="Package"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Package Name', field: 'package_name' },
						{
							title: 'Sub Services', field: 'SubServices',
							render: (rowData) => {
								return (
									rowData.SubServices
								)
							}
						},
						{
							title: 'Package SLA', field: 'package_sla',
							render: (rowData) => {
								return (
									rowData.package_sla + "Days"
								)
							}
						},
						{ title: 'Package Cost', field: 'package_cost' },
						{ title: 'Package Price', field: 'package_price' },
						{ title: 'Client Assigned', field: 'ClientAssigned' },
						{ title: 'Client Users Assigned', field: 'ClientUsersAssigned' },
						{
							title: 'Status', field: 'Status',
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
											<button className='dropdown-item' onClick={() => CreateServiceModalShow(rowData)}><BiCommentEdit /> Edit</button>
											<button className='dropdown-item' onClick={() => CreateServiceModalShow(rowData)}><TbEye /> View</button>
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
						{ package_name: "Standard", SubServices: "Passport, Credit, Payslip", package_sla: "5 Days", package_cost: "KES 300", package_price: "KES 1,000", ClientAssigned: "EABL", ClientUsersAssigned: "lilian@eabl.com, sinek@eabl.com, gelo@eabl.com", status: 1 },
						{ package_name: "Standard", SubServices: "Passport, Credit, Payslip", package_sla: "5 Days", package_cost: "KES 300", package_price: "KES 1,000", ClientAssigned: "EABL", ClientUsersAssigned: "lilian@eabl.com, sinek@eabl.com, gelo@eabl.com", status: 1 },
						{ package_name: "Standard", SubServices: "Passport, Credit, Payslip", package_sla: "5 Days", package_cost: "KES 300", package_price: "KES 1,000", ClientAssigned: "EABL", ClientUsersAssigned: "lilian@eabl.com, sinek@eabl.com, gelo@eabl.com", status: 2 },
						{ package_name: "Standard", SubServices: "Passport, Credit, Payslip", package_sla: "5 Days", package_cost: "KES 300", package_price: "KES 1,000", ClientAssigned: "EABL", ClientUsersAssigned: "lilian@eabl.com, sinek@eabl.com, gelo@eabl.com", status: 2 },
						{ package_name: "Standard", SubServices: "Passport, Credit, Payslip", package_sla: "5 Days", package_cost: "KES 300", package_price: "KES 1,000", ClientAssigned: "EABL", ClientUsersAssigned: "lilian@eabl.com, sinek@eabl.com, gelo@eabl.com", status: 1 },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Create New Package',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { CreateServiceModalShow() }
						}
					]}
				/>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>New Package</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="package_name"
									labelText="Package Name"
									placeholder="Enter Name"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Package Name is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.package_name}
								/>
							</div>
							<div className='col-lg-6 form-group'>
								<label htmlFor="">Sub Service</label>
								<MultiSelect
									value={MultiSelected}
									onChange={setMultiSelected}
									className='react-select-bx'
									name="sub_service"
									labelledBy="Select"
									options={
										[
											{ value: 4, label: 'Service' },
											{ value: 5, label: 'asd' },
											{ value: 6, label: 'sub service latest' },
										]
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="package_sla"
									labelText="Package SLA"
									placeholder="Enter SLA"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Package SLA is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.package_sla}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="package_cost"
									labelText="Package Cost"
									placeholder="Enter Cost"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Package Cost is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.package_cost}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="package_price"
									placeholder="Package Price"
									labelText="Package Price"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Package Price is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.package_price}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="currency"
									required="required"
									labelText="Select Currency"
									FormGroupClass="form-control-md form-control-style2"
									error="Please Select Currency!"
									optionData={
										<>
											<option value="" hidden>Select Currency</option>
											<option value="">KES</option>
											<option value="">Dollar</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="assign_client"
									required="required"
									FormGroupClass="form-control-md form-control-style2"
									labelText="Assign Client"
									error="Please Select Assign Client!"
									optionData={
										<>
											<option value="" hidden>Select Assign Client</option>
											<option value="">Jhon</option>
											<option value="">Lia</option>
											<option value="">Abhishek</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="assign_client"
									required="required"
									FormGroupClass="form-control-md form-control-style2"
									labelText="Assign Client User"
									error="Please Select Client User!"
									optionData={
										<>
											<option value="" hidden>Select Assign Client User</option>
											<option value="">Jhon Duo</option>
											<option value="">Lia Ham</option>
											<option value="">Abhishek</option>
										</>
									}
								/>
							</div>
						</div>
						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={CreateServiceModalClose}
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

export default Package
