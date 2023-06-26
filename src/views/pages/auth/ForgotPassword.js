import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap"
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { InputText } from "./../../components/InputText/InputText"
import { ForgotPasswordAction } from '../../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import "./Auth.scss"

function ForgotPassword(props) {
	const dispatch = useDispatch()

	const ForgotPasswordApiRes = useSelector(state => state)

	console.log("ForgotPasswordApiRes", ForgotPasswordApiRes);

	const [submitClick, setSubmitClick] = useState(false)
	const [formValue, setFormValue] = useState({
		email_id: ''
	})


	const onChange = (e) => {
		const { name, value } = e.target

		setFormValue((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		})
	}

	const FormSubmit = (e) => {
		setSubmitClick(true);
		e.preventDefault()
		dispatch(ForgotPasswordAction(formValue))
	}

	if (submitClick == true) {
		if(ForgotPasswordApiRes.auth.forgot_password !== undefined && ForgotPasswordApiRes.auth.forgot_password.status == 200){
			props.history.push({
				pathname: "/otp",
				state: {email: formValue.email_id, type: 3}
			})
		}
	}

	return (
		<div className="auth-section">
			<div className='container-fluid'>
				<Row className=''>
					<Col lg="6" className=''>
						<div className="auth-image text-center">
							<img src="/images/forgot-password.svg" alt="forgot-password" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper">
							<div className="auth-head">
								<SectionTitle title="Forgot your password?" subHeading={"Not to worry…. We got you"} className={''} />
							</div>
							<Form className="auth-form" onSubmit={FormSubmit}>
								<InputText
									type="email"
									name="email_id"
									test="test"
									placeholder="Email address"
									hasLabel={true}
									onChange={onChange}
									pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
									error="It should be a valid email address!"
									required="required"
								/>
								<div className="form-submit-btn-row mt-40">
									<Button
										btnName="Submit"
										type="submit"
										className="btn-secondary"
										isDisabled={ForgotPasswordApiRes.auth.loading}
										isLoading={ForgotPasswordApiRes.auth.loading}
									/>
								</div>
							</Form>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}



export default ForgotPassword;
