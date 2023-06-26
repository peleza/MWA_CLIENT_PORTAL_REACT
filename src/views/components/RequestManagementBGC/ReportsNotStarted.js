import React, { useState } from 'react';
import MaterialTable from "material-table";
import { Dropdown, Modal, Form } from 'react-bootstrap';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import { SelectBox } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { TbEye } from 'react-icons/tb'

const ReportsNotStarted = () => {
    const [ReassignModalState, setReassignModalState] = useState(false);

    const ReassignModalClose = () => setReassignModalState(false);
    const ReassignModalShow = () => setReassignModalState(true);
    return (
        <>
            <div className='low-space-table'>
                <MaterialTable
                    title="Reports Not Started"
                    columns={[
                        { title: 'Profile #', field: 'ref' },
                        { title: 'Client', field: 'client' },
                        { title: 'Requestor', field: 'requestor' },
                        { title: 'Date Requested', field: 'date_requested' },
                        { title: 'Candidate Name', field: 'candidate_name' },
                        { title: 'Country', field: 'country', },
                        { title: 'Package', field: 'package' },
                        { title: 'Package SLA', field: 'package_sla' },
                        { title: 'Check', field: 'check' },
                        { title: 'Check SLA', field: 'check_sla' },
                        { title: 'Check TAT', field: 'check_tat' },
                        { title: 'Status', field: 'status', },
                        { title: 'Verification Specialist', field: 'verification_specialist' },
                        { title: 'Reviewer', field: 'reviewer' },
                        { title: 'Action', field: 'Action', }
                    ]}
                    data={[
                        { ref: "PIL001A", client: "Altima", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Standard", package_sla: "5 Days", check: "Identity", check_sla: "2", check_tat: "1", status: 2, verification_specialist: "Faith Awuor", reviewer: "Diana Kwa", row_span: "3" },
                        { ref: "PIL001A", client: "Altima", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Entry", package_sla: "5 Days", check: "Education", check_sla: "2", check_tat: "1", status: 2, verification_specialist: "Faith Awuor", reviewer: "Diana Kwa", col_none: "1" },
                        { ref: "PIL001A", client: "Altima", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Standard", package_sla: "5 Days", check: "Employment", check_sla: "2", check_tat: "1", status: 2, verification_specialist: "Faith Awuor", reviewer: "Diana Kwa", col_none: "1" },
                        { ref: "PIL001A", client: "Altima", requestor: "Desiree Edwards", date_requested: "13 Jun 2021", candidate_name: "Nola Lily", country: "/images/flag1.png", package: "Entry", package_sla: "5 Days", check: "Criminal", check_sla: "2", check_tat: "1", status: 2, verification_specialist: "Faith Awuor", reviewer: "Diana Kwa", },
                    ]}
                    components={{
                        Row: ({ data }) => {
                            return (
                                <tr>
                                    {data.col_none === "1" ?
                                        null
                                        :
                                        <>
                                            <td rowSpan={data.row_span}>{data.ref}</td>
                                            <td rowSpan={data.row_span}>{data.client}</td>
                                            <td rowSpan={data.row_span}>{data.requestor}</td>
                                            <td rowSpan={data.row_span}>{data.date_requested}</td>
                                            <td rowSpan={data.row_span}>{data.candidate_name}</td>
                                            <td rowSpan={data.row_span}>
                                                <img src={data.country} alt="flag" width={30} />
                                            </td>
                                            <td rowSpan={data.row_span}>{data.package}</td>
                                            <td rowSpan={data.row_span}>{data.package_sla}</td>
                                        </>
                                    }
                                    <td>{data.check}</td>
                                    <td>{data.check_sla}</td>
                                    <td>{data.check_tat}</td>
                                    <td>
                                        {
                                            data.status === 1 ? <span className="badge badge-success">Complete</span> :
                                                data.status === 2 ? <span className="badge badge-primary">Not Started</span> : null
                                        }
                                    </td>
                                    <td>{data.verification_specialist}</td>
                                    <td>{data.reviewer}</td>
                                    <td>
                                        <Dropdown className='tableActionDropdown'>
                                            <Dropdown.Toggle variant="" id="action"> <BiDotsVerticalRounded /> </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <button className='dropdown-item' onClick={ReassignModalShow}><MdOutlineAssignmentTurnedIn /> Reassign</button>
                                                <Link className='dropdown-item' to={`/pidva/request-detail/12`}><TbEye /> View</Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            );
                        }
                    }}
                    options={{
                        exportButton: true
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
            </div>
        </>
    );
}
export default ReportsNotStarted;