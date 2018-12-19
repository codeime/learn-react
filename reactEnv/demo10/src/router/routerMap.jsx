import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';


import App from '@/page/app';
import Home from '@/page/Home/index';
import List from '@/page/List/index';
import Detail from '@/page/Detail/index';
import NotFound from '@/page/NotFound/index';
class RouterMap extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App >
                    <Switch>
                        <Redirect from="/" to="/home" exact />
                        <Route path="/home" exact component={Home} />
                        <Route path="/list" exact component={List} />
                        <Route path="/detail/:id" exact component={Detail} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </App>
            </BrowserRouter>
        );
    }
}


export default RouterMap;
