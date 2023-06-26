import React, { useState } from 'react';
import { Dropdown } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { SelectBox } from '../InputText/InputText';
import PsmtSidebar from '../Sidebars/PsmtSidebar'
import PsmtFooter from '../PsmtFooter/PsmtFooter';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutAction } from '../../../redux/actions/authAction';
import { BiUserCircle, BiLogOutCircle } from 'react-icons/bi';
import { FcMoneyTransfer } from 'react-icons/fc';
import { MdNotificationsActive, MdOutlinePayment } from 'react-icons/md';
import { GrTicket } from 'react-icons/gr';
// import  {IoNotifications} from 'react-icons/io';
import "./PsmtHeader.scss";


const PsmtHeader = ({ border }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    console.log("location", location);

    const GetTitle = useSelector(state => state.title.title)

    const [menu, setMenu] = useState(false);

    const menuToggle = () => {
        setMenu(!menu);
    }

    const Logout = () => {
        dispatch(LogoutAction())
    };
    return (
        <>
            <header className={`mwDashboardHeader ${border}`}>
                <nav>
                    <div className='dashboard-nav-left'>
                        <Link to="/" className="logo">
                            <img src="/images/m-logo.svg" className='white-icon' alt="mw logo" />
                        </Link>
                        <h1 className='dashboard-title'>{GetTitle}</h1>
                    </div>
                    <div className='dashboard-nav-right'>
                        <ul>
                            <li className='filter-data'>
                                {
                                    location.pathname === "/psmt/payments-postpay" || location.pathname === "/psmt/payments-prepay"
                                        ?
                                        null
                                        :
                                        location.pathname === "/psmt/dashboard" ?
                                            <label>What would you like to do today?</label>
                                            :
                                            <label className='cursor-pointer' onClick={() => history.push("/psmt/payments-postpay")}><FcMoneyTransfer /> 8,976 Credits</label>

                                }

                                {
                                    location.pathname === "/psmt/background-check" || location.pathname === "/psmt/dashboard" ?
                                        <SelectBox
                                            name="filter_data"
                                            FormGroupClass="mb-0"
                                            optionData={
                                                <>
                                                    <option value="">Last 7 days</option>
                                                    <option value="1"> This month  </option>
                                                    <option value="1"> Last Month  </option>
                                                    <option value="1"> This Quarter  </option>
                                                    <option value="1"> Last Quarter  </option>
                                                    <option value="1"> Half Year  </option>
                                                    <option value="1"> This Year  </option>
                                                    <option value="1"> Last Year  </option>
                                                </>
                                            }
                                        />
                                        :
                                        null
                                }
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
                                    <Dropdown.Toggle className="user-dropdown-btn withProfilePic" variant="" id="user-dropdown">
                                        <img src="/images/dummy-profile.jpg" alt="user" />
                                        <span>Rob Fernandes</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link to="/psmt/my-profile" className="dropdown-item"><BiUserCircle /> My Profile</Link>
                                        <Link to="/psmt/company-profile" className="dropdown-item"><BiUserCircle /> Company Profile</Link>
                                        <Link to="/psmt/tickets" className="dropdown-item"><GrTicket /> Support Ticket</Link>
                                        <Link to="/psmt/payments-postpay" className="dropdown-item"><MdOutlinePayment /> Payments</Link>
                                        <button className="dropdown-item" onClick={Logout}><BiLogOutCircle /> Logout</button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <PsmtSidebar />
            <PsmtFooter />
        </>
    );
}



export default PsmtHeader;
