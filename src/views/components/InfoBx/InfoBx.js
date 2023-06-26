import React from 'react';
import "./InfoBx.scss"

const InfoBx = ({message}) => {
    return (
        <div className='infoBx'>
            <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" viewBox="0 0 19.5 19.5">
                <g id="unverified-icon" transform="translate(-8076.25 -3133.25)">
                    <circle id="Ellipse_2370" data-name="Ellipse 2370" cx={9} cy={9} r={9} transform="translate(8077 3134)" fill="#920061" stroke="#920061" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <line id="Line_44" data-name="Line 44" x2="0.01" transform="translate(8086 3139)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path id="Path_76997" data-name="Path 76997" d="M11,12h1v4h1" transform="translate(8074 3131)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
            </svg>

            {message}
        </div>
    );
};

export default InfoBx;
