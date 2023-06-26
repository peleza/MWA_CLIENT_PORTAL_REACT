import React, { useEffect, useState } from 'react';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BiCheckCircle } from 'react-icons/bi'
import { FileUpload, InputText, SelectBox, TextArea } from '../../../components/InputText/InputText';
import './UserPages.scss'
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { Button } from '../../../components/Button/Button';
import OtpInput from 'react-otp-input';
import '../../auth/Auth.scss'

const MyProfile = () => {
	const dispatch = useDispatch();
	const ProfileProgress = 34;

	const [fileName, setFileName] = useState();
	const [OtpModalState, setOtpModalState] = useState(false);
	const [EditContactInfoModalState, setEditContactInfoModalState] = useState(false);
	const [AddMemberModalState, setAddMemberModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		otp: '',
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: ''
	});

	const EditContactInfoModalClose = () => setEditContactInfoModalState(false);
	const EditContactInfoModalShow = () => setEditContactInfoModalState(true);
	const AddMemberModalClose = () => setAddMemberModalState(false);
	const AddMemberModalShow = () => setAddMemberModalState(true);
	const OtpModalClose = () => setOtpModalState(false);
	const OtpModalShow = () => setOtpModalState(true);

	const handleChange = (otp) => setAddServiceFields({ ...addServiceFields, otp: otp });

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
					<div className='col-lg-5 d-flex'>
						<div className='repeat-white-bx'>
							<div className='edit-profile-pic'>
								<div className='editProfilePic'>
									<img src="/images/dummy-profile.jpg" alt="icon" />
								</div>
								<div className='editProfileDetails'>
									<h2>Rob Nate</h2>
									<p>Human Resource Director</p>
									<span className='badge badge-success mb-3'><BiCheckCircle /> Active</span>
									<ProgressBar
										progress={`${ProfileProgress}%`}
										label={ProfileProgress}
										title="Complete"
										theme="green-color2"
									/>
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

					<div className='col-lg-7 d-flex'>
						<div className='repeat-white-bx'>
							<h2>Personal Information</h2>
							<div className='row'>
								<div className='col-lg-6'>
									<h3>Name</h3>
									<p>Francis Kimani</p>
								</div>
								<div className='col-lg-6 mb-3'>
									<h3>User Profile</h3>
									<p>Client Admin User</p>
								</div>
								<div className='col-lg-6 mb-3'>
									<h3>ID Number</h3>
									<p>12345678</p>
								</div>
								<div className='col-lg-6'>
									<h3>Account Creation Date</h3>
									<p>11 Mar 2021</p>
								</div>
								<div className='col-lg-6'>
									<h3>Gender</h3>
									<p>Male</p>
								</div>
								<div className='col-lg-6'>
									<h3>Packages</h3>
									<p>Standard</p>
								</div>
							</div>
						</div>
					</div>

					<div className='col-lg-6 d-flex mt-5'>
						<div className='repeat-white-bx'>
							<h2>Contact Information </h2>
							<Form>
								<InputText
									type="text"
									name="phone"
									placeholder="Phone"
									hasLabel={true}
									onChange={onChange}
									pattern=".{1,}"
									error="Phone Required!"
									defaultValue="+254 123 456 789"
									required="required"
								/>
								<InputText
									type="email"
									name="Email"
									placeholder="Email"
									hasLabel={true}
									pattern=".{1,}"
									error="Email Required!"
									defaultValue="rob.nate@xyx.com"
									isDisabled={true}
									required="required"
								/>
								<TextArea
									placeholder="Enter Address"
									pattern=".{1,}"
									error="Address is Required!"
									required="required"
									onChange={onChange}
									defaultData="Reliance Centre, Woodvale"
								/>
								<Button
									btnName="Update Information"
									type="submit"
									className="btn-secondary btn-sm"
								/>
							</Form>
						</div>
					</div>

					<div className='col-lg-6 mt-5'>
						<div className='repeat-white-bx'>
							<h2>Update Password</h2>
							<Form>
								<InputText
									type="text"
									name="new_password"
									placeholder="New Password"
									hasLabel={true}
									onChange={onChange}
									pattern=".{1,}"
									error="New Password Required!"
									required="required"
								/>
								<InputText
									type="text"
									name="confirm_password"
									placeholder="Confirm Password"
									hasLabel={true}
									onChange={onChange}
									pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
									error="8+ characters 1 Uppercase character 1 Special Character 1 Number"
									required="required"
								/>
								<Button
									btnName="Update Password"
									type="submit"
									className="btn-secondary btn-sm"
									onClick={OtpModalShow}
								/>
							</Form>
						</div>
					</div>
				</div>
			</section>

			<Modal show={AddMemberModalState} onHide={AddMemberModalClose} centered className='commonModal form-modal'>
				<Modal.Header closeButton>
					<Modal.Title>Add a Team Member</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
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
						<SelectBox
							name="role"
							onChange={onChange}
							required="required"
							labelText="Role"
							FormGroupClass="form-control-md form-control-style2"
							error="Please select Package's!"
							optionData={
								<>
									<option hidden value="">Assign Package's</option>
									<option value="1"> Intern  </option>
									<option value="2"> Standard </option>
								</>
							}
						/>
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

			<Modal show={OtpModalState} onHide={OtpModalClose} centered className='commonModal'>
				<Modal.Header closeButton>
					<Modal.Title>Verify OTP</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<div className='otp-bx'>
							<OtpInput
								value={addServiceFields.otp}
								onChange={handleChange}
								numInputs={5}
								className="otp-col"
								inputStyle="form-control"
							/>
						</div>
						<div className="bottom-info text-start">
							<p> Not received your code? <button className="secondary-text">Resend </button></p>
						</div>

						<div className="form-submit-btn-row">
							<Button
								btnName="Verify"
								type="submit"
								// isDisabled={isLoading}
								// isLoading={isLoading}
								className="btn-secondary w-100"
							/>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default MyProfile