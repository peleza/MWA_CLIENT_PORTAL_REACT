import React from 'react';
import "./NotificationCol.scss"

const NotificationCol = ({ image, activity, time }) => {
    return (
        <>
            <div className='notification-col'>
                <div className='notification-img'>
                    <img src={`/images/${image}`} alt="notification" />
                </div>
                <div className='notification-detail'>
                    <p>{activity}</p>
                    <span>{time}</span>
                </div>
            </div>
        </>
    );
};

export default NotificationCol;
