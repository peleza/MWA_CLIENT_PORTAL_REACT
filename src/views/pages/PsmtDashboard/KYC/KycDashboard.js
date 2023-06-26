import React, { useEffect } from 'react';
import DashboardInfoBx from '../../../components/DashboardInfoBx/DashboardInfoBx';
import MaterialTable from '@material-table/core';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { BiDotsVerticalRounded, BiMailSend, BiPlus } from 'react-icons/bi'

const KYCDashboard = () => {
	const dispatch = useDispatch();

	const DriverProgress = 34;

	useEffect(() => {
		dispatch(getTitleAction("KYC"))
	}, [dispatch])

	return (
		<>
			<section className='dashboard-section'>
				<div className='row'>
					<div className='col'>
						<DashboardInfoBx
							color="baby-blue-color"
							title="New Requests"
							value="3,557"
							icon="new-request-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="orange-color"
							title="Interim"
							value="5,691"
							icon="interim-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="green-color"
							title="Completed"
							value="885"
							icon="completed-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="purple-color"
							title="For Your Action"
							value="97"
							icon="action-icon.svg"
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="red-color"
							title="Reports with Alerts"
							value="97"
							icon="alerts-icon.svg"
						/>
					</div>
				</div>

				<div className='mt-5'>
					<MaterialTable
						title="Recent Requests"
						columns={[
							{ title: 'Profile #', field: 'ref', },
							{
								title: 'Requestor', field: 'Requestor',
								render: (rowData) => (
									<div className='profileWithName'>
										{
											rowData.Requestor.profileImg ? 
											<img src={rowData.Requestor.profileImg} className="tableUserImage" alt="profile" />
											:
											<span className='namePlaceholder'>{rowData.Requestor.requestorName[0].split()}</span>
										}
										<span>{rowData.Requestor.requestorName}</span>
									</div>
								)
							},
							{ title: 'Date Requested', field: 'DateRequested' },
							{ title: 'Company/ Individual Name', field: 'CandidateName' },
							{ title: 'Package', field: 'Package' },
							{
								title: 'Completion Status', field: 'CompletionStatus',
								render: (rowData) => {
									return (
										<ProgressBar
											progress={`${rowData.CompletionProgress}%`}
											theme={
												rowData.CompletionProgress === 0 ? "baby-blue-color" : 
												rowData.CompletionStatus === "Interim" ? "orange-color" :
												rowData.CompletionProgress === 100 ? "green-color2" :
												rowData.CompletionStatus === "pending_action" ? "purple-color" :
												rowData.CompletionStatus === "major_alert" ? "red-color" :
												rowData.CompletionStatus === "minor_alert" ? "yellow-color" : null
											}
											size="lg"
										/>
									)
								}
							},
							{ title: '', field: '' }
						]}
						data={[
							{ ref: '5S1VP', Requestor: { profileImg: "", requestorName: "Kody Bass" }, DateRequested: "03 May 2022", CandidateName: "Nola Lily", Package: "Standard", CompletionProgress: 0, CompletionStatus: '' },
							{ ref: 'J2AAS', Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Clare Wood" }, DateRequested: "21 Apr 2022", CandidateName: "Kevin Olwa", Package: "Experienced", CompletionProgress: 54, CompletionStatus: 'Interim' },
							{ ref: 'Y15XY', Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Talan Luna" }, DateRequested: "18 Apr 2022", CandidateName: "Zaina Keira", Package: "Entry", CompletionProgress: 69, CompletionStatus: 'pending_action' },
							{ ref: 'M35DR', Requestor: { profileImg: "", requestorName: "Jen Ali" }, DateRequested: "30 Mar 2022", CandidateName: "Donald Levi", Package: "Executive", CompletionProgress: 29, CompletionStatus: 'major_alert' },
							{ ref: 'Y15XY', Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Talan Luna" }, DateRequested: "18 Apr 2022", CandidateName: "Zaina Keira", Package: "Entry", CompletionProgress: 69, CompletionStatus: 'minor_alert' },
							{ ref: 'Y15XY', Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Talan Luna" }, DateRequested: "18 Apr 2022", CandidateName: "Zaina Keira", Package: "Entry", CompletionProgress: 100, CompletionStatus: '' },
						]}
						options={{
							numberOfPagesAround: 10
						}}
					/>
				</div>

				<div className='mt-5'>
					<MaterialTable
						title="Pending Your Action"
						columns={[
							{ title: 'Profile #', field: 'ref', },
							{
								title: 'Requestor', field: 'Requestor',
								render: (rowData) => (
									<div className='profileWithName'>
										{
											rowData.Requestor.profileImg ? 
											<img src={rowData.Requestor.profileImg} className="tableUserImage" alt="profile" />
											:
											<span className='namePlaceholder'>{rowData.Requestor.requestorName[0].split()}</span>
										}
										<span>{rowData.Requestor.requestorName}</span>
									</div>
								)
							},
							{ title: 'Date Requested', field: 'DateRequested' },
							{ title: 'Candidate Name', field: 'CandidateName' },
							{ title: 'Information Required', field: 'InformationRequired' },
							{
								title: 'Action', field: 'Action',
								render: (rowData) => {
									return (
										<Dropdown className='tableActionDropdown'>
											<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

											<Dropdown.Menu>
												<button className='dropdown-item'><BiPlus /> Add Info</button>
											</Dropdown.Menu>
										</Dropdown>
									)
								}
							}
						]}
						data={[
							{ ref: '5S1VP', Requestor: { profileImg: "", requestorName: "Kody Bass" }, DateRequested: "03 May 2022", CandidateName: "Nola Lily", InformationRequired: "Upload academic Certificate", },
							{ ref: 'J2AAS', Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Clare Wood" }, DateRequested: "21 Apr 2022", CandidateName: "Kevin Olwa", InformationRequired: "Upload CV", },
							{ ref: 'Y15XY', Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Talan Luna" }, DateRequested: "18 Apr 2022", CandidateName: "Zaina Keira", InformationRequired: "Provide ID Number", },
							{ ref: 'M35DR', Requestor: { profileImg: "", requestorName: "Jen Ali" }, DateRequested: "30 Mar 2022", CandidateName: "Donald Levi", InformationRequired: "Upload Police Clearance Certificate", },
							{ ref: 'Y15XY', Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Talan Luna" }, DateRequested: "18 Apr 2022", CandidateName: "Zaina Keira", InformationRequired: "Provide ID Number", },
						]}
						options={{
							numberOfPagesAround: 10
						}}
					/>
				</div>
			</section>
		</>
	);
}

export default KYCDashboard