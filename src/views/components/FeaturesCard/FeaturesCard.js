import React from 'react';
import './FeaturesCard.scss';


export const FeaturesCard = ({ className, IconUrl, alt, title, Description }) => {
    return (
        <div className={`to-do-bx ${className}`}>
            <div className='to-do-icon'>
                <img src={`/images/${IconUrl}`} alt={alt} />
            </div>
            <h2>{title}</h2>
            {Description &&
                <p>{Description}</p>
            }
        </div>
    );
}