import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../../../redux/actions/authAction';

const PidvaSidebarMenu = () => {
    const dispatch = useDispatch();
    const [subMenuClicked, SetSubMenuClicked] = useState(false)

    const SubMenuToggle = (index) => {
        if(subMenuClicked === index) {
            return SetSubMenuClicked(false)
        }
        console.log("SetSubMenuClicked", subMenuClicked);

        SetSubMenuClicked(index)
    }

    const Logout = () => {
        dispatch(LogoutAction())
    };
    return (
        <>
            <li> <NavLink to="/pidva/dashboard" activeClassName="active" exact><span><img src="/images/leader-board-icon.svg" alt="Dashboard" /></span> Leader Board</NavLink> </li>
            <li className={`${subMenuClicked === 1 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(1)}><span><img src="/images/request-management-icon.svg" alt="request-management" /></span> Requests Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/pidva/bgc">BGC</Link>
                        <Link to="/pidva/kyc">KYC</Link>
                    </li>
                </ul>
            </li>
            {/* <li> <NavLink to="/" activeClassName="active" exact><span><img src="/images/candidate-management.svg" alt="Candidate Management" /></span> Candidate Management</NavLink> </li> */}
            <li className={`${subMenuClicked === 2 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(2)}><span><img src="/images/client-management-icon.svg" alt="Client Management" /></span> Client Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/pidva/client-management">Client Management</Link>
                        <Link to="/pidva/client-request">Client Requests</Link>
                        <Link to="/pidva/client-contracts">Client Contracts</Link>
                        <Link to="/pidva/client-users">Client Users</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 3 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(3)}><span><img src="/images/service-management-icon.svg" alt="Service Management" /></span> Service Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/pidva/sub-services">Sub Service</Link>
                        <Link to="/pidva/sub-services-pricing">Sub Service Pricing</Link>
                        <Link to="/pidva/package">Package</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 4 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(4)}><span><img src="/images/team-management-icon.svg" alt="Team Management" /></span> Team Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/pidva/roles-management">Roles Management</Link>
                        <Link to="/pidva/team-management">Team Users</Link>
                        <Link to="/pidva/permissions">Permissions</Link>
                        <Link to="/pidva/team-productivity">Team Productivity</Link>
                        <Link to="/pidva/jobs-distribution">Jobs Distribution</Link>
                        <Link to="/pidva/clock-in-out">Clock In/Out</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 5 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(5)}><span><img src="/images/credit-management-icon.svg" alt="Credit Management" /></span> Credit Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/pidva/credit-management">Mwangaza Credits</Link>
                        <Link to="/pidva/manage-sub-services">Manage Sub Services</Link>
                        <Link to="/pidva/client-credits">Client Credits</Link>
                        <Link to="/pidva/create-billing-contact">Create Billing Contact</Link>
                        <Link to="/pidva/credits-purchases-postpay">Credits Purchases Post Pay</Link>
                        <Link to="/pidva/credits-purchases-prepay">Credits Purchases Prepay</Link>
                        <Link to="/pidva/client-invoices-postpay">Client Invoices Post Pay</Link>
                        <Link to="/pidva/bgc-requests">BGC Requests</Link>
                        <Link to="/pidva/kyc-requests">KYC Requests</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 6 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(6)}><span><img src="/images/credit-management-icon.svg" alt="Credit Management" /></span> Configurations </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/pidva/configurations">Education Configuration</Link>
                    </li>
                    <li>
                        <Link to="/pidva/education-faculty">Faculty</Link>
                    </li>
                    <li>
                        <Link to="/pidva/education-course">Course</Link>
                    </li>
                    <li>
                        <Link to="/pidva/education-specialization">Specialization</Link>
                    </li>
                    <li>
                        <Link to="/pidva/education-levels">Levels</Link>
                    </li>
                    <li>
                        <Link to="/pidva/education-awards">Awards</Link>
                    </li>
                    <li>
                        <Link to="/pidva/education-employment-configuration">Employment Configuration</Link>
                    </li>
                </ul>
            </li>
            <li> <NavLink to="/pidva/ticket-management" activeClassName="active" exact><span><img src="/images/ticket-management.svg" alt="Metrics" /></span> Ticket Management</NavLink> </li>
            <li> <NavLink to="/" activeClassName="active" exact><span><img src="/images/reports-icon.svg" alt="Metrics" /></span> Metrics</NavLink> </li>
            <li> <button onClick={Logout}><span><img src="/images/logout.svg" alt="Dashboard" /></span> Logout</button> </li>
        </>
    );
}


export default PidvaSidebarMenu;