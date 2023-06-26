import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { TbEye } from 'react-icons/tb'
import { Dropdown, Form, Tab, Tabs } from 'react-bootstrap'
import { BiInfoCircle, BiCheckCircle, BiDotsVerticalRounded } from 'react-icons/bi'
import { InputText, SelectBox } from '../../../components/InputText/InputText'
import { Button } from '../../../components/Button/Button'
import './MergeFacility.scss'


const ProfileManagementMergeFacility = () => {
	const [ReadMore, setReadMore] = useState(false);
	const [MultiSelected, setMultiSelected] = useState([]);

	console.log("ReadMore", ReadMore);
	return (
		<>
			<section className='dashboard-section pidvaDashboard merge-facility-section'>
				<h1 className='dashboard-title'>Merge Facility</h1>
				<div className='repeat-white-bx w-100'>
					<Form>
						<Tabs
							defaultActiveKey="My_Self"
							transition={true}
							className="common-tabs"
						>
							<Tab eventKey="My_Self">
								<Form>
									<div className='row'>
										<div className='col-lg-3'>
											<SelectBox
												name="country_incorporation"
												required="required"
												labelText="Select country"
												error="Please select country!"
												optionData={
													<>
														<option value="" hidden>Select country</option>
														<option value="">Kenya</option>
														<option value="">China</option>
														<option value="">China</option>
													</>
												}
											/>
										</div>
										<div className='col-lg-3'>
											<SelectBox
												name="country_incorporation"
												required="required"
												labelText="Select Identity Type"
												error="Please select identity type!"
												optionData={
													<>
														<option value="" hidden>Select Identity Type</option>
														<option value="">Kenya</option>
														<option value="">China</option>
														<option value="">China</option>
													</>
												}
											/>
										</div>
										<div className='col-lg-3'>
											<InputText
												type="text"
												name="company_name"
												placeholder="Enter Number"
												labelText="Enter National Identity Number"
												pattern=".{1,}"
												error="National identity number is required!"
												required="required"
											/>
										</div>
										<div className='col-lg-3'>
											<p>&nbsp;</p>
											<Button
												btnName="Search"
												type="submit"
												className="btn-secondary btn-sm"
											/>
										</div>
									</div>
								</Form>
							</Tab>
						</Tabs>
					</Form>
				</div>
				<div className='row'>
					<div className='col-lg-6'>
						<div className='repeat-white-bx w-100 mt-5'>
							<div className='clientInfo'>
								<div className='row'>
									<div className='col-lg-4'>
										<div className='user-profile-progress'>
											<img src="/images/notification-img1.png" alt="" />
											<span className='profile-progress'>70%</span>
										</div>
									</div>
									<div className='col-lg-8'>
										<p><b>National ID</b> : 3456789</p>
										<p><b>Full Names</b> : Jane Doe Njoroge</p>
										<p><b>Country</b> : Kenya</p>
										<p><b>Profile #</b> : P1234Z</p>
									</div>
									<div className='col-lg-6'>
										<p><b>Report Date</b> : 19 Oct 2020</p>
									</div>
									<div className='col-lg-6'>
										<p><b>Report Status</b> : </p>
									</div>
								</div>
								<div className='row'>
									<table className='table background-table mt-4'>
										<tbody>
											<tr>
												<td rowSpan={2}>Education</td>
												<td>Masters</td>
												<td>Masters of Science</td>
												<td>University Of Pennsylvania</td>
											</tr>
											<tr>
												<td>Degree</td>
												<td>Bachelor of Commerce</td>
												<td>University Of Nairobi</td>
											</tr>
											<tr>
												<td rowSpan={2}>Employment</td>
												<td>15 Jan 2011 - 18 Dec 2015</td>
												<td>HR Manager</td>
												<td>Trulo Healthcare</td>
											</tr>
											<tr>
												<td>7 Jan 2015 – 11 Aug 2021</td>
												<td>HR Officer</td>
												<td>Phils Pharma</td>
											</tr>
										</tbody>
									</table>
									<div className='col-lg-12 mt-5 text-end'>
										<Button
											btnName="View Report"
											type="submit"
											className="btn-secondary btn-sm"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='repeat-white-bx w-100 mt-5'>
							<div className='clientInfo'>
								<div className='row'>
									<div className='col-lg-4'>
										<div className='user-profile-progress'>
											<img src="/images/notification-img1.png" alt="" />
											<span className='profile-progress'>70%</span>
										</div>
									</div>
									<div className='col-lg-8'>
										<p><b>National ID</b> : 3456789</p>
										<p><b>Full Names</b> : Jane Doe Njoroge</p>
										<p><b>Country</b> : Kenya</p>
										<p><b>Profile #</b> : P1234Z</p>
									</div>
									<div className='col-lg-6'>
										<p><b>Report Date</b> : 19 Oct 2020</p>
									</div>
									<div className='col-lg-6'>
										<p><b>Report Status</b> : </p>
									</div>
								</div>
								<div className='row'>
									<table className='table background-table mt-4'>
										<tbody>  
											 
											<tr>
												<td rowSpan={2}>Education</td>
												<td>Masters</td>
												<td>Masters of Science</td>
												<td>University Of Pennsylvania</td>
											</tr>
											<tr>
												<td>Degree</td>
												<td>Bachelor of Commerce</td>
												<td>University Of Nairobi</td>
											</tr>
											<tr>
												<td rowSpan={2}>Employment</td>
												<td>15 Jan 2011 - 18 Dec 2015</td>
												<td>HR Manager</td>
												<td>Trulo Healthcare</td>
											</tr>
											<tr>
												<td>7 Jan 2015 – 11 Aug 2021</td>
												<td>HR Officer</td>
												<td>Phils Pharma</td>
											</tr>
										</tbody>
									</table>
									<div className='col-lg-12 mt-5 text-end'>
										<Button
											btnName="View Report"
											type="submit"
											className="btn-secondary btn-sm"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-12 mt-5 text-center'>
						<Button
							btnName="Merge Report"
							type="submit"
							className="btn-secondary btn-sm"
						/>
					</div>
				</div>

			</section>
		</>
	);
}

export default ProfileManagementMergeFacility
