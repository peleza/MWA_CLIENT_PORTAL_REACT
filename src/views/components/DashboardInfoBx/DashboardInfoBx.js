import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardInfoBx.scss';

const DashboardInfoBx = ({title, value, icon, color, URL, onclick}) => {
    return (
        <>
            <Link to={URL ? URL : "#"} className={`dashboard-info-bx ${color}`} onClick={onclick}>
                <h2>{title}</h2>
                <div>
                    <strong>{value}</strong>
                    <img src={`/images/${icon}`} alt="icon" />
                </div>
            </Link>
        </>
    );
}


export default DashboardInfoBx;