import React from "react";
import Button from '../Button/Button';
import './Slider.scss';

const slider = props =>{
    let classArray = ['detail'];
    if(props.show){
        classArray.push('show')
    }
    const {picture,title,description,price}= props.sliderData;
    return(
        <div className='slider' >
            <img src={picture} alt={title}/>
            <div className={classArray.join(' ')}>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className='caption'>
                    <span><strong>${price}.00</strong>/day</span>
                    <Button btnType='btn-primary'>BOOK NOW</Button>
                </div>
            </div>
        </div>
    )
}

export default slider;