import React from 'react';
import BillingContact from '../../../components/PsmtPayments/BillingContact';
import BuyCredits from '../../../components/PsmtPayments/BuyCredits';
import { BiCheckCircle } from 'react-icons/bi'
import '../../PsmtDashboard/BackgroundCheck/BackgroundCheck.scss'
import './CreditManagement.scss';
import { Button } from '../../../components/Button/Button';

const CreditManagement = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Mwangaza Credits</h1>
				<div className='row'>
					<div className='col-lg-6'>
						<BillingContact />

						<div className='repeat-white-bx mt-5'>
							<h2>Subscription <span className='badge badge-success mb-3'><BiCheckCircle /> Active</span></h2>
							<p><strong>Subscription Plan:</strong> Gold</p>
							<p><strong>Duration:</strong> 6 Months</p>
							<p><strong>Next renewal amount:</strong> KES 54,000</p>
							<p><strong>Expiry Date:</strong> 24th Oct 2022</p>
							<p><strong>Expires in:</strong> 33 days</p>
							<Button
								btnName="Renew"
								type="submit"
								className="btn-secondary btn-sm"
							/>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='paymentsInfoBx baby-blue-color'>
							<h3>Sub Service Credits Balance</h3>
							<h2>KES 665,421</h2>
						</div>
						<div className='mt-5'>
							<BuyCredits prepay={true} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default CreditManagement