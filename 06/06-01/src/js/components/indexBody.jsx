import React from "react";





export default class Body extends React.Component {

    constructor() {
        super();
        this.state = { //初始化赋值
            username: "guobing"
        }
    };

    render() {

        setTimeout(() => {
            this.setState({
                username: "guoyu"
            })
        }, 4000);
        return (
            <section>
                <h1>这里是主体</h1>
                <p>{this.state.username}</p>
            </section>
        )
    }


}
