
console.log(process.env.NODE_ENV);


import React from 'react';
import { render } from 'react-dom';

import '@/static/style/common.less';

import Hello from '@/page/Hello/index';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Hello ></Hello>
                {/* jsx注释 */}
            </div >
        );
    }

}

render(
    <Index />,
    document.getElementById('root'),
);