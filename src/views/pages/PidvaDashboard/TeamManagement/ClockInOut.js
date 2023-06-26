import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { Link } from 'react-router-dom';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { FileUpload, InputText, SelectBox } from '../../../components/InputText/InputText';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { ActiveInactiveServiceAction, AddServiceAction, EditServiceAction, GetServiceListAction } from '../../../../redux/actions/PidvaServiceManagementAction';

const ClockInOut = () => {
	const dispatch = useDispatch();

	const ServiceApiResponse = useSelector(state => state.PidvaServiceManagement)
	const GetCurrentUser = useSelector(state => state.auth.set_user)
	const [fileName, setFileName] = useState();
    const [Fields, setFields] = useState({
        org_id: "",
        email_id: "",
        password: ""
    })

	
	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [EditServiceModalState, setEditServiceModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: GetCurrentUser.first_name
	});
	
	const getFileName = (e) => {
		setFileName(e.target.files[0])
	}
	
	console.log("ServiceApiResponse", ServiceApiResponse);
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
				<h1 className='dashboard-title'>Clock In/Out</h1>
				<MaterialTable
					title="Clock In/Out"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Staff No', field: 'staff_no' },
						{
							title: 'Staff Name', field: 'staff_name',
							render: (rowData) => (
								<div className='profileWithName'>
									{
										rowData.staff.staff_img ?
											<img src={rowData.staff.staff_img} className="tableUserImage" alt="profile" />
											:
											<span className='namePlaceholder'>{rowData.staff.staff_name[0].split()}</span>
									}
								</div>
							)
						},
						{
							title: 'Picture', field: 'staff_name',
							render: (rowData) => (
								<div className='profileWithName'>
									<span>{rowData.staff.staff_name}</span>
								</div>
							)
						},
						{ title: 'Profile', field: 'profile' },
						{ title: 'Online Status', field: 'status' },
						{ title: 'Clock In ', field: 'clock_in' },
						{ title: 'Clock Out', field: 'clock_out' },
						{ title: 'Idle Time', field: 'idle_time' },
						{ title: 'Active Time on the system', field: 'active_time' },
						{ title: 'Time Logs', field: 'time_logs',
							render: (rowData) => {
								return (
									<Link to={rowData.time_logs}>Select a Week</Link>
								)
							}
						},
					]}
					data={[
						{staff_no: "P - xn17x", staff: { staff_img: "/images/dummy-profile.jpg", staff_name: "Ali Jane" }, profile: "BGC Specialist", status: "Online", clock_in: "08:03:00", clock_out: "20:03:00", idle_time: " 2hrs 13 mins", active_time: "10", time_logs: "/pidva/select-a-week",},
						{staff_no: "P - v8m ", staff: { staff_img: "/images/dummy-profile.jpg", staff_name: "Jen Still" }, profile: "KYC Specialist", status: "On Leave", clock_in: "08:03:00", clock_out: "20:03:00", idle_time: " 2hrs 13 mins", active_time: "10", time_logs: "Select a week",},
						{staff_no: "P - oqh6 ", staff: { staff_img: "/images/dummy-profile.jpg", staff_name: "Kim Cez" }, profile: "BGC Reviewer", status: "Away", clock_in: "08:03:00", clock_out: "20:03:00", idle_time: " hrs 13 mins", active_time: "10", time_logs: "Select a week",},
						{staff_no: "P - mqe", staff: { staff_img: "/images/dummy-profile.jpg", staff_name: "Gery Cush" }, profile: "Finance", status: "Idle", clock_in: "08:03:00", clock_out: "20:03:00", idle_time: " hrs 13 mins", active_time: "10", time_logs: "Select a week",},
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 10
					}}
				/>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal modal-70w'  >
				<Modal.Header closeButton>
					<Modal.Title>Add Team Member</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={addService}>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="staff_no"
									placeholder="Enter Staff No"
									labelText="Staff No"
									FormGroupClass="form-control-md form-control-style2"
									pattern='^[a-z A-Z]{2,20}$'
									error="Staff No is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="staff_name"
									placeholder="Enter Staff Code"
									labelText="Staff Name"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Staff Name is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<FileUpload
									fileName={fileName && fileName.name}
									labelText="Update Profile Photo"
									onChange={getFileName}
									name="profile_photo"
									accept='Jpeg, PNG'
									error="Please Upload Photo Certificate!"
									required="required"
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="id_number"
									placeholder="Enter ID Number"
									labelText="ID Number"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="ID Number is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="citizenship "
									placeholder="Enter Citizenship"
									labelText="Citizenship"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Citizenship is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="designation"
									placeholder="Enter Designation"
									labelText="Designation"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Designation is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="role"
									labelText="Role"
									FormGroupClass="form-control-md form-control-style2"
									required="required"
									onChange={onChange}
									error="Please Select Role!"
									optionData={
										<>
											<option value="" hidden>Select Role</option>
											<option value="1">BGC Specialist</option>
											<option value="2">KYC Specialist</option>
											<option value="3">BGC Specialist</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="address"
									placeholder="Enter Address"
									labelText="Address"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Address is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="phone_no"
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
									type="email"
									name="Email"
									placeholder="Enter Email"
									labelText="Email Address"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Email Address is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="main_service"
									labelText="Main Service"
									FormGroupClass="form-control-md form-control-style2"
									required="required"
									onChange={onChange}
									error="Please Select Main service!"
									optionData={
										<>
											<option value="" hidden>Select Main service</option>
											<option value="1">BGC</option>
											<option value="2">KYC</option>
											<option value="3">BGC</option>
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

export default ClockInOut
