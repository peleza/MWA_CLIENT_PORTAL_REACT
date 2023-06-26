import React from 'react';
import MaterialTable from '@material-table/core';
import { Tab, Tabs } from 'react-bootstrap';

const AdminRoleManagement = () => {
	return (
		<>
			<section className='dashboard-section pidvaDashboard'>
				<h1 className='dashboard-title'>Assign Role</h1>
				<Tabs
					defaultActiveKey="SaaSManagement"
					transition={true}
					className="common-tabs common-tabs-layout-2"
				>
					<Tab eventKey="SaaSManagement" title="SaaS Management">
						<MaterialTable
							title="SaaS Management"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'SaaS Management', field: 'SaaSManagement' },
								{
									title: 'Status', field: 'Administrator',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Administrator === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
							]}
							data={[
								{ SaaSManagement: "Create SaaS", Administrator: "1", },
								{ SaaSManagement: "Approve SaaS", Administrator: "2", },
								{ SaaSManagement: "Edit SaaS", Administrator: "1", },
								{ SaaSManagement: "View SaaS", Administrator: "2", },
								{ SaaSManagement: "Activate SaaS", Administrator: "1", },
								{ SaaSManagement: "Deactivate SaaS", Administrator: "1", },
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
								{ title: 'Service Management', field: 'ServiceManagement' },
								{
									title: 'Status', field: 'Administrator',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Administrator === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
							]}
							data={[
								{ ServiceManagement: "Create Service", Administrator: "1", },
								{ ServiceManagement: "Edit Service", Administrator: "1", },
								{ ServiceManagement: "View Service", Administrator: "1", },
								{ ServiceManagement: "Activate Service", Administrator: "2", },
								{ ServiceManagement: "Deactivate Service", Administrator: "2", },
								{ ServiceManagement: "Price Sub Service", Administrator: "2", },
							]}
							options={{
								actionsColumnIndex: -1,
								pageSize: 10,
								search: false
							}}
						/>
					</Tab>
					<Tab eventKey="PermissionsManagement" title="Role & Permissions Management">
					<MaterialTable
							title="Role & Permissions Management"
							columns={[
								{ title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
								{ title: 'Role & Permissions Management', field: 'PermissionsManagement' },
								{
									title: 'Status', field: 'Administrator',
									render: (rowData) => {
										return (
											<label className="switch">
												<input type="checkbox" defaultChecked={rowData.Administrator === "1" ? true : false} />
												<span className="slider round"></span>
											</label>
										)
									}
								},
							]}
							data={[
								{ PermissionsManagement: "Create Role", Administrator: "1", },
								{ PermissionsManagement: "Edit Permissions", Administrator: "1", },
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

export default AdminRoleManagement
