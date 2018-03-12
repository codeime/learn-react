import React from "react";





export default class Body extends React.Component {

    componentWillMount() {
        console.log("===================这是body页面开始加载===================")
    };

    componentDidMount() {
        console.log("================这是body页面加载完了=====================")
    };

    render() {
        var name = "";
        var boolInput = true;
        var txt01 = 'mooc&nbsp;learn';
        var txt02 = 'mooc\u0020learn';
        return (
            <section>
                <h1>这里是主体</h1>
                <p> {name === "" ? '用户未登录' : `用户名${name}`}</p>
                <p>
                    <input type='button' value='默认按钮' disabled={boolInput} value='按钮' />
                </p>
                <p>{txt01}</p>
                <p>{txt02}</p>
                <p dangerouslySetInnerHTML={{ __html: txt01 }}></p>
            </section>
        )
    }


}
