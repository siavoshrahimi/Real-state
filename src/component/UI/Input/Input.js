import React from "react";
import './Input.scss';

const input = props =>{
    const {inputType, value, placeholder, options,children,name,changed} =props;
    let inputElement = null;
    switch (inputType) {
        case ('text'):
            inputElement=<input
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={changed}
            />;
        break;
        case ('select'):
            inputElement= <select
                placeholder={placeholder}
                onChange={changed}
                name={name}
                >
                {options.map(opt =>(
                    <option value={opt} key={opt}>{opt}</option>
                ))}
            </select>;
        break;
        case ('check'):
            inputElement = <input
                type='checkbox'
                className='checkbox'
                name={name}
                onChange={changed}
            />;
        break;
        default:
            inputElement=<input/>

    }
    return(
        <div className='input'>
            <label className='label'> {children}</label>
            {inputElement}
        </div>
    )
}

export default input;