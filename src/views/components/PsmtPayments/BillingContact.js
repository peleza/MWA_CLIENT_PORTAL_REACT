import React, {useState} from 'react';
import { Modal, Form } from 'react-bootstrap';
import { Button } from '../../components/Button/Button';
import { InputText, TextArea } from '../InputText/InputText';

const BillingContact = () => {
    const [EditBillingInfoModalState, setEditBillingInfoModalState] = useState(false);
    const [addServiceFields, setAddServiceFields] = useState({
		service_name: '',
		service_code: '',
		parent_service: '',
		created_by: ''
	});

    const EditBillingInfoModalClose = () => setEditBillingInfoModalState(false);
	const EditBillingInfoModalShow = () => setEditBillingInfoModalState(true);

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
                <h2>Billing Contact
                    <Button
                        btnName="Edit"
                        type="submit"
                        className="btn-secondary btn-xs"
                        onClick={EditBillingInfoModalShow}
                    />
                </h2>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h3>Name</h3>
                        <p>Francis Kimani</p>
                    </div>
                    <div className='col-lg-6 mb-3'>
                        <h3>Email</h3>
                        <p className='word-wrap'>francis.kimani@samsung.com</p>
                    </div>
                    <div className='col-lg-6 mb-3'>
                        <h3>Phone No.</h3>
                        <p>+254 796 111 020</p>
                    </div>
                    <div className='col-lg-6'>
                        <h3>Alternative Email</h3>
                        <p className='word-wrap'>francis.kimani@samsung.com</p>
                    </div>
                    <div className='col-lg-12'>
                        <h3>Address</h3>
                        <p>Reliance Centre, Woodvale Groove, Nairobi, Kenya</p>
                    </div>
                </div>
            </div>

            <Modal show={EditBillingInfoModalState} onHide={EditBillingInfoModalClose} centered className='commonModal modal-70w form-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Billing Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <InputText
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    labelText="Name"
                                    FormGroupClass="form-control-md form-control-style2"
                                    pattern='^[a-z A-Z]{2,20}$'
                                    error="Name is Required!"
                                    required="required"
                                    onChange={onChange}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <InputText
                                    type="text"
                                    name="email"
                                    placeholder="Enter Email"
                                    labelText="Email"
                                    FormGroupClass="form-control-md form-control-style2"
                                    pattern=".{1,}"
                                    error="Email is Required!"
                                    required="required"
                                    onChange={onChange}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <InputText
                                    type="text"
                                    name="phone_no."
                                    placeholder="Enter Phone No."
                                    labelText="Phone No."
                                    FormGroupClass="form-control-md form-control-style2"
                                    pattern=".{1,}"
                                    error="Phone No. is Required!"
                                    required="required"
                                    onChange={onChange}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <InputText
                                    type="text"
                                    name="alternative_email"
                                    placeholder="Alternative Email"
                                    labelText="Alternative Email"
                                    FormGroupClass="form-control-md form-control-style2"
                                    pattern=".{1,}"
                                    error="Alternative Email is Required!"
                                    required="required"
                                    onChange={onChange}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <TextArea
                                    FormGroupClass="form-control-md form-control-style2"
                                    placeholder="Enter Address"
                                    labelText="Address"
                                    pattern=".{1,}"
                                    error="Address is Required!"
                                    required="required"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <Modal.Footer>
                            <Button
                                btnName="Cancel"
                                type="button"
                                className="btn-xs btn-primary"
                                onClick={EditBillingInfoModalClose}
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


export default BillingContact;