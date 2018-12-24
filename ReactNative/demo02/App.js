
import React from 'react'
import { View } from 'react-native'
// import Banner from './src/Banner'
// import TextList from './src/TextList'
// import Blink from './src/Blink'
// import Style from './src/Style'
// import FixedWH from './src/FixedWH'
// import Flex from './src/Flex'
// import FlexBox from './src/FlexBox'
// import InputText from './src/InputText'
// import PressButton from './src/PressButton'
import ButtonBasics from './src/ButtonBasics'
export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/*  <Banner></Banner> */}
                {/*   <TextList></TextList> */}
                {/* <Blink></Blink> */}
                {/*  <Style></Style> */}
                {/*  <FixedWH></FixedWH> */}
                {/*  <Flex></Flex> */}
                {/*  <FlexBox></FlexBox> */}
                {/*  <InputText></InputText> */}
                {/*  <PressButton></PressButton> */}
                <ButtonBasics></ButtonBasics>
            </View>
        )
    }
}
