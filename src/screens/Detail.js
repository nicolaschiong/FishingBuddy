import React from 'react'
import {View, Text, Image } from 'react-native'
import SwiperComponent from '../components/SwiperComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { theme } from "../constants";

const Detail = ({navigation}) => {
    return(
        <View style={{
            flex:1,
            backgroundColor:theme.colors.white,
        }}>
            <View style={{
                flexDirection:"row",
                width:"100%",
                height:"90%"
            }}>
                <View style={{ width:"10%", paddingLeft:20 }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image
                            source={require('../images/17.png')}
                            style={{marginVertical:40}}
                        />
                    </TouchableOpacity>   
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../images/11.png')}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../images/12.png')}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../images/13.png')}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../images/14.png')}
                            />
                        </View>  
                </View>
                <View style={{
                    width:"80%",
                    }}>
                    <SwiperComponent/>
                </View>
            </View>

                        <View style={{
                            flexDirection:"row",
                            marginTop:-80,
                            marginHorizontal:20,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:28,
                                color:"#62636a"
                            }}>
                                Shimano X-500
                            </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:170,
                                fontSize:20
                            }}>
                                $400
                            </Text>
                        </View>

                        <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:theme.colors.primary,
                            paddingTop:3,
                            fontSize:20
                        }}>
                            REEL
                        </Text>

                        <View style={{
                            flexDirection:"row",
                            width:"100%"
                        }}>
                            <View style={{
                                width:"50%",
                                backgroundColor:theme.colors.primary,
                                height:100,
                                marginTop:20,
                                borderTopRightRadius:40,
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    color:theme.colors.white,
                                    fontSize:17
                                }}>Buy Now</Text>
                            </View>

                            <View style={{
                                width:"50%",
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20
                            }}>
                                <Text style={{
                                    color:"#62636a",
                                    fontWeight:"bold",
                                    fontSize:17
                                }}>Description</Text>
                            </View>
                        </View>
                        
        </View>
    )
}
export { Detail };