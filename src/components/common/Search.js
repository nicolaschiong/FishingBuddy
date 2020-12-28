import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { TextInput, ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from "../../constants";


const Search = ({navigation, search}) => {
    return (
        <LinearGradient
            colors={["rgba(0,93,160,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
            >
            <View style={{
                backgroundColor: theme.colors.white,
                paddingVertical:8,
                paddingHorizontal:20,
                marginHorizontal:20,
                borderRadius:15,
                marginTop:25,
                flexDirection:"row",
                alignItems:"center",
            }}>
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={theme.colors.primary}
                    style={{
                        fontWeight:"bold",
                        fontSize:18,
                        width:300
                    }}
                />
                <Image
                    source={require('../../images/search.png')}
                    style={{
                        height:20,
                        width:20,
                        position:'absolute',
                        right:0,
                        marginRight:15
                    }}
                />
            </View>
        </LinearGradient>
    )
}
export { Search };