import React, { useEffect, useState } from 'react';
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SelectBox } from '../InputText/InputText';
import PidvaSidebar from '../Sidebars/PidvaSidebar';
import PsmtFooter from '../PsmtFooter/PsmtFooter';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutAction } from '../../../redux/actions/authAction';
import "./PsmtHeader.scss";
import { BiLogOutCircle, BiGlobe, BiCategory, BiUserCircle } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import NotificationCol from '../NotificationCol/NotificationCol';
import { MdNotificationsActive } from 'react-icons/md';
import { FaIndustry } from 'react-icons/fa';
import { GrCurrency } from 'react-icons/gr';


const PidvaHeader = () => {
    const dispatch = useDispatch();

    const getCurrentUser = useSelector(state => state.auth.set_user)

    const [RecentActivitiesDrawer, setRecentActivitiesDrawer] = useState(false);

    const RecentActivitiesDrawerToggle = () => {
        setRecentActivitiesDrawer(!RecentActivitiesDrawer);
    }

    const Logout = () => {
        dispatch(LogoutAction())
    };


    return (
        <>
            <header className={`mwDashboardHeader pidvaHeader ${getCurrentUser.role_id === 1 ? "AdminHeader" : null}`}>
                <nav>
                    <div className='dashboard-nav-left'>
                        <Link to="/" className="logo">
                            <img src="/images/mw-logo.svg" alt="mw logo" />
                        </Link>
                        <h4 className='dashboard-title'>Hi, Welcome Back!</h4>
                    </div>
                    <div className='dashboard-nav-right'>
                        <ul>
                            <li className='filter-data'>
                                <SelectBox
                                    name="filter_data"
                                    FormGroupClass="mb-0"
                                    optionData={
                                        <>
                                            <option value="" >Today</option>
                                            <option value="">Last 7 days</option>
                                            <option value="1"> Last Month</option>
                                        </>
                                    }
                                />
                            </li>
                            <li className='notification-bx'>
                                <Dropdown>
                                    <Dropdown.Toggle className="notification-dropdown common-header-btn" variant="" id="notification-dropdown">
                                        <img src="/images/notification.svg" alt="notification" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link to="/" className="dropdown-item">
                                            <span><MdNotificationsActive /></span>
                                            <div>
                                                <p>Your visit has been rescheduled.</p>
                                                <small>08/20/2020</small>
                                            </div>
                                        </Link>
                                        <Link to="/" className="dropdown-item">
                                            <span><MdNotificationsActive /></span>
                                            <div>
                                                <p>Trial Application Rescheduled For Screening</p>
                                                <small>08/20/2020</small>
                                            </div>
                                        </Link>
                                        <Link to="/" className="dropdown-item">
                                            <span><MdNotificationsActive /></span>
                                            <div>
                                                <p>Your visit has been rescheduled.</p>
                                                <small>08/20/2020</small>
                                            </div>
                                        </Link>
                                        <Link to="/" className="dropdown-item">
                                            <span><MdNotificationsActive /></span>
                                            <div>
                                                <p>Trial Application Rescheduled For Screening</p>
                                                <small>08/20/2020</small>
                                            </div>
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className='user-dropdown'>
                                <Dropdown>
                                    <Dropdown.Toggle className="user-dropdown-btn" variant="" id="user-dropdown">
                                        <img src="/images/user-icon.svg" className='white-icon' alt="user" />
                                        {getCurrentUser.role_id === 1
                                            ?
                                            <span>{getCurrentUser.first_name + ' ' + getCurrentUser.last_name}</span>
                                            :
                                            <span>{getCurrentUser.first_name + ' ' + getCurrentUser.middle_name + ' ' + getCurrentUser.last_name}</span>
                                        }
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {getCurrentUser.role_id === 1
                                            ?
                                            <>
                                                <Link to="/admin/my-profile" className="dropdown-item"><BiUserCircle /> My Profile</Link>
                                                <Link to="/admin/countries" className="dropdown-item"><BiGlobe /> Countries</Link>
                                                <Link to="/admin/category" className="dropdown-item"><BiCategory /> Category</Link>
                                                <Link to="/admin/industry" className="dropdown-item"><FaIndustry /> Industry</Link>
                                                <Link to="/admin/currency" className="dropdown-item"><GrCurrency /> Currency</Link>
                                            </>
                                            :
                                            getCurrentUser.role_id === 2 ?
                                                <Link to="/pidva/my-profile" className="dropdown-item"><BiUserCircle /> My Profile</Link>
                                                :
                                                null
                                        }
                                        <button className="dropdown-item" onClick={Logout}><BiLogOutCircle /> Logout</button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            {getCurrentUser.role_id === 2 ?
                                <li>
                                    <button className="hamburger-icon common-header-btn" onClick={RecentActivitiesDrawerToggle}>
                                        <img src="/images/hamburger-icon.svg" alt="icon" />
                                    </button>
                                </li>
                                :
                                null
                            }
                        </ul>
                    </div>
                </nav>
            </header>
            <PidvaSidebar />
            <PsmtFooter />
            <div className={RecentActivitiesDrawer ? "drawer active" : "drawer"}>
                <h2>Recent Activities <button onClick={RecentActivitiesDrawerToggle}><IoMdClose /></button></h2>
                <NotificationCol
                    image="notification-img1.png"
                    activity="Keith Jensen requested for background checks"
                    time="20 mins ago"
                />
                <NotificationCol
                    image="notification-img2.png"
                    activity="Harry Simpson viewed reports"
                    time="2 hours ago"
                />
                <NotificationCol
                    image="notification-img3.png"
                    activity="Sara Met requested KYC"
                    time="1 day ago"
                />
                <NotificationCol
                    image="notification-img1.png"
                    activity="Keith Jensen requested for background checks"
                    time="20 mins ago"
                />
                <NotificationCol
                    image="notification-img2.png"
                    activity="Harry Simpson viewed reports"
                    time="2 hours ago"
                />
                <NotificationCol
                    image="notification-img3.png"
                    activity="Sara Met requested KYC"
                    time="1 day ago"
                />
                <NotificationCol
                    image="notification-img1.png"
                    activity="Keith Jensen requested for background checks"
                    time="20 mins ago"
                />
                <NotificationCol
                    image="notification-img2.png"
                    activity="Harry Simpson viewed reports"
                    time="2 hours ago"
                />
                <NotificationCol
                    image="notification-img3.png"
                    activity="Sara Met requested KYC"
                    time="1 day ago"
                />
            </div>
        </>
    );
}

export default PidvaHeader;
