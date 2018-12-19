import React from 'react';

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        let params = this.props.match.params
        return (
            <div>
                详情{params.id}
            </div>
        );
    }
}

export default Detail;