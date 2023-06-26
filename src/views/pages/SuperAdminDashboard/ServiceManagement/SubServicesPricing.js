import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle, BiPlus, BiTrash } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { ActiveInactiveServiceAction, AddServiceAction, EditServiceAction, GetServiceListAction } from '../../../../redux/actions/PidvaServiceManagementAction';
import moment from 'moment';


const SubServicesPricing = () => {
	const dispatch = useDispatch();

	const ServiceApiResponse = useSelector(state => state.PidvaServiceManagement)
	const GetCurrentUser = useSelector(state => state.auth.set_user)

	console.log("ServiceApiResponse", ServiceApiResponse);

	const [dataRequired, setDataRequired] = useState([{ documentData: '', fieldType: '' }])
	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [EditServiceModalState, setEditServiceModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		sub_service_name: '',
		service_id: '',
		sub_service_code: '',
		country_id: '',
		sla: '',
		parent_service: '',
		document_data: '',
		currency: '',
		cost: '',
		cost_type: '',
		created_by: GetCurrentUser.first_name
	});

	console.log("addServiceFields", addServiceFields);

	const CreateServiceModalClose = () => setCreateServiceModalState(false);
	const CreateServiceModalShow = () => setCreateServiceModalState(true);
	const EditServiceModalClose = () => setEditServiceModalState(false);
	const EditServiceModalShow = (data) => {
		setEditServiceModalState(true);
		console.log("data", data);
		setAddServiceFields({
			...addServiceFields,
			sub_service_name: data.sub_service_name,
			service_id: data.service_id,
			sub_service_code: data.sub_service_code,
			country_id: data.country_id,
			sla: data.sla,
			parent_service: data.parent_service,
			document_data: data.document_data,
			currency: data.currency,
			cost: data.cost,
			cost_type: data.cost_type,
			id: JSON.stringify(data.id)
		})
	}

	const onChange = (e) => {
		const { name, value } = e.target
		setAddServiceFields((preValue) => {
			return {
				...preValue,
				[name]: value,
			}
		})
	}

	const ActiveInactive = (data) => dispatch(ActiveInactiveServiceAction({ apiUrl: "active_inactive_subservice", data: data }))

	const editService = (e) => {
		e.preventDefault();
		dispatch(EditServiceAction({ apiUrl: "update_sub_service", data: addServiceFields }))
	}

	const addService = (e) => {
		e.preventDefault();
		dispatch(AddServiceAction({ apiUrl: "add_sub_service", data: addServiceFields }))
	}

	useEffect(() => {
		dispatch(GetServiceListAction({ apiUrl: "sub_service_list" }))
	}, [dispatch])

	useEffect(() => {
		if ((ServiceApiResponse !== undefined && ServiceApiResponse.service_add.status === "200") || (ServiceApiResponse !== undefined && ServiceApiResponse.service_activeInactive.status === "200") || (ServiceApiResponse !== undefined && ServiceApiResponse.service_edit.status === "200")) {
			dispatch(GetServiceListAction({ apiUrl: "sub_service_list" }))
			setCreateServiceModalState(false);
			setEditServiceModalState(false);
		}
	}, [ServiceApiResponse.service_add, ServiceApiResponse.service_activeInactive, ServiceApiResponse.service_edit])

	const addDataRequiredFields = () => {
		setDataRequired([...dataRequired, { documentData: '', fieldType: '' }])
	}

	const deleteDataRequiredField = (id) => {
		console.log("id", id);
		console.log("dataRequired", dataRequired);
		const updatedDataRequiredField = dataRequired.filter((value, index) =>  id !== index)

		console.log("updatedDataRequiredField", updatedDataRequiredField);

		setDataRequired(updatedDataRequiredField)
	}

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Sub Service Pricing</h1>
				
				<div className='no-wrap-table'>
					<MaterialTable
						title="Sub Service Pricing"
						columns={[
							{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
							{
								title: 'Sub Service', field: 'sub_service_name',
								render: (rowData) => {
									return (
										<>
											<div className='profileWithName'>
												<img src={rowData.sub_service_name.icon} alt="icon" width={30} />
												{rowData.sub_service_name.name}
											</div>
										</>
									)
								}
							},
							{
								title: 'Sub Service Code', field: 'sub_service_code',
								render: (rowData) => rowData.sub_service_code
							},
							{
								title: 'Country', field: 'Country',
								render: (rowData) => <img src={rowData.Country} alt="flag" width={30} />
							},
							{
								title: 'SLA', field: 'sla',
								render: (rowData) => rowData.sla
							},
							{
								title: 'Main Service', field: 'main_service',
								render: (rowData) => rowData.main_service
							},
							{ title: 'Currency', field: 'Currency' },
							{ title: 'Min Price', field: 'min_price' },
							{ title: 'Set Price', field: 'set_price' },
							{ title: 'Max Price', field: 'max_price' },
							{ title: 'Price Type', field: 'price_type' },
							{ title: 'Min Requests', field: 'min_requests' },
							{ title: 'Max Requests', field: 'max_requests' },
							{
								title: 'Status', field: 'Status',
								render: (rowData) => rowData.status === 1 ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Deactivated</span>
							},
							{
								title: 'Action', field: 'Action',
								render: (rowData) => {
									return (
										<Dropdown className='tableActionDropdown'>
											<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

											<Dropdown.Menu>
												<button className='dropdown-item' onClick={() => EditServiceModalShow(rowData)}><BiCommentEdit /> Edit</button>
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
							{sub_service_name: {name: "Passport", icon: "/images/automated-process-icon.svg"}, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", main_service: "KES", Currency: "KES", min_price: "10", set_price: "15", max_price: "25", price_type: "Fixed", min_requests: "1", max_requests: '-', status: 2},
							{sub_service_name: {name: "Credit", icon: "/images/automated-process-icon.svg"}, sub_service_code: "CC", Country: "/images/flag1.png", sla: "Real Time", main_service: "BGC", Currency: "USD", min_price: "25", set_price: "30", max_price: "40", price_type: "Fixed", min_requests: "1", max_requests: '-', status: 1},
							{sub_service_name: {name: "Passport", icon: "/images/automated-process-icon.svg"}, sub_service_code: "PYP- 1", Country: "/images/flag1.png", sla: "2days", main_service: "KYC BGC", Currency: "20", min_price: "25", set_price: "15", max_price: "35", price_type: "Tiered", min_requests: "1", max_requests: '1000', status: 2},
							{sub_service_name: {name: "Passport", icon: "/images/automated-process-icon.svg"}, sub_service_code: "PYP- 2", Country: "/images/flag1.png", sla: "2days", main_service: "KYC BGC", Currency: "20", min_price: "25", set_price: "15", max_price: "35", price_type: "Tiered", min_requests: "1001", max_requests: '21000', status: 1},
						]}
						options={{
							actionsColumnIndex: -1,
							numberOfPagesAround: 10
						}}
						actions={[
							{
								icon: 'Add Sub Service Price',
								iconProps: { className: 'btn btn-secondary FreeAction' },
								isFreeAction: true,
								onClick: (event) => { CreateServiceModalShow() }
							}
						]}
					/>
				</div>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal modal-70w'  >
				<Modal.Header closeButton>
					<Modal.Title>New Sub Service</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="sub_service_name"
									labelText="Sub Service Name"
									placeholder="Sub Service Name"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Sub Service Name is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="sub_service_code"
									labelText="Sub Service Code"
									placeholder="Sub Service Code"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Sub Service Code is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="parent_service"
									labelText="Parent Service"
									FormGroupClass="form-control-md form-control-style2"
									required="required"
									onChange={onChange}
									error="Please Select Parent Service!"
									optionData={
										<>
											<option value="" hidden>Parent Service</option>
											<option value="1">Passport</option>
											<option value="2">Credit</option>
											<option value="3">Company Registration</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="country_id"
									FormGroupClass="form-control-md form-control-style2"
									labelText="Select Country"
									required="required"
									onChange={onChange}
									error="Please Select Country!"
									optionData={
										<>
											<option value="" hidden>Select Country</option>
											<option value="6">India</option>
											<option value="7">Kenya</option>
											<option value="8">USA</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="sla"
									placeholder="SLA"
									labelText="SLA"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="SLA is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="service_id"
									FormGroupClass="form-control-md form-control-style2"
									labelText="Select Service"
									required="required"
									onChange={onChange}
									error="Please select Service!"
									optionData={
										<>
											<option value="" hidden>Select Service</option>
											<option value="12">Identity</option>
											<option value="13">Financial</option>
											<option value="14">Employment</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="currency"
									FormGroupClass="form-control-md form-control-style2"
									labelText="Select Currency"
									required="required"
									onChange={onChange}
									error="Please select Currency!"
									optionData={
										<>
											<option value="" hidden>Select Currency</option>
											<option value="1">USD</option>
											<option value="2">INR</option>
											<option value="3">KES</option>
											<option value="4">YEN</option>
											<option value="5">POUNDS</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="cost"
									placeholder="Cost"
									labelText="Cost"
									FormGroupClass="form-control-md form-control-style2"
									pattern='^[0-9]{1,}$'
									error="Cost is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="cost_type"
									FormGroupClass="form-control-md form-control-style2"
									labelText="Cost Type"
									required="required"
									onChange={onChange}
									error="Please select Cost Type!"
									optionData={
										<>
											<option value="" hidden>Select Cost Type</option>
											<option value="1">Fixed</option>
											<option value="2">Varied</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-12'>
								<div className='dataRequiredBx'>
									<h2>Data Required <button type='button' onClick={addDataRequiredFields}><BiPlus /> Add More</button></h2>
									{
										dataRequired.map((value, index) => {
											return (
												<div className='row' key={index}>
													<div className='col'>
														<InputText
															type="text"
															name="document_data"
															labelText="Document/ Data Required"
															placeholder="Document/ Data Required"
															FormGroupClass="form-control-md form-control-style2"
															pattern=".{1,}"
															error="Document/ Data is Required!"
															required="required"
															onChange={onChange}
														/>
													</div>
													<div className='col'>
														<SelectBox
															name="data_field_type"
															FormGroupClass="form-control-md form-control-style2"
															labelText="Data Field Type"
															required="required"
															onChange={onChange}
															error="Please Select Field Type!"
															optionData={
																<>
																	<option value="" hidden>Select Field Type</option>
																	<option value="12">Photo</option>
																	<option value="13">PDF</option>
																	<option value="14">Text</option>
																</>
															}
														/>
													</div>
													{dataRequired.length > 1 ?
														<div className='col align-self-center form-group'>
															<label className='d-block'>&nbsp;</label>
															<button type='button' className='delete' onClick={() => deleteDataRequiredField(index)}><BiTrash /> Delete</button>
														</div>
														:
														null
													}
												</div>
											)
										})
									}
								</div>
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
								isDisabled={ServiceApiResponse.loading}
								isLoading={ServiceApiResponse.loading}
							/>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default SubServicesPricing
