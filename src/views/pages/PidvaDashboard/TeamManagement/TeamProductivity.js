import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveInactiveServiceAction, AddServiceAction, EditServiceAction, GetServiceListAction } from '../../../../redux/actions/PidvaServiceManagementAction';
import { LinkButton } from '../../../components/Button/Button';
import { Bar, Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { SelectBox } from '../../../components/InputText/InputText';
import ReportHeader from './ReportHeader';
Chart.register(...registerables);


const TeamProductivity = () => {
	const dispatch = useDispatch();

	const ServiceApiResponse = useSelector(state => state.PidvaServiceManagement)
	const GetCurrentUser = useSelector(state => state.auth.set_user)
	const [fileName, setFileName] = useState();
	const [Fields, setFields] = useState({
		org_id: "",
		email_id: "",
		password: ""
	})



	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: GetCurrentUser.first_name
	});

	const getFileName = (e) => {
		setFileName(e.target.files[0])
	}

	console.log("ServiceApiResponse", ServiceApiResponse);
	console.log("addServiceFields", addServiceFields);


	const onChange = (e) => {
		const { name, value } = e.target
		setAddServiceFields((preValue) => {
			return {
				...preValue,
				[name]: value,
			}
		})
	}

	const ActiveInactive = (data) => dispatch(ActiveInactiveServiceAction({ apiUrl: "active_inactive_service", data: data }))

	const editService = (e) => {
		e.preventDefault();
		dispatch(EditServiceAction({ apiUrl: "update_service", data: addServiceFields }))
	}

	const addService = (e) => {
		e.preventDefault();
		dispatch(AddServiceAction({ apiUrl: "add_service", data: addServiceFields }))
	}

	useEffect(() => {
		dispatch(GetServiceListAction({ apiUrl: "service_list" }))
	}, [dispatch])


	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Team Productivity</h1>
				<div className='row'>
					<div className='col-lg-4'>
						<div className='repeat-white-bx mt-5'>
							<ReportHeader
								reportName="Nephat"
								ReportDes="BGC Specialist"
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
								profilePic="/images/notification-img1.png"
								ProgressNumber="50"
							/>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Male",
										type: "bar",
										stack: "Male",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Female",
										type: "bar",
										stack: "Female",
										backgroundColor: "#F9327A",
										data: [10, 11, 12, 13, 14, 15, 16]
									}]
								}}
								height={125}
								options={{
									scales: {
										y: {
											beginAtZero: true
										}
									},
									plugins: {
										legend: {
											display: false
										}
									},
									barThickness: 30
								}}
							/>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='repeat-white-bx mt-5'>
							<ReportHeader
								reportName="Cynthia"
								ReportDes="KYC Specialist"
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
								profilePic="/images/notification-img1.png"
								ProgressNumber="70"
							/>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Male",
										type: "bar",
										stack: "Male",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Female",
										type: "bar",
										stack: "Female",
										backgroundColor: "#F9327A",
										data: [10, 11, 12, 13, 14, 15, 16]
									}]
								}}
								height={125}
								options={{
									scales: {
										y: {
											beginAtZero: true
										}
									},
									plugins: {
										legend: {
											display: false
										}
									},
									barThickness: 30
								}}
							/>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='repeat-white-bx mt-5'>
							<ReportHeader
								reportName="Seyi"
								ReportDes="BGC Specialist"
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
								profilePic="/images/notification-img1.png"
								ProgressNumber="50"
							/>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Male",
										type: "bar",
										stack: "Male",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Female",
										type: "bar",
										stack: "Female",
										backgroundColor: "#F9327A",
										data: [10, 11, 12, 13, 14, 15, 16]
									}]
								}}
								height={125}
								options={{
									scales: {
										y: {
											beginAtZero: true
										}
									},
									plugins: {
										legend: {
											display: false
										}
									},
									barThickness: 30
								}}
							/>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='repeat-white-bx mt-5'>
							<ReportHeader
								reportName="Emeka"
								ReportDes="BGC Reviewer"
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
								profilePic="/images/notification-img1.png"
								ProgressNumber="50"
							/>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Male",
										type: "bar",
										stack: "Male",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Female",
										type: "bar",
										stack: "Female",
										backgroundColor: "#F9327A",
										data: [10, 11, 12, 13, 14, 15, 16]
									}]
								}}
								height={125}
								options={{
									scales: {
										y: {
											beginAtZero: true
										}
									},
									plugins: {
										legend: {
											display: false
										}
									},
									barThickness: 30
								}}
							/>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='repeat-white-bx mt-5'>
							<ReportHeader
								reportName="Ali"
								ReportDes="KYC Reviewer"
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
								profilePic="/images/notification-img1.png"
								ProgressNumber="50"
							/>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Male",
										type: "bar",
										stack: "Male",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Female",
										type: "bar",
										stack: "Female",
										backgroundColor: "#F9327A",
										data: [10, 11, 12, 13, 14, 15, 16]
									}]
								}}
								height={125}
								options={{
									scales: {
										y: {
											beginAtZero: true
										}
									},
									plugins: {
										legend: {
											display: false
										}
									},
									barThickness: 30
								}}
							/>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
						</div>
					</div>

					<div className='col-lg-4'>
						<div className='repeat-white-bx mt-5'>
							<ReportHeader
								reportName="David"
								ReportDes="BGC Reviewer"
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
								profilePic="/images/notification-img1.png"
								ProgressNumber="70"
							/>
							<Bar
								data={{
									labels: ['Nephat', 'Diana', 'Cynthia', 'Langat'],
									datasets: [{
										label: "Male",
										type: "bar",
										stack: "Male",
										backgroundColor: "#9B55E5",
										data: [30, 31, 32, 33, 34, 35, 36],
									}, {
										label: "Female",
										type: "bar",
										stack: "Female",
										backgroundColor: "#F9327A",
										data: [10, 11, 12, 13, 14, 15, 16]
									}]
								}}
								height={125}
								options={{
									scales: {
										y: {
											beginAtZero: true
										}
									},
									plugins: {
										legend: {
											display: false
										}
									},
									barThickness: 30
								}}
							/>
							<ul className='chat-indicators'>
								<li><span className='baby-blue-color' style={{ background: "#9B55E5" }}></span> Within TAT</li>
								<li><span className='yellow-color' style={{ background: "#F9327A" }}></span> Past TAT</li>
							</ul>
						</div>
					</div>
				</div>

			</section>
		</>
	);
}

export default TeamProductivity
