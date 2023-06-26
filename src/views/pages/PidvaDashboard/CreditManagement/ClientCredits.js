import React, {useState} from 'react';
import MaterialTable from "material-table";
import { Modal, Form, Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiCommentEdit, BiPieChartAlt } from 'react-icons/bi'
import { InputText, SelectBox } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';

const ClientCredits = () => {
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
                <h1 className='dashboard-title'>Client Credits</h1>
                <MaterialTable
                    title="Client Credits"
                    columns={[
                        { title: 'Client Name', field: 'client_name' },
                        { title: 'Main Service', field: 'main_service' },
                        { title: 'Plan', field: 'plan' },
                        { title: 'Payment Terms', field: 'payment_terms' },
                        { title: 'Credit Limit', field: 'credit_limit' },
                        { title: 'Packages', field: 'packages', },
                        { title: 'Sub Services', field: 'sub_services' },
                        { title: 'Package Price', field: 'package_price' },
                        { title: 'Credits Balance', field: 'credits_balance' },
                        { title: 'Action', field: 'Action', }
                    ]}
                    data={[
                        { client_name: "EABL", main_service: "KYC", plan: "Postpay", payment_terms: "30 Days", credit_limit: "KES 1,000,000", packages: "Standard", sub_services: "Passport, Credit", package_price: "KES 5,000", credits_balance: "KES 300,000", row_span: '2' },
                        { client_name: "Vivo", main_service: "BGC", plan: "Prepaid", payment_terms: "0 Days", credit_limit: "KES 1,000,000", packages: "Experienced", sub_services: "Passport, Credit, Payslip", package_price: "KES 5,000", credits_balance: "KES 300,000", col_none: "1" },
                        { client_name: "Twiga", main_service: "KYC, BGC", plan: "Prepaid", payment_terms: "0 Days", credit_limit: "KES 1,000,000", packages: "Entry", sub_services: "Standard", package_price: "KES 5,000", credits_balance: "KES 300,000", },
                        { client_name: "Vivo", main_service: "KYC", plan: "Postpay", payment_terms: "30 Days", credit_limit: "KES 1,000,000", packages: "Executive", sub_services: "Standard", package_price: "KES 5,000", credits_balance: "KES 300,000", },
                    ]}
                    components={{
                        Row: ({ data }) => {
                            return (
                                <tr>
                                    {data.col_none === "1" ?
                                        null
                                        :
                                        <>
                                            <td rowSpan={data.row_span}>{data.client_name}</td>
                                            <td rowSpan={data.row_span}>{data.main_service}</td>
                                            <td rowSpan={data.row_span}>{data.plan}</td>
                                            <td rowSpan={data.row_span}>{data.payment_terms}</td>
                                            <td rowSpan={data.row_span}>{data.credit_limit}</td>
                                        </>
                                    }
                                    <td>{data.packages}</td>
                                    <td>{data.sub_services}</td>
                                    <td>{data.package_price}</td>
                                    <td>{data.credits_balance}</td>
                                    <td>
                                        <Dropdown className='tableActionDropdown'>
                                            <Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <button className='dropdown-item' onClick={EditCreditsModalOpen}><BiCommentEdit /> Edit</button>
                                                <button className='dropdown-item'><BiPieChartAlt /> Allocate Credits</button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            );
                        }
                    }}
                />
            </section>


            <Modal show={EditCreditsModalState} onHide={EditCreditsModalClose} centered className='commonModal form-modal'  >
				<Modal.Header closeButton>
					<Modal.Title>Edit Client Credits</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<InputText
							type="text"
							name="plan"
							placeholder="Enter Plan"
							labelText="Plan"
							FormGroupClass="form-control-md form-control-style2"
							pattern='.{1,}$'
							error="Plan is Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="payment_terms"
							placeholder="Enter Payment Terms"
							labelText="Payment Terms"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Payment Terms is Required!"
							required="required"
							onChange={onChange}
						/>
						<InputText
							type="text"
							name="credit_limit"
							placeholder="Enter Credit Limit"
							labelText="Credit Limit"
							FormGroupClass="form-control-md form-control-style2"
							pattern=".{1,}"
							error="Credit Limit is Required!"
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


export default ClientCredits;