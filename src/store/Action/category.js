import * as actionType from './actionType';
import axios from '../../utils/API';

export const categoryStarted =  () =>{
    return{
        type:actionType.CATEGORY_START,
    }
}

export const categoryFail = (err) =>{
    return{
        type:actionType.CATEGORY_FAIL,
        error:err,
    }
}
export const categorySuccess = (data) =>{
    return{
        type:actionType.CATEGORY_SUCCESS,
        data:data,
    }
}
export const fetchCategoryData = () =>{
    return dispatch =>{
        dispatch(categoryStarted());
        axios.get('categories.json')
            .then(res =>{
                dispatch(categorySuccess(res.data.categories));
            })
            .catch(err =>{
                dispatch(categoryFail(err));
            })
    }
}