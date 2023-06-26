import React from 'react';
import { Row, Col } from "react-bootstrap"
import { RadioSelectGroup } from "../../components/InputText/InputText"
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { LinkButton } from '../../components/Button/Button';
import { CreditDebit } from "../../components/PaymentOption/CreditDebit"
import { Mpesa } from "../../components/PaymentOption/Mpesa"
import { BankTransfer } from "../../components/PaymentOption/BankTransfer"
import { Tab, Nav } from 'react-bootstrap';

import "./Auth.scss"

function PaymentOption() {
	const onChange = () => {

	}

	return (
		<div className="auth-section signup-auth-section">
			<div className='container-fluid'>
				<Row className='align-items-center'>
					<Col lg="6" className=''>
						<div className='auth-para'>
							<p>Have a competitive edge, automate your processes with our cutting-edge
								technology to better inform your customers’ onboarding decisions by
								providing timely reports consequently preventing fraud</p>
						</div>
						<div className="auth-image">
							<img src="/images/subscripition-payment.svg" alt="Login" />
						</div>
					</Col>
					<Col lg="6" className=''>
						<div className="auth-wrapper w-100">
							<div className="auth-head">
								<SectionTitle title="How would you like to pay?" subHeading={"Select Payment Option"} className={'text-left'} />
							</div>
							<div className='auth-form subscripition-plan payment-option'>
									<Tab.Container id="left-tabs-example" defaultActiveKey="first">
										<Row>
											<Col sm={6}>
												<Nav variant="pills" className="flex-column radio-check-btn">
													<Nav.Item>
														<Nav.Link eventKey="first">
															<RadioSelectGroup
																type="radio"
																name="radio"
																labelText="Mpesa"
																hasLabel={true}
																onChange={onChange}
																defaultChecked="defaultChecked"
															/>
														</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="second">
															<RadioSelectGroup
																type="radio"
																name="radio"
																labelText="Credit/ Debit Card"
																hasLabel={true}
																onChange={onChange}
															/>
														</Nav.Link>
													</Nav.Item>
													<Nav.Item>
														<Nav.Link eventKey="third">
															<RadioSelectGroup
																type="radio"
																name="radio"
																labelText="Bank Transfer"
																hasLabel={true}
																onChange={onChange}
															/>
														</Nav.Link>
													</Nav.Item>
												</Nav>
											</Col>
											<Col sm={6}>
												<div className='list-bx'>
													<h6>Gold</h6>
													<p className='secondary-color'>KES 54,000/$540</p>
													<p>6 Months Plan</p>
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
											</Col>
											<Col sm={12}>
												<Tab.Content>
													<Tab.Pane eventKey="first">
														<Mpesa />
													</Tab.Pane>
													<Tab.Pane eventKey="second">
														<CreditDebit />
													</Tab.Pane>
													<Tab.Pane eventKey="third">
														<BankTransfer />
													</Tab.Pane>
												</Tab.Content>
											</Col>
										</Row>
									</Tab.Container>
									<div className="form-submit-btn-row">
										<LinkButton to="/verify" className="btn btn-secondary" text="Confirm Payment " />
									</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}



export default PaymentOption;
