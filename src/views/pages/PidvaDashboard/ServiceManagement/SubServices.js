import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit, BiBlock, BiCheckCircle } from 'react-icons/bi'
import { TbEye } from 'react-icons/tb'
import '../../../components/Button/Button.scss'
import moment from 'moment';


const SubServices = () => {
	const [dataRequired, setDataRequired] = useState([{ documentData: '', fieldType: '' }])
	const [CreateServiceModalState, setCreateServiceModalState] = useState(false);
	const [EditServiceModalState, setEditServiceModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		sub_service_name: '',
		service_id: '',
		sub_service_code: '',
		country_id: '',
		sla: '',
		parent_service: '',
		document_data: '',
		currency: '',
		cost: '',
		cost_type: '',
		created_by: ''
	});

	console.log("addServiceFields", addServiceFields);

	const CreateServiceModalClose = () => setCreateServiceModalState(false);
	const CreateServiceModalShow = () => setCreateServiceModalState(true);
	const EditServiceModalClose = () => setEditServiceModalState(false);
	const EditServiceModalShow = (data) => setEditServiceModalState(true);

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
				<h1 className='dashboard-title'>Sub Service</h1>
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
					title="Sub Services"
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
						{ title: 'Sub Service Code', field: 'sub_service_code' },
						{
							title: 'Country', field: 'Country',
							render: (rowData) => {
								return (
									<img src={rowData.Country} alt="flag" width={30} />
								)
							}
						},
						{ title: 'SLA', field: 'sla' },
						{
							title: 'Service', field: 'Service',
							render: (rowData) => {
								return (
									rowData.Service
								)
							}
						},
						{ title: 'Main Service', field: 'main_service' },
						{ title: 'Document/ Data Required', field: 'document_data' },
						{ title: 'Currency', field: 'currency' },
						{ title: 'Cost', field: 'cost' },
						{ title: 'Cost Type', field: 'cost_type' },
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
											<button className='dropdown-item' onClick={() => EditServiceModalShow(rowData)}><TbEye /> view</button>
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
						{sub_service_name: {name: "Passport", icon: "/images/automated-process-icon.svg"}, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "Identity", main_service: "KYC", document_data: "Passport Number", currency: "KES", cost: "5", cost_type: "Fixed", status: 2},
						{sub_service_name: {name: "Passport", icon: "/images/automated-process-icon.svg"}, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "Identity", main_service: "KYC", document_data: "Passport Number", currency: "KES", cost: "5", cost_type: "Fixed", status: 2},
						{sub_service_name: {name: "Passport", icon: "/images/automated-process-icon.svg"}, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "Identity", main_service: "KYC", document_data: "Passport Number", currency: "KES", cost: "5", cost_type: "Fixed", status: 1},
						{sub_service_name: {name: "Passport", icon: "/images/automated-process-icon.svg"}, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "Identity", main_service: "KYC", document_data: "Passport Number", currency: "KES", cost: "5", cost_type: "Fixed", status: 2},
						{sub_service_name: {name: "Passport", icon: "/images/automated-process-icon.svg"}, sub_service_code: "PSC", Country: "/images/flag1.png", sla: "Real Time", Service: "Identity", main_service: "KYC", document_data: "Passport Number", currency: "KES", cost: "5", cost_type: "Fixed", status: 1},
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Request a sub-Service',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { CreateServiceModalShow() }
						}
					]}
				/>
			</section>
		</>
	);
}

export default SubServices
