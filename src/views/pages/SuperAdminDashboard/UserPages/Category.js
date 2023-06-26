import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { ActiveInactiveServiceAction, AddServiceAction, EditServiceAction, GetServiceListAction } from '../../../../redux/actions/PidvaServiceManagementAction';

const Category = () => {
	const dispatch = useDispatch();

	const ServiceApiResponse = useSelector(state => state.PidvaServiceManagement)

	console.log("ServiceApiResponse", ServiceApiResponse);

	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [EditServiceModalState, setEditServiceModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		super_service_name: '',
		super_service_code: '',
		sub_service_code: '',
		country_id: '',
		cost: ''
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
			super_service_name: data.super_service_name,
			super_service_code: data.super_service_code,
			sub_service_code: data.sub_service_code,
			country_id: data.country_id,
			cost: data.cost,
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

	const ActiveInactive = (data) => dispatch(ActiveInactiveServiceAction({ apiUrl: "active_inactive_admin_service", data: data }))

	const editService = (e) => {
		e.preventDefault();
		dispatch(EditServiceAction({ apiUrl: "update_admin_service", data: addServiceFields }))
	}

	const addService = (e) => {
		e.preventDefault();
		dispatch(AddServiceAction({ apiUrl: "add_admin_service", data: addServiceFields }))
	}

	useEffect(() => {
		dispatch(GetServiceListAction({ apiUrl: "admin_service_list" }))
	}, [dispatch])

	useEffect(() => {
		if ((ServiceApiResponse !== undefined && ServiceApiResponse.service_add.status === "200") || (ServiceApiResponse !== undefined && ServiceApiResponse.service_activeInactive.status === "200") || (ServiceApiResponse !== undefined && ServiceApiResponse.service_edit.status === "200")) {
			dispatch(GetServiceListAction({ apiUrl: "admin_service_list" }))
			setCreateServiceModalState(false);
			setEditServiceModalState(false);
		}
	}, [ServiceApiResponse.service_add, ServiceApiResponse.service_activeInactive, ServiceApiResponse.service_edit])

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Category</h1>

				<MaterialTable
					title="Category"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Category Name', field: 'super_service_name' },
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
											<button className='dropdown-item'><BiCommentEdit /> Edit</button>
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
						{ createdAt: "2022-07-26T05:47:37.637Z", id: 1, status: 1, super_service_name: "KYC", updatedAt: "2022-07-26T05:47:37.637Z", },
						{ createdAt: "2022-07-26T05:47:37.637Z", id: 2, status: 1, super_service_name: "BGC", updatedAt: "2022-07-26T05:47:37.637Z", }
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Create Category',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { CreateServiceModalShow() }
						}
					]}
				/>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>New Category</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<InputText
							type="text"
							name="super_service_name"
							labelText="Category Name"
							placeholder="Enter Name"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Category Name is Required!"
							required="required"
							onChange={onChange}
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
					<Modal.Title>Edit Category</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={editService}>
					<InputText
							type="text"
							name="super_service_name"
							labelText="Category Name"
							placeholder="Enter Name"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Category Name is Required!"
							required="required"
							onChange={onChange}
							defaultValue={addServiceFields.super_service_name}
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

export default Category
