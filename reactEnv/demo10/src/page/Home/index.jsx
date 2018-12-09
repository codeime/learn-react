import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
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
Home.propTypes = {
    userInfo: PropTypes.object
}
function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

export default connect(
    mapStateToProps,
    null
)(Home);