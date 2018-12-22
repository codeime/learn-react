import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

class MyText extends Component {
    static propTypes = {
        name: PropTypes.string
    }
    render() {
        return (
            <View>
                <Text> Hello {this.props.name}</Text>
            </View>
        )
    }
}

export default class TextList extends Component {
    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <MyText name="测试01"></MyText>
                <MyText name="测试02"></MyText>
                <MyText name="测试03"></MyText>
            </View>
        )
    }
}