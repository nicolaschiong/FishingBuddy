import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from "../constants";
import { Card, Button, Header, Heading, Search } from '../components/common';

const Home = ({navigation}) => {
    return(
        <View style={{
            backgroundColor: theme.colors.white,
            flex:1
        }}>
            <Header navigation={navigation} type='home'/>
            <Search />

            <ScrollView
                contentContainerStyle={{
                    paddingBottom:150
                }}
                style={{
                    paddingTop:0,
                    height:100
                }}
            >
                
                <View style={{
                    flexDirection:"row",
                    paddingHorizontal:20,
                    width:"100%",
                    alignItems:"center",
                    
                }}>
                    
                    <Heading 
                        heading={{
                            headingTitle:'Recommended'
                        }}/>
                    <View style={{width:"50%", alignItems:"flex-end"}}>
                        <Button navigation={navigation}
                            button={{ 
                                buttonName:'Discover',
                                buttonNav:'Detail'
                                }}
                        />
                    </View>
                </View>

                    <View>
                        <LinearGradient
                                colors={["rgba(0,93,160,0.09)", "transparent"]}
                                style={{
                                    position:"absolute",
                                    left:0,
                                    right:0,
                                    height:100,
                                    marginTop:220,
                                    top:0
                                }}
                            />
                        <ScrollView 
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{height:400}}
                        >
                            <Card 
                                navigation={ navigation }
                                card={{
                                    productName:"Test",
                                    productPrice:"100",
                                    productImage:"5.png",
                                    productCategory:"LURE"
                                }}
                                type='small'
                            />
                            <Card 
                                navigation={ navigation }
                                card={{
                                    productName:"Test",
                                    productPrice:"100",
                                    productImage:"4.png",
                                    productCategory:"REEL"
                                }}
                                type='small'
                            />
                            <Card 
                                navigation={ navigation }
                                card={{
                                    productName:"Test",
                                    productPrice:"100",
                                    productImage:"6.png",
                                    productCategory:"REEL"
                                }}
                                type='small'
                            />
                            <Card 
                                navigation={ navigation }
                                card={{
                                    productName:"Test",
                                    productPrice:"100",
                                    productImage:"7.png",
                                    productCategory:"REEL"
                                }}
                                type='small'
                            />
                        </ScrollView>   
                    </View>

                    <View style={{
                        flexDirection:"row",
                        paddingHorizontal:20,
                        width:"100%",
                        alignItems:"center",
                        marginTop:-80,
                    }}>
                        <Heading 
                            heading={{
                                headingTitle:'Featured Gear'
                            }}/>
                        <View style={{width:"50%", alignItems:"flex-end"}}>
                            <Button 
                                navigation={navigation}
                                button={{
                                    buttonName:'More',
                                    buttonNav:'Detail'
                                }}/>
                        </View>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginBottom:-100}}
                    >
                        <Image
                            source={require("../images/18.png")}
                            style={{marginTop:20,marginHorizontal:20}}
                        />
                        <Image
                            source={require("../images/19.png")}
                            style={{marginTop:20,borderRadius:10}}
                        />
                    </ScrollView>
            </ScrollView>

        </View>
    )
}

export default Home;