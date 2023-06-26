import React, { useState, useEffect } from 'react';
import MaterialTable from '@material-table/core';
import './SassUsers.scss';
import { Dropdown, Form, Modal, Tab, Tabs } from 'react-bootstrap';
import { BiCheckCircle, BiCommentEdit, BiBlock, BiDotsVerticalRounded } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import '../../auth/Auth.scss'
import { MultiSelect } from "react-multi-select-component";
import Client from '../../../components/RequestFrom/Client';
import { FileUpload, InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClientSendEmailRegisterAction } from '../../../../redux/actions/AdminClientActions';

const SaaSOrganization = (props) => {
	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [MultiSelected, setMultiSelected] = useState([]);

	const CreateServiceModalClose = () => setCreateServiceModalState(false);
	const CreateServiceModalShow = () => setCreateServiceModalState(true);

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
				<h1 className='dashboard-title'>SaaS Organization</h1>
				<div className='row'>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Total SaaS"
							value="557"
							icon="pidva-icons/client-icon.svg"
							color="#9B55E5"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Pending Activation"
							value="2,691"
							icon="pidva-icons/bgc-servicies-icon.svg"
							color="#F9327A"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="SaaS Users"
							value="885"
							icon="pidva-icons/kyc-services-icon.svg"
							color="#42DABF"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Active SaaS"
							value="885"
							icon="pidva-icons/active-services-icon.svg"
							color="#FCC103"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Dormant SaaS"
							value="885"
							icon="pidva-icons/dormant-clients-icon.svg"
							color="#AF0ECC"
						/>
					</div>
				</div>
				<div className='no-wrap-table'>
					<MaterialTable
						title="Saas"
						columns={[
							{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
							{ title: 'SaaS Ref #', field: 'client_ref' },
							{ title: 'Saas Name', field: `saas_name` },
							{ title: 'Reg No.', field: 'comp_regist_no' },
							{
								title: 'Country of Incorporation', field: 'comp_incop_certif_url',
								render: (rowData) => {
									return (
										<>
											<span>&nbsp; {rowData.comp_incop_certif_url.name}</span>
										</>
									)
								}
							},
							{
								title: 'Logo', field: 'comp_incop_certif_url',
								render: (rowData) => {
									return (
										<>
											<img src={rowData.comp_incop_certif_url.logo_url} alt="flag" width={30} />
										</>
									)
								}
							},
							{ title: 'Industry', field: 'industry' },
							{ title: 'Contact Person', field: 'contact_person' },
							{ title: 'Designation', field: 'designation' },
							{ title: 'ID Number', field: 'id_number' },
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
							{ client_ref: "P - xn17x", saas_name: "Codinput", comp_regist_no: "PVT- 9v55", comp_incop_certif_url: { name: "Kenya", logo_url: '/images/flag1.png' }, industry: "Healthcare ", contact_person: "Ali Jane ", designation: "Founder", id_number: "12345", contact_numbers: "0712 345 671", contact_email_address: "ali@ Codinput.co", main_service: [{ name: "KYC" }, { name: "BGC" }], status: 1 },
							{ client_ref: "P - xn17x", saas_name: "Codinput", comp_regist_no: "PVT- 9v55", comp_incop_certif_url: { name: "Kenya", logo_url: '/images/flag1.png' }, industry: "Healthcare ", contact_person: "Jen Still", designation: "CEO", id_number: "12345", contact_numbers: "0712 345 671", contact_email_address: "Jen@Dataent.com", main_service: [{ name: "BGC" }], status: 2 },
							{ client_ref: "P - xn17x", saas_name: "Codinput", comp_regist_no: "PVT- 9v55", comp_incop_certif_url: { name: "Kenya", logo_url: '/images/flag1.png' }, industry: "Healthcare ", contact_person: "Kim Cez ", designation: "Compliance Manager", id_number: "12345", contact_numbers: "0712 345 671", contact_email_address: "Kim@ Vinzino.com", main_service: [{ name: "BGC" }], status: 3 },
							{ client_ref: "P - xn17x", saas_name: "Codinput", comp_regist_no: "PVT- 9v55", comp_incop_certif_url: { name: "Kenya", logo_url: '/images/flag1.png' }, industry: "Healthcare ", contact_person: "Gery Cush", designation: "Managing Director", id_number: "12345", contact_numbers: "0712 345 671", contact_email_address: "Gery@Musora.com", main_service: [{ name: "KYC" }, { name: "BGC" }], status: 4 },
						]}
						options={{
							actionsColumnIndex: -1,
							pageSize: 10
						}}
						actions={[
							{
								icon: 'Create a SaaS',
								iconProps: { className: 'btn btn-secondary FreeAction' },
								isFreeAction: true,
								onClick: (event) => { CreateServiceModalShow() }
							}
						]}
					/>
				</div>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal modal-90w'>
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

export default SaaSOrganization
