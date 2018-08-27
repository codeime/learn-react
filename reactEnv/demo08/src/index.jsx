
console.log(process.env.NODE_ENV);


import React from 'react';
import { render } from 'react-dom';

import '@/static/style/common.less';

import Hello from '@/page/Hello/index';
import ToDo from '@/page/ToDo/index';

class Index extends React.Component {
    render() {
        return (
            <div>
                <ToDo></ToDo>
                {/*  <Hello ></Hello> */}
                {/* jsx注释 */}
            </div >
        );
    }

}

render(
    <Index />,
    document.getElementById('root'),
);