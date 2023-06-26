import React from 'react';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiDownload } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'

const Invoices = () => {
    return (
        <>
            <MaterialTable
                title="Invoices"
                columns={[
                    { title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
                    { title: 'Date', field: 'date' },
                    { title: 'Invoice Number', field: 'invoice_number' },
                    { title: 'Invoice Amount', field: 'invoice_amount' },
                    { title: 'Ageing', field: 'ageing' },
                    {
                        title: 'Status', field: 'Status',
                        render: (rowData) => {
                            return (
                                rowData.status === 1 ? <span className="badge badge-success">Paid</span> : <span className="badge badge-danger">Pending</span>
                            )
                        }
                    },
                    {
                        title: 'Action', field: 'Action',
                        render: (rowData) => {
                            return (
                                <Dropdown className='tableActionDropdown'>
                                    <Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <button className='dropdown-item'><BiDownload /> Download</button>
                                        {rowData.status === 1 ?
                                            <button className='dropdown-item disabled'><MdPayment /> Already Paid</button>
                                            :
                                            <button className='dropdown-item'><MdPayment /> Pay Now</button>
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            )
                        }
                    }
                ]}
                data={[
                    { date: "25 Apr 2022", invoice_number: "P/2022/2279", invoice_amount: "KES 2,991,987", ageing: "30 Days", status: 1 },
                    { date: "25 Apr 2022", invoice_number: "P/2022/2279", invoice_amount: "KES 2,991,987", ageing: "30 Days", status: 2 },
                    { date: "25 Apr 2022", invoice_number: "P/2022/2279", invoice_amount: "KES 2,991,987", ageing: "30 Days", status: 2 },
                    { date: "25 Apr 2022", invoice_number: "P/2022/2279", invoice_amount: "KES 2,991,987", ageing: "30 Days", status: 1 },
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


export default Invoices;