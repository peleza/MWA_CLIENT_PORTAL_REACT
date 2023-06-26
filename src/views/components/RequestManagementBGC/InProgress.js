import React, { useState } from 'react';
import MaterialTable from '@material-table/core';
import { Dropdown, Modal, Form } from 'react-bootstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { SelectBox } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { TbEye } from 'react-icons/tb'
import { Link } from 'react-router-dom';

const InProgress = () => {
    const [ReassignModalState, setReassignModalState] = useState(false);

    const ReassignModalClose = () => setReassignModalState(false);
    const ReassignModalShow = () => setReassignModalState(true);
    return (
        <>
            <MaterialTable
                title="In Progress"
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
                    { title: 'Candidate Name', field: 'candidate_name' },
                    {
                        title: 'Country', field: 'country',
                        render: (rowData) => {
                            return (
                                <img src={rowData.country} alt="flag" width={30} />
                            )
                        }
                    },
                    { title: 'Package', field: 'package' },
                    { title: 'Check Assigned', field: 'check_assigned' },
                    { title: 'Check SLA', field: 'check_sla' },
                    { title: 'TAT', field: 'tat' },
                    { title: 'Verification Specialist', field: 'verification_specialist' },
                    { title: 'Reviewer', field: 'reviewer' },
                    {
                        title: 'Action', field: 'Action',
                        render: (rowData) => {
                            return (
                                <Dropdown className='tableActionDropdown'>
                                    <Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <button className='dropdown-item' onClick={ReassignModalShow}><MdOutlineAssignmentTurnedIn /> Reassign</button>
                                        <Link className='dropdown-item' to={`/pidva/request-detail/12`}><TbEye /> View</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            )
                        }
                    }
                ]}
                data={[
                    { ref: "PIL001A", client: "Altima", Requestor: { profileImg: "", requestorName: "Kody Bass" }, date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Standard", check_assigned: "Education", check_sla: "5 Days", tat: "2", verification_specialist: "Faith Awuor", reviewer: "Diana Kwa", },
                    { ref: "PIL001A", client: "Altima", Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Kody Bass" }, date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Standard", check_assigned: "Education", check_sla: "5 Days", tat: "2", verification_specialist: "Faith Awuor", reviewer: "Diana Kwa", },
                    { ref: "PIL001A", client: "Altima", Requestor: { profileImg: "/images/dummy-profile.jpg", requestorName: "Kody Bass" }, date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Standard", check_assigned: "Education", check_sla: "5 Days", tat: "2", verification_specialist: "Faith Awuor", reviewer: "Diana Kwa", },
                ]}
                options={{
                    exportButton: true,
                    exportMenu: [
                        {
                            label: "Export PDF",
                            exportFunc: (cols, datas) => ExportPdf(cols, datas, "Trasation Invoices"),
                        },
                        {
                            label: "Export CSV",
                            exportFunc: (cols, datas) => ExportCsv(cols, datas, "Trasation Invoices"),
                        },
                    ],
                }}
            />

            <Modal show={ReassignModalState} onHide={ReassignModalClose} centered className='commonModal form-modal AssignModal'>
                <Modal.Header closeButton>
                    <Modal.Title>Reassign</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        ]}
                        data={[
                            { check: "Education", verification_specialist: [{ name: "Faith Awu" }, { name: "Awu" }], quality_assurance: [{ name: "Dian Kwa" }, { name: "Awu" }], },
                        ]}
                        options={{
                            search: false,
                            paging: false
                        }}
                    />
                </Modal.Body>
                <Modal.Footer className='mt-4'>
                    <Button
                        btnName="Reassign"
                        type="submit"
                        className="btn-secondary btn-sm"
                    />
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default InProgress;