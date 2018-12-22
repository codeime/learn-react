/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import { Image } from 'react-native';


export default class Banner extends Component {
    render() {
        let src = { uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" }
        return (
            <Image source={src} style={{ width: '100%', height: 100 }}></Image>
        );
    }
}