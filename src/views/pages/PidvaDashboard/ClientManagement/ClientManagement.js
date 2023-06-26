import React, { useEffect, useRef, useState } from 'react';
import MaterialTable from '@material-table/core';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Dropdown, Form, Modal, Tab, Tabs } from 'react-bootstrap';
import MySelf from '../../../components/RequestFrom/MySelf';
import Client from '../../../components/RequestFrom/Client';
import { BiDotsVerticalRounded, BiCommentEdit, BiTrash, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import '../../../components/Button/Button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ClientUpdateAction, GetClientListAction } from '../../../../redux/actions/AdminClientActions';
import { GetCountryListAction } from '../../../../redux/actions/AdminCountryAction';


const ClientManagement = (props) => {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		clientListData: [],
		dropDownShow: "hide",
		editRowData: ""

	})
	console.log("state is mana".state)
	const childRef = useRef();
	const clientListResponse = useSelector(state => state)
	const ServiceApiResponse = useSelector(state => state.AdminClientData.client_register)
	const ServiceApiResponseEmail = useSelector(state => state.AdminClientData.client_register_email)
	const ServiceApiResponseEdit = useSelector(state => state.AdminClientData.client_edit)

	console.log('Selector data is clientListResponse', clientListResponse)
	useEffect(() => {
		if (ServiceApiResponse?.message == "Register Successfully " || ServiceApiResponse?.message == "Individual Register Successfully ") {
			setCreateServiceModalState(false)
			dispatch(GetClientListAction())
			setState({ ...state, editRowData: '' })
		}
		if (ServiceApiResponseEmail) {
			setCreateServiceModalState(false)
		}
		if (ServiceApiResponseEdit?.message == "Updated Successfully ") {
			dispatch(GetClientListAction())
			setCreateServiceModalState(false)
			setState({ ...state, editRowData: '' })
		}
	}, [ServiceApiResponse, ServiceApiResponseEmail, ServiceApiResponseEdit])

	useEffect(() => {
		dispatch(GetClientListAction())
		dispatch(GetCountryListAction())

	}, [])

	useEffect(() => {
		setState({ ...state, clientListData: clientListResponse?.AdminClientData?.client_list?.data })

	}, [clientListResponse.AdminClientData])
	useEffect(() => {
		dispatch(GetClientListAction())
	}, [clientListResponse.AdminClientData.client_update])


	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);

	const CreateServiceModalClose = () => {
		setCreateServiceModalState(false);
		setState({ ...state, editRowData: '' })
	}
	const CreateServiceModalShow = () => setCreateServiceModalState(true);

	const deactivateClient = (id) => {
		dispatch(ClientUpdateAction(id, 2))
		setState({ ...state, dropDownShow: "hide" })
	}

	const viewDetails = () => {
		props.history.push('/pidva/client-details')
	}

	console.log("state.editRowData", state.editRowData);

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Client Management</h1>
				<div className='row row-col-5'>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="Total Clients"
							value="557"
							icon="pidva-icons/client-icon.svg"
							color="#9B55E5"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="BGC Clients"
							value="2,691"
							icon="pidva-icons/bgc-servicies-icon.svg"
							color="#F9327A"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="KYC Clients"
							value="885"
							icon="pidva-icons/kyc-services-icon.svg"
							color="#42DABF"
						/>
					</div>
					<div className='col'>
						<DashboardOverviewBx
							title="Active Clients"
							value="885"
							icon="pidva-icons/active-services-icon.svg"
							color="#FCC103"
						/>
					</div>
					<div className='col'>
						<DashboardOverviewBx
							title="Dormant Clients"
							value="885"
							icon="pidva-icons/dormant-clients-icon.svg"
							color="#69C848"
						/>
					</div>
				</div>

				<MaterialTable
					title="Clients"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Profile #', field: 'client_ref' },
						{ title: 'Client Name', field: `client_name` },
						{ title: 'Reg No.', field: 'comp_regist_no' },
						{
							title: 'Country of Operation', field: 'comp_incop_certif_url',
							render: (rowData) => {
								return (
									<>
										<img src={rowData.comp_incop_certif_url.logo_url} alt="flag" width={30} />
										<span>&nbsp; {rowData.comp_incop_certif_url.name}</span>
									</>
								)
							}
						},
						{ title: 'Industry', field: 'industry' },
						{ title: 'Address', field: 'address' },
						{ title: 'Client Admin', field: 'client_admin' },
						{ title: 'Contact Numbers', field: 'contact_numbers' },
						{ title: 'Contact Email Address', field: 'contact_email_address' },
						{
							title: 'Main Service', field: 'main_service',
							render: (rowData) => {
								return (
									rowData.main_service.map((value, index) => {
										return (
											<>
												<span key={index} className="d-block">{value.name}</span>
											</>
										)
									})
								)
							}
						},
						{
							title: 'Status', field: 'status',
							render: (rowData) => {
								return (
									rowData.status === 1 ? <span className="badge badge-success">Active</span> :
										rowData.status === 2 ? <span className="badge badge-danger">Deactivated</span> :
											rowData.status === 3 ? <span className="badge badge-warning">Dormant</span> :
												rowData.status === 4 ? <span className="badge badge-primary">Verified</span> : null
								)
							}
						},
						{
							title: 'Action', field: 'Action',
							render: (rowData) => {
								console.log("row data is single view", rowData)
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action" > <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item' onClick={viewDetails}><TbEye /> View Details</button>
											<button className='dropdown-item'><BiCommentEdit /> Edit</button>
											{rowData.status === 2 ?
												<button className='dropdown-item'><BiCheckCircle /> Activate</button> :
												<button className='dropdown-item' onClick={() => deactivateClient(rowData.id)}><BiBlock /> Deactivate</button>
											}
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={state.clientListData}
					// data={[
					// 	{ client_ref: "P - xn17x", client_name: "Codinput", comp_regist_no: "PVT- 9v55", comp_incop_certif_url: {name: "Kenya", logo_url: '/images/flag1.png'}, industry: "Healthcare ", address: "3rd Floor Reliance Centre,", client_admin: "Ali Jane", contact_numbers: "0712 345 671", contact_email_address: "ali@ Codinput.co", main_service: [{ name: "KYC" }, { name: "BGC" }], status: 1 },
					// 	{ client_ref: "P - xn17x", client_name: "Codinput", comp_regist_no: "PVT- 9v55", comp_incop_certif_url: {name: "Kenya", logo_url: '/images/flag1.png'}, industry: "Healthcare ", address: "3rd Floor Reliance Centre,", client_admin: "Ali Jane", contact_numbers: "0712 345 671", contact_email_address: "ali@ Codinput.co", main_service: [{ name: "KYC" }, { name: "BGC" }], status: 2 },
					// 	{ client_ref: "P - xn17x", client_name: "Codinput", comp_regist_no: "PVT- 9v55", comp_incop_certif_url: {name: "Kenya", logo_url: '/images/flag1.png'}, industry: "Healthcare ", address: "3rd Floor Reliance Centre,", client_admin: "Ali Jane", contact_numbers: "0712 345 671", contact_email_address: "ali@ Codinput.co", main_service: [{ name: "KYC" }, { name: "BGC" }], status: 3 },
					// 	{ client_ref: "P - xn17x", client_name: "Codinput", comp_regist_no: "PVT- 9v55", comp_incop_certif_url: {name: "Kenya", logo_url: '/images/flag1.png'}, industry: "Healthcare ", address: "3rd Floor Reliance Centre,", client_admin: "Ali Jane", contact_numbers: "0712 345 671", contact_email_address: "ali@ Codinput.co", main_service: [{ name: "KYC" }, { name: "BGC" }], status: 4 },
					// ]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Create a Client',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { CreateServiceModalShow() }
						}
					]}
				/>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal modal-90w'>
				<Modal.Header closeButton>
					<Modal.Title>Create a Client</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{state.editRowData == "" ?
						<Form>
							<Tabs
								defaultActiveKey="My_Self"
								transition={true}
								className="common-tabs"
							>

								<Tab eventKey="My_Self" title="MySelf">
									<MySelf editData={state.editRowData} />
								</Tab>
								<Tab eventKey="client" title="Client">
									<Client />
								</Tab>

							</Tabs>
						</Form> : <Form>
							<Tabs
								defaultActiveKey="My_Self"
								transition={true}
								className="common-tabs"
							>

								<Tab eventKey="My_Self" title="MySelf">
									<MySelf editData={state.editRowData} />
								</Tab>
							</Tabs>
						</Form>}
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ClientManagement
