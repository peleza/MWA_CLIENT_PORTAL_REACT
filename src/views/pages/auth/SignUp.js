import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap"
import { InputText } from "./../../components/InputText/InputText"
import { Link } from 'react-router-dom';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';

import "./Auth.scss"
import { useDispatch, useSelector } from 'react-redux';
import { SignUpAction } from '../../../redux/actions/authAction';

function SignUP(props) {
	const dispatch = useDispatch();

	const signUpApiResponse = useSelector(state => state.auth)


	const [submitClick, setSubmitClick] = useState(false)
	const [Password, SetPassword] = useState(false);
	const [ConfirmPassword, SetConfirmPassword] = useState(false);
	const [signUpField, setSignUpField] = useState({
		email_id: "",
		password: "",
		designation: "",
		id_number: "",
		phone_no: "",
		first_name: "",
		middle_name: "",
		last_name: "",
		t_c: "",
		confirm_password: ""
	});


	const ShowPassword = () => {
		SetPassword(!Password);
	};

	const ConfirmShowPassword = () => {
		SetConfirmPassword(!ConfirmPassword);
	};

	const onChange = (e) => {
		const { name, checked, value } = e.target;
		if (name == "t_c") {
			setSignUpField((preValue) => {
				return {
					...preValue,
					[name]: checked
				}
			})
		}
		else {
			setSignUpField((preValue) => {
				return {
					...preValue,
					[name]: value
				}
			})
		}
	}

	const SignUPSubmit = (e) => {
		setSubmitClick(true)
		e.preventDefault()
		let formData = new FormData();
		formData.append("email_id", signUpField.email_id)
		formData.append("password", signUpField.password)
		formData.append("designation", signUpField.designation)
		formData.append("id_number", signUpField.id_number)
		formData.append("phone_no", signUpField.phone_no)
		formData.append("first_name", signUpField.first_name)
		formData.append("middle_name", signUpField.middle_name)
		formData.append("last_name", signUpField.last_name)
		formData.append("type", "1")
		dispatch(SignUpAction(formData))
	}

	if(submitClick == true){
		if(signUpApiResponse.sign_up.data !== undefined && signUpApiResponse.sign_up.data.type == 1){
			props.history.push({
				pathname: "/company-information",
				state: signUpField
			})
		}
	}


	return (
		<div className="auth-section signup-auth-section">
			<div className='container-fluid'>
				<Row className='align-items-center'>
					<Col lg="6" className=''>
						<div className='auth-para'>
							<p>Automate your processes with our cutting-edge technology to
								better inform your customers’ onboarding decisions by providing
								timely reports consequently preventing fraud</p>
						</div>
						<div className="auth-image">
							<img src="/images/signup-image.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper w-100">
							<div className="auth-head">
								<SectionTitle title="Sign Up" subHeading={"Enter your details to create an account"} className={'text-left'} />
							</div>
							<Form className="auth-form" onSubmit={SignUPSubmit} autoComplete='off'>
								<div className="inline-col">
									<InputText
										type="text"
										name="first_name"
										placeholder="First Name"
										onChange={onChange}
										pattern="^[A-Za-z]{3,16}$"
										error="First Name is required! (3 Characters)"
										required="required"
									/>
									<InputText
										type="text"
										name="middle_name"
										placeholder="Middle Name"
										onChange={onChange}
									/>
									<InputText
										type="text"
										name="last_name"
										placeholder="Last Name"
										onChange={onChange}
									/>
								</div>

								<div className="inline-col">
									<InputText
										type="text"
										name="id_number"
										placeholder="ID Number"
										pattern='^[0-9]{3,10}$'
										error="ID number is Required! (3-10 Characters)"
										onChange={onChange}
										required="required"
									/>
									<InputText
										type="text"
										name="phone_no"
										placeholder="Phone Number"
										onChange={onChange}
										pattern='^[0-9]{1,10}$'
										error="Phone Number is Required! (10 Characters)"
										required="required"
										maxLength="10"
									/>
								</div>

								<div className="inline-col">
									<InputText
										type="text"
										name="designation"
										placeholder="Designation"
										onChange={onChange}
										pattern="^[a-zA-Z ]{2,15}$"
										error="Designation is Required! (2-15 Characters)"
										required="required"
									/>

									<InputText
										type="email"
										name="email_id"
										placeholder="Company Email Address"
										onChange={onChange}
										pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
										error="It should be a valid email address!"
										required="required"
									/>
								</div>

								<div className="inline-col">
									<InputText
										type={Password ? "text" : "password"}
										name="password"
										placeholder="Password"
										isPassword="true"
										onChange={onChange}
										onClick={ShowPassword}
										ChangeClass={Password ? "show-hide active" : "show-hide"}
										pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
										error="8+ characters 1 Uppercase character 1 Special Character 1 Number"
										required="required"
									/>

									<InputText
										type={ConfirmPassword ? "text" : "password"}
										name="confirm_password"
										placeholder="Confirm Password"
										isPassword="true"
										onChange={onChange}
										onClick={ConfirmShowPassword}
										pattern={signUpField.password}
										error="Passwords don't match!"
										ChangeClass={ConfirmPassword ? "show-hide active" : "show-hide"}
										required="required"
										CPassword={true}
									/>
								</div>
								{/* <div className='pass-instruction'>8+ characters 1 Uppercase character <br /> 1 Special Character 1 Number</div> */}

								<div className="remember-forgot-password">
									<label className="radio-check-btn checkbox-btn">
										<input type="checkbox" name="t_c" pattern='^([Tt][Rr][Uu][Ee])$' onChange={onChange} required />
										<span>
											<i></i>
											I have read and agree with the <Link to="/" className="text-btn">Terms and Conditions of
												use</Link>, <Link to="/" className="text-btn">Confidentiality & Privacy Policy</Link>.
										</span>
										<div className="error-text">
											<svg viewBox="0 0 24 24" width="14" height="14" fill="#e74c3c"><path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path></svg>
											<span> {props.error} </span>
										</div>
									</label>
								</div>

								<div className="form-submit">
									<Button
										className="btn-secondary"
										btnName="Get Started"
										isDisabled={signUpApiResponse.loading}
										isLoading={signUpApiResponse.loading}
									/>
								</div>
							</Form>
						</div>
						<div className="bottom-info">
							<p> Already have an account? <Link to="/login" className="secondary-text"> Sign In </Link></p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}



export default SignUP;
