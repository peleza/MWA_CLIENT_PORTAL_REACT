import React from 'react';
import { Button } from "../Button/Button";
import { InputText, SelectBox, TextArea } from "../InputText/InputText";
import { SectionTitle } from "../SectionTitle/SectionTitle";

const BecomeAPartnerForm = () => {
    return (
        <>
            <SectionTitle title="Become a Partner" subHeading="Request free trial/Ask a question" className={'section-title-center'} />
            <div className="row">
                <div className="col-lg-6">
                    <InputText
                        type="text"
                        name="name"
                        placeholder="Name"
                        defaultValue=""
                    />
                </div>
                <div className="col-lg-6">
                    <InputText
                        type="text"
                        name="company"
                        placeholder="Company"
                        defaultValue=""
                    />
                </div>
                <div className="col-lg-6">
                    <InputText
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number"
                        defaultValue=""
                    />
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <InputText
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            defaultValue=""
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <h2 className="mb-3">How would you like to partner with us?</h2>
                        <SelectBox
                            name="partner"
                            placeholder="I Provided"
                            optionData={
                                <>
                                    <option hidden>I Provide</option>
                                    <option value=""> Education Information  </option>
                                    <option value=""> Employment Information </option>
                                    <option value=""> Identity Information </option>
                                    <option value=""> Criminal Information </option>
                                    <option value=""> Income Information </option>
                                    <option value=""> Location Information </option>
                                    <option value=""> Credit Information </option>
                                    <option value=""> Financial Information </option>
                                    <option value=""> Company Registration Information </option>
                                    <option value=""> Social Media Information </option>
                                    <option value=""> Other </option>
                                </>
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <TextArea
                            placeholder="Additional Info...."
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group text-center">
                        <Button className="btn-secondary" btnName="Submit" />
                    </div>
                </div>
            </div>
        </>
    );
}


export default BecomeAPartnerForm;