import React from 'react';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from "@material-table/exporters";

const Complete = () => {
    return (
        <>
            <MaterialTable
                title="Complete"
                columns={[
                    { title: 'Profile #', field: 'ref' },
                    { title: 'Client', field: 'client' },
                    { title: 'Requestor', field: 'requestor' },
                    { title: 'Date Requested', field: 'date_requested' },
                    { title: 'Candidate Name', field: 'candidate_name' },
                    {
                        title: 'Country', field: 'country',
                        render: (rowData) => {
                            return (
                                <img src={rowData.country} alt="flag" width={30} />
                            )
                        }
                    },
                    { title: 'Package', field: 'package' },
                    { title: 'Package SLA', field: 'package_sla' },
                    { title: 'Package TAT', field: 'package_tat' },
                    { title: 'Completion Date', field: 'completion_date' },
                    {
                        title: 'Status', field: 'status',
                        render: (rowData) => {
                            return (
                                rowData.status === 1 ? <span className="badge badge-success">Within TAT</span> :
                                    rowData.status === 2 ? <span className="badge badge-danger">Past TAT</span> :
                                        rowData.status === 3 ? <span className="badge badge-purple">Prior to TAT</span> : null
                            )
                        }
                    }
                ]}
                data={[
                    { ref: "PIL001A", client: "Altima", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Standard", package_sla: "5", package_tat: "5", completion_date: "19 Jun 2021", status: 1 },
                    { ref: "PIL001A", client: "EABL", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Experienced", package_sla: "5", package_tat: "5", completion_date: "19 Jun 2021", status: 2 },
                    { ref: "PIL001A", client: "Twiga", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Entry", package_sla: "5", package_tat: "5", completion_date: "19 Jun 2021", status: 3 },
                    { ref: "PIL001A", client: "L’Oreal", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Executive", package_sla: "5", package_tat: "5", completion_date: "19 Jun 2021", status: 1 },
                    { ref: "PIL001A", client: "BFA", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Professional", package_sla: "5", package_tat: "5", completion_date: "19 Jun 2021", status: 1 },
                    { ref: "PIL001A", client: "Gelx", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Management", package_sla: "5", package_tat: "5", completion_date: "19 Jun 2021", status: 1 },
                ]}
                options={{
                    exportButton: true,
                    exportMenu: [
                        {
                            label: "Export PDF",
                            exportFunc: (cols, datas) => ExportPdf(cols, datas, "Trasation Invoices"),
                        },
                        {
                            label: "Export CSV",
                            exportFunc: (cols, datas) => ExportCsv(cols, datas, "Trasation Invoices"),
                        },
                    ],
                }}
            />
        </>
    );
}


export default Complete;