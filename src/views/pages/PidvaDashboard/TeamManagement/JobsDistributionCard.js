import React from 'react';
import './ReportHeader.scss';

const JobsDistributionCard = ({ reportName, reportCardStatus, profilePic, EmployeeStatus, ReportDes, TotalCount, NewRequestNumber, NotStartedNumber, InProgressNumber, pendingActionNumber }) => {
	const firstNameLatter = reportName[0].split()
	return (
		<>
			<div className={`reportHeader ${reportCardStatus}`}>
				<div className='reportCardHeader'>
					<div className='reportImg'>
						{profilePic ? <img src={profilePic} alt="" /> : <span className='firstNameLatter'>{firstNameLatter}</span>}
					</div>
					<div className='reportDetail'>
						<span class="badge badge-bg">{EmployeeStatus}</span>
						<h2 className='mt-2'>{reportName}</h2>
						<span>{ReportDes}</span>
					</div>
				</div>
				<div className='total-info mt-4 mb-4'>
					<span className=''>
						Total
					</span>
					<span className=''>
						{TotalCount}
					</span>
				</div>
				<div className='info-row'>
					<label>New Requests</label>
					<span>{NewRequestNumber}</span>
				</div>
				<div className='info-row'>
					<label>Not Started </label>
					<span>{NotStartedNumber}</span>
				</div>
				<div className='info-row'>
					<label>In Progress </label>
					<span>{InProgressNumber}</span>
				</div>
				<div className='info-row'>
					<label>Pending Action </label>
					<span>{pendingActionNumber}</span>
				</div>
			</div>
		</>
	);
}


export default JobsDistributionCard;