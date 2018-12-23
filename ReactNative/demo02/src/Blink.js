import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

class BlinkItem extends Component {
    static propTypes = {
        text: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                show: !this.state.show
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        if (!this.state.show) return null
        return (
            <View>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

export default class Blink extends Component {
    render() {
        return (
            <View>
                <BlinkItem text="123"></BlinkItem>
                <BlinkItem text="456"></BlinkItem>
                <BlinkItem text="789"></BlinkItem>
            </View>
        )
    }
}