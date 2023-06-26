import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import './SassUsers.scss';
import { Dropdown, Form, Modal, Tab, Tabs } from 'react-bootstrap';
import { BiCheckCircle, BiCommentEdit, BiBlock, BiDotsVerticalRounded } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import '../../auth/Auth.scss'
import { MultiSelect } from "react-multi-select-component";
import { FileUpload, InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClientSendEmailRegisterAction } from '../../../../redux/actions/AdminClientActions';

const SaasUsers = (props) => {
	const [CreateServiceModalState, setCreateSaasUserModalState] = useState(false);
	const [MultiSelected, setMultiSelected] = useState([]);

	const CreateSaasUserModalClose = () => setCreateSaasUserModalState(false);
	const CreateSaasUserModalShow = () => setCreateSaasUserModalState(true);

	const userDetails = () => props.history.push('sass-user-details/25')
	const addCountryModalOpen = () => {

	}
	const [state, setState] = useState({
        emailAddress : '',
        loading : false,
    })

    const dispatch = useDispatch();
    const ServiceApiResponse = useSelector(state => state.AdminClientData.client_register_email)
    const senderData = useSelector(state => state?.auth?.set_user)

    console.log("senderData is send ",senderData.id)
    const submitData = (event) => {
  
  
        console.log("Data is called ")
        const sendData = { 
            email_id : state.emailAddress, 
            url : "http://localhost:3000/psmt/signup/",
            senderEmail : senderData.email_id,
            senderId : senderData.id,
        }
        if(state.emailAddress && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(state.emailAddress) ){
            setState({...state,loading : true})
            dispatch(ClientSendEmailRegisterAction(sendData))
        }
       
        // dispatch(ClientSendEmailRegisterAction(sendData))
    }

    useEffect(() => {
        if(ServiceApiResponse?.message == " Email Send Success"){
            setState({...state,loading : false})
        }
     }, [ServiceApiResponse])
    console.log("State is ", state)
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>SaaS Users</h1>
				<div className='no-wrap-table'>
					<MaterialTable
						title="SaaS Users"
						columns={[
							{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
							{ title: 'SaaS Ref #', field: 'client_ref' },
							{ title: 'Saas Name', field: `saas_name` },
							{ title: 'User Name', field: 'user_name' },
							{
								title: 'Picture', field: 'picture_image',
								render: (rowData) => {
									return (
										<>
											<img src={rowData.picture_image.logo_url} alt="flag" width={30} />
										</>
									)
								}
							},
							{ title: 'ID Number ', field: 'id_number' },
							{ title: 'Email Address', field: 'email_address' },
							{ title: 'Role', field: 'role' },
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
							{ title: 'Created By', field: 'created_by' },
							{ title: 'Date Created', field: 'date_created' },
							{
								title: 'Action', field: 'Action',
								render: (rowData) => {
									return (
										<Dropdown className='tableActionDropdown'>
											<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

											<Dropdown.Menu>
												<button className='dropdown-item'><BiCommentEdit /> Edit</button>
												<Link to="/admin/sass-360-view" className='dropdown-item'><TbEye /> View</Link>
												{rowData.status === 1 || rowData.status === 3 || rowData.status === 4 ?
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
							{ client_ref: "P - xn17x", saas_name: "Codinput", user_name: "Yas Min", picture_image: {logo_url: '/images/flag1.png'}, id_number: "1234567 ", email_address: "ym@codin.co", role: "Client Admin", main_service: [{ name: "KYC" }, { name: "BGC" }], created_by: "Christy Yen", date_created: "20-JUN-1990 08:03:00", status: 2 },
							{ client_ref: "P - xn17x", saas_name: "Codinput", user_name: "Yas Min", picture_image: {logo_url: '/images/flag1.png'}, id_number: "1234567 ", email_address: "ym@codin.co", role: "Client Admin", main_service: [{ name: "KYC" }, { name: "BGC" }], created_by: "Christy Yen", date_created: "20-JUN-1990 08:03:00", status: 1 },
							{ client_ref: "P - xn17x", saas_name: "Codinput", user_name: "Yas Min", picture_image: {logo_url: '/images/flag1.png'}, id_number: "1234567 ", email_address: "ym@codin.co", role: "Client Admin", main_service: [{ name: "KYC" }, { name: "BGC" }], created_by: "Christy Yen", date_created: "20-JUN-1990 08:03:00", status: 3 },
						]}
						options={{
							actionsColumnIndex: -1,
							pageSize: 10
						}}
						actions={[
							{
								icon: 'Create SaaS User',
								iconProps: { className: 'btn btn-secondary FreeAction' },
								isFreeAction: true,
								onClick: (event) => { CreateSaasUserModalShow() }
							}
						]}
					/>
				</div>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateSaasUserModalClose} centered className='commonModal form-modal modal-90w'>
				<Modal.Header closeButton>
					<Modal.Title>Create a SasS</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Tabs
							defaultActiveKey="My_Self"
							transition={true}
							className="common-tabs"
						>
							<Tab eventKey="My_Self" title="MySelf">
								<Form>
									<div className='row'>
										<div className='col-lg-3'>
											<InputText
												type="text"
												name="company_name"
												placeholder="Enter Name"
												labelText="Company Name"
												pattern=".{1,}"
												error="Company Name is Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-3'>
											<InputText
												pattern=".{1,}"
												type="text"
												name="registration_no"
												placeholder="Enter Registration No."
												labelText="Company Registration No."
												error="Registration No. Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-3'>
											<SelectBox
												name="country_incorporation"
												required="required"
												labelText="Country of Incorporation"
												error="Please Select Country!"
												optionData={
													<>
														<option value="" hidden>Select Country</option>
														<option value="">Kenya</option>
														<option value="">China</option>
														<option value="">China</option>
													</>
												}
											/>
										</div>
										<div className='col-lg-3'>
											<SelectBox
												name="industry_name"
												required="required"
												labelText="Industry of Operation"
												error="Please Select Industry!"
												optionData={
													<>
														<option value="" hidden>Select Industry</option>
														<option value="">IT Industry</option>
														<option value="">Industry 2</option>
														<option value="">Industry 3</option>
													</>
												}
											/>
										</div>
										<div className='col-lg-3'>
											<InputText
												type="text"
												name="contact_person"
												placeholder="Enter Name"
												labelText="Contact Person Name"
												pattern=".{1,}"
												error="Contact Person Name Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-3'>
											<InputText
												type="text"
												name="person_email"
												placeholder="Enter email"
												labelText="Contact Person Email"
												pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
												error="It should be a valid email address!"
												required="required"
											/>
										</div>
										<div className='col-lg-3'>
											<InputText
												type="text"
												name="person_id_number"
												placeholder="Enter ID Number"
												labelText="Contact Person ID No."
												pattern="^[0-9]{5,20}$"
												error="Contact Person ID min(5)-max(20) Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-3'>
											<InputText
												type="text"
												name="person_phone_number"
												placeholder="Enter Phone No."
												labelText="Contact Person Phone No."
												pattern="^[0-9]{6,12}$"
												error="Valid Contact Person Phone No. Required!"
												required="required"

											/>
										</div>
										<div className='col-lg-3'>
											<InputText
												type="text"
												name="enter_designation"
												placeholder="Enter Designation"
												labelText="Contact Person Designation"
												pattern=".{1,}"
												error="Designation is Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-3'>
											<InputText
												type="text"
												name="address"
												placeholder="Enter Address"
												labelText="Address"
												pattern=".{1,}"
												error="Address is Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-3'>
											<div className='form-group'>
												<label htmlFor="">where services are required</label>
												<MultiSelect
													value={MultiSelected}
													onChange={setMultiSelected}
													className='react-select-bx'
													name="sub_service"
													labelledBy="Select Country"
													options={
														[
															{ value: 4, label: 'Kenya' },
															{ value: 5, label: 'China' },
															{ value: 6, label: 'India' },
														]
													}
												/>
											</div>
										</div>
										<div className='col-lg-3'>
											<div className='form-group'>
												<label htmlFor="">Services Required</label>
												<MultiSelect
													value={MultiSelected}
													onChange={setMultiSelected}
													className='react-select-bx'
													name="sub_service"
													labelledBy="Select Industry"
													options={
														[
															{ value: 4, label: 'Employment Background Checks' },
															{ value: 5, label: 'Know Your Customer' },
															{ value: 6, label: 'Recruitment' },
															{ value: 7, label: 'Insights, Analytics & Information Reports' },
														]
													}
												/>
											</div>
										</div>
										<div className='col-lg-6'>
											<SelectBox
												name="subscription_plan"
												required="required"
												labelText="Subscription Plan"
												error="Please Select Subscription Plan!"
												optionData={
													<>
														<option value="" hidden>Select Subscription Plan</option>
														<option value="">Platinum 12 months plan KES 96,000/ $960</option>
														<option value="">Gold 6 months plan. KES 54,000/ $540</option>
														<option value="">Silver 3 months plan KES 30,000/ $300</option>
														<option value="">Custom 1 month plan V KES 12,000/ $120</option>
													</>
												}
											/>
										</div>
										<div className='col-lg-6'>
											<FileUpload
												labelText="Upload Company Incorporation Certificate"
												name="comp_incop_certif_url"
												accept='Jpeg, PNG, PDF'
												error="Please Upload Company Certificate!"
												required="required"
											/>
										</div>
										<div className='col-lg-6'>
											<FileUpload
												labelText="Logo"
												name="logo"
												accept='Jpeg, PNG, PDF'
												error="Please Upload Logo!"
												required="required"
											/>
										</div>
									</div>
									<Modal.Footer>
										<Button
											btnName="Submit"
											type="submit"
											className="btn-secondary"
										/>
									</Modal.Footer>
								</Form>
							</Tab>
							<Tab eventKey="SaaS" title="SaaS">
								<div className='createClient'>
									<InputText
										type="text"
										name="email"
										placeholder="Enter Email"
										labelText="Enter Email Address of SaaS admin"
										FormGroupClass="mb-0"
										pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
										error="It should be a valid email address!"
										required="required"
										onChange={({ target }) => {
											setState({ ...state, emailAddress: target.value })
										}}
									/>
								</div>

								<Modal.Footer>
									<Button
										btnName="Submit"
										type="submit"
										className="btn-secondary"
										isDisabled={state.loading}
										isLoading={state.loading}
										onClick={(event) => submitData(event)}
									/>
								</Modal.Footer>
							</Tab>
						</Tabs>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default SaasUsers
