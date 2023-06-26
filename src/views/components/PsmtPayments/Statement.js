import React from 'react';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from "@material-table/exporters";

const Statement = () => {
    return (
        <>
            <MaterialTable
                title="Statement"
                columns={[
                    { title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
                    { title: 'Date', field: 'date' },
                    { title: 'transaction', field: 'transaction' },
                    {
                        title: 'Amount', field: 'amount',
                        render: (rowData) => (
                            <span>{rowData.amount}</span>
                        )
                        
                    },
                    { title: 'Balance', field: 'balance' }
                ]}
                data={[
                    { date: "25 Apr 2022", transaction: "P/2022/2279", amount: "- KES 299,987", balance: "KES 114,313", },
                    { date: "25 Apr 2022", transaction: "P/2022/2279", amount: "KES 400,000", balance: "KES 114,313", },
                    { date: "25 Apr 2022", transaction: "P/2022/2279", amount: "- KES 45,000", balance: "KES 114,313", },
                    { date: "25 Apr 2022", transaction: "P/2022/2279", amount: "KES 100,000", balance: "KES 114,313", },
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


export default Statement;