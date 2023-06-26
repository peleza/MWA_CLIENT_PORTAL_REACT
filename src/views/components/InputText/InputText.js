import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './InputStyle.scss';
export const InputText = (props) => {
    const [focused, setFocused] = useState(false)
    const handleChange = (e) => {
        setFocused(true)
    }
    return (
        <div className={`form-group ${props.FormGroupClass}`}>
            {props.labelText &&
                <label>
                    {props.labelText}
                    {/* {
                        props.required &&
                        <span className="text-danger"> *</span>
                    } */}
                </label>
            }
            <div className={props.isPassword && "hasIcon"}>
                <input
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    defaultValue={props.defaultValue}
                    className={`form-control ${props.className}`}
                    placeholder={props.placeholder}
                    id={props.id}
                    onChange={props.onChange}
                    onFocus={() => props.CPassword == true && setFocused(true)}
                    onBlur={handleChange}
                    hidden={props.isHidden}
                    disabled={props.isDisabled}
                    required={props.required}
                    autoComplete="off"
                    min={props.min}
                    max={props.max}
                    maxLength={props.maxLength}
                    pattern={props.pattern}
                    focused={focused.toString()}
                    readOnly={props.readOnly}
                />
                {
                    props.isPassword &&
                    <span
                        className={props.ChangeClass}
                        onClick={props.onClick}
                    >
                    </span>
                }
                {props.error &&
                    <div className="error-text">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="#e74c3c"><path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path></svg>
                        <span> {props.error} </span>
                    </div>
                }
            </div>
        </div>
    );
}
export const SelectBox = (props) => {
    const [focused, setFocused] = useState(false)
    const handleChange = (e) => {
        setFocused(true)
    }
    return (
        <div className={`form-group ${props.FormGroupClass}`}>
            {props.labelText &&
                <label>
                    {props.labelText}
                    {/* {
                        props.required &&
                        <span className="text-danger"> *</span>
                    } */}
                </label>
            }
            <select
                name={props.name}
                className={`form-control ${props.className}`}
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={handleChange}
                required={props.required}
                focused={focused.toString()}
                disabled={props.disabled}
            >
                {
                     props.optionData
                }
            </select>
            {props.error &&
                <div className="error-text">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#e74c3c"><path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path></svg>
                    <span> {props.error} </span>
                </div>
            }
        </div>
    );
}
export const TextArea = (props) => {
    const [focused, setFocused] = useState(false)
    const handleChange = (e) => {
        setFocused(true)
    }
    return (
        <div className={`form-group ${props.FormGroupClass}`}>
            {props.labelText &&
                <label>
                    {props.labelText}
                    {/* {
                        props.required &&
                        <span className="text-danger"> *</span>
                    } */}
                </label>
            }
            <textarea
                name={props.name}
                id={props.id}
                className={`form-control ${props.className}`}
                placeholder={props.placeholder}
                onBlur={handleChange}
                required={props.required}
                focused={focused.toString()}
                pattern={props.pattern}
                rows="5"
            >{props.defaultData}</textarea>
            {props.error &&
                <div className="error-text">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#e74c3c"><path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path></svg>
                    <span> {props.error} </span>
                </div>
            }
        </div>
    );
}

export const FileUpload = (props) => {
    const [focused, setFocused] = useState(false)
    const handleChange = (e) => {
        setFocused(true)
    }
    return (
        <div className={`form-group ${props.FormGroupClass}`}>
            {props.labelText && <label> {props.labelText} </label>}

            <label className='fileUploader'>
                <input
                    type="file"
                    onChange={props.onChange}
                    required={props.required}
                    focused={focused.toString()}
                    onBlur={handleChange}
                    accept={props.accept}
                    name={props.name}
                />
                <div className='fileUploader-inner'>
                    <span className='browse'>Browse <img src="/images/file-upload.svg" alt="icon" /></span>
                    <span className='fileName'>{props.fileName ? props.fileName : "Not file selected yet!"}</span>
                </div>
                {props.error &&
                    <div className="error-text">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="#e74c3c"><path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path></svg>
                        <span> {props.error} </span>
                    </div>
                }
            </label>
        </div>
    )
}

export const RadioSelect = (props) => {
    return (
        <div className={`form-group ${props.FormGroupClass}`}>
            {props.labelText &&
                <label>
                    {props.labelText}
                    {
                        props.required &&
                        <span className="text-danger"> *</span>
                    }
                </label>
            }
            <input
                type="radio"
                id={props.id}
                name={props.name}
                className={`radio-btn ${props.className}`}
                value=""
            />
            <span className="checkmark"></span>

        </div>
    );
}

export const RadioSelectGroup = (props) => {
    return (
        <div className={`form-group ${props.FormGroupClass}`}>
            {props.labelText &&
                <label className={`radiobx-btn ${props.FormLabelClass}`}>
                    <input
                        type="radio"
                        id={props.id}
                        name={props.name}
                        className={`radio-btn ${props.className}`}
                        value=""
                        defaultChecked={props.defaultChecked}
                    />
                    <span>
                        <i></i>
                        <div className={'plan-content'}>
                            <div>
                                <b>{props.labelText}</b>
                                <font>{props.priceText}</font>
                            </div>
                            <p>{props.monthText}</p>
                        </div>
                    </span>
                </label>
            }

        </div>
    );
}