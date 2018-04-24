import React from 'react';

import MobileHeader from "./Mobile_header.jsx";
import MobileFooter from "./Mobile_footer.jsx";


export default class MobileIndex extends React.Component {
    render() {
        return (

            <div id="mobile">
                <MobileHeader></MobileHeader>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}