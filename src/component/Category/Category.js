import React from "react";
import './Category.scss';

const category = props =>{
    const {picture,properties,title} = props.data;
    return(
        <div className='category'>
            <img src={picture} alt={title}/>
            <div className="detail">
                <h2>{title}</h2>
                <span>{properties}</span>
            </div>
        </div>
    )
}

export default category;