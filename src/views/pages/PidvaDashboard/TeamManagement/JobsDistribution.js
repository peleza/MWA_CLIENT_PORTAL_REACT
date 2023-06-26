import React from 'react';
// import ReportHeader from './ReportHeader';
import JobsDistributionCard from './JobsDistributionCard';

const JobsDistribution = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Jobs Distribution</h1>
				<h2>Specialist</h2>
				<div className='row'>
					<div className='col-lg-3 col-md-6 mt-4'>
						<JobsDistributionCard
							EmployeeStatus="Online"
							reportName="Nephat"
							ReportDes="BGC Specialist"
							profilePic="/images/notification-img1.png"
							TotalCount="554"
							NewRequestNumber="47"
							NotStartedNumber="30"
							InProgressNumber="444"
							pendingActionNumber="33"
							reportCardStatus="active-card"
						/>
					</div>
					<div className='col-lg-3 col-md-6 mt-4'>
						<JobsDistributionCard
							EmployeeStatus="On Leave"
							reportName="Nephat"
							ReportDes="BGC Specialist"
							profilePic="/images/notification-img1.png"
							TotalCount="554"
							NewRequestNumber="47"
							NotStartedNumber="30"
							InProgressNumber="444"
							pendingActionNumber="33"
							reportCardStatus="onleave-card"
						/>
					</div>
					<div className='col-lg-3 col-md-6 mt-4'>
						<JobsDistributionCard
							EmployeeStatus="Online"
							reportName="Nephat"
							ReportDes="BGC Specialist"
							profilePic="/images/notification-img1.png"
							TotalCount="554"
							NewRequestNumber="47"
							NotStartedNumber="30"
							InProgressNumber="444"
							pendingActionNumber="33"
							reportCardStatus="active-card"
						/>
					</div>
					<div className='col-lg-3 col-md-6 mt-4'>
						<JobsDistributionCard
							EmployeeStatus="Away"
							reportName="Nephat"
							ReportDes="BGC Specialist"
							profilePic="/images/notification-img1.png"
							TotalCount="554"
							NewRequestNumber="47"
							NotStartedNumber="30"
							InProgressNumber="444"
							pendingActionNumber="33"
							reportCardStatus="away-card"
						/>
					</div>
				</div>

				<h2>Reviewers</h2>
				<div className='row'>
					<div className='col-lg-3 col-md-6 mt-4'>
						<JobsDistributionCard
							EmployeeStatus="Online"
							reportName="Nephat"
							ReportDes="BGC Specialist"
							profilePic="/images/notification-img1.png"
							TotalCount="554"
							NewRequestNumber="47"
							NotStartedNumber="30"
							InProgressNumber="444"
							pendingActionNumber="33"
							reportCardStatus="active-card"
						/>
					</div>
					<div className='col-lg-3 col-md-6 mt-4'>
						<JobsDistributionCard
							EmployeeStatus="On Leave"
							reportName="Nephat"
							ReportDes="BGC Specialist"
							profilePic="/images/notification-img1.png"
							TotalCount="554"
							NewRequestNumber="47"
							NotStartedNumber="30"
							InProgressNumber="444"
							pendingActionNumber="33"
							reportCardStatus="onleave-card"
						/>
					</div>
					<div className='col-lg-3 col-md-6 mt-4'>
						<JobsDistributionCard
							EmployeeStatus="Online"
							reportName="Nephat"
							ReportDes="BGC Specialist"
							profilePic="/images/notification-img1.png"
							TotalCount="554"
							NewRequestNumber="47"
							NotStartedNumber="30"
							InProgressNumber="444"
							pendingActionNumber="33"
							reportCardStatus="active-card"
						/>
					</div>
					<div className='col-lg-3 col-md-6 mt-4'>
						<JobsDistributionCard
							EmployeeStatus="Away"
							reportName="Nephat"
							ReportDes="BGC Specialist"
							profilePic="/images/notification-img1.png"
							TotalCount="554"
							NewRequestNumber="47"
							NotStartedNumber="30"
							InProgressNumber="444"
							pendingActionNumber="33"
							reportCardStatus="away-card"
						/>
					</div>
				</div>

			</section>
		</>
	);
}

export default JobsDistribution
