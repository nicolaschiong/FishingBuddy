import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { theme } from "../../constants";


const Button = ({navigation, button, gradient}) => {
    if (gradient){
        <TouchableOpacity
            style={buttonStyles}
            activeOpacity={opacity}
            {...props}
        >
            
        </TouchableOpacity>
    }
    return (
        <TouchableOpacity 
            onPress={()=>navigation.navigate(button.buttonNav)}
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
                }}>{button.buttonName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export { Button };