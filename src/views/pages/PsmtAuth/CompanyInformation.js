import React from 'react';
import { Row, Col, Form } from "react-bootstrap"
import { InputText, SelectBox } from "../../components/InputText/InputText"
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import "../auth/Auth.scss"

function PsmtCompanyInformation(props) {
	const onChange = () => {

	}

	const handSubmit = () => {
		props.history.push('/otp')
	}

	// useEffect(() => {
	// 	localStorage.removeItem("token")
	// })

	return (
		<div className="auth-section signup-auth-section">
			<div className='container-fluid'>
				<Row className='align-items-center'>
					<Col lg="6" className=''>
						<div className='auth-para'>
							<p>The information we provide you is regulated and as such we are
								required to know you and your company; we request that you provide
								the below information for KYC purposes. Only once the information is
								verified will your account be created and activated
								Ensure information provided is accurate.</p>
						</div>
						<div className="auth-image">
							<img src="/images/welcome-vector.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className='mb-4'>
						<div className="auth-wrapper w-100">
							<div className="auth-head">
								<SectionTitle title="Company Information" subHeading={"Welcome Onboard, we would like to know you a little better"} className={'text-left'} />
							</div>
							<div className="auth-form">
								<Form onSubmit={handSubmit} autoComplete="off">
									<div className="inline-col">
										<InputText
											type="text"
											name="cName"
											placeholder="Company Legal Name"
											label=""
											hasLabel={true}
											onChange={onChange}
										/>
										<InputText
											type="text"
											name="cRegNo"
											placeholder="Company Registration Number"
											label=""
											hasLabel={true}
											onChange={onChange}
										/>
									</div>

									<div className='file-upload-bx'>
										<h6>Upload Company Incorporation Certificate</h6>
										<div className="file-upload">
											<input type="file" className="custom-file-input" />
										</div>
									</div>

									<div className="inline-col">
										<SelectBox
											name="Country"
											placeholder="Country of Incorporation"
											optionData={
												<>
													<option hidden>Country of Incorporation</option>
													<option value=""> India  </option>
													<option value=""> USA </option>
												</>
											}
										/>
										<SelectBox
											name="Industry"
											placeholder="Industry of Operation"
											optionData={
												<>
													<option hidden>Industry of Operation</option>
													<option value=""> India  </option>
													<option value=""> USA </option>
												</>
											}
										/>
									</div>

									<div className="select-countries">
										<h6>Select the countries you require the services</h6>
										<div className='row'>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Kenya
													</span>
												</label>
											</div>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Uganda
													</span>
												</label>
											</div>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Tanzania
													</span>
												</label>
											</div>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Ghana
													</span>
												</label>
											</div>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Nigeria
													</span>
												</label>
											</div>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Senegal
													</span>
												</label>
											</div>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														South Africa
													</span>
												</label>
											</div>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Rwanda
													</span>
												</label>
											</div>
											<div className='col-lg-4'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Ethiopia
													</span>
												</label>
											</div>
										</div>
									</div>

									<div className="select-countries">
										<h6>Select the service you require</h6>
										<div className='row'>
											<div className='col-lg-7'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Select the service you require
													</span>
												</label>
											</div>
											<div className='col-lg-5'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Recruitment
													</span>
												</label>
											</div>
											<div className='col-lg-7'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Insights, Analytics & Information Reports
													</span>
												</label>
											</div>
											<div className='col-lg-5'>
												<label className="radio-check-btn checkbox-btn">
													<input type="checkbox" name="t_c" />
													<span>
														<i></i>
														Know Your Customer
													</span>
												</label>
											</div>
										</div>
									</div>

									<div className="form-submit">
										<Button
											btnName="Submit"
											onClick={handSubmit}
											type="submit"
											className="btn btn-secondary"
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



export default PsmtCompanyInformation;
