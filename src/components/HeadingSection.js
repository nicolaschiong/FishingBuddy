import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { theme } from "../constants";

import ButtonSmall from "../components/ButtonSmall";


const HeadingSection = ({heading}) => {
    return (
        <View style={{width:"50%"}}>
            <Text style={{
                fontWeight:"bold",
                fontSize:17,
                color:"#585a61",
                paddingBottom:5
            }}>
                {heading.headingTitle}
            </Text>
            <View style={{
                height:4,
                backgroundColor:theme.colors.tertiary,
                width:115,
                marginTop:-5
            }}>
            </View>
        </View>
    )
}
export default HeadingSection;