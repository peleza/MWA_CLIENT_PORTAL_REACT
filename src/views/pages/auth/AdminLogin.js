import React, { useState } from 'react';
import { Row, Col,Form } from "react-bootstrap"
import { InputText } from "../../components/InputText/InputText"
import { AdminLoginAction } from '../../../redux/actions/authAction'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import "./Auth.scss"

function AdminLogin(props) {
	const dispatch = useDispatch();

	const AdminLoginApiResponse = useSelector(state => state.auth)
	const isLoading = useSelector(state => state.auth.loading)

	console.log("AdminLoginApiResponse", AdminLoginApiResponse);
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
		dispatch(AdminLoginAction(LoginField))
	}

	if(submitClick == true){
		if((AdminLoginApiResponse.login.data !== undefined && AdminLoginApiResponse.login.data.status == 200) && (AdminLoginApiResponse !== undefined && AdminLoginApiResponse.isAuthenticated == true)){
			console.log("admin login called");
			props.history.push('/admin/dashboard')
		}
	}

	/* Authentication base redirection */
	if(AdminLoginApiResponse !== undefined && AdminLoginApiResponse.isAuthenticated == true){
		props.history.push("/admin/dashboard")
	}

	return (
		<div className="auth-section">
			<div className='container-fluid'>
				<Row className='align-items-center'>
					<Col lg="6" className=''>
						<div className="auth-image text-center">
							<img src="/images/login-image.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper">
							<div className="auth-head">
								<SectionTitle title="Login to Admin Panel" className={''} />
							</div>
							<Form onSubmit={handSubmit} autoComplete="off">
								<div className="auth-form login-form">
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
					</Col>
				</Row>
			</div>
		</div>
	);
}



export default AdminLogin;
