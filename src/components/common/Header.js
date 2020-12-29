import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "@expo/vector-icons/Entypo";
import moment from 'moment';

import { theme } from "../../constants";

const Header = ({navigation, header, type}) => {    
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        setInterval(()=>{
            var hour = new Date().getHours(); //Current Hours
            //localize greeting
            if(hour<12){
                setGreeting('Buntag');
            } if(hour<18) {
                setGreeting('Hapon');
            } if(hour<24) {
                setGreeting('Gabii');
            }
        },1000);
        
    }, []);


    if(type==='home') {
        return (
            <View style={{
                backgroundColor: theme.colors.primary,
                height: Platform.OS === 'ios' ? '22%' : '23%',
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
                            fontSize:theme.sizes.title,
                            color: theme.colors.white,
                            fontFamily:"Bold",
                        }}>Maayong {greeting} </Text>
                        <Text style={{
                            fontSize:theme.sizes.h1,
                            color: theme.colors.white,
                            fontFamily:"Bold",
                        }}>Nick!</Text>
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
                height: Platform.OS === 'ios' ? '38%' : '40%',
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
                        <TouchableOpacity>
                            <Icon
                                name="pencil"
                                size={24}
                                color={theme.colors.white}
                            />  
                        </TouchableOpacity>
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
                    fontSize:theme.sizes.title,
                    fontFamily:"Bold",
                    color:theme.colors.white,
                    alignSelf:"center"
                }}>
                    Nick Chiong
                </Text>
                <Text style={{
                    fontFamily:"Medium",
                    fontSize:theme.sizes.body,
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
                                fontSize:theme.sizes.body,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>280</Text>
                            <Text style={{
                                fontFamily:"Medium",
                                fontSize:theme.sizes.caption,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>
                                fish caught
                            </Text>
                    </View>

                    <View style={{marginHorizontal:40}}>
                            <Text style={{
                                fontFamily:"Bold",
                                fontSize:theme.sizes.body,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>2,107</Text>
                            <Text style={{
                                fontFamily:"Medium",
                                fontSize:theme.sizes.caption,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>
                                photos
                            </Text>
                    </View>


                    <View>
                            <Text style={{
                                fontFamily:"Bold",
                                fontSize:theme.sizes.body,
                                color:theme.colors.white,
                                alignSelf:"center"
                            }}>104</Text>
                            <Text style={{
                                fontFamily:"Medium",
                                fontSize:theme.sizes.caption,
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