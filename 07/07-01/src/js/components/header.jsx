import React from "react";




export default class Header extends React.Component {
    render() {

        const styleComponentHeader = {
            header: {
                backgroundColor: "#333",
                color: "#fff",
                "padding-top": "15px",
                paddingBottom: "20px"
            }
        };
        return (
            <header style={styleComponentHeader.header} className={"smallFontSize"}>
                <h1>这里是顶部</h1>
            </header>
        )
    }


}

