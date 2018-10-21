import React from 'react';
import localStore from '@/utils/localStore'
import { CITYNAME } from '@/config/localStoreKey'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActions from '@/store/actions/userInfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            initDate: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDate
                        ? this.props.children
                        : <div>加载中...</div>
                }
            </div>
        );
    }
    componentDidMount() {
        let cityName = localStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = "北京"
        }
        this.props.userInfoActions.update({
            cityName
        })

        //将城市信息存储到 Redux中
        setTimeout(() => {
            this.setState({
                initDate: true
            })
        }, 1000);
    }
}
function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);