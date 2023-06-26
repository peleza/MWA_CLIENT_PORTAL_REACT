import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { Button } from '../../../components/Button/Button';
import { InputText, SelectBox, TextArea } from '../../../components/InputText/InputText';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { ActiveInactiveServiceAction, AddServiceAction, EditSubscriptionAction, GetServiceListAction } from '../../../../redux/actions/PidvaServiceManagementAction';
import moment from 'moment';
import { Link } from 'react-router-dom';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';


const SubscriptionManagement = () => {
	const dispatch = useDispatch();

	const ServiceApiResponse = useSelector(state => state.PidvaServiceManagement)
	const GetCurrentUser = useSelector(state => state.auth.set_user)

	console.log("ServiceApiResponse", ServiceApiResponse);

	const [EditSubscriptionModalState, setEditSubscriptionModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: GetCurrentUser.first_name
	});

	console.log("addServiceFields", addServiceFields);

	const EditSubscriptionModalClose = () => setEditSubscriptionModalState(false);
	const EditSubscriptionModalShow = () => setEditSubscriptionModalState(true);

	const onChange = (e) => {
		const { name, value } = e.target
		setAddServiceFields((preValue) => {
			return {
				...preValue,
				[name]: value,
			}
		})
	}


	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Subscription Management</h1>
				<div className='row'>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Platinum"
							value="557"
							icon="pidva-icons/client-icon.svg"
							color="#9B55E5"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Gold"
							value="2,691"
							icon="pidva-icons/bgc-servicies-icon.svg"
							color="#F9327A"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Silver"
							value="885"
							icon="pidva-icons/kyc-services-icon.svg"
							color="#42DABF"
						/>
					</div>
					<div className='col-lg-3 mb-5'>
						<DashboardOverviewBx
							title="Custom"
							value="885"
							icon="pidva-icons/active-services-icon.svg"
							color="#FCC103"
						/>
					</div>
				</div>

				<MaterialTable
					title="Subscription Plan"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Subscription Plan Ref #', field: 'subscription_plan_ref' },
						{ title: 'Subscription Plan', field: 'subscription_plan' },
						{ title: 'Currency', field: 'currency' },
						{ title: 'Amount', field: 'amount' },
						{ title: 'Duration', field: 'duration' },
						{
							title: 'Action', field: 'Action',
							render: (rowData) => {
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item' onClick={EditSubscriptionModalShow}><BiCommentEdit /> Edit</button>
											<Link to="/admin/sass-subscription/65" className='dropdown-item'><TbEye /> View</Link>
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ subscription_plan_ref: "A1B2", subscription_plan: "Gold", currency: "KES", amount: "54,000", duration: "6 months", },
						{ subscription_plan_ref: "C3D4", subscription_plan: "Silver", currency: "USD", amount: "300", duration: "3 Months", },
						{ subscription_plan_ref: "E5F6", subscription_plan: "Platinum", currency: "EUR", amount: "960", duration: "12 Months", },
						{ subscription_plan_ref: "E5F6", subscription_plan: "Custom", currency: "KES", amount: "12,000", duration: "1 month", },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10,
						search: false
					}}
					actions={[
						{
							icon: 'Add Subscription',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { EditSubscriptionModalShow() }
						}
					]}
				/>
			</section>

			<Modal show={EditSubscriptionModalState} onHide={EditSubscriptionModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>Subscription Plan</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="subscription_plan_ref"
									labelText="Subscription Plan Ref #"
									placeholder="Subscription Plan Ref #"
									FormGroupClass="form-control-md form-control-style2"
									pattern='^[a-z A-Z]{2,}$'
									error="Subscription Plan Ref # is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.service_name}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="subscription_plan"
									labelText="Subscription Plan"
									placeholder="Subscription Plan"
									FormGroupClass="form-control-md form-control-style2"
									pattern='^[a-z A-Z]{2,}$'
									error="Subscription Plan is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.service_code}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="duration"
									labelText="Duration"
									placeholder="Duration"
									FormGroupClass="form-control-md form-control-style2"
									pattern='^[a-z A-Z]{2,}$'
									error="Duration is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.service_code}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="currency"
									labelText="Currency"
									placeholder="Currency"
									FormGroupClass="form-control-md form-control-style2"
									pattern='^[a-z A-Z]{2,}$'
									error="Currency is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.service_code}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="amount"
									labelText="Amount"
									placeholder="Amount"
									FormGroupClass="form-control-md form-control-style2"
									pattern='^[a-z A-Z]{2,}$'
									error="Amount is Required!"
									required="required"
									onChange={onChange}
									defaultValue={addServiceFields.service_code}
								/>
							</div>
							<div className='col-lg-12'>
								<TextArea
									FormGroupClass="form-control-md form-control-style2"
									placeholder="Enter Features"
									labelText="Features"
									pattern=".{1,}"
									error="Features is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
						</div>
						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={EditSubscriptionModalClose}
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

export default SubscriptionManagement
