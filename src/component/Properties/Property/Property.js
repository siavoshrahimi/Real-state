import React from "react";
import './Property.scss';
import { LocalHotel,HotTub,LocationOn,Straighten } from '@material-ui/icons';



const property = props =>{
    const {address,bathrooms,bedrooms,city,picture,price,sqm,latitude,longitude} = props.data;
    //add . to price
    let modifiedPrice = price.toString().split('');
    modifiedPrice.splice(3,0,'.').join('');
    //set map state and show on modal
    const setMap = () => {
        props.setMap({lat:latitude,lng:longitude});
        props.showModal();
    }
    return(
        <div className='property'>
            <div className="property-img">
                <figure><img src={picture} alt={city}/></figure>
                <div className="detail-on-img">
                    <span><strong>{modifiedPrice}$</strong></span>
                    <span><LocationOn/>{address}</span>
                </div>
            </div>
            <div className="detail">
                    <div className="direction">
                        <h2>{city}</h2>
                        <span className='location' onClick={setMap}> <LocationOn/>map</span>
                    </div>
                    <div className="detail-icon">
                        <span><Straighten/>{sqm}/m<sup>2</sup></span>
                        <span className='middle'><LocalHotel/>{bedrooms}</span>
                        <span><HotTub/>{bathrooms}</span>
                    </div>


            </div>
        </div>
    )
}

export default property;