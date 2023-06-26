import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap"
import { ResetPasswordAction } from '../../../redux/actions/authAction'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { InputText } from "../../components/InputText/InputText"
import { useDispatch, useSelector } from 'react-redux';
import "./Auth.scss"

function ResetPassword(props) {
	const dispatch = useDispatch();

	const ForgotPasswordApiRes = useSelector(state => state)

	const [submitClick, setSubmitClick] = useState(false)
	const [Password, SetPassword] = useState(false);
	const [ConfirmPassword, SetConfirmPassword] = useState(false);

	console.log("props.location.state", props.location.state);
	console.log("ForgotPasswordApiRes", ForgotPasswordApiRes);

	const [formValue, setFormValue] = useState({
		email_id: props.location.state,
		password: '',
		confirm_password: ''
	})

	const ShowPassword = () => SetPassword(!Password);
	const ShowConfirmPassword = () => SetConfirmPassword(!ConfirmPassword);

	const onChange = (e) => {
		const { name, value } = e.target
		setFormValue((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		})
	}

	const formSubmit = (e) => {
		setSubmitClick(true)
		e.preventDefault();
		dispatch(ResetPasswordAction(formValue))
	}

	if(submitClick == true) {
		if(ForgotPasswordApiRes.auth.reset_password !== undefined && ForgotPasswordApiRes.auth.reset_password.status == 200){
			props.history.push("/login")
		}
	}

	return (
		<div className="auth-section">
			<div className='container-fluid'>
				<Row className=''>
					<Col lg="6" className=''>
						<div className="auth-image text-center">
							<img src="/images/reset-password.svg" alt="Reset-password" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper">
							<div className="auth-head">
								<SectionTitle title="New Password" subHeading={"Not to worry…. We got you"} className={''} />
							</div>
							<Form onSubmit={formSubmit} className="auth-form">
								<InputText
									type={Password ? "text" : "password"}
									name="password"
									placeholder="New Password"
									isPassword="true"
									onChange={onChange}
									onClick={ShowPassword}
									ChangeClass={Password ? "show-hide active" : "show-hide"}
									pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
									error="8+ characters 1 Uppercase character 1 Special Character 1 Number"
									required="required"
								/>
								<p className='f-14'>8+ characters 1 Uppercase character 1 Special Character 1 Number</p>
								<InputText
									type={ConfirmPassword ? "text" : "password"}
									name="confirm_password"
									placeholder="Confirm Password"
									isPassword="true"
									onChange={onChange}
									onClick={ShowConfirmPassword}
									ChangeClass={ConfirmPassword ? "show-hide active" : "show-hide"}
									pattern={formValue.password}
									error="Passwords don't match!"
									required="required"
								/>
								<div className="form-submit-btn-row mt-40">
									<Button
										btnName="Reset Password"
										type="submit"
										className="btn-secondary"
									/>
								</div>
							</Form>
						</div>

						<div className="bottom-info">
							<p> New User? <Link to="/signup" className="secondary-text"> Sign Up </Link></p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}



export default ResetPassword;
