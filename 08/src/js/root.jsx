import React from 'react';
import ReactDOM from 'react-dom';

import Index from "./index.jsx";
import CompoentList from "./components/list.jsx";

import { Router, Route, hashHistory } from 'react-router';

class Root extends React.Component {
    render() {
        return (
            /* 这里是现在程序的人口 */
            <Router history={hashHistory}>
                <Route path="/" component={Index}>

                </Route>
                <Route path="list" component={CompoentList}></Route>

            </Router>
        );
    };
};

ReactDOM.render(
    <Root />,
    document.getElementById("example")
)