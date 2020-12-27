import React from 'react'
import { View, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


import { theme } from "../constants";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({navigation, card, type}) => {
    if(type==='small'){
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
                            
                        }}>₱{card.productPrice}
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
    else if (type==='large'){
        return (
            <View>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:230}}
                >
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:100,
                            elevation:3,
                            backgroundColor:theme.colors.white,
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:windowWidth*0.91,
                            shadowColor: theme.colors.gray,
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 2,
                        }}
                    >
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
                                    
                                }}>₱{card.productPrice}
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
                    
                </ScrollView>   
            </View>
        )
    }
}
export default Card;