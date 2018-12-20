import React from 'react';
import PropTypes from 'prop-types'
class Detail extends React.Component {
    static propTypes = {
        match: PropTypes.object
    }
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