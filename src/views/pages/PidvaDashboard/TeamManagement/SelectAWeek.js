import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveInactiveServiceAction, AddServiceAction, EditServiceAction, GetServiceListAction } from '../../../../redux/actions/PidvaServiceManagementAction';

const SelectAWeek = () => {
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
				<h1 className='dashboard-title'>When I click select a week </h1>
				<div className='repeat-white-bx'>
					<div className='table-responsive table-nowrap-content'>
						<table className="table">
							<thead>
								<tr>
									<th className='no-wrap text-center'>Staff No</th>
									<th className='no-wrap text-center'>Staff Name</th>
									<th className='no-wrap text-center'>Picture</th>
									<th className='no-wrap text-center'>Profile</th>
									<th className='no-wrap text-center' colSpan={2}>Monday 20 Jun 2022</th>
									<th className='no-wrap text-center' colSpan={2}>Tuesday 21 Jun 2022</th>
									<th className='no-wrap text-center' colSpan={2}>Wednesday 22 Jun 2022</th>
									<th className='no-wrap text-center' colSpan={2}>Thursday 23 Jun 2022</th>
									<th className='no-wrap text-center' colSpan={2}>Friday 24 Jun 2022</th>
									<th className='no-wrap text-center' colSpan={2}>Saturday 25 Jun 2022</th>
									<th className='no-wrap text-center' colSpan={2}>Sunday 26 Jun 2022</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='no-wrap' rowSpan={4} valign="top">P - xn17x</td>
									<td className='no-wrap' rowSpan={4} valign="top">Ali Jane</td>
									<td className='no-wrap' rowSpan={4} valign="top"><img src="/images/dummy-profile.jpg" className="tableUserImage" alt="profile" /></td>
									<td className='no-wrap' rowSpan={4} valign="top">BGC Specialist</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
								</tr>
								<tr>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
								</tr>
								<tr>
									<td className='no-wrap'>Idle Time </td>
									<td className='no-wrap'>2hr 13 mins</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
								</tr>
								<tr>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs 1 min</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
								</tr>
								<tr>
									<td rowSpan={4} valign="top">P - xn17x</td>
									<td rowSpan={4} valign="top">Ali Jane</td>
									<td rowSpan={4} valign="top"><img src="/images/dummy-profile.jpg" className="tableUserImage" alt="profile" /></td>
									<td rowSpan={4} valign="top">BGC Specialist</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
									<td className='no-wrap'>Clock In</td>
									<td className='no-wrap'>08:03:00</td>
								</tr>
								<tr>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
									<td className='no-wrap'>Clock Out</td>
									<td className='no-wrap'>20:03:00</td>
								</tr>
								<tr>
									<td className='no-wrap'>Idle Time </td>
									<td className='no-wrap'>2hr 13 mins</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
									<td className='no-wrap'>Idle Time</td>
									<td className='no-wrap'>2hr</td>
								</tr>
								<tr>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs 1 min</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
									<td className='no-wrap'>Active Time</td>
									<td className='no-wrap'>10 hrs</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</>
	);
}

export default SelectAWeek
