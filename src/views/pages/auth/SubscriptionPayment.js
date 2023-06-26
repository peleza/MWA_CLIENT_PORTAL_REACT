import React, { useState } from 'react';
import { Row, Col, Form } from "react-bootstrap"
import { RadioSelectGroup } from "../../components/InputText/InputText"
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import "./Auth.scss"

function SubscriptionPayment(props) {
	const [monthIncrement, setMonthIncrement] = useState(0);

	const Increment = () => setMonthIncrement(monthIncrement + 1)
	const Decrement = () => {
		if (monthIncrement > 0) {
			setMonthIncrement(monthIncrement - 1)
		}
	}
	const HandleChange = (e) => setMonthIncrement(e.target.value)

	const onChange = () => {

	}

	const handSubmit = () => {
		props.history.push('/payment-option')
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
							<p>Automate your processes with our cutting-edge technology to
								better inform your customers’ onboarding decisions by providing
								timely reports consequently preventing fraud</p>
						</div>
						<div className="auth-image">
							<img src="/images/subscripition-payment.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper w-100">
							<div className="auth-head">
								<SectionTitle title="Subscription Payment" subHeading={"To use the system, you are required to pay, choose a plan"} className={'text-left'} />
							</div>
							<Form onSubmit={handSubmit} className='auth-form subscripition-plan'>
								<div className='row'>
									<div className='col-md-6'>
										<div className="radio-check-btn">
											<RadioSelectGroup
												type="radio"
												name="radio"
												labelText="Silver"
												priceText="KES 30,000/$300"
												monthText="3 Months Plan"
												hasLabel={true}
												onChange={onChange}
												defaultChecked="defaultChecked"
											/>
											<RadioSelectGroup
												type="radio"
												name="radio"
												labelText="Gold"
												priceText="KES 54,000/$540"
												monthText="6 Months Plan"
												hasLabel={true}
												onChange={onChange}
											/>
											<RadioSelectGroup
												type="radio"
												name="radio"
												labelText="Platinum"
												priceText="KES 96,000/$960"
												monthText="12 Months Plan"
												hasLabel={true}
												onChange={onChange}
											/>
											<RadioSelectGroup
												type="radio"
												name="radio"
												labelText="Custom"
												priceText="KES 10,000/$100"
												monthText="1 Month Plan"
												hasLabel={true}
												onChange={onChange}
												FormLabelClass="last-grp"
												FormGroupClass="mb-0"
											/>
											<div className='custom-plan inline-col'>
												<p>Want customized pricing?
													Select you preferred period</p>
												<div className='input-group '>
													<button type='button' className='btn-icon' onClick={Decrement}><img src="/images/minus-icon.svg" alt="Minus" /></button>
													<input type="number" name="otp1" onChange={HandleChange} className="form-control" value={monthIncrement} />
													<button type='button' className='btn-icon' onClick={Increment}><img src="/images/add-icon.svg" alt="Add" /></button>
												</div>
											</div>

											<div className="form-submit-btn-row">
												<Button
													onClick={handSubmit}
													className="btn-secondary"
													btnName="Get Started"
												/>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='list-bx'>
											<ul className='list-design'>
												<li>
													Admin Interface
												</li>
												<li>
													Client Interface
												</li>
												<li>
													API
												</li>
												<li>
													System Support
												</li>
												<li>
													Your Branding
												</li>
											</ul>
										</div>
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



export default SubscriptionPayment;
