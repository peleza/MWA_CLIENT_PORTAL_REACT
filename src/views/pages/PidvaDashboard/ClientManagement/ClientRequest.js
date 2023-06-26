import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown, Tab, Tabs, Modal } from 'react-bootstrap';
import DashboardOverviewBx from '../../../components/DashboardOverviewBx/DashboardOverviewBx';
import { BiDotsVerticalRounded, BiCheck, BiX } from 'react-icons/bi'
import { Button } from '../../../components/Button/Button';


const ClientRequest = () => {
	const [confirmationModal, setConfirmationModal] = useState(false);

	const confirmationModalOpen = (e) => setConfirmationModal(true)
	const confirmationModalClose = () => setConfirmationModal(false)
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Client Requests</h1>
				<div className='row row-col-5'>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="Total Services"
							value="557"
							icon="pidva-icons/client-icon.svg"
							color="#9B55E5"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="BGC Services"
							value="2,691"
							icon="pidva-icons/bgc-servicies-icon.svg"
							color="#F9327A"
						/>
					</div>
					<div className='col mb-5'>
						<DashboardOverviewBx
							title="KYC Services"
							value="885"
							icon="pidva-icons/kyc-services-icon.svg"
							color="#42DABF"
						/>
					</div>
					<div className='col'>
						<DashboardOverviewBx
							title="Active Services"
							value="885"
							icon="pidva-icons/active-services-icon.svg"
							color="#FCC103"
						/>
					</div>
					<div className='col'>
						<DashboardOverviewBx
							title="Dormant Clients"
							value="885"
							icon="pidva-icons/dormant-clients-icon.svg"
							color="#69C848"
						/>
					</div>
				</div>
				<Tabs
					defaultActiveKey="Company"
					transition={true}
					className="common-tabs common-tabs-layout-2"
				>
					<Tab eventKey="Company" title="Company">
						<MaterialTable
							title="Company"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'Profile #', field: 'ClientRef' },
								{ title: 'Company Name', field: 'comp_legal_name' },
								{ title: 'Reg No.', field: 'comp_regist_no' },
								{
									title: 'National ID Copy', field: 'comp_incop_certif_url',
									render: (rowData) => {
										return (
											<a href={rowData.IncorporationCertificate} download="" className='text-center d-block'>
												<img src="/images/pdf-icon.svg" alt="icon" />
											</a>
										)
									}
								},
								{
									title: 'Resident Country', field: 'country_incop',
									render: (rowData) => {
										return (
											<img src={rowData.comp_incop_certif_url} alt="flag" width={30} />
										)
									}
								},
								{ title: 'Address', field: 'Address' },
								{ title: 'Industry', field: 'industry_opratn' },
								{ title: 'Contact Person', field: `first_name` },
								{ title: 'Designation', field: 'designation' },
								{ title: 'Contact Numbers', field: 'phone_no' },
								{ title: 'Company Email Address', field: 'email_id' },
								{ title: 'Main Service', field: 'services' },
								{
									title: 'Action', field: 'Action',
									render: (rowData) => {
										return (
											<Dropdown className='tableActionDropdown'>
												<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

												<Dropdown.Menu>
													<button className='dropdown-item'><BiCheck /> Approve</button>
													<button className='dropdown-item' onClick={confirmationModalOpen}><BiX /> Reject</button>
												</Dropdown.Menu>
											</Dropdown>
										)
									}
								}
							]}
							data={[
								{ comp_incop_certif_url: "/images/flag1.png", comp_legal_name: "xbcvbn", comp_regist_no: "7864878", country_incop: 1, designation: "ckldfkdl", email_id: "vikram78@gmail.com", first_name: "vikram", id: 1, industry_opratn: 2, is_verify_id_no: 3, last_name: "vik", middle_name: "", phone_no: "87748585", services: "KYC", Address: "Jaipur, rajasthan", ClientRef: "PVT-989" },
								{ comp_incop_certif_url: "/images/flag1.png", comp_legal_name: "xbcvbn", comp_regist_no: "7864878", country_incop: 1, designation: "ckldfkdl", email_id: "vikram78@gmail.com", first_name: "vikram", id: 2, industry_opratn: 2, is_verify_id_no: 3, last_name: "vik", middle_name: "", phone_no: "87748585", services: "KYC", Address: "Jaipur, rajasthan", ClientRef: "PVT-989" },
								{ comp_incop_certif_url: "/images/flag1.png", comp_legal_name: "xbcvbn", comp_regist_no: "7864878", country_incop: 1, designation: "ckldfkdl", email_id: "vikram78@gmail.com", first_name: "vikram", id: 3, industry_opratn: 2, is_verify_id_no: 3, last_name: "vik", middle_name: "", phone_no: "87748585", services: "KYC", Address: "Jaipur, rajasthan", ClientRef: "PVT-989" },
								{ comp_incop_certif_url: "/images/flag1.png", comp_legal_name: "xbcvbn", comp_regist_no: "7864878", country_incop: 1, designation: "ckldfkdl", email_id: "vikram78@gmail.com", first_name: "vikram", id: 4, industry_opratn: 2, is_verify_id_no: 3, last_name: "vik", middle_name: "", phone_no: "87748585", services: "KYC", Address: "Jaipur, rajasthan", ClientRef: "PVT-989" },
								{ comp_incop_certif_url: "/images/flag1.png", comp_legal_name: "xbcvbn", comp_regist_no: "7864878", country_incop: 1, designation: "ckldfkdl", email_id: "vikram78@gmail.com", first_name: "vikram", id: 5, industry_opratn: 2, is_verify_id_no: 3, last_name: "vik", middle_name: "", phone_no: "87748585", services: "KYC", Address: "Jaipur, rajasthan", ClientRef: "PVT-989" },
							]}
							options={{
								actionsColumnIndex: -1,
								numberOfPagesAround: 10
							}}
						/>
					</Tab>
					<Tab eventKey="Individual" title="Individual">
						<MaterialTable
							title="Individual"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'Profile #', field: 'ClientRef' },
								{ title: 'Company Name', field: 'CompanyName' },
								{ title: 'ID Number.', field: 'IDNumber' },
								{
									title: 'National ID Copy', field: 'IncorporationCertificate',
									render: (rowData) => {
										return (
											<a href={rowData.IncorporationCertificate} download="" className='text-center d-block'>
												<img src="/images/pdf-icon.svg" alt="icon" />
											</a>
										)
									}
								},
								{
									title: 'Resident Country', field: 'CountryIncorporation',
									render: (rowData) => {
										return (
											<img src={rowData.CountryIncorporation} alt="flag" width={30} />
										)
									}
								},
								{ title: 'Address', field: 'Address' },
								{ title: 'Contact Person', field: 'ContactPerson' },
								{ title: 'Contact Numbers', field: 'ContactNumbers' },
								{ title: 'Company Email Address', field: 'EmailAddress' },
								{ title: 'Main Service', field: 'MainService' },
								{ title: 'Reason for requesting the Information', field: 'RequestingReason' },
								{
									title: 'Action', field: 'Action',
									render: (rowData) => {
										return (
											<Dropdown className='tableActionDropdown'>
												<Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

												<Dropdown.Menu>
													<button className='dropdown-item'><BiCheck /> Approve</button>
													<button className='dropdown-item' onClick={confirmationModalOpen}><BiX /> Reject</button>
												</Dropdown.Menu>
											</Dropdown>
										)
									}
								}
							]}
							data={[
								{ ClientRef: "P - xn17x", CompanyName: "Codinput", IDNumber: "PVT- 9v55", IncorporationCertificate: "/images/flag1.png", CountryIncorporation: "/images/flag1.png", Address: "3rd Floor Reliance Centre", ContactPerson: "Ali Jane", ContactNumbers: "0712 345 671", EmailAddress: "ali@ Codinput.co", MainService: "KYC, BGC", RequestingReason: 'Want to work with this company' },
								{ ClientRef: "P - xn17x", CompanyName: "Codinput", IDNumber: "PVT- 9v55", IncorporationCertificate: "/images/flag1.png", CountryIncorporation: "/images/flag1.png", Address: "3rd Floor Reliance Centre", ContactPerson: "Ali Jane", ContactNumbers: "0712 345 671", EmailAddress: "ali@ Codinput.co", MainService: "KYC, BGC", RequestingReason: 'Want to work with this company' },
								{ ClientRef: "P - xn17x", CompanyName: "Codinput", IDNumber: "PVT- 9v55", IncorporationCertificate: "/images/flag1.png", CountryIncorporation: "/images/flag1.png", Address: "3rd Floor Reliance Centre", ContactPerson: "Ali Jane", ContactNumbers: "0712 345 671", EmailAddress: "ali@ Codinput.co", MainService: "KYC, BGC", RequestingReason: 'Want to work with this company' },
								{ ClientRef: "P - xn17x", CompanyName: "Codinput", IDNumber: "PVT- 9v55", IncorporationCertificate: "/images/flag1.png", CountryIncorporation: "/images/flag1.png", Address: "3rd Floor Reliance Centre", ContactPerson: "Ali Jane", ContactNumbers: "0712 345 671", EmailAddress: "ali@ Codinput.co", MainService: "KYC, BGC", RequestingReason: 'Want to work with this company' },
							]}
						/>
					</Tab>
				</Tabs>
			</section>

			<Modal show={confirmationModal} size="sm" onHide={confirmationModalClose} className="confirmationModal commonModal" centered>
				<Modal.Body>
					<h2>Confirmation</h2>
					<p>Are you sure you want to do this?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button
						btnName="Cancel"
						type="button"
						className="btn-xs btn-danger"
						onClick={confirmationModalClose}
					/>
					<Button
						btnName="Submit"
						type="button"
						className="btn-xs btn-success"
						onClick={confirmationModalClose}
					/>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ClientRequest
