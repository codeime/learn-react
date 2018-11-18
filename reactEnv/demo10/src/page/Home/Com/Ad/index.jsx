import React from 'react';
import './index.less'
import { getAdData } from '@/fetch/home'
class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            adData: []
        }
    }
    render() {
        return (
            <div className="HomeAd">
                <p className="title">超值特惠</p>
                <div className="box clearfix">
                    {
                        this.state.adData.length ?
                            this.state.adData.map((item, index) => {
                                return <div className="item pull-right" key={index}>
                                    <a href={item.link}>
                                        <img src={item.img} alt="" />
                                    </a>
                                </div>
                            })
                            : <div>加载中...</div>
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        getAdData()
            .then(res => {
                return res.json();
            })
            .then(json => {
                if (json.length) {
                    this.setState({
                        adData: json
                    })
                }
            })
    }
}

export default Ad;