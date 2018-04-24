import React from "react";




export default class Header extends React.Component {


    constructor() {
        super();
        this.state = {
            miniHeader: false
        };
    };

    switchHeader() {
        this.setState({
            miniHeader: !this.state.miniHeader
        })
    }

    render() {

        const styleComponentHeader = {
            header: {
                backgroundColor: "#333",
                color: "#fff",
                "padding-top": this.state.miniHeader ? "3px" : "15px",
                paddingBottom: this.state.miniHeader ? "3px" : "15px"
            }
        };
        return (
            <header onClick={this.switchHeader.bind(this)} style={styleComponentHeader.header} className={"smallFontSize"}>
                <h1>这里是顶部</h1>
            </header>
        )
    }


}

