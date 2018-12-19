import React from 'react';

class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                {this.props.title}123
            </div>
        );
    }
}

export default Header;