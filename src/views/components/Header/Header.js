import React, { useState } from 'react';
import { Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Button, LinkButton } from "../Button/Button";
import { NavHashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../../../redux/actions/authAction';
import "./Header.scss";


const Header = ({ border }) => {
    const dispatch = useDispatch();

    const getCurrentUser = useSelector(state => state.auth.set_user)
    
    const userData = getCurrentUser.token
    const [menu, setMenu] = useState(false);

    const menuToggle = () => {
        setMenu(!menu);
    }

    const Logout = () => {
        dispatch(LogoutAction())
    };


    return (
        <header className={`mw-header ${border}`}>
            <div className="container-fluid">
                <nav>
                    <Link to="/" className="logo">
                        <img src="/images/mw-logo.svg" alt="mw logo" />
                    </Link>
                    <div className="nav-right">
                        <ul className={menu ? "active" : null}>
                            <li className="d-xl-none close-menu" onClick={menuToggle}><img src="/images/close.svg" alt="close" /></li>
                            <li className="sub-menu">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" variant=""> Products </Dropdown.Toggle>

                                    <Dropdown.Menu className="langDropdown-menu">
                                        <Link className='dropdown-item' to="/background-checks">Background Checks</Link>
                                        <Link className='dropdown-item' to="/kyc">KYC</Link>
                                        <Link className='dropdown-item' to="/insights-analytics">Insights & Analytics</Link>
                                        <Link className='dropdown-item' to="/recruitment">Recruitment</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li><NavLink to="">API</NavLink></li>
                            <li className="sub-menu">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" variant=""> Company </Dropdown.Toggle>

                                    <Dropdown.Menu className="langDropdown-menu">
                                        <NavHashLink className='dropdown-item' to="/company#about">About Us</NavHashLink>
                                        <NavHashLink className='dropdown-item' to="/company#coverage">Coverage</NavHashLink>
                                        <NavHashLink className='dropdown-item' to="/#contact">Contact Us</NavHashLink>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="sub-menu">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" variant=""> Resources </Dropdown.Toggle>

                                    <Dropdown.Menu className="langDropdown-menu">
                                        <Link className='dropdown-item' to="/faq">FAQ</Link>
                                        <Link className='dropdown-item' to="/blog">Blog</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li><NavLink to="/partners">Partners</NavLink></li>
                        </ul>
                        {userData
                            ?
                            <div className='right-bar'>
                                <LinkButton to={getCurrentUser.role_id === 1 ? "/admin/dashboard" : getCurrentUser.role_id === 2 ? "/pidva/dashboard" : null} className="btn-primary login-btn" text={<> <img src="/images/dashboard-icon.svg" className='icon-dark' alt="icon" /> Dashboard</>} />
                                <Button type="button" className="btn-secondary" btnName="Logout" onClick={Logout} />
                            </div>
                            :
                            <div className='right-bar'>
                                <LinkButton to="/login" className="btn-primary login-btn" text={<> <img src="/images/user-icon.svg" alt="icon" />Login</>} />
                                <LinkButton to="/signup" className="btn-secondary" text="Get Started" />
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </header>

    );
}



export default Header;
