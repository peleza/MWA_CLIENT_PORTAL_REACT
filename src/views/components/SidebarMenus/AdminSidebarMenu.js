import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { LogoutAction } from '../../../redux/actions/authAction';
import { BiUserCircle, BiCreditCardFront, BiData } from 'react-icons/bi'
import { AiOutlineSetting, AiOutlineTeam } from 'react-icons/ai'
import { TbReport } from 'react-icons/tb'
import { RiExchangeDollarLine, RiUserSettingsLine } from 'react-icons/ri'

const AdminSidebarMenu = () => {
    const dispatch = useDispatch();
    const [subMenuClicked, SetSubMenuClicked] = useState(false)

    const SubMenuToggle = (index) => {
        if(subMenuClicked === index) {
            return SetSubMenuClicked(false)
        }
        SetSubMenuClicked(index)
    }
    
    const Logout = () => {
        dispatch(LogoutAction())
    };
    return (
        <>
            <li> <NavLink to="/admin/dashboard" activeClassName="active" exact><span><img src="/images/dashboard-icon.svg" alt="Dashboard" /></span> Dashboard</NavLink> </li>
            <li className={`${subMenuClicked === 1 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(1)}><span><BiUserCircle /></span> SaaS Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/admin/sass-organization">SaaS Organization</Link>
                        <Link to="/admin/sass-users-requests">SaaS Pending Activation</Link>
                        <Link to="/admin/saas-retention">SaaS Retention</Link>
                        <Link to="/admin/saas-users">SaaS Users</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 2 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(2)}><span><AiOutlineSetting /></span> Service Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/admin/services">Service</Link>
                        <Link to="/admin/sub-service">Sub Service</Link>
                        <Link to="/admin/sub-service-requests">Sub Service Requests</Link>
                        <Link to="/admin/sub-service-pricing">Sub Service Pricing</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 3 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(3)}><span><AiOutlineTeam /></span> Team Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/admin/roles-management">Role Management</Link>
                        <Link to="/admin/team-members">Team Management</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 4 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(4)}><span><BiCreditCardFront /></span> Credit Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/admin/data-source-credits">Data Source Credits</Link>
                        <Link to="/admin/sass-credits">SaaS Credits</Link>
                        <Link to="/admin/sass-billing-contacts">SaaS Billing Contacts</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 5 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(5)}><span><RiUserSettingsLine /></span> Profiles Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/admin/candidates">Candidates</Link>
                        <Link to="/admin/companies">Companies</Link>
                        <Link to="/admin/merge-facility">Merge Facility</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 6 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(6)}><span><BiData /></span> Data Source Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/admin/data-source">Data Source</Link>
                        <Link to="/admin/data-source-configuration">Data Source Configuration</Link>
                        <Link to="/admin/data-source-360-view">Data Source 360 View </Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 7 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(7)}><span><TbReport /></span> Reports Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/admin/data-entry-form">Data Entry Form Creator</Link>
                        <Link to="/admin/data-report-creator">Report Creator</Link>
                    </li>
                </ul>
            </li>
            <li className={`${subMenuClicked === 8 ? "hasSubMenu active" : "hasSubMenu"}`}>
                <button onClick={() => SubMenuToggle(8)}><span><RiExchangeDollarLine /></span> Subscription Management </button>
                <ul className="sidebar-dropdown-list">
                    <li>
                        <Link to="/admin/subscription-management">Subscription Management</Link>
                        <Link to="/admin/saas-subscription/:id">Saas Subscription</Link>
                    </li>
                </ul>
            </li>

            {/* <li> <NavLink to="/admin/subscription-management" activeClassName="active" exact><span><RiExchangeDollarLine /></span> Subscription Management</NavLink> </li> */}
            <li> <button onClick={Logout}><span><img src="/images/logout.svg" alt="Dashboard" /></span> Logout</button> </li>
        </>
    );
}


export default AdminSidebarMenu;