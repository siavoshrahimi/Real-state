import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/Store/Store';
import Provider from "react-redux/es/components/Provider";
import './index.css';
import App from './App';


const store = createStore();

const jsx =
    (<Provider store={store}>
        <App/>
    </Provider>);

ReactDOM.render(jsx, document.getElementById('root'));


