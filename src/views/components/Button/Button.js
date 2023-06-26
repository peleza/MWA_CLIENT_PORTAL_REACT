import React from 'react';
import { Link } from 'react-router-dom';
import LoaderSpinner from '../Loader/LoaderSpinner'
import './Button.scss';

export const Button = ({className, btnName, onClick, id, type, isDisabled, isLoading}) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={onClick}
            id={id}
            type={type}
            disabled={isDisabled}
        >
            {btnName}
            {isLoading && <LoaderSpinner />}
        </button>
    );
}

export const LinkButton = ({className, text, id, to}) => {
    return (
        <Link
            to={to}
            className={`btn ${className}`}
            id={id}
        >
            {text}
        </Link>
    );
}