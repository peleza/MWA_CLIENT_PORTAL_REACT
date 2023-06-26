import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Dropdown, Modal, Form } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import { InputText, SelectBox } from '../../../components/InputText/InputText';

const SubServicesPricing = () => {

	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);	
	const [disableNonEditFields, setDisableNonEditFields] = useState(false);	

	const CreateServiceModalClose = () => {
		setCreateServiceModalState(false);
		setDisableNonEditFields(false)
	}
	const CreateServiceModalShow = (data) => {
		setCreateServiceModalState(true);
		if(data.editMode) {
			setDisableNonEditFields(true)
		}
	}

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Sub Service Pricing</h1>
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
							title: 'Service', field: 'Service',
							render: (rowData) => rowData.Service
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
											<button className='dropdown-item' onClick={() => CreateServiceModalShow({data: rowData, editMode: true})}><BiCommentEdit /> Edit</button>
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
						{ sub_service_name: { name: "Passport", icon: "/images/automated-process-icon.svg" }, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "KYC", main_service: "KES", Currency: "10", min_price: "15", set_price: "15", max_price: "25", price_type: "Fixed", min_requests: "1", max_requests: '5', status: 2 },
						{ sub_service_name: { name: "Passport", icon: "/images/automated-process-icon.svg" }, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "KYC", main_service: "KES", Currency: "10", min_price: "15", set_price: "15", max_price: "25", price_type: "Fixed", min_requests: "1", max_requests: '5', status: 1 },
						{ sub_service_name: { name: "Passport", icon: "/images/automated-process-icon.svg" }, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "KYC", main_service: "KES", Currency: "10", min_price: "15", set_price: "15", max_price: "25", price_type: "Fixed", min_requests: "1", max_requests: '5', status: 2 },
						{ sub_service_name: { name: "Passport", icon: "/images/automated-process-icon.svg" }, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "KYC", main_service: "KES", Currency: "10", min_price: "15", set_price: "15", max_price: "25", price_type: "Fixed", min_requests: "1", max_requests: '5', status: 1 },
						{ sub_service_name: { name: "Passport", icon: "/images/automated-process-icon.svg" }, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "KYC", main_service: "KES", Currency: "10", min_price: "15", set_price: "15", max_price: "25", price_type: "Fixed", min_requests: "1", max_requests: '5', status: 2 },
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
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>Sub Service Pricing</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<SelectBox
									name="sub_service"
									required="required"
									labelText="Sub Service"
									error="Please Sub Service!"
									disabled={disableNonEditFields && true}
									optionData={
										<>
											<option value="" hidden>Select Sub Service</option>
											<option value="">Passport</option>
											<option value="">Passport</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="country"
									required="required"
									labelText="Select Country"
									error="Please Select Country!"
									disabled={disableNonEditFields && true}
									optionData={
										<>
											<option value="" hidden>Select Country</option>
											<option value="">Kenya</option>
											<option value="">China</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="service"
									required="required"
									labelText="Select Service"
									error="Please Select Service!"
									disabled={disableNonEditFields && true}
									optionData={
										<>
											<option value="" hidden>Select Service</option>
											<option value="">KYC</option>
											<option value="">BGC</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="main_service"
									required="required"
									labelText="Select Main Service"
									error="Please Select Main Service!"
									disabled={disableNonEditFields && true}
									optionData={
										<>
											<option value="" hidden>Select Main Service</option>
											<option value="">KYC</option>
											<option value="">BGC</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="sub_service_code"
									placeholder="Sub Service Code"
									labelText="Sub Service Code"
									isDisabled={disableNonEditFields && true}
									pattern=".{1,}"
									error="Sub Service Code is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="currency"
									required="required"
									labelText="Select Currency"
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
								<InputText
									type="text"
									name="min_price"
									placeholder="Min Price"
									labelText="Set Price & Max Price"
									pattern=".{1,}"
									error="Min Price is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="max_price"
									placeholder="Max Price"
									labelText="&nbsp;"
									pattern=".{1,}"
									error="Max Price is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-12'>
								<SelectBox
									name="price_type"
									required="required"
									labelText="Price Type"
									error="Please Select Price Type!"
									optionData={
										<>
											<option value="" hidden>Select Price Type</option>
											<option value="">Fixed</option>
											<option value="">Fixed</option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="min_requests"
									placeholder="Min Requests"
									labelText="Min Requests & Max requests"
									pattern=".{1,}"
									error="Min Requests is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="max_requests"
									placeholder="Max Requests"
									labelText="&nbsp;"
									pattern=".{1,}"
									error="Max Requests is Required!"
									required="required"
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

export default SubServicesPricing
