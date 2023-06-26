import React, { useEffect } from 'react';
import { getTitleAction } from '../../../../redux/actions/getTitleAction';
import { useDispatch } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';
import Invoices from '../../../components/PsmtPayments/Invoices';
import ProformaInvoices from '../../../components/PsmtPayments/ProformaInvoices';
import Statement from '../../../components/PsmtPayments/Statement';
import BillingContact from '../../../components/PsmtPayments/BillingContact';
import BuyCredits from '../../../components/PsmtPayments/BuyCredits';
import '../../PidvaDashboard/Dashboard/Dashboard.scss'
import './BackgroundCheck.scss';

const PaymentsPostpay = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTitleAction("Payments"))
	}, [dispatch])

	return (
		<>
			<section className='dashboard-section'>
				<div className='row'>
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
									<h2>PostPay</h2>
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
						<BuyCredits />
					</div>
				</div>
				<h2 className='mt-5'>Transaction History</h2>
				<Tabs
					defaultActiveKey="Invoices"
					transition={true}
					className="common-tabs common-tabs-layout-2 mt-5"
				>
					<Tab eventKey="Invoices" title="Invoices">
						<Invoices />
					</Tab>
					<Tab eventKey="ProformaInvoices" title="Proforma Invoices">
						<ProformaInvoices />
					</Tab>
					<Tab eventKey="Statement" title="Statement">
						<Statement />
					</Tab>
				</Tabs>
			</section>
		</>
	);
}

export default PaymentsPostpay