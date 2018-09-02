import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../actions/userInfo';

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
                    <div>{this.props.userInfo.name}</div>
                    <div>{this.props.userInfo.city}</div>
                    <div onClick={this.updateCity.bind(this)}>点击更新</div>
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
    updateCity() {
        this.props.userinfoAction.updateCityName({
            city: "nanjing"
        })
    }
    componentDidMount() {
        this.props.userinfoAction.login({
            name: 123,
            city: 'beijing'
        })
        console.log('路由更新了');
    }

}
function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userinfoAction: bindActionCreators(userinfoActions, dispatch)
    }
}

//export default RouterMap;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouterMap);