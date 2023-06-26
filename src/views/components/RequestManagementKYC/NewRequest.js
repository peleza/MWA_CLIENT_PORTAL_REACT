import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown, Form, Modal } from 'react-bootstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import { TbUrgent } from 'react-icons/tb'
import '../../components/Button/Button.scss';
import { FileUpload, InputText, SelectBox } from '../InputText/InputText';
import { Button } from '../Button/Button';
import '../../pages/PsmtDashboard/BackgroundCheck/BackgroundCheck.scss'
import { Link } from 'react-router-dom';
import { TbEye } from 'react-icons/tb'

const NewRequest = () => {
    const [fileName, setFileName] = useState();
    const [NewRequestModalState, setNewRequestModalState] = useState(false);
    const [ReportModalState, setReportModalState] = useState(false);
    const [AssignModalState, setAssignModalState] = useState(false);

    
    const AssignModalClose = () => setAssignModalState(false);
    const AssignModalShow = () => setAssignModalState(true);
    const NewRequestModalClose = () => setNewRequestModalState(false);
    const NewRequestModalShow = () => {
        setNewRequestModalState(true);
        setReportModalState(false);
    }
    const ReportModalClose = () => setReportModalState(false);
    const ReportModalShow = () => setReportModalState(true);

    const getFileName = (e) => setFileName(e.target.files[0])

    const profileID = () => {
        console.log("profileID");
        setNewRequestModalState(false);
        setReportModalState(true);
    }

    return (
        <>
            <MaterialTable
                title="New Requests"
                columns={[
                    { title: 'Profile #', field: 'ref' },
                    { title: 'Client', field: 'client' },
                    {
                        title: 'Requestor', field: 'requestor',
                        render: (rowData) => (
                            <div className='profileWithName'>
                                {
                                    rowData.Requestor.profileImg ?
                                        <img src={rowData.Requestor.profileImg} className="tableUserImage" alt="profile" />
                                        :
                                        <span className='namePlaceholder'>{rowData.Requestor.requestorName[0].split()}</span>
                                }
                                <span>{rowData.Requestor.requestorName}</span>
                            </div>
                        )
                    },
                    { title: 'Date Requested', field: 'date_requested' },
                    { title: 'Candidate / Company name', field: 'candidate_name' },
                    {
                        title: 'Country', field: 'country',
                        render: (rowData) => {
                            return (
                                <img src={rowData.country} alt="flag" width={30} />
                            )
                        }
                    },
                    { title: 'Package', field: 'package' },
                    {
                        title: 'Action', field: 'Action',
                        render: (rowData) => {
                            return (
                                <Dropdown className='tableActionDropdown'>
                                    <Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <button className='dropdown-item' onClick={AssignModalShow}><MdOutlineAssignmentTurnedIn /> Assign</button>
                                        <button className='dropdown-item'><TbUrgent /> Mark as Urgent</button>
                                        <Link className='dropdown-item' to={`/pidva/request-detail/12`}><TbEye /> View</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            )
                        }
                    }
                ]}
                data={[
                    { ref: "PIL001A", client: "Altima", Requestor: { profileImg: "", requestorName: "Kody Bass" }, date_requested: "13 Jun 21", candidate_name: "John Doe", country: "/images/flag1.png", package: "Standard", },
                    { ref: "EAB081Z", client: "EABL", Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Clare Wood" }, date_requested: "14 Jun 21 ", candidate_name: "Jane Smith", country: "/images/flag1.png", package: "Experienced", },
                    { ref: "TWG191M", client: "Twiga", Requestor: { profileImg: "", requestorName: "Talan Luna" }, date_requested: "16 Jun 21 ", candidate_name: "John Smith", country: "/images/flag1.png", package: "Entry", },
                ]}
                actions={[
                    {
                        icon: ' New Request',
                        iconProps: { className: 'btn btn-secondary FreeAction' },
                        isFreeAction: true,
                        onClick: (event) => { NewRequestModalShow() }
                    }
                ]}
            />

            <Modal show={NewRequestModalState} onHide={NewRequestModalClose} centered className='commonModal modal-90w'>
                <Modal.Header closeButton>
                    <Modal.Title>Candidate Details & Documents Upload</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <SelectBox
                                    name="client_name"
                                    labelText="Select Client"
                                    FormGroupClass="mb-3"
                                    optionData={
                                        <>
                                            <option hidden>Select Client</option>
                                            <option value=""> Altima </option>
                                            <option value=""> Jhon </option>
                                        </>
                                    }
                                />
                            </div>
                            <div className='col-lg-4'>
                                <SelectBox
                                    name="package"
                                    labelText="Select Package"
                                    FormGroupClass="mb-3"
                                    optionData={
                                        <>
                                            <option hidden>Select Package</option>
                                            <option value=""> Standard </option>
                                            <option value=""> Entry </option>
                                        </>
                                    }
                                />
                            </div>
                            <div className='col-lg-4'>
                                <InputText
                                    type="text"
                                    name="ref"
                                    placeholder="Enter No."
                                    labelText="Profile #"
                                    onChange={profileID}
                                    pattern=".{1,}"
                                    error="Profile No. is Required!"
                                    required="required"
                                    defaultValue="PIL001A"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <InputText
                                    type="text"
                                    name="ref"
                                    placeholder="ID Number"
                                    labelText="National ID Number"
                                    pattern=".{1,}"
                                    error="National ID Number is Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <InputText
                                    type="text"
                                    name="ref"
                                    placeholder="Enter Candidate Name"
                                    labelText="Candidate Name"
                                    pattern=".{1,}"
                                    error="Candidate Name is Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <SelectBox
                                    name="Country"
                                    placeholder="Country"
                                    labelText="Citizenship"
                                    FormGroupClass="mb-3"
                                    optionData={
                                        <>
                                            <option hidden>Select Citizenship</option>
                                            <option value=""> Kenya </option>
                                            <option value=""> China </option>
                                        </>
                                    }
                                />
                            </div>
                            <div className='col-lg-3'>
                                <FileUpload
                                    fileName={fileName && fileName.name}
                                    labelText="Consent Form"
                                    onChange={getFileName}
                                    name="consent_form"
                                    accept='Jpeg, PNG, PDF'
                                    error="Please Upload Company Certificate!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-3'>
                                <FileUpload
                                    fileName={fileName && fileName.name}
                                    labelText="CV Copy"
                                    onChange={getFileName}
                                    name="consent_form"
                                    accept='Jpeg, PNG, PDF'
                                    error="Please Upload CV Copy!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-3'>
                                <FileUpload
                                    fileName={fileName && fileName.name}
                                    labelText="Education Certificate(s)"
                                    onChange={getFileName}
                                    name="consent_form"
                                    accept='Jpeg, PNG, PDF'
                                    error="Please Upload Education Certificate(s)!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-3'>
                                <InputText
                                    type="text"
                                    name="phone_number"
                                    placeholder="Enter Phone Number"
                                    labelText="Phone Number"
                                    pattern=".{1,}"
                                    error="Phone Number is Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-12'></div>
                            <div className='col-lg-4'>
                                <InputText
                                    type="text"
                                    name="ref"
                                    placeholder="Enter Building Name"
                                    labelText="Office Address"
                                    pattern=".{1,}"
                                    error="Building Name is Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <InputText
                                    type="text"
                                    name="ref"
                                    placeholder="Enter House No."
                                    labelText="&nbsp;"
                                    pattern=".{1,}"
                                    error="House No. is Required!"
                                    required="required"
                                />
                            </div>
                            <div className='col-lg-4'>
                                <InputText
                                    type="text"
                                    name="ref"
                                    placeholder="Enter Estate"
                                    labelText="&nbsp;"
                                    pattern=".{1,}"
                                    error="Estate is Required!"
                                    required="required"
                                />
                            </div>
                        </div>

                        <h2>Consent Authorization</h2>
                        <div className='AuthorizationBx'>
                            <div className="remember-forgot-password">
                                <label className="radio-check-btn checkbox-btn mb-0">
                                    <input type="checkbox" name="t_c" pattern='^([Tt][Rr][Uu][Ee])$' />
                                    <span>
                                        <i></i>
                                        Ensure Candidate has provided written consent to conduct background checks
                                    </span>
                                </label>
                            </div>

                            <Button
                                btnName="Submit Request"
                                type="submit"
                                className="btn-secondary"
                            />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={ReportModalState} onHide={ReportModalClose} centered className='commonModal form-modal'>
                <Modal.Header closeButton>
                    <Modal.Title>Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>There is an existing report for <strong>Jen Ali, of ID National no. 123456</strong>, would you like to view it?</h4>
                    <MaterialTable
                        title=""
                        columns={[
                            { title: 'Check', field: 'check' },
                            { title: 'Institution', field: 'oxford_university' },
                            { title: 'Report Date', field: 'report_date' },
                        ]}
                        data={[
                            { check: "Education", oxford_university: "Oxford University", report_date: "13 Jun 21", },
                            { check: "Education", oxford_university: "Oxford University", report_date: "13 Jun 21", },
                            { check: "Education", oxford_university: "Oxford University", report_date: "13 Jun 21", },
                        ]}
                        options={{
                            search: false,
                            paging: false
                        }}
                    />
                    <div className='get-report mt-4'>
                        <h4>Pay KES 3,000 for this report</h4>
                        <button>Get Report</button>
                        {/* <h4>Credits worth KES 3,000 will be deducted</h4>
                        <button>Get Report</button> */}
                    </div>
                </Modal.Body>
                <Modal.Footer className='mt-4'>
                    <Button
                        btnName="Make new request"
                        type="submit"
                        className="btn-secondary btn-sm"
                        onClick={NewRequestModalShow}
                    />
                </Modal.Footer>
            </Modal>

            <Modal show={AssignModalState} onHide={AssignModalClose} centered className='commonModal form-modal AssignModal'>
                <Modal.Header closeButton>
                    <Modal.Title>Assign</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='currentPackage'>
                        <h2>Standard Package</h2>
                    </div>
                    <MaterialTable
                        title=""
                        columns={[
                            { title: 'Check', field: 'check' },
                            {
                                title: 'Verification Specialist', field: 'verification_specialist',
                                render: (rowData) => {
                                    return (
                                        <SelectBox
                                            name="country_incop"
                                            required="required"
                                            FormGroupClass="mb-0"
                                            error="Please select country of incorporation!"
                                            optionData={
                                                rowData.verification_specialist.map((value, index) => {
                                                    return (
                                                        <option key={index}>{value.name}</option>
                                                    )
                                                })
                                            }
                                        />
                                    )
                                }
                            },
                            {
                                title: 'Quality Assurance', field: 'quality_assurance',
                                render: (rowData) => {
                                    return (
                                        <SelectBox
                                            name="country_incop"
                                            required="required"
                                            FormGroupClass="mb-0"
                                            error="Please select country of incorporation!"
                                            optionData={
                                                rowData.quality_assurance.map((value, index) => {
                                                    return (
                                                        <option key={index}>{value.name}</option>
                                                    )
                                                })
                                            }
                                        />
                                    )
                                }
                            },
                            {
                                title: 'Priority', field: 'priority',
                                render: (rowData) => {
                                    return (
                                        <SelectBox
                                            name="country_incop"
                                            required="required"
                                            FormGroupClass="mb-0"
                                            error="Please select country of incorporation!"
                                            optionData={
                                                rowData.priority.map((value, index) => {
                                                    return (
                                                        <option key={index}>{value.name}</option>
                                                    )
                                                })
                                            }
                                        />
                                    )
                                }
                            },
                        ]}
                        data={[
                            { check: "Education", verification_specialist: [{ name: "Faith Awu" }, { name: "Awu" }], quality_assurance:  [{ name: "Dian Kwa" }, { name: "Awu" }], priority:  [{ name: "Urgent" }, { name: "Normal" }], },
                            { check: "Education", verification_specialist: [{ name: "Faith Awu" }, { name: "Awu" }], quality_assurance:  [{ name: "Dian Kwa" }, { name: "Awu" }], priority:  [{ name: "Urgent" }, { name: "Normal" }], },
                            { check: "Education", verification_specialist: [{ name: "Faith Awu" }, { name: "Awu" }], quality_assurance:  [{ name: "Dian Kwa" }, { name: "Awu" }], priority:  [{ name: "Urgent" }, { name: "Normal" }], },
                        ]}
                        options={{
                            search: false,
                            paging: false
                        }}
                    />
                </Modal.Body>
                <Modal.Footer className='mt-4'>
                    <Button
                        btnName="Assign"
                        type="submit"
                        className="btn-secondary btn-sm"
                    />
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default NewRequest;