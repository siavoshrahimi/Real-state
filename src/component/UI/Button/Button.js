import React from "react";
import "./Button.scss";

const button = (props) =>{
    let classArray = ['btn'];
    classArray.push(props.btnType);
    return(
        <button
            className={classArray.join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
}

export default button;