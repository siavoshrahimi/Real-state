import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import SliderReducer from '../Reducer/slider';
import CategoryReducer from '../Reducer/category';
import PropertyReducer from '../Reducer/property';

const composeenhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(combineReducers({
           slider:SliderReducer,
           categories:CategoryReducer,
            property:PropertyReducer
        }
        ),
        composeenhance(applyMiddleware(ReduxThunk))
    );
    return store;
}