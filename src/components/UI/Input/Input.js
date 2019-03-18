import React from 'react';
import "./Input.css";

const input = ({
    value, 
    inputName,
    name,
    change,
    inputClassName,
    options,
    placeholder,
    filename,
    type,
    accept,
    click,
    buttonText,
    buttonImg,
    isValid
}) => {
    
    switch (inputName) {
        case 'select':
            return (
                <select
                    value={value}
                    name={name}
                    onChange={change}
                    className={inputClassName ? inputClassName : ""}>
                    {
                        options.map(({ value, text }) => <option key={value} value={value}>{text}</option>)
                    }
                </select>
            );
        case 'text':
            return (
                <input
                    name={name}
                    value={value}
                    onChange={change}
                    className={inputClassName ? inputClassName : ""}
                    placeholder={placeholder}
                    filename={filename ? filename : ""}
                    type={type ? type : 'text'}
                    accept={accept ? accept : ""} />
            );
        case 'button':
            return (
                <button disabled={isValid}  onClick={click} className={inputClassName ? inputClassName : ""}>
                    {buttonText}
                    {buttonImg ? buttonImg : null}
                </button>
            );
        case 'textarea':
            return (
                <textarea
                    className={inputClassName ? inputClassName : ""}
                    placeholder="Write Yout Task Here"
                    value={value}
                    name={name}
                    onChange={change}
                    rows="10"
                    cols="50" />
            );
        default:
            return null;
    }
};

export default input;