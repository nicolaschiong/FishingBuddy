import React from 'react'
import { View, Text, Image, ImageBackground, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/Entypo"

import { theme } from "../../constants";


const Header = ({navigation, header, type}) => {
    if(type==='home') {
        return (
            <View style={{
                backgroundColor: theme.colors.primary,
                height: Platform.OS === 'ios' ? '23%' : '25%',
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20,
                paddingHorizontal:20
            }}>
                <TouchableOpacity>
                    <Image
                        source={require('../../images/1.png')}
                        style={{
                            height:10,
                            width:20,
                            marginTop:50
                        }}
                    />
                </TouchableOpacity>
                
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
                            fontFamily:"Bold",
                        }}>Hi, Nick!</Text>
                    </View>
                    <View style={{width:"50%",alignItems:"flex-end"}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Profile')}>
                            <Image
                                source={require('../../images/g.png')}
                                style={{height:60,width:60}}
                            />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        )
    }
    else if (type==='profile'){
        return(
            <View style={{
                paddingHorizontal:40,
                backgroundColor: theme.colors.primary,
                height: Platform.OS === 'ios' ? '40%' : '45%',
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20
            }}>
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    marginTop:40,
                }}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        style={{
                            width:"50%",
                        }}
                    >
                        <Icon
                            name="chevron-left"
                            size={24}
                            color={theme.colors.white}
                        />
                    </TouchableOpacity>

                    <View style={{
                        width:"50%",
                        alignItems:"flex-end",
                        position:'absolute',
                        right:0,
                    }}>
                        <Icon
                            name="dots-two-vertical"
                            size={24}
                            color={theme.colors.white}
                        />
                    </View>
                </View>

                <Image
                    source={require('../../images/g.png')}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:20,
                        alignSelf:"center",
                        marginVertical:20
                    }}
                />
                <Text style={{
                    fontSize:22,
                    fontFamily:"Bold",
                    color:theme.colors.white,
                    alignSelf:"center"
                }}>
                    Nick Chiong
                </Text>
                <Text style={{
                    fontFamily:"Medium",
                    fontSize:16,
                    color:theme.colors.white,
                    alignSelf:"center"
                }}>
                    Cebu, Philippines
                </Text>

                
                <View style={{
                    flexDirection:"row",
                    alignSelf:"center",
                    marginTop:20
                }}>
                    <View>
                            <Text style={{
                                fontFamily:"Bold",
                                fontSize:15,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>280</Text>
                            <Text style={{
                                fontFamily:"Medium",
                                fontSize:16,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>
                                caught
                            </Text>
                    </View>

                    <View style={{marginHorizontal:40}}>
                            <Text style={{
                                fontFamily:"Bold",
                                fontSize:15,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>2,107</Text>
                            <Text style={{
                                fontFamily:"Medium",
                                fontSize:16,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>
                                followers
                            </Text>
                    </View>


                    <View>
                            <Text style={{
                                fontFamily:"Bold",
                                fontSize:15,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>104</Text>
                            <Text style={{
                                fontFamily:"Medium",
                                fontSize:16,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>
                                follows
                            </Text>
                    </View>
                </View>
            </View>
        )
    }
}
export { Header };