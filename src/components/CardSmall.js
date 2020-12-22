import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

import { theme } from "../constants";


const CardSmall = ({navigation, card}) => {
    return (
        <TouchableOpacity 
            onPress={()=>navigation.navigate("Detail")}
            style={{
                height:250,
                elevation:2,
                backgroundColor:theme.colors.white,
                marginLeft:20,
                marginTop:20,
                borderRadius:15,
                marginBottom:10,
                width:160
            }}
        >
            <Image
                source={require('../images/4.png')}
            />
            <View 
                style={{
                    flexDirection:"row",
                    paddingTop:10,
                    paddingHorizontal:10,
                }}>
                    <Text 
                        style={{
                            fontWeight:"bold"
                        }}>{card.productName}
                    </Text>
                    <Text style={{
                        fontWeight:"bold",
                        color:theme.colors.primary,
                        paddingTop:10,
                        paddingRight:10,
                        position:'absolute',
                        right:0
                        
                    }}>${card.productPrice}
                    </Text>

                    

            </View>
            <Text style={{
                paddingHorizontal:10,
                fontWeight:"bold",
                color:theme.colors.secondary,
                paddingTop:3
            }}>
                {card.productCategory}
            </Text>
        </TouchableOpacity>
    )
}
export default CardSmall;