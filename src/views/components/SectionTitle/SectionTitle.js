import React from 'react';
import './SectionTitle.scss';


export const SectionTitle = ({ className, title, subHeading, id }) => {
    return (
        <div className={`section-title ${className}`} id={id}>
            <h2>{title}</h2>
            {subHeading &&
                <p>{subHeading}</p>
            }
        </div>
    );
}
