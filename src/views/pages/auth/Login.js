import React, { useState } from 'react';
import { Row, Col,Form } from "react-bootstrap"
import { InputText } from "./../../components/InputText/InputText"
import { Link,useParams } from 'react-router-dom';
import { LoginAction } from '../../../redux/actions/authAction'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import "./Auth.scss"

function Login(props) {
	const dispatch = useDispatch();
    const {token} = useParams()
	console.log("token is ", token)


	const LoginApiResponse = useSelector(state => state.auth)
	const isLoading = useSelector(state => state.auth.loading)

	console.log("LoginApiResponse", LoginApiResponse);
	const [submitClick, setSubmitClick] = useState(false)
	const [password, SetPassword] = useState(false);
	const [LoginField, setLoginField] = useState({
		org_id: "",
		email_id: "",
		password: ""
	})

	const ShowPassword = () => {
		SetPassword(!password)
	}

	const onChange = (e) => {
		const { name, value } = e.target;
		setLoginField((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		});
	}

	const handSubmit = (e) => {
		setSubmitClick(true)
		e.preventDefault()
		dispatch(LoginAction(LoginField))
	}

	if(submitClick == true){
		if(LoginApiResponse.login.data !== undefined && LoginApiResponse.login.data.status == 200){
			props.history.push({
				pathname: '/otp',
				state: {email: LoginField.email_id, type: 2}
			})
		}
	}

	/* Authentication base redirection */
	if(LoginApiResponse !== undefined && LoginApiResponse.isAuthenticated == true){
		props.history.push("/pidva/dashboard")
	}

	return (
		<div className="auth-section">
			<div className='container-fluid'>
				<Row className=''>
					<Col lg="6" className=''>
						<div className="auth-image text-center">
							<img src="/images/login-image.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper">
							<div className="auth-head">
								<SectionTitle title="Login" className={''} />
							</div>
							<Form onSubmit={handSubmit} autoComplete="off">
								<div className="auth-form login-form">
									<InputText
										type="text"
										name="org_id"
										placeholder="Org ID"
										hasLabel={true}
										onChange={onChange}
										pattern=".{1,}"
										error="ORG ID is Required!"
										required="required"
									/>

									<InputText
										type="email"
										name="email_id"
										placeholder="Email address"
										hasLabel={true}
										pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
										error="It should be a valid email address!"
										required="required"
										onChange={onChange}
									/>
									
									<InputText
										type={password ? "text" : "password"}
										name="password"
										placeholder="Password"
										isPassword="true"
										onChange={onChange}
										onClick={ShowPassword}
										ChangeClass={password ? "show-hide active" : "show-hide"}
										pattern=".{1,}"
										error="Password is Required!"
										required="required"
									/>

									<div className='text-end text-link form-group'>
										<Link to="/forgot-password">Forgot Your Password?</Link>
									</div>

									<div className="form-submit-btn-row">
										<Button
											btnName="Login"
											type="submit"
											className="btn-secondary w-100"
											isDisabled={isLoading}
											isLoading={isLoading}
										/>
									</div>
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



export default Login;
