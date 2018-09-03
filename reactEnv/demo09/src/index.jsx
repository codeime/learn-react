
console.log(process.env.NODE_ENV);


import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from "react-router-dom";
import { Provider } from 'react-redux'

import '@/static/style/common.less';

import RouterMap from './router/routerMap';
/* import fn from "./reducers/redux-demo";
fn(); */
import Store from './store/index'
const store = Store();

render(
    <Provider store={store}>
        <RouterMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
);