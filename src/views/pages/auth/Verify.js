import React from 'react';
import { Row, Col } from "react-bootstrap"
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { LinkButton } from '../../components/Button/Button';
import "./Auth.scss"

function Verify() {
	return (
		<div className="auth-section">
			<div className='container-fluid'>
				<Row className=''>
					<Col lg="6" className=''>
						<div className="auth-image text-center">
							<img src="/images/verify-image.svg" alt="Verify" />
						</div>
					</Col>
					<Col lg="5 offset-lg-1" className=''>
						<div className="auth-wrapper w-100">
							<div className="auth-head">
								<SectionTitle title="Thank You For Your Payment! Your Company Information Is Being Verified." subHeading={"Almost there... an email will be sent to you as soon as your account is active."} className={''} />
							</div>
							<div className="auth-form">
								<div className="form-submit-btn-row">
									<LinkButton to="/login" className="btn btn-secondary" text="View Profile " />
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}



export default Verify;
