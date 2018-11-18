import React from 'react';
import { getListData } from '@/fetch/home'
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            hasMore: false
        }
    }
    render() {
        return (
            <div className="HomeList">
                <p className="title">
                    猜你喜欢
                </p>
                {this.state.hasMore.toString()}
                {this.state.data.length}

            </div>
        );
    }
    componentDidMount() {
        this.getList()
    }
    getList() {
        const cityName = this.props.cityName
        const result = getListData(cityName, 0)
        this.resultHandle(result)
    }
    resultHandle(result) {
        result
            .then(res => {
                return res.json()
            })
            .then(json => {
                this.setState({
                    data: json.data,
                    hasMore: json.hasMore
                })
            })
    }
}

export default List;