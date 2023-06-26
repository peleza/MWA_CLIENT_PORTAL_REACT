import React from 'react';
import MaterialTable from '@material-table/core';
import '../../PsmtDashboard/BackgroundCheck/BackgroundCheck.scss'
import { Dropdown } from 'react-bootstrap';
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import { BiDotsVerticalRounded, BiCheck } from 'react-icons/bi'
import DashboardInfoBx from '../../../components/DashboardInfoBx/DashboardInfoBx';

const TicketManagement = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Ticket Management</h1>

				<div className='row row-col-4'>
					<div className='col mb-5'>
						<DashboardInfoBx
							color="baby-blue-color"
							title="Total Tickets"
							value="557"
							icon="pidva-icons/new-request-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="pink-color"
							title="Open"
							value="91"
							icon="pidva-icons/nearing-tat-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="purple-color"
							title="In Progress"
							value="85"
							icon="pidva-icons/interim-past-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="green-color2"
							title="Resolved"
							value="885"
							icon="pidva-icons/complete-reports-icon.svg"
						/>
					</div>
				</div>

				<ul className='report-filter-list mb-5'>
					<li><button className='active'>All</button></li>
					<li><button>Open</button></li>
					<li><button>In Progress</button></li>
					<li><button>Resolved</button></li>
				</ul>
				<MaterialTable
					title="Support Tickets"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Ticket ID # ', field: 'ticket_id' },
						{ title: 'Client', field: 'client' },
						{ title: 'Requestor', field: 'requestor' },
						{ title: 'Subject', field: 'subject', },
						{
							title: 'Attachment', field: 'attachment',
							render: (rowData) => {
								return (
									<img src={rowData.attachment} alt="pdf" width={25} />
								)
							}
						},
						{ title: 'Assigned to', field: 'assigned_to', },
						{ title: 'Created on', field: 'created_on' },
						{ title: 'Closed Date', field: 'closed_date' },
						{
							title: 'Status', field: 'status',
							render: (rowData) => {
								return (
									<>
									{
										rowData.status === 2 ?
										<span className="badge badge-purple">Open</span> :
										rowData.status === 0 ?
										<span className="badge badge-warning">In progress</span> :
										rowData.status === 1 ?
										<span className="badge badge-success">Resolved</span> : null
									}
									</>
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
											{
												rowData.status === 2 ?
												<button className='dropdown-item'><MdOutlineAssignmentTurnedIn /> Assign</button> :
												rowData.status === 0 || rowData.status === 1 ?
												<button className='dropdown-item'><BiCheck /> Mark as Resolved</button> : null
											}
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ client: "EABL", ticket_id:"5S1VP", requestor: "Kody Bass", subject: "Negative Credits", attachment: "/images/pdf-icon.svg", assigned_to: "Kip Lan", created_on: "31 Aug 2022", closed_date: "-", status: 2, },
						{ client: "EABL", ticket_id:"5S1VP", requestor: "Kody Bass", subject: "Negative Credits", attachment: "/images/pdf-icon.svg", assigned_to: "Kip Lan", created_on: "31 Aug 2022", closed_date: "-", status: 0, },
						{ client: "EABL", ticket_id:"5S1VP", requestor: "Kody Bass", subject: "Negative Credits", attachment: "/images/pdf-icon.svg", assigned_to: "Kip Lan", created_on: "31 Aug 2022", closed_date: "21 Apr 2022", status: 1, },
						{ client: "EABL", ticket_id:"5S1VP", requestor: "Kody Bass", subject: "Negative Credits", attachment: "/images/pdf-icon.svg", assigned_to: "Kip Lan", created_on: "31 Aug 2022", closed_date: "18 Apr 2022", status: 1, },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
				/>
			</section>
		</>
	);
}

export default TicketManagement
