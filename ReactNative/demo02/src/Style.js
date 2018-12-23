import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Style extends Component {
    render() {
        return (
            <View>
                <Text style={style.one}>测试</Text>
                <Text style={style.two}>一下</Text>
                <Text style={style.three}>感觉</Text>
                <Text style={style.four}>不错</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    one: {
        color: 'red',
        fontSize: 16
    },
    two: {
        color: 'blue'
    },
    three: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    four: {
        color: 'red'
    }
})