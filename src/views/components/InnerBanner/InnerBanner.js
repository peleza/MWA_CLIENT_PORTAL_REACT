import React from 'react';
import './InnerBanner.scss';


export const InnerBanner = ({ className, title, subHeading }) => {
    return (
        <div className={`breadcrumb-section section-title ${className}`}>
            <div className='container'>
                <h1>{title}</h1>
                {subHeading &&
                    <p>{subHeading}</p>
                }
                
            </div>
        </div>
    );
}
