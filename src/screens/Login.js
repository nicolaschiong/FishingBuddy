import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

import { theme } from '../constants/';

class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:theme.colors.white,height:"100%"}}>
                <Image source ={require('../images/illustration_1.png')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                    style={{
                        fontSize:30,
                        fontFamily:"Bold",
                        alignSelf:"center",
                    }}
                >FishingBuddy</Text>

                <Text
                style={{
                    fontFamily:"Medium",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Catch and Earn, Share your Experience, Plan your Trip. Be a FishingBuddy!
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:theme.colors.primary,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color={theme.colors.primary} size={24}/>
                    <TextInput 
                        placeholder="Email"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:theme.colors.primary,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color={theme.colors.primary} size={24}/>
                    <TextInput 
                        placeholder="Password"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:theme.colors.primary,
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"Medium"
                    }}>Login</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:theme.colors.primary,
                    fontFamily:"Medium",
                    paddingVertical:30
                }}>New User</Text>
            </View>
        )
    }
}

export { Login };