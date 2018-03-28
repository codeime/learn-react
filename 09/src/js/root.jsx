import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "antd";
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import MediaQuery from "react-responsive";

import { Router, Route, hashHistory } from 'react-router';

import PCIndex from "./components/pc_index.jsx";
import MobileIndex from "./components/mobile_index.jsx";






class Root extends React.Component {
    render() {
        return (
            /* 这里是现在程序的人口 */
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <PCIndex></PCIndex>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex></MobileIndex>
                </MediaQuery>

            </div>
        );
    };
};

ReactDOM.render(
    <Root />,
    document.getElementById("mainContainer")
)