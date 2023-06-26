import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './PsmtSidebar.scss';

const PsmtSidebar = () => {
    return (
        <>
            <ul className='DashboardSidebar'>
                <li> <NavLink to="/psmt/dashboard" activeClassName="active" exact><span><img src="/images/dashboard-icon.svg" alt="Dashboard" /></span> Dashboard</NavLink> </li>
                <li>
                    <NavLink to="/psmt/background-check" activeClassName="active" exact> <span><img src="/images/background-check-icon.svg" alt="Background Check" /></span> BGC Dashboard </NavLink>
                    <ul className='sidebar-dropdown-list'>
                        <li>
                            <Link to="/psmt/background-check">Dashboard</Link>
                            <Link to="/psmt/make-a-request">Make a Request</Link>
                            <Link to="/psmt/reports">View Reports</Link>
                            <Link to="/">Metrics</Link>
                        </li>
                    </ul>
                </li>
                <li> <NavLink to="/psmt/kyc-dashboard" activeClassName="active" exact><span><img src="/images/company-kyc-icon.svg" alt="Company KYC" /></span> KYC Dashboard</NavLink>
                    <ul className='sidebar-dropdown-list'>
                        <li>
                            <Link to="/psmt/kyc-dashboard">Dashboard</Link>
                            <Link to="/psmt/kyc-make-a-request">Make a Request</Link>
                            <Link to="/psmt/kyc-reports">KYC Reports</Link>
                            <Link to="/">Metrics</Link>
                        </li>
                    </ul>
                </li>
                <li> <NavLink to="/psmt/recruitment" activeClassName="active" exact><span><img src="/images/recruitment-icon.svg" alt="Recruitment" /></span> Recruitment</NavLink> </li>
                <li> <NavLink to="/psmt/analytics-information-reports" activeClassName="active" exact><span><img src="/images/reports-icon.svg" alt="Information Reports" /></span> Analytics & Information Reports</NavLink> </li>
                <li className='mt-auto'> <button><span><img src="/images/logout.svg" alt="Dashboard" /></span></button> </li>
            </ul>
        </>
    );
}


export default PsmtSidebar;