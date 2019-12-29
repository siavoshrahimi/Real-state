import React,{useState} from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const Layout = (props) =>{
const [isSideDrawerVisible , setIsSideDrawerVisible] = useState(false);
    const sideDrawerClosedHandler = () => {
        setIsSideDrawerVisible(false);
    };
    const toggleSideDrawerHandler = () => {
        setIsSideDrawerVisible(!isSideDrawerVisible)
    };
    return(
        <React.Fragment>
            <Toolbar scrollVal={props.scrollVal} burgerMenu={isSideDrawerVisible} drawerToggleClicked={toggleSideDrawerHandler}/>
            <SideDrawer open={isSideDrawerVisible} close={sideDrawerClosedHandler}/>
            <main className="main">
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout;