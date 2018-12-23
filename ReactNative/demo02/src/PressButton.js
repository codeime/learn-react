import React from 'react';
import { Alert, View, Button } from 'react-native'

class PressButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    handlePress() {
        Alert.alert('嘻嘻')
    }
    render() {
        return (
            <View>
                <Button onPress={this.handlePress.bind(this)} title="点我呀"></Button>
            </View>
        )
    }
}

export default PressButton;