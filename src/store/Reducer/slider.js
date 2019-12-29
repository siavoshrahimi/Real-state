import * as actionType from '../Action/actionType';
const initialState = {
    error:null,
    slider:null,
    loading:false,
    sliderPage:0
}

const reducer =(state=initialState,action) => {
    switch (action.type) {
        case actionType.FETCH_SLIDER_DATA_START:
            return{
                ...state,
                loading: true,
                error: null
            }
        case actionType.FETCH_SLIDER_DATA_SUCCESS:
            return {
                ...state,
                slider: action.data,
                error: null,
                loading: false
            }
        case actionType.FETCH_SLIDER_DATA_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionType.NEXT_SLIDER:
            return {
                ...state,
                sliderPage: state.sliderPage + 1
            }
        case actionType.PREVIOUS_SLIDER:
            return {
                ...state,
                sliderPage: state.sliderPage - 1
            }
        default:
            return state
    }
}
export default reducer;