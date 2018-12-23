import React, { Component } from 'react'
import { View } from 'react-native'

export default class Flex extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, backgroundColor: '#b0e0e6' }}></View>
                <View style={{ flex: 2, backgroundColor: '#87ceeb' }}></View>
                <View style={{ flex: 3, backgroundColor: '#4682b4' }}></View>
            </View>
        )
    }
}