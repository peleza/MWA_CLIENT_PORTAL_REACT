import React from 'react';
import { Link } from 'react-router-dom';
import './PsmtFooter.scss';

const PsmtFooter = () => {
    const currentYear = new Date().getFullYear();    
    
    return (
        <>
            <footer className='psmtFooter'>
                <p>Copyright © - {currentYear} Mwangaza All Rights Reserved. <Link to="/">Privacy Policy</Link></p>
            </footer>
        </>
    );
}

export default PsmtFooter;