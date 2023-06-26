import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Currencies from '../../../components/ClientDetails/Currencies';
import ClientOverview from '../../../components/ClientDetails/Overview';
import Users from '../../../components/ClientDetails/Users';
import './ClientManagement.scss'
import MaterialTable from '@material-table/core';


const ClientDetails = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Client 360 View</h1>
				<Tabs
					defaultActiveKey="Overview"
					transition={true}
					className="common-tabs common-tabs-layout-2"
				>
					<Tab eventKey="Overview" title="Overview">
						<ClientOverview />
					</Tab>
					<Tab eventKey="Users" title="Users">
						<Users />
					</Tab>
					<Tab eventKey="Currencies" title="Currencies">
						<Currencies />
					</Tab>
					<Tab eventKey="Statement" title="Statement">
						<div className='col-lg-12 mt-5'>
							<MaterialTable
								title="Client Statement"
								columns={[
									{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
									{ title: 'Date', field: 'date' },
									{ title: 'Transaction', field: 'transaction' },
									{ title: 'Amount', field: 'amount' },
									{ title: 'Balance', field: 'balance' },
								]}
								data={[
									{ date: "28 May 2022", transaction: "Payment Invoice # P/2022/2255", amount: "- KES 300,000", balance: "KES 600,000", },
									{ date: "28 May 2022", transaction: "Payment Invoice # P/2022/2255", amount: "- KES 300,000", balance: "KES 600,000", },
									{ date: "28 May 2022", transaction: "Payment Invoice # P/2022/2255", amount: "- KES 300,000", balance: "KES 600,000", },
									{ date: "28 May 2022", transaction: "Payment Invoice # P/2022/2255", amount: "- KES 300,000", balance: "KES 600,000", },
								]}
							/>
						</div>
					</Tab>
				</Tabs>
			</section>
		</>
	);
}

export default ClientDetails
