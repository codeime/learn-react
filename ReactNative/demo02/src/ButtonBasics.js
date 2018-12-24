import React, { Component } from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'

export default class ButtonBasics extends Component {
    onPressButton() {
        Alert.alert('oh !')
    }
    render() {
        return (
            <View style={style.mianBox}>
                <View style={style.item}>
                    <Button onPress={this.onPressButton} title="Press me" ></Button>
                </View>
                <View style={style.item}>
                    <Button onPress={this.onPressButton} title="press me" color="#841584"></Button>
                </View>
                <View style={style.item2}>
                    <Button onPress={this.onPressButton} title="this look great!"></Button>
                    <Button onPress={this.onPressButton} title="ok" color="#841584"></Button>
                </View>

            </View>
        )
    }
}

const style = StyleSheet.create({
    mianBox: {
        flex: 1,
        justifyContent: 'center'
    },
    item: {
        margin: 20
    },
    item2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})