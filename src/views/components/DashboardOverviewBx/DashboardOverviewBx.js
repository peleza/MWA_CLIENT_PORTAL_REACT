import React from 'react';
import './DashboardOverviewBx.scss';

const DashboardOverviewBx = ({ title, value, icon, color, iconClass }) => {
    return (
        <>
            <div className='dashboard-overview-bx' style={{ background:  color }}>
                <div>
                    <h3>{title}</h3>
                    <h2>{value}</h2>
                </div>
                <div className='overview-icon'>
                    <img src={`/images/${icon}`} className={iconClass} alt="icon" />
                </div>
            </div>
        </>
    );
}


export default DashboardOverviewBx;