import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Body from "./components/indexBody.jsx"

class Index extends React.Component {
    componentWillMount() {
        console.log("===================这是index页面开始加载===================")
    };

    componentDidMount() {
        console.log("===================这是index页面加载完了======================")
    };
    render() {
        var h = <Header />;
        return (
            <div>
                {h}    {/* 参数形式调用 */}
                <Body userId={123456} />
                <Footer></Footer>

            </div>
        )
    }
}
ReactDOM.render(
    <Index />,
    document.getElementById("example")
)