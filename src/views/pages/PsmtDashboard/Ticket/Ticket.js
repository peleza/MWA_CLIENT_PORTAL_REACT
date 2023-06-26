import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import '../../PsmtDashboard/BackgroundCheck/BackgroundCheck.scss'
import { Dropdown, Form, Modal } from 'react-bootstrap';
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import { BiDotsVerticalRounded, BiCheck } from 'react-icons/bi'
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import { useDispatch } from 'react-redux';
import { FileUpload, InputText, TextArea } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';

const Tickets = () => {
	const dispatch = useDispatch();
	const [LogTicketModalState, setLogTicketModalState] = useState(false)
	const [fileName, setFileName] = useState();
	const [fields, setFields] = useState({

	})

	const LogTicketModalClose = () => setLogTicketModalState(false)
	const LogTicketModalOpen = () => setLogTicketModalState(true)

	const onChange = (e) => {
		const { name, value } = e.target;
		setFields((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		});
	}

	const getFileName = (e) => setFileName(e.target.files[0])

	useEffect(() => {
		dispatch(getTitleAction("Ticket"))
	}, [dispatch])

	return (
		<>
			<section className='dashboard-section'>
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
						{ client: "EABL", requestor: "Kody Bass", subject: "Negative Credits", attachment: "/images/pdf-icon.svg", created_on: "31 Aug 2022", closed_date: "-", status: 2, },
						{ client: "EABL", requestor: "Kody Bass", subject: "Negative Credits", attachment: "/images/pdf-icon.svg", created_on: "31 Aug 2022", closed_date: "-", status: 0, },
						{ client: "EABL", requestor: "Kody Bass", subject: "Negative Credits", attachment: "/images/pdf-icon.svg", created_on: "31 Aug 2022", closed_date: "21 Apr 2022", status: 1, },
						{ client: "EABL", requestor: "Kody Bass", subject: "Negative Credits", attachment: "/images/pdf-icon.svg", created_on: "31 Aug 2022", closed_date: "18 Apr 2022", status: 1, },
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Log a ticket',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { LogTicketModalOpen() }
						}
					]}
				/>
			</section>

			<Modal show={LogTicketModalState} onHide={LogTicketModalClose} centered className='commonModal'>
				<Modal.Header closeButton>
					<Modal.Title>Log A Ticket</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-12'>
								<InputText
									type="text"
									name="card_name"
									placeholder="Enter ID"
									hasLabel={true}
									onChange={onChange}
									pattern=".{1,}"
									error="ID is Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-12'>
								<InputText
									type="text"
									name="subject"
									placeholder="Subject of your Query"
									hasLabel={true}
									onChange={onChange}
									pattern=".{1,}"
									error="Subject of your Query Required!"
									required="required"
								/>
							</div>
							<div className='col-lg-12'>
								<FileUpload
									fileName={fileName && fileName.name}
									labelText="Attachment"
									onChange={getFileName}
									name="consent_form"
									accept='Jpeg, PNG, PDF'
									error="Please Upload Attachment!"
									required="required"
								/>
							</div>
							<div className='col-lg-12'>
								<TextArea
									placeholder="Describe the issue in detail"
									pattern=".{1,}"
									error="Address is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-12'>
								<Button
									btnName="Submit Ticket"
									type="submit"
									className="btn-secondary w-100"
								/>
							</div>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Tickets
