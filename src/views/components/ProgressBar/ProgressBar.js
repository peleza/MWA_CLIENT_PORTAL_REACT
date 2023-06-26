import React from 'react';
import "./ProgressBar.scss"

const ProgressBar = ({title, label, progress, theme, size}) => {
    return (
        <>
            <div className={`progress-outer ${size}`}>
                {title &&
                    <h2>{title} <span>{label}%</span></h2>
                }
                <div className='progress'>
                    <div className={`progress-bar ${theme}`} style={{width: progress}}></div>
                </div>
            </div>
        </>
    );
};
export default ProgressBar;
