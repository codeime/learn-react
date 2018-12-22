/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class HelloWorld extends Component<Props> {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.text} > Hello world test </Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'green'
    }
});