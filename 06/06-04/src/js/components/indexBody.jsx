import React from "react";
import PropTypes from 'prop-types';

import BodyChild from "./bodychild.jsx"

const defaultProps = {
    username: "这是默认名"
}



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
                <p>父页面的参数username:{this.props.username}</p>
                <p>父页面的参数userId:{this.props.userId}</p>
                <p>{this.state.age}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this, 100)} />

                {/* ...解构赋值，把父页面的值传给子页面 */}
                <BodyChild  {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </section>
        )
    }


}


Body.propTypes = {  //类型约束
    userId: PropTypes.number.isRequired
};


/* 默认值 */
Body.defaultProps = defaultProps;
