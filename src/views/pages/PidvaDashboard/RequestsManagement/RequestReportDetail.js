import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { TbReportSearch } from 'react-icons/tb'
import '../../../components/Button/Button.scss'

const RequestReportDetail = () => {

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Report Details</h1>

				<div className='row mb-5'>
					<div className='col-lg-6'>
						<div className='repeat-white-bx'>
							<h2>Personal Information</h2>
							<div className='row'>
								<div className='col-lg-6'>
									<h4>Candidate Name</h4>
									<p>Jhon eli</p>
								</div>
								<div className='col-lg-6'>
									<h4>Package SLA</h4>
									<p>7 days</p>
								</div>
								<div className='col-lg-6 mb-3'>
									<h4>Completion Status</h4>
									<p>30%</p>
								</div>
								<div className='col-lg-6 mb-3'>
									<h4>Report Status</h4>
									<p>Interim</p>
								</div>
								<div className='col-lg-6'>
									<button className='btn btn-secondary btn-sm viewFullReport'>View Report <TbReportSearch className='ms-2' /></button>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='repeat-white-bx'>
							<h2>Information provided/Documents Attached</h2>
							<div className='row'>
								<div className='col-lg-6'>
									<a href="#" className='downloadDoc'>
										<h4>ID Copy</h4>
										<p><img src="/images/pdf-icon.svg" alt="pdf" /></p>
									</a>
								</div>
								<div className='col-lg-6 mb-3'>
									<a href="#" className='downloadDoc'>
										<h4>Education Certificates</h4>
										<p><img src="/images/pdf-icon.svg" alt="pdf" /></p>
									</a>
								</div>
								<div className='col-lg-6 mb-3'>
									<a href="#" className='downloadDoc'>
										<h4>CV Copy</h4>
										<p><img src="/images/pdf-icon.svg" alt="pdf" /></p>
									</a>
								</div>
								<div className='col-lg-6'>
									<a href="#" className='downloadDoc'>
										<h4>Police Clearance Certificate</h4>
										<p><img src="/images/pdf-icon.svg" alt="pdf" /></p>
									</a>
								</div>
								<div className='col-lg-3'>
									<h4>Building</h4>
									<p>Cornerstone</p>
								</div>
								<div className='col-lg-3 mb-3'>
									<h4>Estate</h4>
									<p>Westlands</p>
								</div>
								<div className='col-lg-3 mb-3'>
									<h4>Floor</h4>
									<p>2nd<sup>nd</sup> Floor</p>
								</div>
								<div className='col-lg-3'>
									<h4>House Number</h4>
									<p>B17</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<MaterialTable
					title="Report"
					columns={[
						{ title: 'Checks', field: 'checks' },
						{ title: 'SLA', field: 'sla' },
						{ title: 'TAT', field: 'tat' },
						{ title: 'Verification Specialist', field: 'verification_specialist' },
						{ title: 'Reviewer', field: 'reviewer' },
						{
							title: 'Status', field: 'status',
							render: (rowData) => {
								return (
									rowData.status === 1 ? <span className="badge badge-success">Complete</span> :
										rowData.status === 2 ? <span className="badge badge-warning">In Progress</span> :
											rowData.status === 0 ? <span className="badge badge-primary">Not Started</span> : null
								)
							}
						}
					]}
					data={[
						{ checks: "Identity", sla: "1 day", tat: "20 minutes", verification_specialist: "13 Jun 2021", reviewer: "Nola Lily", status: 1 },
						{ checks: "Education", sla: "5 days", tat: "3 days", verification_specialist: "13 Jun 2021", reviewer: "Nola Lily", status: 2 },
						{ checks: "Employment", sla: "7 days", tat: "3 days", verification_specialist: "13 Jun 2021", reviewer: "Nola Lily", status: 0 },
					]}
				/>
			</section>
		</>
	);
}

export default RequestReportDetail
