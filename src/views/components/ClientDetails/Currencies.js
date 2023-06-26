import React from 'react';
import MaterialTable from '@material-table/core';

const Currencies = () => {
    return (
        <>
            <MaterialTable
                title="Currencies"
                columns={[
                    { title: '#', field: 'id', render: (rowData) => rowData.tableData.index + 1 },
                    { title: 'Currency', field: 'Currency', },
                    { title: 'Code', field: 'Code' },
                    { title: 'Date Added.', field: 'DateAdded' },
                    {
                        title: 'Primary Currency.', field: 'PrimaryCurrency',
                        render: (rowData) => {
                            return (
                                <label className="switch">
                                    <input type="checkbox" defaultChecked={rowData.PrimaryCurrency === "1" ? true : false} />
                                    <span className="slider round"></span>
                                </label>
                            )
                        }
                    },
                ]}
                data={[
                    { Currency: "Kenya Shillings", Code: "KES", DateAdded: "18/01/2022", PrimaryCurrency: "1" },
                    { Currency: "US Dollar", Code: "USD", DateAdded: "18/01/2022", PrimaryCurrency: "0" },
                    { Currency: "British Pounds", Code: "POUNDS", DateAdded: "18/01/2022", PrimaryCurrency: "0" },
                    { Currency: "Japanese Yen", Code: "YEN", DateAdded: "18/01/2022", PrimaryCurrency: "0" },
                ]}
                options={{
                    actionsColumnIndex: -1,
                    pageSize: 10
                }}
            />
        </>
    );
}
export default Currencies;