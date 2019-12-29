import * as actionType from '../Action/actionType';
const initialState = {
    error:null,
    isLoaded:false,
    properties:null,
    filterData:[],
    isSearched:false
}

const reducer = (state=initialState , action)=>{
    switch (action.type) {
        case actionType.PROPERTY_START:
            return{
                ...state,
                isLoaded: true,
                error: null
            }
        case actionType.PROPERTY_SUCCESS:
            return {
                ...state,
                isLoaded: false,
                properties: action.data,
                error: null
            }
        case actionType.PROPERTY_FAIL:
            return {
                ...state,
                isLoaded: false,
                error: action.error
            }
        case actionType.FILTERED_DATA:
            return {
                ...state,
                filterData: action.filter,
                isSearched: true
            }
        default:
            return state
    }
}

export default reducer;