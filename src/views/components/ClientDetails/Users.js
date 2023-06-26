import React from 'react';
import MaterialTable from '@material-table/core';

const Users = () => {
    return (
        <>
            <MaterialTable
                title="Users"
                columns={[
                    { title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
                    {
                        title: 'User Pic', field: 'UserPic',
                        render: (rowData) => {
                            return (
                                <img src={rowData.UserPic} className="tableUserImage" alt="user" />
                            )
                        }
                    },
                    { title: 'User Name', field: 'UserName' },
                    { title: 'ID Number.', field: 'IDNumber' },
                    { title: 'Email Address', field: 'EmailAddress' },
                    { title: 'Role', field: 'Role' },
                    { title: 'Main Service', field: 'MainService' },
                    { title: 'Packages Assigned', field: 'PackagesAssigned' },
                    {
                        title: 'Status', field: 'Status',
                        render: (rowData) => {
                            return (
                                rowData.Status === "0" ? <span className="badge badge-danger">Deactivated</span> : 
                                rowData.Status === "1" ? <span className="badge badge-success">Active</span> :
                                rowData.Status === "3" ? <span className="badge badge-warning">Dormant</span> : null
                            )
                        }
                    },
                ]}
                data={[
                    { UserPic: "/images/notification-img1.png", UserName: "Yas Min", IDNumber: "1234567", EmailAddress: "ali@ Codinput.co", Role: "Client Admin", MainService: "KYC, BGC", PackagesAssigned: "Standard Executive", Status: "1", },
                    { UserPic: "/images/notification-img1.png", UserName: "Yas Min", IDNumber: "1234567", EmailAddress: "ali@ Codinput.co", Role: "Client Admin", MainService: "KYC, BGC", PackagesAssigned: "Standard Executive", Status: "3", },
                    { UserPic: "/images/notification-img1.png", UserName: "Yas Min", IDNumber: "1234567", EmailAddress: "ali@ Codinput.co", Role: "Client Admin", MainService: "KYC, BGC", PackagesAssigned: "Standard Executive", Status: "0", },
                ]}
                options={{
                    actionsColumnIndex: -1,
                    pageSize: 10
                }}
            />
        </>
    );
}
export default Users;