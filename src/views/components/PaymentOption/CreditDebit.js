import React, { useState } from 'react';
import { InputText } from '../InputText/InputText';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export const CreditDebit = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="credit-debit mt-4">
            <div className='row'>
                <div className="col-lg-6">
                    <InputText
                        type="number"
                        name="name"
                        placeholder="Card Number"
                        defaultValue=""
                        FormGroupClass="visaIcon"
                    />
                </div>
                <div className="col-lg-6">
                    <InputText
                        type="text"
                        name="name"
                        placeholder="Name on Card"
                        defaultValue=""
                    />
                </div>
                <div className="col-lg-6">
                    {/* <InputText
                        type="text"
                        name="name"
                        placeholder="Name on Card"
                        defaultValue=""
                    /> */}
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </div>
                <div className="col-lg-6">
                    <InputText
                        type="number"
                        name="ccv"
                        placeholder="CVV Code"
                        defaultValue=""
                    />
                </div>
                <div className='col-lg-12 '>
                    <p>‘All transactions are secure & encrypted.’<br />
                        ‘You will be redirected to payment at Pesapal to complete your purchase’</p>
                    <div className="remember-forgot-password mb-4">
                        <label className="radio-check-btn checkbox-btn">
                            <input type="checkbox" name="t_c" />
                            <span>
                                <i></i>
                                Save card details to your account.
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
