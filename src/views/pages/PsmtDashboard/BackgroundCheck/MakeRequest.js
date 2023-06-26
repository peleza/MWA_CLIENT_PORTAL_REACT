import React, { useEffect, useState } from 'react';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import { useDispatch } from 'react-redux';
import { FileUpload, InputText, SelectBox } from '../../../components/InputText/InputText';
import InfoBx from '../../../components/InfoBx/InfoBx';
import { Button, LinkButton } from '../../../components/Button/Button';
import { Modal } from 'react-bootstrap';
import { BsCheck2Circle } from 'react-icons/bs';
import './BackgroundCheck.scss';

const MakeRequest = () => {
	const dispatch = useDispatch();
	const UserTypeFunction = () => setUserType(!userType)
	const [requestSubmittedModal, setRequestSubmittedModal] = useState(false);
	const [confirmationModal, setConfirmationModal] = useState(false);
	const [userType, setUserType] = useState(true);
	const [fileName, setFileName] = useState();
	const [handleCandidates, sethandleCandidates] = useState(1);
	const [candidate, setCandidate] = useState([{ RequestReference: '', CandidateName: '', Citizenship: '', PhoneNumber: '' }])

	console.log("candidate", candidate);

	const getFileName = (e) => {
		setFileName(e.target.files[0])
	}

	const requestSubmittedModalOpen = () => {
		setRequestSubmittedModal(true)
		setConfirmationModal(false)
	}
	const requestSubmittedModalClose = () => setRequestSubmittedModal(false)
	const confirmationModalOpen = (e) => setConfirmationModal(true)
	const confirmationModalClose = () => setConfirmationModal(false)

	useEffect(() => {
		dispatch(getTitleAction("Make a Request"))
	}, [dispatch])

	const IncCandidates = () => {
		sethandleCandidates(handleCandidates + 1)
		setCandidate([...candidate, { RequestReference: '', CandidateName: '', Citizenship: '', PhoneNumber: '' }])
	}
	const DecCandidates = () => {
		if (handleCandidates > 1) {
			sethandleCandidates(handleCandidates - 1)
			setCandidate(candidate.slice(0, candidate.length - 1))
		}
	}

	return (
		<>
			<section className='dashboard-section'>
				<div className='row'>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx'>
							<h2>Select a Package</h2>
							<SelectBox
								name="Country"
								placeholder="Country"
								FormGroupClass="mb-3"
								optionData={
									<>
										<option hidden>Select Package</option>
										<option value=""> Standard Package </option>
										<option value=""> Gold Package </option>
										<option value=""> Silver Package </option>
									</>
								}
							/>
							<InfoBx message="List of your packages" />
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx'>
							<h2>Fill in Candidate Details</h2>
							<div className="user-type-radio-btn psmt-user-type">
								<label className="radiobx-btn">
									<input type="radio" name="userType" onChange={UserTypeFunction} defaultChecked={true} />
									<span>
										<i></i>
										Candidate
										<div className='vector'><img src="/images/candidate.svg" alt="candidate" /></div>
									</span>
								</label>
								<label className="radiobx-btn">
									<input type="radio" name="userType" onChange={UserTypeFunction} />
									<span>
										<i></i>
										Myself
										<div className='vector'><img src="/images/my-self.svg" alt="candidate" /></div>
									</span>
								</label>
							</div>
							<InfoBx message="We recommend the 'Candidate' option for the most compliant process." />
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<div className='repeat-white-bx'>
							<h2>Number of Candidates</h2>
							<div className='IncrementDecrement mb-3'>
								<button type='button' className='btn-icon minus' onClick={DecCandidates}><img src="/images/minus-icon.svg" alt="Minus" /></button>
								<input type="number" name="candidates" className="form-control text-center" readOnly value={handleCandidates} />
								<button type='button' className='btn-icon plus' onClick={IncCandidates}><img src="/images/add-icon.svg" alt="Add" /></button>
							</div>
							{/* <InfoBx message="We recommend the 'Candidate' option for the most compliant process." /> */}
						</div>
					</div>
				</div>
				<div className='repeat-white-bx mt-5'>
					<h2 className='mb-0'>List of checks for the selected package</h2>
					<ul className='list-design ticks-list2 yellow-check'>
						<li> Identity </li>
						<li> Criminal Records </li>
						<li> Education </li>
						<li> Social media </li>
						<li> Credit </li>
						<li> Payslip </li>
						<li> Employment Character Reference </li>
						<li> Professional Membership </li>
					</ul>
				</div>
				{userType ?
					<>
						<div className='repeat-white-bx mt-5'>
							<h2>Request Candidate Link</h2>
							<h3>Send a link to the candidate for the provision of the below </h3>
							<p>We recommend notifying the candidate that they should expect an email from us.</p>
							<ul className='list-design ticks-list2 yellow-check'>
								<li> Signed Consent  </li>
								<li> CV Copy </li>
								<li> Academic Certificates </li>
								<li> Police Clearance Certificate </li>
								<li> Id Card copy </li>
								<li> Payslip </li>
								<li> Phone Number </li>
								<li> Professional Membership Certificate </li>
							</ul>
						</div>

						<div className='repeat-white-bx mt-5'>
							<h2>Candidate Details</h2>
							<div className='row'>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="ref"
										placeholder="Enter Ref"
										labelText="Profile #"
										pattern=".{1,}"
										error="Ref is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="id"
										placeholder="Enter Id Number"
										labelText="ID Number"
										pattern=".{1,}"
										error="ID Number is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="candidates"
										placeholder="Enter Candidates Name"
										labelText="Candidate’s Legal Name"
										pattern=".{1,}"
										error="Candidates Name is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="email_address"
										placeholder="Enter Email"
										labelText="Email Address"
										pattern=".{1,}"
										error="Email Address is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="ref"
										placeholder="Enter Ref"
										pattern=".{1,}"
										error="Ref is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="id_number"
										placeholder="Enter ID Number"
										pattern=".{1,}"
										error="ID Number is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="candidates"
										placeholder="Enter Candidates Name"
										pattern=".{1,}"
										error="Candidates Name is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="email_address"
										placeholder="Enter Email"
										pattern=".{1,}"
										error="Email Address is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="ref"
										placeholder="Enter Ref"
										pattern=".{1,}"
										error="Ref is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="id_number"
										placeholder="Enter ID Number"
										pattern=".{1,}"
										error="ID Number is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="candidates"
										placeholder="Enter Candidates Name"
										pattern=".{1,}"
										error="Candidates Name is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="email_address"
										placeholder="Enter Email"
										pattern=".{1,}"
										error="Email Address is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="ref"
										placeholder="Enter Ref"
										pattern=".{1,}"
										error="Ref is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="id_number"
										placeholder="Enter ID Number"
										pattern=".{1,}"
										error="ID Number is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="candidates"
										placeholder="Enter Candidates Name"
										pattern=".{1,}"
										error="Candidates Name is Required!"
										required="required"
									/>
								</div>
								<div className='col-lg-3'>
									<InputText
										type="text"
										name="email_address"
										placeholder="Enter Email"
										pattern=".{1,}"
										error="Email Address is Required!"
										required="required"
									/>
								</div>
							</div>
						</div>

						<div className='repeat-white-bx mt-5'>
							<h2>Consent Authorization</h2>
							<div className='AuthorizationBx'>
								<div className="remember-forgot-password">
									<label className="radio-check-btn checkbox-btn mb-0">
										<input type="checkbox" name="t_c" pattern='^([Tt][Rr][Uu][Ee])$' />
										<span>
											<i></i>
											I confirm that the above candidates has given us consent to conduct background checks.
										</span>
									</label>
								</div>

								<Button
									btnName="Submit Request"
									type="submit"
									className="btn-secondary"
									onClick={confirmationModalOpen}
								/>
							</div>
						</div>
					</>
					:
					<>
						{
							candidate.map((value, index) => {
								return (
									<div className='repeat-white-bx mt-5' key={index}>
										<h2>Candidate Details & Documents Upload : {index + 1}</h2>
										<div className='row'>
											<div className='col-lg-3'>
												<InputText
													type="text"
													name="ref"
													placeholder="Enter Profile #"
													labelText="Profile #"
													defaultValue="RQ-54712"
													pattern=".{1,}"
													error="Request Reference is Required!"
													required="required"
													readOnly={true}
												/>
											</div>
											<div className='col-lg-3'>
												<InputText
													type="text"
													name="ref"
													placeholder="Enter ID Number"
													labelText="ID Number"
													pattern=".{1,}"
													error="Request Reference is Required!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<InputText
													type="text"
													name="ref"
													placeholder="Enter Candidate Name"
													labelText="Candidate Name"
													pattern=".{1,}"
													error="Candidate Name is Required!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<SelectBox
													name="Country"
													placeholder="Country"
													labelText="Citizenship"
													FormGroupClass="mb-3"
													optionData={
														<>
															<option hidden>Select Citizenship</option>
															<option value=""> Kenya </option>
															<option value=""> China </option>
														</>
													}
												/>
											</div>
											<div className='col-lg-3'>
												<InputText
													type="text"
													name="ref"
													placeholder="Enter Phone Number"
													labelText="Phone Number"
													pattern=".{1,}"
													error="Phone Number is Required!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<InputText
													type="text"
													name="ref"
													placeholder="Enter Residential Address"
													labelText="Residential Address"
													pattern=".{1,}"
													error="Residential Address is Required!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<InputText
													type="text"
													name="ref"
													placeholder="Enter House No."
													labelText="&nbsp;"
													pattern=".{1,}"
													error="House No. is Required!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<InputText
													type="text"
													name="ref"
													placeholder="Enter Estate"
													labelText="&nbsp;"
													pattern=".{1,}"
													error="Estate is Required!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<InputText
													type="text"
													name="ref"
													placeholder="Enter Nearest Landmark"
													labelText="&nbsp;"
													pattern=".{1,}"
													error="Nearest Landmark is Required!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<FileUpload
													fileName={fileName && fileName.name}
													labelText="Upload Company Incorporation Certificate"
													onChange={getFileName}
													name="comp_incop_certif_url"
													accept='Jpeg, PNG, PDF'
													error="Please Upload Company Certificate!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<FileUpload
													fileName={fileName && fileName.name}
													labelText="Upload ID Card Copy"
													onChange={getFileName}
													name="comp_incop_certif_url"
													accept='Jpeg, PNG, PDF'
													error="Please Upload Company Certificate!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<FileUpload
													fileName={fileName && fileName.name}
													labelText="Upload CV Copy"
													onChange={getFileName}
													name="comp_incop_certif_url"
													accept='Jpeg, PNG, PDF'
													error="Please Upload Company Certificate!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<FileUpload
													fileName={fileName && fileName.name}
													labelText="Upload Education Certificates"
													onChange={getFileName}
													name="comp_incop_certif_url"
													accept='Jpeg, PNG, PDF'
													error="Please Upload Company Certificate!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<FileUpload
													fileName={fileName && fileName.name}
													labelText="Upload Police Clearance Certificate"
													onChange={getFileName}
													name="comp_incop_certif_url"
													accept='Jpeg, PNG, PDF'
													error="Please Upload Company Certificate!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<FileUpload
													fileName={fileName && fileName.name}
													labelText="Upload Membership Certificate"
													onChange={getFileName}
													name="comp_incop_certif_url"
													accept='Jpeg, PNG, PDF'
													error="Please Upload Company Certificate!"
													required="required"
												/>
											</div>
											<div className='col-lg-3'>
												<FileUpload
													fileName={fileName && fileName.name}
													labelText="Upload Payslip Copy"
													onChange={getFileName}
													name="comp_incop_certif_url"
													accept='Jpeg, PNG, PDF'
													error="Please Upload Company Certificate!"
													required="required"
												/>
											</div>
										</div>
									</div>
								)
							})
						}

						{candidate.length > 3 ?
							<div className='text-center mt-5'>
								<Button
									btnName="Load More"
									type="button"
									className="btn-secondary"
								/>
							</div>
							:
							<div className='repeat-white-bx mt-5'>
								<h2>Consent Authorization</h2>
								<div className='AuthorizationBx'>
									<div className="remember-forgot-password">
										<label className="radio-check-btn checkbox-btn mb-0">
											<input type="checkbox" name="t_c" pattern='^([Tt][Rr][Uu][Ee])$' />
											<span>
												<i></i>
												I confirm that the above candidates has given us consent to conduct background checks.
											</span>
										</label>
									</div>

									<Button
										btnName="Submit Request"
										type="submit"
										className="btn-secondary"
										onClick={confirmationModalOpen}
									/>
								</div>
							</div>
						}
					</>
				}
			</section>


			<Modal show={requestSubmittedModal} onHide={requestSubmittedModalClose} className="confirmationModal commonModal successModal" centered>
				<Modal.Body>
					<div className='success-bx'>
						<BsCheck2Circle />
					</div>
					<h2>Great!</h2>
					<h3>Your Request has been Submitted <br /> Successfully</h3>
				</Modal.Body>
				<Modal.Footer>
					<LinkButton
						text="View Progress"
						to="/psmt/reports"
						className="btn-sm btn-black"
					/>
					<Button
						btnName="Submit Another Request"
						type="button"
						className="btn-sm btn-secondary"
						onClick={requestSubmittedModalClose}
					/>
				</Modal.Footer>
			</Modal>

			<Modal show={confirmationModal} size="sm" onHide={confirmationModalClose} className="confirmationModal commonModal" centered>
				<Modal.Body>
					<h2>Confirmation</h2>
					<p>Are you sure you want to do this?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button
						btnName="Cancel"
						type="button"
						className="btn-xs btn-danger"
						onClick={confirmationModalClose}
					/>
					<Button
						btnName="Submit"
						type="button"
						className="btn-xs btn-success"
						onClick={requestSubmittedModalOpen}
					/>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default MakeRequest