import React, { useState } from 'react';
import DashboardInfoBx from '../../../components/DashboardInfoBx/DashboardInfoBx';
import NewRequest from '../../../components/RequestManagementKYC/NewRequest';
import Interim from '../../../components/RequestManagementKYC/Interim';
import InProgress from '../../../components/RequestManagementKYC/InProgress';
import Complete from '../../../components/RequestManagementBGC/Complete';
import InterimPastTAT from '../../../components/RequestManagementBGC/InterimPastTAT';
import PendingClientAction from '../../../components/RequestManagementBGC/PendingClientAction';
import ReportsNotStarted from '../../../components/RequestManagementBGC/ReportsNotStarted';
import ReportsPendingReview from '../../../components/RequestManagementBGC/ReportsPendingReview';
import RequestsNearingTAT from '../../../components/RequestManagementBGC/RequestsNearingTAT';
import Urgent from '../../../components/RequestManagementBGC/Urgent';

const RequestManagementKYC = () => {
	const [CurrentIndex, setCurrentIndex] = useState(1);
	const SwitchTabFunction = (index) => {
		console.log("index", index);
		setCurrentIndex(index)
	}
	console.log("CurrentIndex",CurrentIndex);

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>KYC</h1>
				<div className='row row-col-5 mb-5'>
					<div className='col mb-5'>
						<DashboardInfoBx
							color="baby-blue-color"
							title="New Requests"
							value="3,557"
							icon="pidva-icons/new-request-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(1)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="pink-color"
							title="Requests Nearing TAT"
							value="3,557"
							icon="pidva-icons/nearing-tat-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(2)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="red-color"
							title="Interim Past TAT"
							value="3,557"
							icon="pidva-icons/interim-past-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(3)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="coral-color"
							title="Urgent"
							value="885"
							icon="pidva-icons/complete-reports-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(4)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="grey-color"
							title="Checks Not Started"
							value="885"
							icon="pidva-icons/reports-not-started-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(5)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="purple-color"
							title="In Progress"
							value="5,691"
							icon="pidva-icons/in-progress-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(6)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="orange-color"
							title="Interim"
							value="885"
							icon="pidva-icons/interim-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(7)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="aqua-color"
							title="Reports Pending Review"
							value="885"
							icon="pidva-icons/pending-review-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(8)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="yellow-color"
							title="Pending Client Action"
							value="97"
							icon="pidva-icons/pending-action-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(9)
							}}
						/>
					</div>
					<div className='col'>
						<DashboardInfoBx
							color="green-color2"
							title="Complete"
							value="97"
							icon="pidva-icons/complete-icon.svg"
							onclick={(e) => {
								e.preventDefault();
								SwitchTabFunction(10)
							}}
						/>
					</div>
				</div>
				{
					CurrentIndex === 1 ?
					<NewRequest /> 
					:
					CurrentIndex === 2 ?
					<RequestsNearingTAT />
					:
					CurrentIndex === 3 ?
					<InterimPastTAT />
					:
					CurrentIndex === 4 ?
					<Urgent />
					:
					CurrentIndex === 5 ?
					<ReportsNotStarted />
					:
					CurrentIndex === 6 ?
					<InProgress /> 
					:
					CurrentIndex === 7 ?
					<Interim /> 
					:
					CurrentIndex === 8 ?
					<ReportsPendingReview />
					:
					CurrentIndex === 9 ?
					<PendingClientAction />
					:
					CurrentIndex === 10 ?
					<Complete /> 
					:
					null
				}
			</section>
		</>
	);
}

export default RequestManagementKYC
