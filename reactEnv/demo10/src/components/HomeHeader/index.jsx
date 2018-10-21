import React from 'react';
import './index.less'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div className='HomeHeader'>
                <div className="city">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="iconfont icon-arrow-down"></i>
                </div>
                <div className="inputBox">
                    <div>
                        <input type="text" />
                        <i className="iconfont icon-search"></i>
                    </div>
                </div>
                <div className="user">
                    <i className="iconfont icon-avatar"></i>
                </div>
            </div>
        );
    }
}

export default HomeHeader;