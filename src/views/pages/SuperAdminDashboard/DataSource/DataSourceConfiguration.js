import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
// import './SassUsers.scss';
import { Dropdown, Form, Modal, Tab, Tabs } from 'react-bootstrap';
import { BiCheckCircle, BiCommentEdit, BiBlock, BiDotsVerticalRounded } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import '../../auth/Auth.scss'
import { MultiSelect } from "react-multi-select-component";
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

const DataSourceConfiguration = (props) => {
	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [MultiSelected, setMultiSelected] = useState([]);

	const CreateServiceModalClose = () => setCreateServiceModalState(false);
	const CreateServiceModalShow = () => setCreateServiceModalState(true);

	const userDetails = () => props.history.push('sass-user-details/25')
	const addCountryModalOpen = () => {

	}
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Data Source Configuration</h1>
				<MaterialTable
					title="Data Source Configuration"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Data Source Ref #', field: 'data_source_ref' },
						{ title: 'Data Source Name', field: `data_source_name` },
						{ title: 'Country', field: 'country_name' },
						{
							title: 'Sub Service', field: 'sub_service',
							render: (rowData) => {
								return (
									rowData.sub_service.map((value, index) => <p className='mb-1'>{value}</p>)
								)
							}
						},
						{ title: 'API URL', field: 'api_url' },
						{ title: 'Type', field: 'type' },
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
						{ data_source_ref: "P - xn17x", data_source_name: "IPRS", country_name: "Kenya", sub_service: ["National Identity", "Passport", "Alien ID"], api_url: "http://xxx.com", type: "Sandbox", status: 1 },
						{ data_source_ref: "P - v8m1", data_source_name: "Datazoo", country_name: "Uganda Tanzania Ethiopia", sub_service: ["Retail"], api_url: "http://dfg.com", type: "production", status: 2 },
						{ data_source_ref: "P - oqh6a", data_source_name: "Metropol", country_name: "Nigeria", sub_service: ["Construction"], api_url: "http://abc.com", type: "production", status: 3 },
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 10
					}}
					actions={[
						{
							icon: 'Configure a Data Source',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { CreateServiceModalShow() }
						}
					]}
				/>
			</section>

			<Modal show={CreateServiceModalState} onHide={CreateServiceModalClose} centered className='commonModal form-modal modal-70w'>
				<Modal.Header closeButton>
					<Modal.Title>Data Source Configuration</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Tabs
							defaultActiveKey="My_Self"
							transition={true}
							className="common-tabs"
						>
							<Tab eventKey="My_Self">
								<Form>
									<div className='row'>
										<div className='col-lg-4'>
											<SelectBox
												name="country_incorporation"
												required="required"
												labelText="Select Data Source"
												error="Please Select Data Source!"
												optionData={
													<>
														<option value="" hidden>Select Data Source</option>
														<option value="">Kenya</option>
														<option value="">China</option>
														<option value="">China</option>
													</>
												}
											/>
										</div>
										<div className='col-lg-4'>
											<div className='form-group'>
												<label htmlFor="">Country</label>
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
										<div className='col-lg-4'>
											<SelectBox
												name="country_incorporation"
												required="required"
												labelText="Select Sub Service"
												error="Please Select Sub Service!"
												optionData={
													<>
														<option value="" hidden>Select Sub Service</option>
														<option value="">Kenya</option>
														<option value="">China</option>
														<option value="">China</option>
													</>
												}
											/>
										</div>
										<div className='col-lg-4'>
											<InputText
												type="text"
												name="company_name"
												placeholder="Enter URL:"
												labelText="Webhook URL:"
												pattern=".{1,}"
												error="Webhook URL is Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-4'>
											<InputText
												type="text"
												name="company_name"
												placeholder="Enter Username"
												labelText="Username"
												pattern=".{1,}"
												error="Username is Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-4'>
											<InputText
												type="text"
												name="password"
												placeholder="Enter Password"
												labelText="Password"
												pattern="^[0-9]{5,20}$"
												error="Enter Password min(5)-max(20) Required!"
												required="required"
											/>
										</div>
										<div className='col-lg-4'>
											<SelectBox
												name="country_incorporation"
												required="required"
												labelText="Type"
												error="Please Select Type!"
												optionData={
													<>
														<option value="" hidden>Select Type</option>
														<option value="">Kenya</option>
														<option value="">China</option>
														<option value="">China</option>
													</>
												}
											/>
										</div>
										<div className='col-lg-4'>
											<InputText
												type="text"
												name="enter_designation"
												placeholder="Enter API Key"
												labelText="API Key"
												pattern=".{1,}"
												error="API Key is Required!"
												required="required"
											/>
										</div>
									</div>
									<Modal.Footer>
										<Button
											btnName="Submit"
											type="submit"
											className="btn-secondary btn-sm"
										/>
									</Modal.Footer>
								</Form>
							</Tab>
						</Tabs>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default DataSourceConfiguration
