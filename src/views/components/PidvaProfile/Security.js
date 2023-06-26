import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { InputText } from '../InputText/InputText';
import { Modal, Form } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import '../../pages/auth/Auth.scss'

export const Security = () => {
    const [OtpModalState, setOtpModalState] = useState(false);
    const [Fields, setFields] = useState({
        otp: '',
        org_id: "",
        email_id: "",
        password: ""
    })

    const OtpModalClose = () => setOtpModalState(false);
    const OtpModalShow = () => setOtpModalState(true);

    const handleChange = (otp) => setFields({ ...Fields, otp: otp });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFields((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    return (
        <>
            <div className=''>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='repeat-white-bx'>
                            <h2>Sign In Method</h2>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h3>Sign In Email</h3>
                                    <p className='fw-normal'>rob.fernandes@one.com</p>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <h3>Sign In Password</h3>
                                    <p className='word-wrap fw-normal'>************</p>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <h3>Two-factor authentication</h3>
                                    <p className='badge bg-success fw-normal mt-2'>Enabled</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='repeat-white-bx'>
                            <h2>Update Password</h2>
                            <InputText
                                type="text"
                                name="new_password"
                                placeholder="New Password"
                                hasLabel={true}
                                onChange={onChange}
                                pattern=".{1,}"
                                error="New Password Required!"
                                required="required"
                            />
                            <InputText
                                type="text"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                hasLabel={true}
                                onChange={onChange}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                error="8+ characters 1 Uppercase character 1 Special Character 1 Number"
                                required="required"
                            />
                            <Button
                                btnName="Update Password"
                                type="submit"
                                className="btn-secondary btn-sm"
                                onClick={OtpModalShow}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={OtpModalState} onHide={OtpModalClose} centered className='commonModal'>
                <Modal.Header closeButton>
                    <Modal.Title>Verify OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='otp-bx'>
                            <OtpInput
                                value={Fields.otp}
                                onChange={handleChange}
                                numInputs={5}
                                className="otp-col"
                                inputStyle="form-control"
                            />
                        </div>
                        <div className="bottom-info text-start">
                            <p> Not received your code? <button className="secondary-text">Resend </button></p>
                        </div>

                        <div className="form-submit-btn-row">
                            <Button
                                btnName="Verify"
                                type="submit"
                                // isDisabled={isLoading}
                                // isLoading={isLoading}
                                className="btn-secondary w-100"
                            />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
