import React  from 'react';
import { Link } from 'react-router-dom';
import GetInTouchForm from '../GetInTouchForm/GetInTouchForm';
import BecomeAPartnerForm from '../BecomeAPartnerForm/BecomeAPartnerForm';
import { NavHashLink } from 'react-router-hash-link';
import './Footer.scss';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const currentYear = today.getFullYear()
    const location = useLocation();
    return (
        <>
            <div className="footer-bg">
                <section className="contact-section" id="contact">
                    <div className="container">
                        <div className="contact-bx">
                            {location.pathname == '/partners' ?
                                <BecomeAPartnerForm />
                                :
                                <GetInTouchForm />
                            }
                        </div>
                    </div>
                </section>

                <footer className='mw-footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 footer-bx'>
                                <h2>Quick Links </h2>
                                <ul className='quick-links column-count'>
                                    <li><Link to="/">API</Link></li>
                                    <li><Link to="/psmt/background-check">Background Checks</Link></li>
                                    <li><Link to="/">KYC</Link></li>
                                    <li><Link to="/psmt/analytics-information-reports">Insights & Analytics</Link></li>
                                    <li><Link to="/psmt/recruitment">Recruitment</Link></li>
                                    <li><NavHashLink to="/company#about">About Us</NavHashLink></li>
                                    <li><NavHashLink to="/company#coverage">Coverage</NavHashLink></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/partners">Partners</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-4 footer-bx'>
                                <h2>Terms </h2>
                                <ul className='quick-links'>
                                    <li><Link to="/">Data Protection & Privacy Policy</Link></li>
                                    <li><Link to="/">Terms and Conditions of Use</Link></li>
                                </ul>
                                <h2>Follow Us </h2>
                                <ul className='social-links'>
                                    <li><a target="_blank" href='/' rel="noreferrer"><img src="/images/facebook-icon.svg" alt="facebook" /></a></li>
                                    <li><a target="_blank" href='/' rel="noreferrer"><img src="/images/twitter-icon.svg" alt="twitter" /></a></li>
                                    <li><a target="_blank" href='/' rel="noreferrer"><img src="/images/instagram-icon.svg" alt="instagram" /></a></li>
                                    <li><a target="_blank" href='/' rel="noreferrer"><img src="/images/linkedin-icon.svg" alt="linkedin" /></a></li>
                                    <li><a target="_blank" href='/' rel="noreferrer"><img src="/images/youtube-icon.svg" alt="youtube" /></a></li>
                                    <li><a target="_blank" href='/' rel="noreferrer"><img src="/images/google-icon.svg" alt="google" /></a></li>
                                </ul>
                            </div>
                            <div className='col-lg-4 footer-bx'>
                                <h2>Our Location</h2>
                                <ul className='quick-links address-details'>
                                    <li><span>Email :</span> <a href="mailto:hello@mwangaza.africa">hello@mwangaza.africa</a></li>
                                    <li><span>Telephone :</span> <a href="tel:+254796111020">+254 796 111 020</a></li>
                                    <li><span>Address :</span> 24 St Michael’s Road off Church Road, Westlands, Nairobi, Kenya</li>
                                </ul>
                            </div>
                        </div>

                        <div className='copyright'> Copyright © - {currentYear} Mwangaza All Rights Reserved. </div>
                    </div>
                </footer>
            </div>
        </>
    );
}


export default Footer;