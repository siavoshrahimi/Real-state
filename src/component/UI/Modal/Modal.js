import React from "react";
import './Modal.scss';
import Backdrop from "../Backdrop/Backdrop";
import { Close} from '@material-ui/icons';
function modal(props){

    return(
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.closeModal}/>
            <div className='modal'
                style={{
                transform: props.show ? 'translateY(-30px)' : 'translateY(100vh)',
                opacity: props.show ? 1 : 0
                 }}>
                <span onClick={props.closeModal} className='close'><Close/></span>
                {props.children}
            </div>
        </ React.Fragment>

    )
}

export default modal;