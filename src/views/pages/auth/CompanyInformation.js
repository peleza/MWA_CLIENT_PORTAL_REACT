import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from "react-bootstrap"
import { FileUpload, InputText, SelectBox, TextArea } from "../../components/InputText/InputText"
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpAction } from '../../../redux/actions/authAction';
import "./Auth.scss"

function CompanyInformation(props) {
	const signUpApiResponse = useSelector(state => state.auth)

	const location = useLocation();
	const dispatch = useDispatch();

	const RequireServices = document.forms.countries;
	const [submitClick, setSubmitClick] = useState(false)
	const [checked, setChecked] = useState([]);
	const [fileName, setFileName] = useState();
	const countries = [{country_id: 2, country_name:"Ethiopia"}, {country_id: 3, country_name:"Rwanda"}, {country_id: 4, country_name:"South Africa"}, {country_id: 5, country_name:"Senegal"}, {country_id: 6, country_name:"Nigeria"}, {country_id: 7, country_name:"Ghana"}, {country_id: 8, country_name: "Tanzania"}, {country_id: 9, country_name:"Uganda"}, {country_id: 10, country_name:"Kenya"}]
	const [signUpField, setSignUpField] = useState({
		email_id: "",
		password: "",
		designation: "",
		id_number: "",
		phone_no: "",
		first_name: "",
		middle_name: "",
		last_name: "",
		confirm_password: "",
		comp_legal_name: "",
		comp_regist_no: "",
		comp_incop_certif_url: "",
		country_incop: "",
		industry_opratn: "",
		countries: ""
	});

	const handleCheck = (event) => {
		console.log("event", event);
		var updatedList = [...checked];
		if (event.target.checked) {
			updatedList = [...checked, event.target.value];
		} else {
			updatedList.splice(checked.indexOf(event.target.value), 1);
		}
		setChecked(updatedList);
	};

	console.log("checked", checked);

	const checkedItems = checked.length
		? checked.reduce((total, item) => {
			return total + ", " + item;
		})
		: "";

	console.log("checkedItems", checkedItems);


	const getFileName = (e) => {
		setFileName(e.target.files[0])
	}

	const onChange = (e) => {
		const { name, value } = e.target;
		setSignUpField((preValue) => {
			return {
				...preValue,
				[name]: value
			}
		});
	}

	useEffect(() => {
		setSignUpField(location.state)
	}, [location])

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
		formData.append("role_id", 2)

		formData.append("comp_legal_name", signUpField.comp_legal_name)
		formData.append("comp_regist_no", signUpField.comp_regist_no)
		formData.append("phone_no", signUpField.phone_no)
		formData.append("country_incop", signUpField.country_incop)
		formData.append("industry_opratn", signUpField.industry_opratn)
		formData.append("comp_incop_certif_url", fileName)
		formData.append("countries", checkedItems)
		formData.append("type", "2")
		dispatch(SignUpAction(formData))
	}

	if (submitClick == true) {
		if (signUpApiResponse.sign_up.data !== undefined && signUpApiResponse.sign_up.data.type == 2) {
			props.history.push({
				pathname: '/otp',
				state: { email: signUpField.email_id, type: 1 }
			})
		}
	}

	console.log("signUpApiResponse", signUpApiResponse);
	console.log("RequireServices", RequireServices);

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
							<img src="/images/company-information.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className='mb-4'>
						<div className="auth-wrapper w-100">
							<div className="auth-head">
								<SectionTitle title="Company Information" subHeading={"Welcome Onboard, we would like to know you a little better"} className={'text-left'} />
							</div>
							<div className="auth-form">
								<Form autoComplete="off" onSubmit={SignUPSubmit} name="forms">
									<div className="inline-col">
										<InputText
											type="text"
											name="comp_legal_name"
											placeholder="Company Legal Name"
											required="required"
											pattern='^[a-zA-Z ]{3,}$'
											error="Company Legal Name is Required! (3 characters)"
											onChange={onChange}
										/>
										<InputText
											type="text"
											name="comp_regist_no"
											placeholder="Company Registration Number"
											onChange={onChange}
											required="required"
											pattern='^[0-9a-zA-Z!@#$%\^&*)(+=._-]{3,15}$'
											error="Company Registration is Required! (3-15 characters)"
										/>
									</div>

									<FileUpload
										fileName={fileName && fileName.name}
										labelText="Upload Company Incorporation Certificate"
										onChange={getFileName}
										name="comp_incop_certif_url"
										accept='Jpeg, PNG, PDF'
										error="Please Upload Company Certificate (Jpeg, Png, Pdf)"
										required="required"
									/>

									<div className="inline-col">
										<SelectBox
											name="country_incop"
											onChange={onChange}
											required="required"
											error="Please select country of incorporation!"
											optionData={
												<>
													<option hidden value="">Country of Incorporation</option>
													<option value="1"> India  </option>
													<option value="2"> USA </option>
												</>
											}
										/>
										<SelectBox
											name="industry_opratn"
											onChange={onChange}
											required="required"
											error="Please select country of incorporation!"
											optionData={
												<>
													<option hidden value="">Industry of Operation</option>
													<option value="1"> India  </option>
													<option value="2"> USA </option>
												</>
											}
										/>
									</div>
									<div className='col-lg-12'>
										<TextArea
											FormGroupClass="form-control-md form-control-style2"
											placeholder="Enter Address"
											labelText="Address"
											pattern=".{1,}"
											error="Address is Required!"
											required="required"
											onChange={onChange}
										/>
									</div>

									<div className="select-countries">
										<h6>Select the countries you require the services</h6>
										<div className='row'>
											{
												countries.map((value, index) => (
													<div className='col-lg-4' key={index}>
														<label className="radio-check-btn checkbox-btn">
															<input type="checkbox" name="countries" value={value.country_id} onChange={handleCheck} />
															<span>
																<i></i>
																{value.country_name}
															</span>
														</label>
													</div>
												))
											}
											{/* {servicesError &&
												<div className="error-text d-block mb-4">
													<svg viewBox="0 0 24 24" width="14" height="14" fill="#e74c3c"><path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path></svg>
													<span> {servicesError} </span>
												</div>
											} */}
										</div>
									</div>

									<div className="form-submit">
										<Button
											btnName="Submit"
											type="submit"
											className="btn btn-secondary"
											isDisabled={signUpApiResponse.loading}
											isLoading={signUpApiResponse.loading}
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



export default CompanyInformation;
