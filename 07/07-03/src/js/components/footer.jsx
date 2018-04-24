import React from "react";

var footerCss = require('./../../css/footer.css');


export default class Footer extends React.Component {
    render() {
        return (
            <footer className={footerCss.miniFooter}>
                <h1>这里是页面的的底部</h1>
            </footer>
        )
    }


}

