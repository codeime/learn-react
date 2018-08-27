import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '@/page/app';
import Home from '@/page/Home/index';
import List from '@/page/List/index';
import Detail from '@/page/Detail/index';
import NotFound from '@/page/NotFound/index';
class RouterMap extends React.Component {
    updateHandle() {
        console.log('路由更新了');
        /* 可以统计pv */
    }
    render() {
        return (
            <Router
                history={this.props.history}
                onUpdate={this.updateHandle.bind(this)}>
                <Route>
                    <IndexRoute path="/" component={App} />
                    <Route path="home" component={Home} />
                    <Route path="list" component={List} />
                    <Route path="detail/:id" component={Detail} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        );
    }
}

export default RouterMap;