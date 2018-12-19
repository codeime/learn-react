import React from 'react';

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <input
                    style={{ width: '100%', height: '40px', }}
                    value={this.state.value}
                    onChange={this.changeHandle.bind(this)}
                    onKeyUp={this.commitHandle.bind(this)}
                    type="text" />
            </div>
        );
    }
    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    commitHandle(e) {
        let value = this.state.value;
        if (e.keyCode === 13 && value.trim()) {
            this.props.commitFun(value);
            this.setState({
                value: ''
            });
        }
    }
}

export default Input;