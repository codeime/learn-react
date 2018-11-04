import React from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0
        }
    }
    render() {
        let opt = {
            auto: 2000,
            /*  callback: function (index) {
                 this.setState({ index })
             }.bind(this), */
            callback: index => {
                this.setState({
                    index
                })
            }
        }
        return (
            <div className="Category">
                <ReactSwipe className="swiper" swipeOptions={opt}>
                    <div>
                        <ul className="itemBox clearfix">
                            <li className='item'>
                                <i className="iconfont icon-ktv"></i>
                                <span className="text">KTV</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-ktv"></i>
                                <span className="text">KTV</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-ktv"></i>
                                <span className="text">KTV</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-ktv"></i>
                                <span className="text">KTV</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-ktv"></i>
                                <span className="text">KTV</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-ktv"></i>
                                <span className="text">KTV</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-ktv"></i>
                                <span className="text">KTV</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-ktv"></i>
                                <span className="text">KTV</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="itemBox clearfix">
                            <li className='item'>
                                <i className="iconfont icon-jiazheng"></i>
                                <span className="text">家政</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-jiazheng"></i>
                                <span className="text">家政</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-jiazheng"></i>
                                <span className="text">家政</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-jiazheng"></i>
                                <span className="text">家政</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-jiazheng"></i>
                                <span className="text">家政</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-jiazheng"></i>
                                <span className="text">家政</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-jiazheng"></i>
                                <span className="text">家政</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-jiazheng"></i>
                                <span className="text">家政</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="itemBox clearfix">
                            <li className='item'>
                                <i className="iconfont icon-spa"></i>
                                <span className='text'>按摩</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-spa"></i>
                                <span className='text'>按摩</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-spa"></i>
                                <span className='text'>按摩</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-spa"></i>
                                <span className='text'>按摩</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-spa"></i>
                                <span className='text'>按摩</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-spa"></i>
                                <span className='text'>按摩</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-spa"></i>
                                <span className='text'>按摩</span>
                            </li>
                            <li className='item'>
                                <i className="iconfont icon-spa"></i>
                                <span className='text'>按摩</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className='navBox'>
                    <ul className="clearfix">
                        <li className={`navItem ${this.state.index == 0 ? 'active' : ''}`}>1</li>
                        <li className={`navItem ${this.state.index == 1 ? 'active' : ''}`}>2</li>
                        <li className={`navItem ${this.state.index == 2 ? 'active' : ''}`}>3</li>
                    </ul>
                </div>
            </div >
        );
    }
}

export default Category;