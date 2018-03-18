import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "antd";
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'


import { Router, Route, hashHistory } from 'react-router';

class Root extends React.Component {
    render() {
        return (
            /* 这里是现在程序的人口 */
            <div>
                <Button type="primary">123</Button>
                <Button>123</Button>
                <Button type="dashed">123456789</Button>
                <Button type="danger">Danger555444</Button>
            </div>
        );
    };
};

ReactDOM.render(
    <Root />,
    document.getElementById("mainContainer")
)