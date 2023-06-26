import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '../Button/Button'
import '../../pages/auth/Auth.scss'
import { FileUpload, InputText, SelectBox } from '../InputText/InputText';
import { MultiSelect } from "react-multi-select-component";
import { useDispatch, useSelector } from 'react-redux';
import { ClientEditAction, ClientRegisterAction } from '../../../redux/actions/AdminClientActions';

const MySelf = (props) => {
    const [MultiSelected, setMultiSelected] = useState([]);
    console.log("props are ", props)
    const dispatch = useDispatch();
    const clientListResponse = useSelector(state => state)
    const ServiceApiResponse = useSelector(state => state.AdminClientData.client_register)
    console.log('Selector data is  ', clientListResponse)
    const [userType, setUserType] = useState(true);
    useEffect(() => {
        if (props.editData !== "") {
            setUserType(props?.editData?.role_id === "3" ? true : props.editData.role_id === "4" ? false : true)
        }
    }, [props.editData])

    const roleid = 3
    const [fileName, setFileName] = useState();
    const [ListData, setListData] = useState({
        countryListData: [],
        industryListData: [],
    })
    console.log("List data is ", ListData)

    const industriesData = [{ id: 1, industry_name: "IT" }, { id: 2, industry_name: "Pharma" }]
    const servicesRequiredData = [{ id: 1, services: "Employment Background Checks" }, { id: 2, services: "Know Your Customer" }]


    const [IndividualData, setIndividualData] = useState({
        client_name: props.editData !== '' && props.editData.role_id == 4 ? props.editData.full_name : "",
        person_phone_number_ind: props.editData !== '' && props.editData.role_id == 4 ? props.editData.phone_no : "",
        id_number: props.editData !== '' && props.editData.role_id == 4 ? props.editData.id_number : "",
        email_id: props.editData !== '' && props.editData.role_id == 4 ? props.editData.email_id : "",
        address: props.editData !== '' && props.editData.role_id == 4 ? props.editData.address : "",
        country_incorporation_ind: props.editData !== '' && props.editData.role_id == 4 ? props.editData.country_incop : "",
        services_ind: props.editData !== '' && props.editData.role_id == 4 ? props.editData.services : "",
        certif_id_ind: props.editData !== '' && props.editData.role_id == 4 ? { name: props.editData.comp_incop_certif_url } : "",
    })


    const [initialState] = useState({
        company_name: props.editData !== '' && props.editData.role_id == 3 ? props.editData.comp_legal_name : "",
        registration_no: props.editData !== '' && props.editData.role_id == 3 ? props.editData.comp_regist_no : "",
        country_incorporation: props.editData !== '' && props.editData.role_id == 3 ? props.editData.country_incop : "",
        industry_name: props.editData !== '' && props.editData.role_id == 3 ? props.editData.industry_opratn : "",
        contact_person: props.editData !== '' && props.editData.role_id == 3 ? props.editData.full_name : "",
        person_email: props.editData !== '' && props.editData.role_id == 3 ? props.editData.email_id : "",
        person_id_number: props.editData !== '' && props.editData.role_id == 3 ? props.editData.id_number : "",
        person_phone_number: props.editData !== '' && props.editData.role_id == 3 ? props.editData.phone_no : "",
        enter_designation: props.editData !== '' && props.editData.role_id == 3 ? props.editData.designation : "",
        address: props.editData !== '' && props.editData.role_id == 3 ? props.editData.address : "",
        country_services: props.editData !== '' && props.editData.role_id == 3 ? props.editData.service_required_country : "",
        services: props.editData !== '' && props.editData.role_id == 3 ? props.editData.services : "",
        comp_incop_certif_url: props.editData !== '' && props.editData.role_id == 3 ? { name: props.editData.comp_incop_certif_url } : "",
        logo: props.editData !== '' && props.editData.role_id == 3 ? { name: props.editData.logo } : "",
    })

    const [state, setState] = useState({
        company_name: initialState.company_name,
        registration_no: initialState.registration_no,
        country_incorporation: initialState.country_incorporation,
        industry_name: initialState.industry_name,
        contact_person: initialState.contact_person,
        person_email: initialState.person_email,
        person_id_number: initialState.person_id_number,
        person_phone_number: initialState.person_phone_number,
        enter_designation: initialState.enter_designation,
        address: initialState.address,
        country_services: initialState.country_services,
        services: initialState.services,
        comp_incop_certif_url: initialState.comp_incop_certif_url,
        logo: initialState.logo,
        loading: false,
        isDisabled: true
    })



    useEffect(() => {
        setListData({ ...ListData, countryListData: [clientListResponse.AdminCountry?.country_list?.data] })
    }, [])

    useEffect(() => {
        if (ServiceApiResponse?.message == "Register Successfully ") {
            stateHandler("loading", false)
        }
    }, [ServiceApiResponse])




    const UserTypeFunction = () => setUserType(!userType)

    const getFileName = (e) => {
        setFileName(e.target.files[0])
    }


    const stateHandler = (key, value) => {
        state[key] = value;
        setState({ ...state });
    };
    const stateHandlerIndividualData = (key, value) => {
        IndividualData[key] = value;
        setIndividualData({ ...IndividualData });
    };





    const submitCompanyFormData = (e, data) => {
        let formData = new FormData();

        if (userType) {
            formData.append("id", props.editData !== '' ? props.editData.id : 1);
            formData.append("email_id", state.person_email);
            formData.append("service_required_country", state.country_services);
            formData.append("phone_no", state.person_phone_number);
            formData.append("id_number", state.person_id_number);
            formData.append("designation", state.enter_designation);
            formData.append("full_name", state.contact_person);
            formData.append("address", state.address);
            formData.append("comp_legal_name", state.company_name);
            formData.append("comp_regist_no", state.registration_no);
            formData.append("country_incop", state.country_incorporation);
            formData.append("industry_opratn", state.industry_name);
            formData.append("services", state.services);
            formData.append("type", 1);
            formData.append("regType", "1");
            formData.append("role_id", "3");
            formData.append("parent_id", "5");
            formData.append("comp_incop_certif_url", state.comp_incop_certif_url);
            formData.append("logo", state.logo);
        }
        else {
            formData.append("id", props.editData !== '' ? props.editData.id : 1);
            formData.append("full_name", IndividualData.client_name);
            formData.append("phone_no", IndividualData.person_phone_number_ind);
            formData.append("id_number", IndividualData.id_number);
            formData.append("email_id", IndividualData.email_id);
            formData.append("address", IndividualData.address);
            formData.append("country_incop", IndividualData.country_incorporation_ind);
            formData.append("services", IndividualData.services_ind);
            formData.append("type", 2);
            formData.append("regType", "2");
            formData.append("role_id", "4");
            formData.append("parent_id", "5");
            formData.append("comp_incop_certif_url", IndividualData.certif_id_ind);
        }
        if (state.person_email && state.country_services && state.person_phone_number && state.person_id_number && state.enter_designation && state.contact_person && state.address && state.company_name && state.registration_no && state.country_incorporation && state.industry_name && state.services && state.comp_incop_certif_url && state.logo && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(state.person_email) && (/^[0-9]{6,12}$/i).test(state.person_id_number) && (/^[0-9]{6,12}$/i).test(state.person_phone_number)) {
            // (/^[A-Za-z0-9]{5,20}$/i)
            stateHandler("loading", true)
            if (props.editData !== '' && props.editData.role_id == "3") {

                dispatch(ClientEditAction(formData))

                // dispatch(ClientRegisterAction(formData))
            } else {

                dispatch(ClientRegisterAction(formData))
            }

        }

        if (IndividualData.client_name && IndividualData.person_phone_number_ind && IndividualData.id_number && IndividualData.email_id && IndividualData.address && IndividualData.country_incorporation_ind && IndividualData.services_ind && IndividualData.certif_id_ind && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(IndividualData.email_id) && (/^[0-9]{6,12}$/i).test(IndividualData.id_number) && (/^[0-9]{6,12}$/i).test(IndividualData.person_phone_number_ind)) {

            stateHandler("loading", true)
            if (props.editData !== '' && props.editData.role_id == "4") {
                dispatch(ClientEditAction(formData))

                // dispatch(ClientRegisterAction(formData))
            } else {

                dispatch(ClientRegisterAction(formData))
            }

        }
    }

    return (
        <>
            <div className="user-type-radio-btn">
                <label className="radiobx-btn">
                    <input type="radio" name="userType" onChange={UserTypeFunction} defaultChecked={true} />
                    <span>
                        <i></i>
                        Company
                    </span>
                </label>
                <label className="radiobx-btn">
                    <input type="radio" name="userType" onChange={UserTypeFunction} />
                    <span>
                        <i></i>
                        Individual
                    </span>
                </label>
            </div>
            {
                userType ?
                    // company
                    <div className='row'>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="company_name"
                                placeholder="Enter Name"
                                labelText="Company Name"
                                pattern=".{1,}"
                                error="Company Name is Required!"
                                required="required"
                                value={state.company_name}
                                onChange={({ target }) =>
                                    stateHandler("company_name", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                pattern=".{1,}"
                                type="text"
                                name="registration_no"
                                placeholder="Enter Registration No."
                                labelText="Company Registration No."
                                error="Registration No. Required!"
                                required="required"
                                value={state.registration_no}
                                onChange={({ target }) =>
                                    stateHandler("registration_no", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <SelectBox
                                name="country_incorporation"
                                required="required"
                                labelText="Country of Incorporation"
                                error="Please Select Country!"
                                onChange={({ target }) => {
                                    stateHandler("country_incorporation", target.value)
                                }}
                                optionData={
                                    <>
                                        <option value="" hidden>Select Country</option>
                                        {state.country_incorporation != '' ? <option value={state.country_incorporation} hidden selected>{ListData?.countryListData[0]?.map((item, index) => item.id == state.country_incorporation ? item.country_name : "")}</option> : ''}
                                        {ListData?.countryListData[0]?.map((item, index) => {
                                            return (
                                                <option value={item.id} >{item.country_name}</option>
                                            )
                                        })}


                                    </>
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <SelectBox
                                name="industry_name"
                                required="required"
                                labelText="Industry of Operation"
                                error="Please Select Industry!"
                                onChange={({ target }) => {
                                    stateHandler("industry_name", target.value)
                                }}
                                optionData={
                                    <>
                                        <option value="" hidden>Select Industry</option>
                                        {state.industry_name != '' ? <option value={state.industry_name} hidden selected>{industriesData?.map((item, index) => item.id == state.industry_name ? item.industry_name : "")}</option> : ''}
                                        {industriesData?.map((item, index) => {
                                            return (
                                                <option value={item.id} >{item.industry_name}</option>
                                            )
                                        })}


                                    </>
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="contact_person"
                                placeholder="Enter Name"
                                labelText="Contact Person Name"
                                pattern=".{1,}"
                                error="Contact Person Name Required!"
                                required="required"
                                value={state.contact_person}
                                onChange={({ target }) =>
                                    stateHandler("contact_person", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="person_email"
                                placeholder="Enter email"
                                labelText="Contact Person Email"
                                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                                error="It should be a valid email address!"
                                required="required"
                                value={state.person_email}
                                onChange={({ target }) =>
                                    stateHandler("person_email", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="person_id_number"
                                placeholder="Enter ID Number"
                                labelText="Contact Person ID No."
                                pattern="^[0-9]{5,20}$"
                                error="Contact Person ID min(5)-max(20) Required!"
                                required="required"
                                value={state.person_id_number}
                                onChange={({ target }) =>
                                    stateHandler("person_id_number", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="person_phone_number"
                                placeholder="Enter Phone No."
                                labelText="Contact Person Phone No."
                                pattern="^[0-9]{6,12}$"
                                error="Valid Contact Person Phone No. Required!"
                                required="required"
                                value={state.person_phone_number}
                                onChange={({ target }) =>
                                    stateHandler("person_phone_number", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="enter_designation"
                                placeholder="Enter Designation"
                                labelText="Contact Person Designation"
                                pattern=".{1,}"
                                error="Designation is Required!"
                                required="required"
                                value={state.enter_designation}
                                onChange={({ target }) =>
                                    stateHandler("enter_designation", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="address"
                                placeholder="Enter Address"
                                labelText="Address"
                                pattern=".{1,}"
                                error="Address is Required!"
                                required="required"
                                value={state.address}
                                onChange={({ target }) =>
                                    stateHandler("address", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <div className='form-group'>
                                <label htmlFor="">Countries where services are required</label>
                                <MultiSelect
                                    value={MultiSelected}
                                    onChange={setMultiSelected}
                                    className='react-select-bx'
                                    name="sub_service"
                                    labelledBy="Select Country"
                                    options={
                                        [
                                            { value: 4, label: 'Kenya' },
                                            { value: 5, label: 'Uganda' },
                                            { value: 6, label: 'Nigeria' },
                                        ]
                                    }
                                />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='form-group'>
                                <label htmlFor="">Services Required</label>
                                <MultiSelect
                                    value={MultiSelected}
                                    onChange={setMultiSelected}
                                    className='react-select-bx'
                                    name="sub_service"
                                    labelledBy="Select Industry"
                                    options={
                                        [
                                            { value: 4, label: 'Employment Background Checks' },
                                            { value: 5, label: 'Know Your Customer' },
                                            { value: 6, label: 'Recruitment' },
                                        ]
                                    }
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <FileUpload
                                labelText="Upload Company Incorporation Certificate"
                                name="comp_incop_certif_url"
                                accept='Jpeg, PNG, PDF'
                                error="Please Upload Company Certificate!"
                                required="required"
                            />
                        </div>
                        <div className='col-lg-6'>
                            <FileUpload
                                labelText="Logo"
                                name="logo"
                                accept='Jpeg, PNG, PDF'
                                error="Please Upload Logo!"
                                required="required"
                            />
                        </div>
                    </div>
                    :
                    // individual
                    <div className='row'>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="client_name"
                                placeholder="Enter Name"
                                labelText="Client Name"
                                pattern=".{1,}"
                                error="Client Name is Required!"
                                required="required"
                                value={IndividualData.client_name}
                                onChange={({ target }) =>
                                    stateHandlerIndividualData("client_name", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="person_phone_number_ind"
                                placeholder="Enter Phone Number"
                                labelText="Contact Person Phone Number"
                                pattern="^[0-9]{5,20}$"
                                error="Phone Number Required!"
                                required="required"
                                value={IndividualData.person_phone_number_ind}
                                onChange={({ target }) =>
                                    stateHandlerIndividualData("person_phone_number_ind", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="id_number"
                                placeholder="Enter ID Number"
                                labelText="ID Number"
                                pattern="^[0-9]{5,20}$"
                                error="ID Number Required!"
                                required="required"
                                value={IndividualData.id_number}
                                onChange={({ target }) =>
                                    stateHandlerIndividualData("id_number", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="email_id"
                                placeholder="Enter Email"
                                labelText="Contact Person Email"
                                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                                error="It should be a valid email address!"
                                required="required"
                                value={IndividualData.email_id}
                                onChange={({ target }) =>
                                    stateHandlerIndividualData("email_id", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <InputText
                                type="text"
                                name="address"
                                placeholder="Enter Address"
                                labelText="Address"
                                pattern=".{1,}"
                                error="Address Required!"
                                required="required"
                                value={IndividualData.address}
                                onChange={({ target }) =>
                                    stateHandlerIndividualData("address", target.value)
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <SelectBox
                                name="country_incorporation_ind"
                                required="required"
                                labelText="Resident Country"
                                error="Please Select Country!"
                                onChange={({ target }) =>
                                    stateHandlerIndividualData("country_incorporation_ind", target.value)
                                }
                                optionData={
                                    <>
                                        <option value="" hidden>Select Country</option>
                                        {IndividualData.country_incorporation_ind != '' ? <option value={IndividualData.country_incorporation_ind} hidden selected>{ListData?.countryListData[0]?.map((item, index) => item.id == IndividualData.country_incorporation_ind ? item.country_name : "")}</option> : ''}
                                        {ListData?.countryListData[0]?.map((item, index) => {

                                            return (
                                                <option value={item.id} >{item.country_name}</option>
                                            )
                                        })}
                                    </>
                                }
                            />
                        </div>
                        <div className='col-lg-3'>
                            <div className='form-group'>
                                <label htmlFor="">Services Required</label>
                                <MultiSelect
                                    value={MultiSelected}
                                    onChange={setMultiSelected}
                                    className='react-select-bx'
                                    name="sub_service"
                                    labelledBy="Select Industry"
                                    options={
                                        [
                                            { value: 4, label: 'Employment Background Checks' },
                                            { value: 5, label: 'Know Your Customer' },
                                            { value: 6, label: 'Recruitment' },
                                        ]
                                    }
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <FileUpload
                                fileName={IndividualData.certif_id_ind && IndividualData.certif_id_ind.name}
                                labelText="Upload Copy of ID card"
                                onChange={({ target }) =>
                                    stateHandlerIndividualData("certif_id_ind", target.files[0])
                                }

                                name="certif_id_ind"
                                accept='Jpeg, PNG, PDF'
                                error="Please Upload ID!"
                                required="required"
                            />
                        </div>
                    </div>
            }

            <Modal.Footer>
                <Button
                    btnName="Submit"
                    type="submit"
                    className="btn-secondary"
                    onClick={(event) => {
                        {
                            submitCompanyFormData()
                            // props.clickButton(event,state)
                        }
                    }}
                    isDisabled={state.loading}
                    isLoading={state.loading}
                />
            </Modal.Footer>
        </>
    );
}


export default MySelf;