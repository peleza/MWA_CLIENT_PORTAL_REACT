import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { VerifyOTP } from '../../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import OtpInput from 'react-otp-input';
import "../../components/InputText/InputStyle.scss"
import "./Auth.scss"

function Otp(props) {
	const dispatch = useDispatch();
	console.log("props are ", props)
	const OTPApiResponse = useSelector(state => state.auth.otp.data)
	const isAuthenticated = useSelector(state => state.auth)
	const isLoading = useSelector(state => state.auth.loading)
	const psmtLoading = useSelector(state => state.PsmtData.loading)
	
	console.log("OTPApiResponse", OTPApiResponse);
	console.log("props.location", props.location);

	const [submitClick, setSubmitClick] = useState(false);

	const email = props.location.state.email
	const type = props.location.state.type

	const [getOtp, setGetOtp] = useState({
		otp: "",
		email_id: email,
		type: type
	});
	
	const handleChange = (otp) => setGetOtp({ ...getOtp, otp });

	const handSubmit = (e) => {
		setSubmitClick(true)
		e.preventDefault();
		dispatch(VerifyOTP(getOtp))
	}

	if(submitClick == true) {
		console.log("clicked");
		if((OTPApiResponse && OTPApiResponse.status == 200) && ( OTPApiResponse && OTPApiResponse.type == 1)){
			props.history.push("/login")
			setSubmitClick(false)
		}
	
		if((OTPApiResponse && OTPApiResponse.status == 200) && ( OTPApiResponse && OTPApiResponse.type == 2) && (isAuthenticated && isAuthenticated.isAuthenticated == true)){
			props.history.push("/pidva/dashboard")
			setSubmitClick(false)
		}

		if((OTPApiResponse && OTPApiResponse.status == 200) && ( OTPApiResponse && OTPApiResponse.type == 3)) {
			props.history.push({
				pathname: "/reset-password",
				state: email
			})
		}
	}

	return (
		<div className="auth-section">
			<div className='container-fluid'>
				<Row className=''>
					<Col lg="6" className=''>
						<div className="auth-image text-center">
							<img src="/images/otp-image.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper">
							<div className="auth-head">
								<SectionTitle title="OTP" subHeading={"An OTP has been sent to your email"} className={''} />
							</div>
							<div className="auth-form otp-form">
								<Form autoComplete="off" onSubmit={handSubmit}>
									<div className='otp-bx'>
										<OtpInput
											value={getOtp.otp}
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
											className="btn-secondary w-100"
											isDisabled={isLoading && psmtLoading}
											isLoading={isLoading && psmtLoading}
										/>
									</div>
								</Form>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}
export default Otp;
