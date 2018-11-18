import React from 'react';
import { connect } from 'react-redux'

import HomeHeader from '@/components/HomeHeader'
import Category from '@/components/Category'
import Ad from './Com/Ad'
import List from './Com/List'
class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}></HomeHeader>
                <Category></Category>
                <Ad></Ad>
                <List cityName={this.props.userInfo.cityName}></List>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);