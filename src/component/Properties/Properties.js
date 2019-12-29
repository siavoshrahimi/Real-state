import React,{useState,useEffect} from "react";
import './Properties.scss';
import Property from './Property/Property';
import Spinner from '../UI/Spinner/Spinner';
import WrappedMap from "../Maps/Maps";
import Modal from '../UI/Modal/Modal';
import {useSelector} from "react-redux";


function Properties ( props){
    useEffect(() =>{},[props.data]);
    const [showModal, setShowModal] = useState(false);
    const [map, setMap]= useState({lat:0,lng:0});
    const showModalHandler = () =>{ setShowModal(!showModal)};
    const isLoaded = useSelector(state => state.property.isLoaded);
    const error = useSelector(state => state.property.error);
    let property = [];
    if(error){ property = (<p>{error}</p>)}
    if (isLoaded){property = (<Spinner/>)}
    if(props.data) { property = props.data.map(prop =><Property setMap={setMap} showModal={showModalHandler} data={prop} key={prop._id}/>)}
    return(
        <div className='property-wrapper'>
            {showModal &&
            <Modal closeModal={showModalHandler} show={showModal}>
                <div className="location">
                    <WrappedMap
                        lat={map.lat}
                        lng={map.lng}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
                            &key=AIzaSyB-kqrgvlZIPxpbaAmrTXWBgrfh0QNwlRQ`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `300px`, width:`100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </Modal>}
            <h1>Searched Property</h1>
            <div className="property-responsive">
                {property.length ===0 ? <p className='no-result'> no match found</p>: property}
            </div>
        </div>
    )
}

export default Properties;