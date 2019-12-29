import React from "react";
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from "../../UI/Backdrop/Backdrop";
import './SideDrawer.scss';
const sideDrawer= props=>{
let classArray= ['side-drawer', 'close'];
if(props.open) {
    classArray = ['side-drawer', 'open']
}

    return(
        <React.Fragment>
            <Backdrop clicked={props.close} show={props.open}/>
            <nav className={classArray.join(' ')}>
                <NavigationItems/>
            </nav>
        </React.Fragment>
    )
}

export default sideDrawer;