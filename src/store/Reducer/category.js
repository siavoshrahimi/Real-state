import * as actionType from '../Action/actionType';
const initialState = {
    error:null,
    categories:null,
    isLoading:false,
}

const category = (state=initialState, action) =>{
    switch (action.type) {
        case actionType.CATEGORY_START:
            return{
                ...state,
                isLoading: true,
                error: null,
            }
        case actionType.CATEGORY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                categories: action.data,
            }
        case actionType.CATEGORY_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        default:
            return state
    }
}
export default category;