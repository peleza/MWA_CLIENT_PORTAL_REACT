import React from 'react';
import MaterialTable from '@material-table/core';


const SassSubscriptions = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Saas Subscription</h1>
				<MaterialTable
					title="Subscription Plan"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'SaaS Ref #', field: 'saas_ref' },
						{ title: 'SaaS Name', field: 'saas_name' },
						{ title: 'Country', field: 'country' },
						{ title: 'Plan', field: 'plan' },
						{ title: 'Duration', field: 'duration' },
						{ title: 'Expiry date', field: 'expiry_date' },
						{ title: 'Expires in', field: 'expires_in' },
						{
							title: 'Status', field: 'status',
							render: (rowData) => {
								return (
									rowData.status === 0 ? <span className="badge badge-danger">Deactivated</span> : 
									rowData.status === 1 ? <span className="badge badge-success">Active</span> :
									rowData.status === 3 ? <span className="badge badge-warning">Dormant</span> : null
								)
							}
						},
					]}
					data={[
						{ saas_ref: "A1B2", saas_name: "Darubini", country: "Kenya", plan: "Gold", duration: "6 months", expiry_date: "24th Oct 2022", expires_in: "33 days", status: 0, },
						{ saas_ref: "C3D4", saas_name: "Iverify", country: "Nigeria", plan: "Silver", duration: "3 months", expiry_date: "24th Oct 2022", expires_in: "33 days", status: 1,},
						{ saas_ref: "E5F6", saas_name: "BCI", country: "United Kingdom", plan: "Platinum", duration: "12 months", expiry_date: "24th Oct 2022", expires_in: "33 days", status: 3,},
					]}
					options={{
						actionsColumnIndex: -1,
						numberOfPagesAround: 10,
						search: false
					}}
				/>
			</section>
		</>
	);
}

export default SassSubscriptions
