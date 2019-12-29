import React from "react";
import './NavigationItem.scss';

const navigationItem = (props) =>{

    return(
        <li className='navigation-item'>
            <a href='#'>
                {props.children}
            </a>
        </li>
    )

}
export default navigationItem;