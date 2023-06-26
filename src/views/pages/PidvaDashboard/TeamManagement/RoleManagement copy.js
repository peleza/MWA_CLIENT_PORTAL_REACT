import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { MultiSelect } from "react-multi-select-component";
import { ActiveInactiveServiceAction, AddServiceAction, EditServiceAction, GetServiceListAction } from '../../../../redux/actions/PidvaServiceManagementAction';
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const RoleManagement = () => {
	const dispatch = useDispatch();

	const ServiceApiResponse = useSelector(state => state.PidvaServiceManagement)
	const GetCurrentUser = useSelector(state => state.auth.set_user)

	console.log("ServiceApiResponse", ServiceApiResponse);

	const [MultiSelected, setMultiSelected] = useState([]);
	const SelectedSubServices = MultiSelected.map(value => value.value)
	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [EditServiceModalState, setEditServiceModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		profile_name: '',
		main_service: '',
		created_by: GetCurrentUser.first_name
	});

	console.log("addServiceFields", addServiceFields);

	const CreateServiceModalClose = () => setCreateServiceModalState(false);
	const CreateServiceModalShow = () => setCreateServiceModalState(true);
	const EditServiceModalClose = () => setEditServiceModalState(false);
	const EditServiceModalShow = (data) => {
		setEditServiceModalState(true);
		setMultiSelected(data.sub_service_ids.map(value => ({ value: value.id, label: value.sub_service_name })))
		setAddServiceFields({
			...addServiceFields,
			profile_name: data.profile_name,
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
				<h1 className='dashboard-title'>Roles Management</h1>
				<div className='row row-col-5'>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="Total Users"
							value="557"
							icon="pidva-icons/client-icon.svg"
							color="#9B55E5"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="BGC Specialist"
							value="2,691"
							icon="pidva-icons/bgc-servicies-icon.svg"
							color="#F9327A"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="KYC Specialist"
							value="885"
							icon="pidva-icons/kyc-services-icon.svg"
							color="#42DABF"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="Active Users"
							value="885"
							icon="pidva-icons/active-services-icon.svg"
							color="#FCC103"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="BD Users"
							value="885"
							icon="pidva-icons/reports-icon.svg"
							color="#69C848"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="BGC Reviewers"
							value="885"
							icon="pidva-icons/review-icon.svg"
							color="#35BAE9"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="KYC Reviewers"
							value="885"
							icon="pidva-icons/kyc-review-icon.svg"
							color="#D64532"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="Dormant Users"
							value="885"
							icon="pidva-icons/dormant-clients-icon.svg"
							color="#AF0ECC"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="Finance Users"
							value="885"
							icon="pidva-icons/finance-users-icon.svg"
							color="#920061"
						/>
					</div>
				</div>

				<MaterialTable
					title="Roles Management"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Profile', field: 'profile' },
						{
							title: 'Main Service', field: 'main_service',
							render: (rowData) => {
								return (
									rowData.main_service.map((value, index) => {
										return (
											<p className='mb-0' key={index}>{value.parent_service}</p>
										)
									})
								)
							}
						},
						{ title: 'Users', field: 'users' },
						{ title: 'Created by', field: 'created_by' },
						{ title: 'Date Created', field: 'date_created' },
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
											<button className='dropdown-item' onClick={() => CreateServiceModalShow(rowData)}><BiCommentEdit /> Edit</button>
											<Link to="/pidva/permissions" className='dropdown-item'><MdOutlineAssignmentTurnedIn /> View & Assign Permissions</Link>
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
					data={[
						{ profile: "Administrator", main_service: [{ parent_service: "KYC" }, { parent_service: "BGC" }, { parent_service: "Recruitment" }, { parent_service: "Insights" }], users: "2 Users", created_by: "Christy Yen", date_created: "20-JUN-1990 08:03:00", status: 1 },
						{ profile: "Verifications Lead", main_service: [{ parent_service: "KYC" }, { parent_service: "BGC" }], users: "2 Users", created_by: "Christy Yen", date_created: "20-JUN-1990 08:03:00", status: 2 },
						{ profile: "BGC Specialist", main_service: [{ parent_service: "KYC" }, { parent_service: "BGC" }], users: "2 Users", created_by: "Christy Yen", date_created: "20-JUN-1990 08:03:00", status: 2 },
						{ profile: "KYC Specialist", main_service: [{ parent_service: "KYC" }, { parent_service: "BGC" }], users: "2 Users", created_by: "Christy Yen", date_created: "20-JUN-1990 08:03:00", status: 2 },
						{ profile: "Finance", main_service: [{ parent_service: "KYC" }, { parent_service: "BGC" }], users: "2 Users", created_by: "Christy Yen", date_created: "20-JUN-1990 08:03:00", status: 2 },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Create Role',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { CreateServiceModalShow() }
						}
					]}
				/>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>Create Role</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={addService}>
						<InputText
							type="text"
							name="role_name"
							labelText="Role Name"
							placeholder="Enter Role Name"
							FormGroupClass="form-control-md form-control-style2"
							pattern='^[a-z A-Z]{2,20}$'
							error="Role Name is required characters!"
							required="required"
							onChange={onChange}
						/>
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

export default RoleManagement
