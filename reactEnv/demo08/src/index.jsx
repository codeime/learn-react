
console.log(process.env.NODE_ENV);


import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from "react-router-dom";

import '@/static/style/common.less';

import RouterMap from './router/routerMap'

render(
    <RouterMap history={hashHistory} />,
    document.getElementById('root')
);