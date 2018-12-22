
import React from 'react'
import { View } from 'react-native'
import Banner from './src/Banner'
import TextList from './src/TextList'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Banner></Banner>
                <TextList></TextList>
            </View>
        )
    }
}
