import React, { useState } from 'react';
import { FileUpload } from '../InputText/InputText';



export const BankTransfer = () => {
    const [fileName, setFileName] = useState();

    const getFileName = (e) => {
		setFileName(e.target.files[0])
	}
    return (
        <div className="bank-transfer row align-items-end">
            <div className='col-lg-6'>
                <div className='number-list'>
                    Bank: NCBA BANK KENYA PLC<br />
                    Payee: Peleza International Ltd<br />
                    Account Number: 3632540028 (KES)<br />
                    Account Number: 3632540033 (USD)<br />
                    Swift Code: CBAFKENX<br />
                    Bank Code: 07105<br />
                    Branch: The Mall Westlands
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='right-content'>
                    Bank verification requires, up to 3 days.
                    Please upload a copy of the banking slip
                    <FileUpload
                        fileName={fileName && fileName.name}
                        labelText=""
                        FormGroupClass="mb-0 mt-3"
                        onChange={getFileName}
                        name="profile_photo"
                        accept='Jpeg, PNG'
                        error="Please Upload banking slip!"
                        required="required"
                    />
                </div>
            </div>
        </div>
    );
}
