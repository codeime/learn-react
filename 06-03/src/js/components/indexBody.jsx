import React from "react";

import BodyChild from "./bodychild.jsx"





export default class Body extends React.Component {

    constructor() {
        super();
        this.state = { //初始化赋值
            username: "guobing",
            age: 20
        }
    };
    changeUserInfo(age) {
        this.setState({ age: age });
    };
    handleChildValueChange(event) {
        this.setState({ age: event.target.value });
    };
    render() {


        return (
            <section>
                <h1>这里是主体</h1>
                <p>{this.state.username}</p>
                <p>{this.props.userId}</p>
                <p>{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this, 100)} />


                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </section>
        )
    }


}
