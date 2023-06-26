import React, { useEffect, useState } from 'react';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import { useDispatch } from 'react-redux';
import { InputText } from '../../../components/InputText/InputText';
import { BiInfoCircle, BiCheckCircle } from 'react-icons/bi';
import ReportCard from '../../../components/ReportCard/ReportCard'
import { Button } from '../../../components/Button/Button';
import { Modal } from 'react-bootstrap';
import '../../PidvaDashboard/Dashboard/Dashboard.scss'
import './BackgroundCheck.scss';
import '../../../components/ReportCard/ReportCard.scss';

const Reports = () => {
	const dispatch = useDispatch();

	const [reportsModal, setReportsModal] = useState(false);
	const [ReadMore, setReadMore] = useState(false);

	console.log("ReadMore", ReadMore);

	const reportsModalOpen = () => setReportsModal(true)
	const reportsModalClose = () => setReportsModal(false)

	useEffect(() => {
		dispatch(getTitleAction("View Reports"))
	}, [dispatch])

	return (
		<>
			<section className='dashboard-section'>
				<div className='d-flex align-items-center justify-content-between'>
					<ul className='report-filter-list'>
						<li><button className='active'>All</button></li>
						<li><button>Completed</button></li>
						<li><button>Interim</button></li>
						<li><button>Alert</button></li>
						<li><button>Clear</button></li>
						<li><button>New</button></li>
						<li><button>Action Required</button></li>
						<li><button>Date</button></li>
					</ul>

					<InputText
						type="search"
						name="reports_search"
						placeholder="Search by name or ID Number"
						FormGroupClass="form-control-style2 form-control-sm mb-0"
					/>
				</div>

				<div className='row'>
					<div className='col-lg-3 d-flex'>
						<ReportCard
							reportName="Jen Ali"
							idNumber="12345678"
							reportDate="03/05/22"
							verificationProgress="235.5"
							verificationProgressColor="#FCC103"
							reportCardStatus="deactivated"
							identityStatus="#69C848"
							educationStatus="#FCC103"
							employmentStatus="#35BAE9"
							creditStatus="#69C848"
							criminalStatus="#69C848"
							socialMediaStatus="#69C848"
							professionalMembershipStatus="#FCC103"
							residentialAddressStatus="#35BAE9"
							onClick={reportsModalOpen}
							profilePic="/images/notification-img1.png"
						/>
					</div>
					<div className='col-lg-3 d-flex'>
						<ReportCard
							reportName="Sem J"
							idNumber="12345678"
							reportDate="03/05/22"
							verificationProgress="0"
							verificationProgressColor="#69C848"
							reportCardStatus="active"
							identityStatus="#69C848"
							educationStatus="#69C848"
							employmentStatus="#69C848"
							creditStatus="#69C848"
							criminalStatus="#69C848"
							socialMediaStatus="#69C848"
							professionalMembershipStatus="#69C848"
							residentialAddressStatus="#69C848"
							onClick={reportsModalOpen}
						/>
					</div>
					<div className='col-lg-3 d-flex'>
						<ReportCard
							reportName="Tarun Duo"
							idNumber="12345678"
							reportDate="03/05/22"
							verificationProgress="235.5"
							verificationProgressColor="#FCC103"
							reportCardStatus="deactivated"
							identityStatus="#69C848"
							educationStatus="#FCC103"
							employmentStatus="#35BAE9"
							creditStatus="#69C848"
							criminalStatus="#e97735"
							socialMediaStatus="#69C848"
							professionalMembershipStatus="#FCC103"
							residentialAddressStatus="#35BAE9"
							onClick={reportsModalOpen}
						/>
					</div>
					<div className='col-lg-3 d-flex'>
						<ReportCard
							reportName="Jen Ali"
							idNumber="12345678"
							reportDate="03/05/22"
							verificationProgress="235.5"
							verificationProgressColor="#FCC103"
							reportCardStatus="newRecord"
							identityStatus="#69C848"
							educationStatus="#FCC103"
							employmentStatus="#35BAE9"
							creditStatus="#69C848"
							criminalStatus="#69C848"
							socialMediaStatus="#69C848"
							professionalMembershipStatus="#FCC103"
							residentialAddressStatus="#35BAE9"
							missingDoc={true}
							onClick={reportsModalOpen}
							profilePic="/images/notification-img1.png"
						/>
					</div>
					<div className='col-lg-3 d-flex'>
						<ReportCard
							reportName="Jen Ali"
							idNumber="12345678"
							reportDate="03/05/22"
							verificationProgress="135.5"
							verificationProgressColor="#35BAE9"
							reportCardStatus="unverified"
							identityStatus="#69C848"
							educationStatus="#FCC103"
							employmentStatus="#35BAE9"
							creditStatus="#69C848"
							criminalStatus="#69C848"
							socialMediaStatus="#e97735"
							professionalMembershipStatus="#FCC103"
							residentialAddressStatus="#35BAE9"
							onClick={reportsModalOpen}
						/>
					</div>
					<div className='col-lg-3 d-flex'>
						<ReportCard
							reportName="Mark Ali"
							idNumber="12345678"
							reportDate="03/05/22"
							verificationProgress="157"
							verificationProgressColor="#F9327A"
							reportCardStatus="unverified"
							identityStatus="#69C848"
							educationStatus="#FCC103"
							employmentStatus="#35BAE9"
							creditStatus="#69C848"
							criminalStatus="#69C848"
							socialMediaStatus="#69C848"
							professionalMembershipStatus="#FCC103"
							residentialAddressStatus="#35BAE9"
							onClick={reportsModalOpen}
						/>
					</div>
					<div className='col-lg-3 d-flex'>
						<ReportCard
							reportName="Anthony Ali"
							idNumber="12345678"
							reportDate="03/05/22"
							verificationProgress="235.5"
							verificationProgressColor="#FCC103"
							reportCardStatus="deactivated"
							identityStatus="#69C848"
							educationStatus="#FCC103"
							employmentStatus="#35BAE9"
							creditStatus="#e97735"
							criminalStatus="#69C848"
							socialMediaStatus="#e97735"
							professionalMembershipStatus="#FCC103"
							residentialAddressStatus="#35BAE9"
							onClick={reportsModalOpen}
						/>
					</div>
					<div className='col-lg-3 d-flex'>
						<ReportCard
							reportName="Robert Ali"
							idNumber="12345678"
							reportDate="03/05/22"
							verificationProgress="235.5"
							verificationProgressColor="#FCC103"
							reportCardStatus="deactivated"
							identityStatus="#69C848"
							educationStatus="#FCC103"
							employmentStatus="#35BAE9"
							creditStatus="#69C848"
							criminalStatus="#69C848"
							socialMediaStatus="#69C848"
							professionalMembershipStatus="#FCC103"
							residentialAddressStatus="#35BAE9"
							onClick={reportsModalOpen}
						/>
					</div>
				</div>

				<div className='text-center mt-5'>
					<Button
						btnName="Load More"
						type="button"
						className="btn-secondary btn-sm"
					/>
				</div>

				<div className='row mt-5'>
					<div className='col-lg-6'>
						<div className='repeat-white-bx Instructions'>
							<h2>Tiles Instructions</h2>
							<ul>
								<li><span className='active'></span> Green is for a clear report</li>
								<li><span className='deactivated'></span> Red is for a report with alerts</li>
								<li><span className='unverified'></span> Yellow  is for a report with minor alerts</li>
								<li><span className='inProgress'></span> Orange is for an interim report</li>
								<li><span className='newRecord'></span> Blue is for a new report that has just been submitted by the client</li>
								<li><span className='additionalInfo'></span> Purple is for a check that requires additional information from the candidate/ client</li>
							</ul>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='repeat-white-bx Instructions'>
							<h2>Checks Instructions</h2>
							<ul>
								<li><span className='active'></span> Green is for a complete check </li>
								<li><span className='deactivated'></span> Red is for a checks with major alerts</li>
								<li><span className='inProgress'></span> Orange is for a checks in progress</li>
								<li><span className='unverified'></span> Yellow is for a checks with minor alerts</li>
								<li><span className='newRecord'></span> Blue is for a checks that have not been started</li>
								<li><span className='additionalInfo'></span> Purple is for a check that requires additional information from the candidate/ client</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<Modal show={reportsModal} onHide={reportsModalClose} className="reportModal modal-70w commonModal" centered>
				<Modal.Body>
					<div className='clientInfo'>
						<h2>Client Info</h2>
						<div className='row'>
							<div className='col-lg-5'>
								<p>Samsung Kenya Ltd</p>
								<p>24 St Michael’s Westlands, Nairobi, Kenya</p>
							</div>
							<div className='col-lg-4'>
								<p>Report Date : 15 Mar 2022</p>
								<p>Package : Executive</p>
							</div>
							<div className='col-lg-3'>
								<p>Order Date : 11 Mar 2022</p>
								<p>Phone No. : 020 1234567</p>
							</div>
						</div>
					</div>
					<div className='reportModalBody'>
						<div className='reportProfileBx'>
							<div className='user-profile-progress'>
								<img src="/images/notification-img1.png" alt="" />
							</div>
							<div className='reportUserDetails'>
								<h2>Jen Ali</h2>
								<div className='row'>
									<div className='col-lg-5'>
										<p>ID # 12345678</p>
										<p>Profile # SAM9876Z</p>
									</div>
									<div className='col-lg-6'>
										<p>Phone No. : 0721234567</p>
										<p>Email : jen.ali@gmail.com</p>
									</div>
								</div>
							</div>
							<div className='report-card-progress'>
								<span className='profile-progress'>70%</span>
								<svg xmlns="http://www.w3.org/2000/svg" width={104} height={104} viewBox="0 0 104 104"> <defs> <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n      #Ellipse_2368 {\n          stroke-dasharray: 314;\n            transform: translate(1077px, 235px) rotate(270deg);\n            transform-origin: center;\n            transform-box: fill-box;\n      }\n    " }} /> </defs> <g id="profile-complete" transform="translate(-1075 -233)"> <g id="Ellipse_2356" data-name="Ellipse 2356" transform="translate(1078 236)" fill="none" stroke="#dfdfdf" strokeWidth={1}> <circle cx="49.033" cy="49.033" r="49.033" stroke="none" /> <circle cx="49.033" cy="49.033" r="49.533" fill="none" /> </g> <circle id="Ellipse_2368" data-name="Ellipse 2368" cx={50} cy={50} r={50} transform="translate(1077 235)" strokeDashoffset="235.5" fill="none" stroke="#FCC103" strokeWidth={4} /> </g> </svg>
							</div>
						</div>

						<table className='table mt-4'>
							<thead>
								<tr>
									<th>Check</th>
									<th>Details</th>
									<th>Status</th>
									<th>Date Completed</th>
									<th>Check Status</th>
									<th>Observation</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Identity</td>
									<td>Kenya</td>
									<td><span className="badge badge-success">Complete</span></td>
									<td>11 Mar 2022</td>
									<td><span className='text-center text-danger d-block f-20'><BiInfoCircle /></span></td>
									<td>Verified</td>
								</tr>
								<tr>
									<td>Education</td>
									<td>Kisii Univeristy</td>
									<td><span className="badge badge-danger">Alert</span></td>
									<td>15 Mar 2022</td>
									<td><span className='text-center text-success d-block f-20'><BiCheckCircle /></span></td>
									<td>Forged Academic Certificate</td>
								</tr>
								<tr>
									<td>Employment</td>
									<td>Rtelo Africa</td>
									<td><span className="badge badge-warning">In Progress</span></td>
									<td>-</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>Employment</td>
									<td>Avery Insurance</td>
									<td><span className="badge badge-success">Complete</span></td>
									<td>15 Mar 2022</td>
									<td><span className='text-center text-success d-block f-20'><BiCheckCircle /></span></td>
									<td>Verified</td>
								</tr>
								<tr>
									<td>Employment</td>
									<td>Avery Insurance</td>
									<td><span className="badge badge-primary">Not Started</span></td>
									<td>-</td>
									<td>-</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className='reportModalFooter'>
						<div>
							<h2>Disclaimer</h2>
							<p className={ReadMore ? "readMore active" : "readMore"}><span>The records contained in this report are compiled from various databases that may only be updated infrequently, and therefore, may not have the most current information. This report is not intended to serve as recommendation of whether to hire the candidate investigated. This report is submitted in strict confidence and except where required by law, no information provided in our reports may be revealed directly or indirectly to any person except to those whose official duties require them to pass this report on in relation to which the report was requested by the client. Peleza International Limited neither warrant, vouches for, or authenticates the reliability of the information contained herein that the records are accurately reported as they were found at the source as of the date and time of this report, whether on a computer information system, retrieved by manual search, or telephonic interviews. The information provided herein shall not be construed to constitute a legal opinion; rather it is comd/or data for yoour website should not serve as legal advice for your background investigation. You should always seek legal advice from your attorney.</span> <button className='readMore-btn' onClick={() => setReadMore(!ReadMore)}>{ReadMore ? "Read Less" : "Read More"}</button></p>
						</div>
						<Button
							btnName="View Full Report"
							type="button"
							className="btn-xs btn-secondary"
							onClick={reportsModalClose}
						/>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Reports