import React from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import "./AuthHeader.scss";


function AuthHeader() {
    return (
        <header className="mw-header mw-auth-header">
            <div className="container-fluid">
                <nav>
                    <Link to="/" className="logo">
                        <img src="/images/mw-logo.svg" alt="mw logo" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}



export default AuthHeader;
