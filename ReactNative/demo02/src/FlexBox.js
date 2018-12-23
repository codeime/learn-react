import React, { Component } from 'react'
import { View } from 'react-native'

export default class FlexBox extends Component {
    render() {
        return (
            <View style={{
                flex: 1, flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <View style={{ width: 150, height: 150, backgroundColor: 'powderblue' }} ></View>
                <View style={{ width: 150, height: 150, backgroundColor: 'skyblue' }}></View>
                <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}></View>
            </View>
        )
    }
}