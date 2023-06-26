import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap"
import { Link,useParams } from 'react-router-dom';
import Company from '../../components/PsmtSignup/Company';
import Individual from '../../components/PsmtSignup/Individual';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import "../auth/Auth.scss"

function PsmtSignUP() {
	const [userType , setUserType] = useState(true);

	const UserTypeFunction = () => setUserType(!userType)
	let { id } = useParams();
	let tokenValue =  window.location.href.split("=")[1]
		console.log('token is',tokenValue )
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
							<img src="/images/sign-up-vector.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper w-100">
							<div className="auth-head">
								<SectionTitle title="Sign Up" subHeading={"Enter your details to create an account"} className={'text-left'} />
							</div>
							<Form>
								<div className="auth-form">
									<div className=''>
										<h6>Creating the account as?</h6>
										<div className="inline-col radio-check-btn user-type">
											<label className="radiobx-btn">
												<input type="radio" name="userType" onChange={UserTypeFunction} defaultChecked />
												<span>
													<i></i>
													Company
												</span>
											</label>
											<label className="radiobx-btn">
												<input type="radio" name="userType" onChange={UserTypeFunction} />
												<span>
													<i></i>
													Individual
												</span>
											</label>
										</div>
										{userType 
										?
											<Company propsData = {tokenValue}/>
										:
											<Individual  propsData = {tokenValue}/>
										}
									</div>
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



export default PsmtSignUP;
