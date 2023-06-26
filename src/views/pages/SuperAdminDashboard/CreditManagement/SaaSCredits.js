import React, { useState } from 'react';
import MaterialTable from "material-table";
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit, BiPieChartAlt } from 'react-icons/bi'
import { InputText, SelectBox, TextArea } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { TbEye } from 'react-icons/tb'
import { Link } from 'react-router-dom';

const SaaSCredits = () => {
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
				<h1 className='dashboard-title'>SaaS Credits</h1>
				<MaterialTable
					title="SaaS Credits"
					columns={[
						{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
						{ title: 'SaaS', field: 'saas' },
						{ title: 'Country', field: 'country_name' },
						{ title: 'Credits Balance', field: 'credits_balance' },
						{
							title: 'Action', field: 'Action',
							render: (rowData) => {
								return (
									<Dropdown className='tableActionDropdown'>
										<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

										<Dropdown.Menu>
											<button className='dropdown-item'><BiCommentEdit /> Edit</button>
											<Link to="/admin/sass-credits/65" className='dropdown-item'><TbEye /> View</Link>
											<button className='dropdown-item'><BiPieChartAlt /> Allocate Credits</button>
										</Dropdown.Menu>
									</Dropdown>
								)
							}
						}
					]}
					data={[
						{ saas: "Darubini", country_name: "Kenya", credits_balance: "KES 1,111,222"},
						{ saas: "Iverify", country_name: "Nigeria", credits_balance: "USD 12,345"},
					]}
					options={{
						actionsColumnIndex: -1,
						pageSize: 5
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
											<option value="" hidden>This Month</option>
											<option value="1">Last Month</option>
										</>
									}
								/>
							,
							iconProps: { className: 'FreeAction' },
							isFreeAction: true,
						},
						{
							icon: "Create an Invoice",
							iconProps: { className: 'btn btn-secondary FreeAction' },
							isFreeAction: true,
							onClick: (event) => { EditCreditsModalOpen() }
						},
					]}
				/>
			</section>


			<Modal show={EditCreditsModalState} onHide={EditCreditsModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>Create Billing Contact</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<InputText
							type="text"
							name="saas_name"
							placeholder="Enter SaaS Name"
							labelText="SaaS Name"
							FormGroupClass="form-control-md form-control-style2"
							pattern='.{1,}$'
							error="SaaS Name Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="names"
							placeholder="Enter Names"
							labelText="Names"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Names is Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="email"
							name="email"
							placeholder="Enter Email"
							labelText="Email"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Email is Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="alternative_email"
							placeholder="Enter Email"
							labelText="Alternative Email"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Alternative Email is Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="phone_no"
							placeholder="Enter Phone No."
							labelText="Phone No."
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Phone No. is Required!"
							required="required"
							onChange={onChange}
						/>
						<TextArea
							FormGroupClass="form-control-md form-control-style2"
							placeholder="Enter Billing Address"
							labelText="Billing Address"
							pattern=".{1,}"
							error="Billing Address is Required!"
							required="required"
							onChange={onChange}
						/>
						<Modal.Footer>
							<Button
								btnName="Cancel"
								type="button"
								className="btn-xs btn-primary"
								onClick={EditCreditsModalClose}
							/>
							<Button
								btnName="Submit"
								type="submit"
								className="btn-xs btn-secondary"
							/>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}


export default SaaSCredits;