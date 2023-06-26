import React from 'react';
import MaterialTable from "material-table";

const SassCreditsDetails = () => {

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Darubini</h1>
				<MaterialTable
					title="Statement"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Date', field: 'date' },
						{ title: 'Transaction', field: 'transaction' },
						{ title: 'Amount', field: 'amount' },
						{ title: 'Balance', field: 'balance' },
						{ title: 'Mode of payment', field: 'mode_of_payment' }
					]}
					data={[
						{date: "28 Feb 2022", transaction: "Verification Requests - Education", amount: "- KES 40,700", balance: "KES 59,300", mode_of_payment:"-"},
						{date: "10 Feb 2022", transaction: "Credits Purchase invoice P/2022/2255", amount: "KES 100,000", balance: "KES 100,000", mode_of_payment:"Credit card"},
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 5,
						search: false
					}}
				/>
			</section>
		</>
	);
}


export default SassCreditsDetails;