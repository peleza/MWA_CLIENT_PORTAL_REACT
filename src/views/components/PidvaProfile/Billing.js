import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { InputText } from '../InputText/InputText';
import { Modal, Form } from 'react-bootstrap';
import { BiTrash, BiEdit } from 'react-icons/bi'


export const Billing = () => {
    const [fileName, setFileName] = useState();
    const [CardModalState, setCardModalState] = useState(false);
    const [Password, SetPassword] = useState(false);
    const [Fields, setFields] = useState({
        org_id: "",
        email_id: "",
        password: ""
    })

    const getFileName = (e) => {
        setFileName(e.target.files[0])
    }
    const CardModalClose = () => setCardModalState(false);
    const CardModalShow = () => setCardModalState(true);
    const ShowPassword = () => SetPassword(!Password);

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
                            <h2>Billing Contact</h2>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <InputText
                                        type="text"
                                        labelText="Full Names"
                                        name="full_names"
                                        placeholder="Full Names"
                                        defaultValue="Francis Kimani"
                                        hasLabel={true}
                                        onChange={onChange}
                                        pattern=".{1,}"
                                        error="Full Names Required!"
                                        required="required"
                                    />
                                </div>
                                <div className='col-lg-6'>
                                    <InputText
                                        type="text"
                                        labelText="Sign In Email "
                                        name="sign_in_email"
                                        placeholder="sign_in_email"
                                        defaultValue="francis.kimani@one.com"
                                        hasLabel={true}
                                        onChange={onChange}
                                        pattern=".{1,}"
                                        error="Email Required!"
                                        required="required"
                                    />
                                </div>
                                <div className='col-lg-6'>
                                    <InputText
                                        type="text"
                                        labelText="Alternative Email"
                                        name="Alternative Email "
                                        placeholder="Alternative Email"
                                        defaultValue="devid.kimani@one.com"
                                        hasLabel={true}
                                        onChange={onChange}
                                        pattern=".{1,}"
                                        error="Alternative Email Required!"
                                        required="required"
                                    />
                                </div>
                                <div className='col-lg-6'>
                                    <InputText
                                        type={Password ? "text" : "password"}
                                        labelText="Sign In Password"
                                        name="password"
                                        placeholder="Password"
                                        isPassword="true"
                                        onChange={onChange}
                                        defaultValue="adsasdasdasd"
                                        onClick={ShowPassword}
                                        ChangeClass={Password ? "show-hide active" : "show-hide"}
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                        error="8+ characters 1 Uppercase character 1 Special Character 1 Number"
                                        required="required"
                                    />
                                </div>
                                <div className='col-lg-6'>
                                    <Button
                                        btnName="Update"
                                        type="submit"
                                        className="btn-secondary btn-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='repeat-white-bx'>
                            <h2>Subscription</h2>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h3>Subscription Plan</h3>
                                    <p className='fw-normal'>GOLD</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h3>Duration</h3>
                                    <p className='fw-normal'>6 Months</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h3>Next Renewal Amount </h3>
                                    <p className='fw-normal'>KES 54,000</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h3>Expiry Date </h3>
                                    <p className='fw-normal'>12th Oct 2022</p>
                                </div>
                                <div className='col-lg-6'>
                                    <h3>Expires in</h3>
                                    <p className='fw-normal'>33 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='repeat-white-bx mt-5'>
                    <h2>My Cards

                        <Button
                            btnName="Add Card"
                            type="button"
                            className="btn-secondary btn-sm"
                            onClick={CardModalShow}
                        />
                    </h2>

                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className="credit-card-bx">
                                <h2>
                                    <span>Jacky Jhon <span className='badge badge-primary'>Primary</span> </span>
                                    <div>
                                        <button> <BiTrash /> </button>
                                        <button> <BiEdit /> </button>
                                    </div>
                                </h2>
                                <h4><span>****</span><span>****</span><span>****</span><span>5429</span></h4>
                                <div className="btm-bar">
                                    <div>
                                        <div>
                                            <h5>VALID</h5>
                                            <p>10/25</p>
                                        </div>
                                        <div>
                                            <h5>CVV</h5>
                                            <p>***</p>
                                        </div>
                                    </div>
                                    <div>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="credit-card-bx">
                                <h2>
                                    <span>Jacky Jhon</span>
                                    <div>
                                        <button> <BiTrash /> </button>
                                        <button> <BiEdit /> </button>
                                    </div>
                                </h2>
                                <h4><span>****</span><span>****</span><span>****</span><span>5429</span></h4>
                                <div className="btm-bar">
                                    <div>
                                        <div>
                                            <h5>VALID</h5>
                                            <p>10/25</p>
                                        </div>
                                        <div>
                                            <h5>CVV</h5>
                                            <p>***</p>
                                        </div>
                                    </div>
                                    <div>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='repeat-white-bx mt-5'>
                    <h2>Mobile Money</h2>
                    <div className='row align-items-center'>
                        <div className='col-lg-3 mb-3'>
                            <h3>Mpesa</h3>
                        </div>
                        <div className='col-lg-3 mb-3'>
                            <h3>Kenya</h3>
                        </div>
                        <div className='col-lg-3 mb-3'>
                            <h3>+254704***111</h3>
                        </div>
                        <div className='col-lg-3 mb-3'>
                            <Button
                                btnName="Edit"
                                type="button"
                                className="btn-secondary btn-sm"
                            />
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-lg-3 mb-3'>
                            <h3>Tigo</h3>
                        </div>
                        <div className='col-lg-3 mb-3'>
                            <h3>Tanzania</h3>
                        </div>
                        <div className='col-lg-3 mb-3'>
                            <h3>+255714***222</h3>
                        </div>
                        <div className='col-lg-3 mb-3'>
                            <Button
                                btnName="Edit"
                                type="button"
                                className="btn-secondary btn-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className='repeat-white-bx mt-5'>
                    <h2>Billing Address</h2>
                    <div className='row align-items-center'>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                labelText="Office Number/ Floor"
                                name="office_number"
                                placeholder="Office Number/ Floor"
                                hasLabel={true}
                                onChange={onChange}
                                pattern=".{1,}"
                                error="Office Number/ Floor Required!"
                                required="required"
                                value="307"
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                labelText="Building"
                                name="building_name"
                                placeholder="Building"
                                hasLabel={true}
                                onChange={onChange}
                                pattern=".{1,}"
                                error="Building Required!"
                                required="required"
                                value="Reliance Centre"
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                labelText="Street"
                                name="street_name"
                                placeholder="Street"
                                hasLabel={true}
                                onChange={onChange}
                                pattern=".{1,}"
                                error="Street Required!"
                                required="required"
                                value="Reliance Centre"
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="number"
                                labelText="Sign In Password"
                                name="sign_password"
                                placeholder="Sign In Password"
                                hasLabel={true}
                                onChange={onChange}
                                pattern=".{1,}"
                                error="Sign In Password Required!"
                                required="required"
                                value=""
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                labelText="City"
                                name="city_name"
                                placeholder="City"
                                hasLabel={true}
                                onChange={onChange}
                                pattern=".{1,}"
                                error="City Required!"
                                required="required"
                                value="Nairobi"
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                labelText="Country"
                                name="country_name"
                                placeholder="Country"
                                hasLabel={true}
                                onChange={onChange}
                                pattern=".{1,}"
                                error="Country Required!"
                                required="required"
                                value="Kenya"
                            />
                        </div>
                        <div className='col-lg-12'>
                            <Button
                                btnName="Change Address"
                                type="button"
                                className="btn-secondary btn-sm"
                            />
                        </div>
                    </div>
                </div>


            </div>

            <Modal show={CardModalState} onHide={CardModalClose} centered className='commonModal'>
                <Modal.Header closeButton>
                    <Modal.Title>Card Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <InputText
                                    type="text"
                                    name="card_name"
                                    placeholder="Name on Card"
                                    hasLabel={true}
                                    onChange={onChange}
                                    pattern=".{1,}"
                                    error="Card Name Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-12'>
                                <InputText
                                    type="text"
                                    name="card_number"
                                    placeholder="Card Number"
                                    hasLabel={true}
                                    onChange={onChange}
                                    pattern=".{1,}"
                                    error="Card Number Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <InputText
                                    type="text"
                                    name="valid_through"
                                    placeholder="Valid Through"
                                    hasLabel={true}
                                    onChange={onChange}
                                    pattern=".{1,}"
                                    error="Valid Through Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-6'>
                                <InputText
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                    hasLabel={true}
                                    onChange={onChange}
                                    pattern=".{1,}"
                                    error="CVV Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-12'>
                                <Button
                                    btnName="Save"
                                    type="submit"
                                    className="btn-secondary w-100"
                                />
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
