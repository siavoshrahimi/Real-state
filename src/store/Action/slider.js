import * as actionType from './actionType';
import axios from '../../utils/API';

export const fetchSliderDataStart = ()=> {
    return{
        type:actionType.FETCH_SLIDER_DATA_START
    }
}

export const fetchSliderDataSuccess = (data) =>{
    return{
        type:actionType.FETCH_SLIDER_DATA_SUCCESS,
        data: data
    }
}

export const fetchSliderDataFail = (err) =>{
    return{
        type:actionType.FETCH_SLIDER_DATA_FAIL,
        error:err
    }
}

export const fetchSliderData = () =>{
    return dispatch =>{
        dispatch(fetchSliderDataStart());
        axios.get('slider.json')
            .then(res =>{
                dispatch(fetchSliderDataSuccess(res.data.slider));
            })
            .catch(err =>{
                dispatch(fetchSliderDataFail(err))
            })
    }
}
export const nextSlider = () =>{
    return{
        type:actionType.NEXT_SLIDER,
    }
}
export const previousSlider = () =>{
    return{
        type:actionType.PREVIOUS_SLIDER,
    }
}