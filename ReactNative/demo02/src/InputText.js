import React, { Component } from 'react'
import { TextInput, Text, View } from 'react-native'

export default class InputText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    handleTextChange(txt) {
        this.setState({
            text: txt
        })
    }
    render() {
        return (
            <View style={{ margin: 50 }}>
                <TextInput style={{ height: 40 }} placeholder="请输入" onChangeText={this.handleTextChange.bind(this)}></TextInput>
                <Text style={{ fontSize: 40 }}>{this.state.text.split(' ').map(item => item && '🍕')}</Text>
            </View>
        )
    }
}
