import React from "react";
import {GoogleMap,withGoogleMap,withScriptjs,Marker} from "react-google-maps"


const Map = props =>{
    const {lat,lng} = props;
    return(
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat:lat, lng:lng}}
        >
            <Marker position={{lat:lat, lng:lng}}/>
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;