import React, { useEffect } from 'react';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import { useDispatch } from 'react-redux';
import Statement from '../../../components/PsmtPayments/Statement';
import BillingContact from '../../../components/PsmtPayments/BillingContact';
import BuyCredits from '../../../components/PsmtPayments/BuyCredits';
import '../../PidvaDashboard/Dashboard/Dashboard.scss'
import './BackgroundCheck.scss';

const PaymentsPrepay = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTitleAction("Payments"))
	}, [dispatch])

	return (
		<>
			<section className='dashboard-section'>
				<div className='row mb-5'>
					<div className='col-lg-4 d-flex'>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='paymentsInfoBx baby-blue-color'>
									<h3>Currency</h3>
									<h2>USD $</h2>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='paymentsInfoBx purple-color'>
									<h3>Payment Terms</h3>
									<h2>30 Days</h2>
								</div>
							</div>
							<div className='col-lg-6 mt-5'>
								<div className='paymentsInfoBx pink-color'>
									<h3>Plan</h3>
									<h2>Prepay</h2>
								</div>
							</div>
							<div className='col-lg-6 mt-5'>
								<div className='paymentsInfoBx yellow-color'>
									<h3>Credits Balance</h3>
									<h2>$ 65,421</h2>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-4 d-flex'>
						<BillingContact />
					</div>
					<div className='col-lg-4 d-flex'>
						<BuyCredits prepay={true} />
					</div>
				</div>

				<Statement />

			</section>
		</>
	);
}

export default PaymentsPrepay