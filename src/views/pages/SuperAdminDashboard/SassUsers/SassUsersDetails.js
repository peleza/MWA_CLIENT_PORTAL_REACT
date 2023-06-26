import React, { useEffect, useState } from 'react';
import { AcceptRejectAction, UserDetailAction } from '../../../../redux/actions/AdminUsersAction';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../components/Button/Button';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BiBuilding, BiChair, BiCheck, BiCloudDownload, BiFile, BiGlobe, BiMailSend, BiPhoneCall, BiUserCircle, BiX } from 'react-icons/bi';
import { FaRegHandshake } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import './SassUsers.scss';

const SassUsersDetails = () => {
	const dispatch = useDispatch()
	const { id } = useParams();

	const UserDetail = useSelector(state => state.AdminPidvaUsers.user_detail.data)
	const VerificationResponse = useSelector(state => state.AdminPidvaUsers.user_verification)
	const isLoading = useSelector(state => state.AdminPidvaUsers.loading)

	const [confirmationModal, setConfirmationModal] = useState(false);
	const [verificationStatus, setVerificationStatus] = useState();
	const first_name = UserDetail && UserDetail.first_name.split('')

	console.log("UserDetailNew", UserDetail);

	const confirmationModalOpen = (e) => {
		setConfirmationModal(true)
		setVerificationStatus(e)
	}
	const confirmationModalClose = () => setConfirmationModal(false)

	useEffect(() => {
		// dispatch(UserDetailAction({ user_id: id }))
	}, [dispatch])

	console.log("verificationStatus", verificationStatus);
	const AcceptReject = () => {
		dispatch(AcceptRejectAction({
			email_id: UserDetail.email_id,
			verify_status: verificationStatus,
			org_id: UserDetail.org_id
		}))
	}

	console.log("VerificationResponse", VerificationResponse);

	useEffect(() => {
		if (VerificationResponse && VerificationResponse.status === '200') {
			setConfirmationModal(false)
			dispatch(UserDetailAction({ user_id: id }))
		}
	}, [VerificationResponse])
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Sass Users Details</h1>
				<div className='repeat-white-bx'>
					<div className='user-detail-header'>
						<div className='user-basic-info'>
							<div className='user-img'>
								V
							</div>
							<div>
								<h2>Vijay Kumar Kumawat</h2>
								{/* <p>ID # {UserDetail && UserDetail.id}</p> */}
								{
									UserDetail && UserDetail.verified === true
										?
										<span className="badge badge-success"><BiCheck /> Verified</span>
										:
										<span className="badge badge-danger"><BiX /> Unverified</span>
								}
							</div>
						</div>
						{UserDetail && UserDetail.is_verify_id_no === 3 ?
							null
							:
							<div className='btn-group-custom'>
								<Button
									btnName={<><BiCheck /> Accept</>}
									type="button"
									className="btn-xs btn-success"
									onClick={() => confirmationModalOpen(1)}
								/>
								<Button
									btnName={<><BiX /> Reject</>}
									type="button"
									className="btn-xs btn-danger"
									onClick={() => confirmationModalOpen(2)}
								/>
							</div>
						}
					</div>

					<div className='user-detail-list'>
						<h3 className='mb-5'>Personal Details</h3>

						<div className='row'>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<BiUserCircle />
									<div>
										<h3>Name</h3>
										<p>Vijay Kumar Kumawat</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<BiMailSend />
									<div>
										<h3>Company Email</h3>
										<p>Arkasoftwares.com</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<BiPhoneCall />
									<div>
										<h3>Phone Number</h3>
										<p>+91 9783035375</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<BiChair />
									<div>
										<h3>Designation</h3>
										<p>UI Developer</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='user-detail-list'>
						<h3 className='mb-5'>Company Details</h3>

						<div className='row'>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<BiBuilding />
									<div>
										<h3>Company Legal Name</h3>
										<p>Arka Softwares</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<BiBuilding />
									<div>
										<h3>Company Registration Number</h3>
										<p>Ar - 698745</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<FaRegHandshake />
									<div>
										<h3>Country of Incorporation</h3>
										<p>India, USA</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<AiOutlineSetting />
									<div>
										<h3>Industry of Operation</h3>
										<p>IT, Pharma</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='user-detail-col'>
									<BiGlobe />
									<div>
										<h3>Countries Require the Services</h3>
										<p>Kenya, Uganda, China</p>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<a className='user-detail-col' href='/'>
									<BiFile />
									<div>
										<h3>Company Incorporation Certificate</h3>
										<p>Certificate</p>
									</div>
									<div className='ms-auto'>
										<BiCloudDownload />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Modal show={confirmationModal} onHide={confirmationModalClose} className="confirmationModal commonModal" centered>
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
						onClick={AcceptReject}
					/>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default SassUsersDetails
