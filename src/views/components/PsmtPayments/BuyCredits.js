import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Button } from '../Button/Button';
import { FileUpload, InputText } from '../InputText/InputText';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import '../../pages/auth/Auth.scss'

const BuyCredits = ({ prepay }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [fileName, setFileName] = useState();
    const [paymentType, SetPaymentType] = useState(false);
    const [addServiceFields, setAddServiceFields] = useState({
        service_name: '',
        service_code: '',
        parent_service: '',
        created_by: ''
    });

    const PaymentOptionFunction = (id) => {
        SetPaymentType(id)
    }

    const paymentOptionClose = () => {
        SetPaymentType(false)
    }

    const getFileName = (e) => {
        setFileName(e.target.files[0])
    }

    const onChange = (e) => {
        const { name, value } = e.target
        setAddServiceFields((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    return (
        <>
            <div className='repeat-white-bx'>
                <h2>Buy Credits</h2>
                <Form>
                    <InputText
                        type="text"
                        name="credits_worth"
                        placeholder="Enter Credits"
                        pattern=".{1,}"
                        error="Credits Worth is Required!"
                        required="required"
                        onChange={onChange}
                    />
                    {prepay ?
                        <div className='form-group'>
                            <label>Choose a Payment Option</label>
                            <div className="user-type-radio-btn radio-btn-style2">
                                <label className="radiobx-btn">
                                    <input type="radio" name="paymentOption" onClick={() => PaymentOptionFunction(1)} />
                                    <span>
                                        <i></i>
                                        Mpesa
                                    </span>
                                </label>
                                <label className="radiobx-btn">
                                    <input type="radio" name="paymentOption" onClick={() => PaymentOptionFunction(2)} />
                                    <span>
                                        <i></i>
                                        Credit/ Debit Card
                                    </span>
                                </label>
                                <label className="radiobx-btn">
                                    <input type="radio" name="paymentOption" onClick={() => PaymentOptionFunction(3)} />
                                    <span>
                                        <i></i>
                                        Bank Transfer
                                    </span>
                                </label>
                            </div>
                        </div>
                        :
                        <FileUpload
                            fileName={fileName && fileName.name}
                            labelText="Attach LPO"
                            onChange={getFileName}
                            name="comp_incop_certif_url"
                            accept='Jpeg, PNG, PDF'
                            error="Please Upload LPO!"
                            required="required"
                        />
                    }
                    <Button
                        btnName="Buy Now"
                        type="button"
                        className="btn-secondary w-100 btn-sm"
                    />
                </Form>
            </div>

            <Modal show={paymentType === 1 ? true : false} onHide={paymentOptionClose} centered className='commonModal form-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Mpesa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <ul>
                            <li>Go to your Mpesa Menu</li>
                            <li>Lipa Na Mpesa</li>
                            <li>Select Paybill</li>
                            <li>Enter Business No. 673496</li>
                            <li>Enter Account No. BMX19872C (Generated by System)</li>
                            <li>Enter Amount KES 54,000</li>
                            <li>Enter your PIN and Complete</li>
                        </ul>
                        <Modal.Footer>
                            <Button
                                btnName="Cancel"
                                type="button"
                                className="btn-xs btn-primary"
                                onClick={paymentOptionClose}
                            />
                            <Button
                                btnName="Submit"
                                type="submit"
                                className="btn-xs btn-secondary"
                            />
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={paymentType === 2 ? true : false} onHide={paymentOptionClose} centered className='commonModal form-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Credit/ Debit Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="credit-debit">
                            <div className='row'>
                                <div className="col-lg-12">
                                    <InputText
                                        type="number"
                                        name="name"
                                        placeholder="Card Number"
                                        FormGroupClass="form-control-md form-control-style2 visaIcon"
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <InputText
                                        type="text"
                                        name="name"
                                        placeholder="Name on Card"
                                        FormGroupClass="form-control-md form-control-style2"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <DatePicker selected={startDate} className="react-datepicker-style2 form-control-md" onChange={(date: Date) => setStartDate(date)} />
                                </div>
                                <div className="col-lg-6">
                                    <InputText
                                        type="number"
                                        name="ccv"
                                        placeholder="CVV Code"
                                        FormGroupClass="form-control-md form-control-style2"
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
                        <Modal.Footer>
                            <Button
                                btnName="Cancel"
                                type="button"
                                className="btn-xs btn-primary"
                                onClick={paymentOptionClose}
                            />
                            <Button
                                btnName="Submit"
                                type="submit"
                                className="btn-xs btn-secondary"
                            />
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={paymentType === 3 ? true : false} onHide={paymentOptionClose} centered className='commonModal form-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Bank Transfer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-lg-6 mb-3'>
                                <strong>Bank: NCBA BANK KENYA PLC</strong>
                            </div>
                            <div className='col-lg-6 mb-3'>
                                <strong>Payee: Peleza International Ltd</strong>
                            </div>
                            <div className='col-lg-6 mb-3'>
                                <strong>Account Number: 3632540028 (KES)</strong>
                            </div>
                            <div className='col-lg-6 mb-3'>
                                <strong>Account Number: 3632540033 (USD)</strong>
                            </div>
                            <div className='col-lg-6 mb-3'>
                                <strong>Swift Code: CBAFKENX</strong>
                            </div>
                            <div className='col-lg-6'>
                                <strong>Bank Code: 07105</strong>
                            </div>
                            <div className='col-lg-6'>
                                <strong>Branch: The Mall Westlands</strong>
                            </div>
                            <div className='col-lg-12 mt-3'>
                                <p>Bank verification requires, up to 3 days. Please email a copy of the banking slip to <Link to="/mailto:support@mwangaza.africa" className="secondary-text">support@mwangaza.africa</Link></p>
                            </div>
                        </div>
                        <Modal.Footer>
                            <Button
                                btnName="Cancel"
                                type="button"
                                className="btn-xs btn-primary"
                                onClick={paymentOptionClose}
                            />
                            <Button
                                btnName="Submit"
                                type="submit"
                                className="btn-xs btn-secondary"
                            />
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default BuyCredits;