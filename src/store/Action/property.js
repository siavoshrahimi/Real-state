import * as actionType from './actionType';
import axios from '../../utils/API';

export const propertyStarted = () =>{
    return{
        type:actionType.PROPERTY_START,
    }
}

export const propertySuccess = (data) =>{
    return{
        type:actionType.PROPERTY_SUCCESS,
        data
    }
}

export const propertyFailed = error => {
    return{
        type:actionType.PROPERTY_FAIL,
        error
    }
}

export const fetchPropertyData = () =>{
    return dispatch => {
        dispatch(propertyStarted());
        axios.get('card.json')
            .then(res =>{
                dispatch(propertySuccess(res.data.card))
            })
            .catch(err =>{
                dispatch(propertyFailed(err))
            })
    }

}
export const filteringData = (filter) =>{
    return{
        type:actionType.FILTERED_DATA,
        filter
    }
}