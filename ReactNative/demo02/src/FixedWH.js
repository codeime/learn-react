import React, { Component } from "react"
import { View } from 'react-native';

export default class FixedWH extends Component {
    render() {
        return (
            <View>
                <View style={{ width: 100, height: 100, backgroundColor: '#b0e0e6' }}></View>
                <View style={{ width: 150, height: 150, backgroundColor: '#87ceeb' }}></View>
                <View style={{ width: 200, height: 200, backgroundColor: '#4682b4' }}></View>
            </View>
        )
    }
}