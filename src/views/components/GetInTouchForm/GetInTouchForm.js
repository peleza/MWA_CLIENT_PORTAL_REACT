import React from 'react';
import { Button } from '../Button/Button';
import { InputText, SelectBox, TextArea } from '../InputText/InputText';
import { SectionTitle } from '../SectionTitle/SectionTitle';

const GetInTouchForm = () => {
    return (
        <>
            <SectionTitle title="Get In Touch" subHeading="Request free trial/Ask a question" className={'section-title-center'} />
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
                    <div className="form-group">
                        <InputText
                            type="email"
                            name="email"
                            placeholder="Email"
                            defaultValue=""
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <SelectBox
                            name="Country"
                            placeholder="Country"
                            optionData={
                                <>
                                    <option hidden>Country</option>
                                    <option value=""> India  </option>
                                    <option value=""> USA </option>
                                </>
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <SelectBox
                            name="Solution"
                            placeholder="Solutions"
                            optionData={
                                <>
                                    <option hidden>Products</option>
                                    <option>KYC</option>
                                    <option>Background Checks </option>
                                    <option>Metrics & Analytics </option>
                                    <option>Recruitment </option>
                                </>
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <TextArea
                            placeholder="Message...."
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


export default GetInTouchForm;