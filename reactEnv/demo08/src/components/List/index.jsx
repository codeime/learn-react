import React from 'react';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        let data = this.props.list;
        return (
            <div>
                {
                    data.map((item, index) => {
                        return <p key={index} onClick={this.clickHandle.bind(this, item.id)}>{item.text}</p>
                    })
                }
            </div>
        );
    }
    clickHandle(id) {
        this.props.removeFun(id);
    }
}

export default List;