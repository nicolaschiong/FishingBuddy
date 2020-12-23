import React from 'react'
import { View, Text, Image, ImageBackground, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { theme } from "../constants";


const Header = ({navigation, header}) => {
    return (
        <View style={{
            backgroundColor: theme.colors.primary,
            height: Platform.OS==='ios' ? '23%' : '29%',
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            paddingHorizontal:20
        }}>
            <Image
                source={require('../images/1.png')}
                style={{
                    height:10,
                    width:20,
                    marginTop:50
                }}
            />
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginTop:25,
                width:"100%"
            }}>
                <View style={{width:"50%"}}>
                    <Text style={{
                        fontSize:28,
                        color: theme.colors.white,
                        fontWeight:"bold"
                    }}>Hi, Nick!</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                    <Image
                        source={require('../images/g.png')}
                        style={{height:60,width:60}}
                    />
                </View>
            </View>
        </View>
    )
}
export default Header;