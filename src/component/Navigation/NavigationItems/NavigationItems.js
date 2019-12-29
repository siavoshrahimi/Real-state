import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss'

const navigationItems = props =>{
    let classArray=['navigation-items'];
    if (props.fixPosition > 150){
        classArray.push('fix')
    }
    return(
        <ul className={classArray.join(' ')}>
            <NavigationItem>HOME</NavigationItem>
            <NavigationItem>ELEMENTS</NavigationItem>
            <NavigationItem>FEATURES</NavigationItem>
            <NavigationItem>EXTRAS</NavigationItem>
            <NavigationItem>PROPERTY CATALOG</NavigationItem>
            <NavigationItem>PAGES</NavigationItem>
            <NavigationItem>BLOG</NavigationItem>
            <NavigationItem>GALLERY</NavigationItem>
        </ul>
    )
}
export default navigationItems;