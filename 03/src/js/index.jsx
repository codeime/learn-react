import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Body from "./components/indexBody.jsx"

class Index extends React.Component {
    render() {
        var h = <Header />;
        return (
            <div>
                {h}    {/* 参数形式调用 */}
                <Body />
                <Footer></Footer>

            </div>
        )
    }
}
ReactDOM.render(
    <Index />,
    document.getElementById("example")
)