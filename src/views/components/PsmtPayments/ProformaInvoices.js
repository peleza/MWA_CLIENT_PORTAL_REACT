import React from 'react';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { Dropdown } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiDownload } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'

const ProformaInvoices = () => {
    return (
        <>
            <MaterialTable
                title="Proforma Invoices"
                columns={[
                    { title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
                    { title: 'Date', field: 'date' },
                    { title: 'Proforma Invoices', field: 'proforma_number' },
                    { title: 'Invoice Amount', field: 'invoice_amount' },
                    { title: 'Ageing', field: 'ageing' },
                    {
                        title: 'PO Status', field: 'po_status',
                        render: (rowData) => {
                            return (rowData.po_status === 1 
                                ? <span className="badge badge-success">PO sent</span> : 
                                rowData.po_status === 0 ? <span className="badge badge-warning">Pending</span> :
                                rowData.po_status === 2 ? <span className="badge badge-danger">Pending</span> : null
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
                                        { rowData.po_status === 1
                                            ? <button className='dropdown-item'>PO No.</button>
                                            : <button className='dropdown-item'><MdPayment /> Attach PO</button>
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            )
                        }
                    }
                ]}
                data={[
                    { date: "25 Apr 2022", proforma_number: "P/2022/2279", invoice_amount: "KES 2,991,987", ageing: "30 Days", po_status: 0 },
                    { date: "25 Apr 2022", proforma_number: "P/2022/2279", invoice_amount: "KES 2,991,987", ageing: "30 Days", po_status: 1 },
                    { date: "25 Apr 2022", proforma_number: "P/2022/2279", invoice_amount: "KES 2,991,987", ageing: "30 Days", po_status: 2 },
                    { date: "25 Apr 2022", proforma_number: "P/2022/2279", invoice_amount: "KES 2,991,987", ageing: "30 Days", po_status: 0 },
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


export default ProformaInvoices;