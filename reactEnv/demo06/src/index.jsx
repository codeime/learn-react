import React from 'react';
import { render } from 'react-dom';

import '@/static/style/common.less';

class Hello extends React.Component {
    render() {
        let s = { fontSize: '50px', color: 'red' };
        let arr = ['aa', 'bb', 'cc'];
        let flag = true;
        return (
            <div>
                {/* jsx注释 */}
                <div className="title">{
                    flag
                        ? <p>true</p>
                        : <p>false</p>
                }</div>
                <p style={s}>hello world12</p>
                {/* 事件 */}
                <p style={{ cursor: 'pointer' }} onClick={this.clickHander.bind(this)}>click</p>
                {/* 循环 */}
                <ul>
                    {
                        arr.map((item, index) => {
                            return <li key={index}> {item}</li>;
                        })
                    }
                </ul>
                <p>hello world</p>
            </div >
        );
    }
    clickHander(e) {
        e.pareventDefault()
        /* Date.now() */
        alert(+new Date());
        alert(this)
    }
}

render(
    <Hello />,
    document.getElementById('root'),
);