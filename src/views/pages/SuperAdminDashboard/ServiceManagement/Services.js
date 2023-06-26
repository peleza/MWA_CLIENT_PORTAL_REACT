import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { ActiveInactiveServiceAction, AddServiceAction, EditServiceAction, GetServiceListAction } from '../../../../redux/actions/PidvaServiceManagementAction';
import moment from 'moment';
import DashboardInfoBx from '../../../components/DashboardInfoBx/DashboardInfoBx';


const AdminServices = () => {
	const dispatch = useDispatch();

	const ServiceApiResponse = useSelector(state => state.PidvaServiceManagement)
	const GetCurrentUser = useSelector(state => state.auth.set_user)

	console.log("ServiceApiResponse", ServiceApiResponse);

	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [EditServiceModalState, setEditServiceModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: GetCurrentUser.first_name
	});

	console.log("addServiceFields", addServiceFields);

	const CreateServiceModalClose = () => setCreateServiceModalState(false);
	const CreateServiceModalShow = () => setCreateServiceModalState(true);
	const EditServiceModalClose = () => setEditServiceModalState(false);
	const EditServiceModalShow = (data) => {
		setEditServiceModalState(true);
		setAddServiceFields({
			...addServiceFields,
			service_name: data.service_name,
			service_code: data.service_code,
			parent_service: data.parent_service,
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

	const ActiveInactive = (data) => dispatch(ActiveInactiveServiceAction({ apiUrl: "active_inactive_service", data: data }))

	const editService = (e) => {
		e.preventDefault();
		dispatch(EditServiceAction({ apiUrl: "update_service", data: addServiceFields }))
	}

	const addService = (e) => {
		e.preventDefault();
		dispatch(AddServiceAction({ apiUrl: "add_service", data: addServiceFields }))
	}

	useEffect(() => {
		dispatch(GetServiceListAction({ apiUrl: "service_list" }))
	}, [dispatch])

	useEffect(() => {
		if ((ServiceApiResponse !== undefined && ServiceApiResponse.service_add.status === "200") || (ServiceApiResponse !== undefined && ServiceApiResponse.service_activeInactive.status === "200") || (ServiceApiResponse !== undefined && ServiceApiResponse.service_edit.status === "200")) {
			dispatch(GetServiceListAction({ apiUrl: "service_list" }))
			setCreateServiceModalState(false);
			setEditServiceModalState(false);
		}
	}, [ServiceApiResponse.service_add, ServiceApiResponse.service_activeInactive, ServiceApiResponse.service_edit])

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Services</h1>
				<div className='row row-col-5'>
					<div className='col mb-5'>
						<DashboardInfoBx
							color="baby-blue-color"
							title="Services"
							value="557"
							icon="pidva-icons/new-request-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="pink-color"
							title="Total Sub Services"
							value="2,691"
							icon="pidva-icons/nearing-tat-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="green-color2"
							title="BGC Sub Services"
							value="885"
							icon="pidva-icons/complete-reports-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="coral-color"
							title="KYC Sub Services"
							value="885"
							icon="pidva-icons/complete-reports-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="purple-color"
							title="Active Sub Services"
							value="885"
							icon="pidva-icons/reports-not-started-icon.svg"
						/>
					</div>
				</div>
				<MaterialTable
					title="Services"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Service Name', field: 'service_name' },
						{ title: 'Icon', field: 'icon',
							render:  (rowData) => {
								return <img src={rowData.icon} width={30} alt="flag" />
							}
						},
						{ title: 'Service Code', field: 'service_code' },
						{ title: 'Main Service', field: 'main_service' },
						{
							title: 'Date Created', field: 'createdAt',
							render: (rowData) => {
								return (
									moment(rowData.createdAt).format('MM/DD/YYYY')
								)
							}
						},
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
											<button className='dropdown-item' onClick={() => EditServiceModalShow(rowData)}><BiCommentEdit /> Edit</button>
											<button className='dropdown-item'><TbEye /> View</button>
											{rowData.status === 1 ?
												<button className='dropdown-item' onClick={() => ActiveInactive({ status: 2, id: rowData.id })}><BiBlock /> Deactivate</button>
												:
												<button className='dropdown-item' onClick={() => ActiveInactive({ status: 1, id: rowData.id })}><BiCheckCircle /> Activate</button>
											}
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={ServiceApiResponse && ServiceApiResponse.service_list.data}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Create New Service',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { CreateServiceModalShow() }
						}
					]}
				/>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>New Service</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<InputText
							type="text"
							name="service_name"
							placeholder="Service Name"
							labelText="Service Name"
							FormGroupClass="form-control-md form-control-style2"
							pattern='^[a-z A-Z]{2,20}$'
							error="Service Name less then 20 characters!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="service_code"
							placeholder="Service Code"
							labelText="Service Code"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Service Code is Required!"
							required="required"
							onChange={onChange}
						/>
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

			<Modal show={EditServiceModalState} onHide={EditServiceModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>Edit Service</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={editService}>
						<InputText
							type="text"
							name="service_name"
							labelText="Service Name"
							placeholder="Service Name"
							FormGroupClass="form-control-md form-control-style2"
							pattern='^[a-z A-Z]{2,}$'
							error="Service Name is Required!"
							required="required"
							onChange={onChange}
							defaultValue={addServiceFields.service_name}
						/>
						<InputText
							type="text"
							name="service_code"
							labelText="Service Code"
							placeholder="Service Code"
							FormGroupClass="form-control-md form-control-style2"
							pattern='^[0-9]{2,}$'
							error="Service Code Must be a Number!"
							required="required"
							onChange={onChange}
							defaultValue={addServiceFields.service_code}
						/>
						<InputText
							type="text"
							name="parent_service"
							labelText="Parent Service"
							placeholder="Parent Service"
							FormGroupClass="form-control-md form-control-style2"
							pattern='^[0-9]{1,}$'
							error="Parent Service Must be a Number!"
							required="required"
							onChange={onChange}
							defaultValue={addServiceFields.parent_service}
						/>
						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={EditServiceModalClose}
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

export default AdminServices
