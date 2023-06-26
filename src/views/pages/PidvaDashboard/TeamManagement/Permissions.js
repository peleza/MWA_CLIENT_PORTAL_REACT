import React from 'react';
import MaterialTable from '@material-table/core';
import { Tab, Tabs } from 'react-bootstrap';

const Permissions = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Permissions</h1>
				<Tabs
					defaultActiveKey="ClientManagement"
					transition={true}
					className="common-tabs common-tabs-layout-2"
				>
					<Tab eventKey="ClientManagement" title="Client Management">
						<MaterialTable
							title="Client Management"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'Client Management', field: 'ClientManagement' },
								{
									title: 'Administrator.', field: 'Administrator',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Administrator === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Verifications Lead', field: 'VerificationsLead',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.VerificationsLead === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'BGC Specialist', field: 'BGCSpecialist',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.BGCSpecialist === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'KYC Specialist', field: 'KYCSpecialist',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.KYCSpecialist === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Finance', field: 'Finance',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Finance === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Business Development', field: 'BusinessDevelopment',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.BusinessDevelopment === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								}
							]}
							data={[
								{ ClientManagement: "Create Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Verify Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Edit Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "View Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Activate Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
							]}
							options={{
								actionsColumnIndex: -1,
								pageSize: 10,
								search: false
							}}
						/>
					</Tab>
					<Tab eventKey="ServiceManagement" title="Service Management">
						<MaterialTable
							title="Service Management"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'Client Management', field: 'ClientManagement' },
								{
									title: 'Administrator.', field: 'Administrator',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Administrator === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Verifications Lead', field: 'VerificationsLead',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.VerificationsLead === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'BGC Specialist', field: 'BGCSpecialist',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.BGCSpecialist === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'KYC Specialist', field: 'KYCSpecialist',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.KYCSpecialist === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Finance', field: 'Finance',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Finance === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Business Development', field: 'BusinessDevelopment',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.BusinessDevelopment === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								}
							]}
							data={[
								{ ClientManagement: "Create Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Verify Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Edit Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "View Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Activate Client", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Deactivate Service", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Price Sub Service", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Activate Service", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Deactivate Service", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Price Sub Service", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
							]}
							options={{
								actionsColumnIndex: -1,
								pageSize: 10,
								search: false
							}}
						/>
					</Tab>
					<Tab eventKey="RequestManagement" title="Request Management">
						<MaterialTable
							title="Request Management"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'Client Management', field: 'ClientManagement' },
								{
									title: 'Administrator.', field: 'Administrator',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Administrator === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Verifications Lead', field: 'VerificationsLead',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.VerificationsLead === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'BGC Specialist', field: 'BGCSpecialist',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.BGCSpecialist === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'KYC Specialist', field: 'KYCSpecialist',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.KYCSpecialist === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Finance', field: 'Finance',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Finance === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
								{
									title: 'Business Development', field: 'BusinessDevelopment',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.BusinessDevelopment === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								}
							]}
							data={[
								{ ClientManagement: "Assign Request", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
								{ ClientManagement: "Reassign Request", Administrator: "1", VerificationsLead: "2", BGCSpecialist: "1", KYCSpecialist: "2", Finance: "1", BusinessDevelopment: "1" },
							]}
							options={{
								actionsColumnIndex: -1,
								pageSize: 10,
								search: false
							}}
						/>
					</Tab>
				</Tabs>
			</section>
		</>
	);
}

export default Permissions
