import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { FileUpload, InputText } from '../InputText/InputText';


export const Overview = () => {
    const [fileName, setFileName] = useState();
    const [Fields, setFields] = useState({
        org_id: "",
        email_id: "",
        password: ""
    })

    const getFileName = (e) => {
		setFileName(e.target.files[0])
	}

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
            <div className='repeat-white-bx'>
                <h2>Profile Details</h2>
                <div className='row'>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Full Names"
                            name="full_names"
                            placeholder="Full Names"
                            defaultValue="Rob Fernandes"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Full Names Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="ID Number"
                            name="id_number"
                            placeholder="ID Number"
                            defaultValue="1234567"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="ID Number Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Staff Number"
                            name="staff_number"
                            placeholder="Staff Number"
                            defaultValue="P00089"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Staff Number Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="User Profile "
                            name="user_profile"
                            placeholder="User Profile"
                            defaultValue="Quality Assurance"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="User Profile Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Phone"
                            name="phone"
                            placeholder="Phone Number"
                            defaultValue="+254 123 456 789"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Phone Number Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Email"
                            name="email"
                            placeholder="Email"
                            defaultValue="rob.fernandes@one.com"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Email is Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-12'>
                        <InputText
                            type="text"
                            labelText="Physical Address"
                            name="physical_address"
                            placeholder="Physical Address"
                            defaultValue="Reliance Centre, Westlands, Nairobi"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Physical Address is Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <FileUpload
                            fileName={fileName && fileName.name}
                            labelText="Update Profile Photo"
                            FormGroupClass="mb-0"
                            onChange={getFileName}
                            name="profile_photo"
                            accept='Jpeg, PNG'
                            error="Please Upload Photo Certificate!"
                            required="required"
                        />
                    </div>
                </div>
            </div>

            <div className='repeat-white-bx mt-5'>
                <h2>Company Details</h2>
                <div className='row'>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Company Name"
                            name="company_name"
                            placeholder="Company Name"
                            defaultValue="One Ltd"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Company Name Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Incorporation Number"
                            name="incorporation_number"
                            placeholder="Incorporation Number"
                            defaultValue="PVT-1234567Y"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Incorporation Number Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="SAAS Org Reference #"
                            name="sass_org_reference"
                            placeholder="SAAS Org Reference #"
                            defaultValue="SO-00089"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="SAAS Org Reference Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Country Of Incorporation"
                            name="country_of_incorporation"
                            placeholder="Country Of Incorporation"
                            defaultValue="Rwanda"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Country Of Incorporation Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Industry"
                            name="industry"
                            placeholder="Industry"
                            defaultValue="Security"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Industry Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Contact Person"
                            name="contact_person"
                            placeholder="Contact Person"
                            defaultValue="Essy Lui"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Contact Person is Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Phone"
                            name="phone"
                            placeholder="Phone"
                            defaultValue="+254 123 456 789"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Phone is Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Email"
                            name="Email"
                            placeholder="Email"
                            defaultValue="essy.lui@one.com"
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Email is Required!"
                            required="required"
                        />
                    </div>
                    <div className='col-lg-4'>
                        <InputText
                            type="text"
                            labelText="Physical Address"
                            name="physical_address"
                            placeholder="Physical Address"
                            defaultValue="Reliance Centre, Westlands, Nairobi "
                            hasLabel={true}
                            onChange={onChange}
                            pattern=".{1,}"
                            error="Physical Address is Required!"
                            required="required"
                        />
                    </div>
                </div>
            </div>

            <div className='text-end mt-5'>
                <Button
                    btnName="Save"
                    type="submit"
                    className="btn-secondary"
                />
            </div>
        </>
    );
}
