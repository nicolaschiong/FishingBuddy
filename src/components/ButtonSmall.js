import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { theme } from "../constants";


const ButtonSmall = ({navigation, button}) => {
    return (
        <TouchableOpacity 
            onPress={()=>navigation.navigate("Detail")}
        >
            <View style={{
                backgroundColor:theme.colors.primary,
                paddingHorizontal:20,
                paddingVertical:5,
                borderRadius:15,
            }}>
                <Text style={{
                    fontWeight:"bold",
                    fontSize:13,
                    color: theme.colors.white
                }}>More</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ButtonSmall;