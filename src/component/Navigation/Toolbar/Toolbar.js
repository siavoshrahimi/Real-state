import React from "react";
import './Toolbar.scss';
import Logo from '../../UI/Logo/Logo';
import Button from '../../UI/Button/Button';
import NavigationItems from '../NavigationItems/NavigationItems';
import  MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const toolbar = props =>{

    return(
        <div className='header-wrapper'>
            <header className='toolbar'>
                <div className="drawer-toggle" onClick={props.drawerToggleClicked}>
                    {!props.burgerMenu ? <MenuIcon/> :<CloseIcon/>}
                </div>
                <Logo/>
                <Button btnType='btn-secondary btn-wide'  variant='contained'>
                    SUBMIT PROPERTY
                </Button>
                <div className="line-break"/>
                <nav className='desktop-only'>
                    <NavigationItems fixPosition={props.scrollVal}/>
                </nav>
            </header>
        </div>
    )
}

export default toolbar;