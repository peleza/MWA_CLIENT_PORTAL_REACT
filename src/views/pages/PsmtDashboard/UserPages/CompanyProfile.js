import React, { useEffect, useState } from 'react';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BiCheckCircle, BiDotsVerticalRounded, BiCommentEdit, BiBlock } from 'react-icons/bi'
import { FileUpload, InputText, SelectBox, TextArea } from '../../../components/InputText/InputText';
import './UserPages.scss'
import { MultiSelect } from "react-multi-select-component";
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { Button } from '../../../components/Button/Button';
import MaterialTable from '@material-table/core';

const CompanyProfile = () => {
	const dispatch = useDispatch();
	const ProfileProgress = 34;

	const [fileName, setFileName] = useState();
	const [MultiSelected, setMultiSelected] = useState([]);
	const SelectedSubServices = MultiSelected.map(value => value.value)
	const [EditContactInfoModalState, setEditContactInfoModalState] = useState(false);
	const [AddMemberModalState, setAddMemberModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: ''
	});

	const EditContactInfoModalClose = () => setEditContactInfoModalState(false);
	const EditContactInfoModalShow = () => setEditContactInfoModalState(true);
	const AddMemberModalClose = () => setAddMemberModalState(false);
	const AddMemberModalShow = () => setAddMemberModalState(true);

	const onChange = (e) => {
		const { name, value } = e.target
		setAddServiceFields((preValue) => {
			return {
				...preValue,
				[name]: value,
			}
		})
	}


	const getFileName = (e) => {
		setFileName(e.target.files[0])
	}

	useEffect(() => {
		dispatch(getTitleAction("My Profile"))
	}, [dispatch])


	return (
		<>
			<section className='dashboard-section'>
				<div className='row'>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx'>
							<div className='edit-profile-pic'>
								<div className='editProfilePic'>
									<img src="/images/company-profile-img.png" alt="icon" />
								</div>
								<div className='editProfileDetails'>
									{/* <h2>Rob Nate</h2>
									<p>Human Resource Director</p> */}
									<span className='badge badge-success mb-3'><BiCheckCircle /> Verified</span>
								</div>
							</div>
							<FileUpload
								fileName={fileName && fileName.name}
								labelText="Upload Your Photo"
								FormGroupClass="mb-0"
								onChange={getFileName}
								name="profile_photo"
								accept='Jpeg, PNG'
								error="Please Upload Photo Certificate!"
								required="required"
							/>
						</div>
					</div>

					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx'>
							<h2>Company Information</h2>
							<div className='row'>
								<div className='col-lg-6'>
									<h3>Legal Name</h3>
									<p>Samsung Kenya Ltd</p>
								</div>
								<div className='col-lg-6 mb-3'>
									<h3>Main Country</h3>
									<p>Kenya</p>
								</div>
								<div className='col-lg-6 mb-3'>
									<h3>Reg Number</h3>
									<p>12345678</p>
								</div>
								<div className='col-lg-6'>
									<h3>Other Countries</h3>
									<p>Uganda, Tanzania, Rwanda</p>
								</div>
								<div className='col-lg-6'>
									<h3>Industry</h3>
									<p> Retail Manufacturing</p>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx'>
							<h2>Contact Information
								<Button
									btnName="Edit"
									type="submit"
									className="btn-secondary btn-xs"
									onClick={EditContactInfoModalShow}
								/>
							</h2>
							<div className='row'>
								<div className='col-lg-12 mb-3'>
									<h3>Phone</h3>
									<p>+254 123 456 789</p>
								</div>
								<div className='col-lg-12 mb-3'>
									<h3>Email</h3>
									<p>Rob.Nate@xyz.com</p>
								</div>
								<div className='col-lg-12'>
									<h3>Address</h3>
									<p>Reliance Centre, Woodvale</p>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-8 mt-5'>
						<MaterialTable
							title="Your Team"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'Name', field: 'name' },
								{ title: 'Role', field: 'role' },
								{ title: 'Email', field: 'email' },
								{ title: 'Package', field: 'package' },
								{ title: 'Date Joined', field: 'date_joined', },
								{
									title: 'Status', field: 'Status',
									render: (rowData) => {
										return (
											rowData.status === 1 ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Deactivated</span>
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
													<button className='dropdown-item'><BiCommentEdit /> Edit</button>
													{rowData.status === 1 ?
														<button className='dropdown-item'><BiBlock /> Deactivate</button>
														:
														<button className='dropdown-item'><BiCheckCircle /> Activate</button>
													}
												</Dropdown.Menu>
											</Dropdown>
										)
									}
								}
							]}
							data={[
								{ name: "Ezra Powell", role: "Member", email: "Ezra.Powell@xyz.com", package: "Intern Standard", date_joined: "13 Aug 2020 2.32am", status: 1, },
								{ name: "Ezra Powell", role: "Member", email: "Ezra.Powell@xyz.com", package: "Intern Standard", date_joined: "13 Aug 2020 2.32am", status: 2, },
								{ name: "Ezra Powell", role: "Member", email: "Ezra.Powell@xyz.com", package: "Intern Standard", date_joined: "13 Aug 2020 2.32am", status: 1, },
								{ name: "Ezra Powell", role: "Member", email: "Ezra.Powell@xyz.com", package: "Intern Standard", date_joined: "13 Aug 2020 2.32am", status: 1, },
							]}
							options={{
								actionsColumnIndex: -1,
								numberOfPagesAround: 10
							}}
							actions={[
								{
									icon: 'Add Team',
									iconProps: { className: 'btn btn-secondary FreeAction' },
									isFreeAction: true,
									onClick: (event) => { AddMemberModalShow() }
								}
							]}
						/>
					</div>

					<div className='col-lg-4 mt-5'>
						<div className='repeat-white-bx'>
							<h2>Contract Information
								<span className='badge badge-success mb-3'><BiCheckCircle /> Active</span>
							</h2>
							<div className='row mb-5'>
								<div className='col-lg-6'>
									<h3>Contract Start Date</h3>
									<p>1 Jan 2022</p>
								</div>
								<div className='col-lg-6'>
									<h3>Contract End Date</h3>
									<p>31 Dec 2022</p>
								</div>
							</div>
							<Button
								btnName="Download Contract File"
								type="submit"
								className="btn-sm btn-black w-100"
							/>
							<Button
								btnName="Renew"
								type="submit"
								className="btn-sm btn-secondary w-100 ms-0 mt-3"
							/>
						</div>
					</div>
				</div>
			</section>

			<Modal show={EditContactInfoModalState} onHide={EditContactInfoModalClose} centered className='commonModal form-modal'>
				<Modal.Header closeButton>
					<Modal.Title>Edit Contact Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<InputText
							type="text"
							name="phone_no."
							placeholder="Enter Phone No."
							labelText="Phone No."
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Phone No. is Required!"
							required="required"
							onChange={onChange}
						/>
						<TextArea
							FormGroupClass="form-control-md form-control-style2"
							placeholder="Enter Address"
							labelText="Address"
							pattern=".{1,}"
							error="Address is Required!"
							required="required"
							onChange={onChange}
						/>
						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={EditContactInfoModalClose}
							/>
							<Button
								btnName="Submit"
								type="submit"
								className="btn-xs btn-secondary"
							/>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>

			<Modal show={AddMemberModalState} onHide={AddMemberModalClose} centered className='commonModal form-modal modal-70w'>
				<Modal.Header closeButton>
					<Modal.Title>Add a Team Member</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='row'>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="name."
									placeholder="Enter Name"
									labelText="Name"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Name is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="text"
									name="designation"
									placeholder="Enter Designation"
									labelText="Designation"
									FormGroupClass="form-control-md form-control-style2"
									pattern=".{1,}"
									error="Designation is Required!"
									required="required"
									onChange={onChange}
								/>
							</div>
							<div className='col-lg-6 form-group'>
								<label htmlFor="">Package</label>
								<MultiSelect
									value={MultiSelected}
									onChange={setMultiSelected}
									className='react-select-bx'
									name="package"
									labelledBy="Select"
									options={
										[
											{ value: 4, label: 'Intern Standard' },
											{ value: 5, label: 'Expert' },
											{ value: 6, label: 'Gold' },
										]
									}
								/>
							</div>
							<div className='col-lg-6'>
								<SelectBox
									name="role"
									onChange={onChange}
									required="required"
									labelText="Role"
									FormGroupClass="form-control-md form-control-style2"
									error="Please select Role!"
									optionData={
										<>
											<option hidden value="">Role</option>
											<option value="1"> Member  </option>
											<option value="2"> Role2 </option>
										</>
									}
								/>
							</div>
							<div className='col-lg-6'>
								<InputText
									type="email"
									name="email_id"
									placeholder="Enter Email"
									labelText="Company Email Address"
									FormGroupClass="form-control-md form-control-style2"
									pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
									error="It should be a valid email address!"
									required="required"
									onChange={onChange}
								/>
							</div>
						</div>
						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={AddMemberModalClose}
							/>
							<Button
								btnName="Submit"
								type="submit"
								className="btn-xs btn-secondary"
							/>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default CompanyProfile