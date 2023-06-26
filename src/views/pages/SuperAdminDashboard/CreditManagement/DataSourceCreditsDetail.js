import React, { useState } from 'react';
import MaterialTable from "material-table";
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit } from 'react-icons/bi'
import { InputText, SelectBox} from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { TbEye } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const DataSourceCreditsDetail = () => {
	const [EditCreditsModalState, setEditCreditsModalState] = useState(false);
	const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: ''
	});

	const EditCreditsModalOpen = () => setEditCreditsModalState(true);
	const EditCreditsModalClose = () => setEditCreditsModalState(false);

	const onChange = (e) => {
		const { name, value } = e.target
		setAddServiceFields((preValue) => {
			return {
				...preValue,
				[name]: value,
			}
		})
	}

	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>IPRS Credits</h1>
				<MaterialTable
					title="Statement"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'Date', field: 'date' },
						{ title: 'Transaction', field: 'transaction' },
						{ title: 'Sub Service', field: 'sub_service' },
						{ title: 'No. of searches', field: 'no_of_searches' },
						{ title: 'Total Credits used', field: 'total_credits_used' },
						{ title: 'Balance', field: 'balance' }
					]}
					data={[
						{ date: "25 Apr 2022", transaction: "Used up credits", sub_service: "National Identity", no_of_searches: "-10,000", total_credits_used: "KES 50,000 ", balance: "46,500", },
						{ date: "25 Apr 2022", transaction: "Used up credits", sub_service: "National Identity", no_of_searches: "-10,000", total_credits_used: "KES 50,000 ", balance: "46,500", },
						{ date: "25 Apr 2022", transaction: "Used up credits", sub_service: "National Identity", no_of_searches: "-10,000", total_credits_used: "KES 50,000 ", balance: "46,500", },
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 5,
						search: false
					}}
					actions={[
						{
							icon: () =>
								<SelectBox
									name="main_service"
									FormGroupClass="form-control-md form-control-style2 mb-0"
									onChange={onChange}
									optionData={
										<>
											<option value="" hidden>Last & days</option>
											<option value="1">Last Month</option>
										</>
									}
								/>
							,
							iconProps: { className: 'FreeAction' },
							isFreeAction: true,
						},
					]}
				/>
			</section>
		</>
	);
}


export default DataSourceCreditsDetail;