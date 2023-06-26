import React from 'react';
import MaterialTable from '@material-table/core';
import '../../PidvaDashboard/Dashboard/Dashboard.scss';
import '../../../components/Button/Button.scss'
import './CreditManagement.scss';

const ManageSubServices = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Managed Sub Services</h1>
				<MaterialTable
					title="Sub Services"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Sub Service', field: 'sub_service_name' },
						{ title: 'Sub Service Code', field: 'sub_service_code' },
						{
							title: 'Country', field: 'Country',
							render: (rowData) => {
								return (
									<img src={rowData.Country} alt="flag" width={30} />
								)
							}
						},
						{ title: 'Service', field: 'Service', },
						{ title: 'Main Service', field: 'main_service', },
						{ title: 'Currency', field: 'currency' },
						{ title: 'Unit Cost', field: 'unit_cost' },
						{ title: 'Credits Balance', field: 'credits_balance' },
					]}
					data={[
						{sub_service_name: "Passport", sub_service_code: "PSC", Country: "/images/flag1.png", Service: "Identity", main_service: "KYC", currency: "KES", unit_cost: "5", credits_balance: "KES 10,000",},
						{sub_service_name: "Passport", sub_service_code: "CC", Country: "/images/flag1.png", Service: "Financial", main_service: "BGC", currency: "USD", unit_cost: "10", credits_balance: "KES 10,000",},
						{sub_service_name: "Passport", sub_service_code: "PSC", Country: "/images/flag1.png", Service: "Identity", main_service: "KYC, BGC", currency: "EUR", unit_cost: "15", credits_balance: "KES 10,000",},
						{sub_service_name: "Passport", sub_service_code: "EDC", Country: "/images/flag1.png", Service: "Education", main_service: "KYC", currency: "USD", unit_cost: "20", credits_balance: "KES 10,000",},
						{sub_service_name: "Passport", sub_service_code: "PSC", Country: "/images/flag1.png", Service: "Identity", main_service: "KYC", currency: "USD", unit_cost: "25", credits_balance: "KES 10,000",},
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10
					}}
					actions={[
						{
							icon: 'Allocate credits',
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { }
						}
					]}
				/>
			</section>
		</>
	);
}

export default ManageSubServices