import React from 'react';
import Header from '@/components/Header/index'

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            now: Date.now()
        }
    }

    render() {
        let s = { fontSize: '50px', color: 'red' };
        let arr = ['aa', 'bb', 'cc'];
        let flag = true;
        return (
            <div>
                <Header title="hello页面"></Header>
                <div className="title">{
                    flag
                        ? <p>true</p>
                        : <p>false</p>
                }
                </div>
                <p style={s}>hello world12</p>
                {/* 事件 */}
                <p style={{ cursor: 'pointer' }} onClick={this.clickHander.bind(this)}>click{this.state.now}</p>
                {/* 循环 */}
                <ul>
                    {
                        arr.map((item, index) => {
                            return <li key={index}> {item}</li>;
                        })
                    }
                </ul>
                <p>hello world123</p>
            </div>
        );
    }
    /* 模版在页面上渲染完了调用 */
    componentDidMount() {
        console.log('mount over');
    }
    /* 触发更新完成 */
    componentDidUpdate(prevProps, prevState) {

    }
    /* 组件将要销毁时 */
    componentWillUnmount() {

    }
    clickHander(e) {
        e.preventDefault()
        this.setState({
            now: Date.now()
        })
    }
}

export default Hello;