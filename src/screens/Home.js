import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TextInput, ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from "../constants";

import CardSmall from '../components/CardSmall';
import ButtonSmall from '../components/ButtonSmall';
import Header from '../components/Header';
import Search from '../components/Search';
import HeadingSection from '../components/HeadingSection';

const Home = ({navigation}) => {
    return(
        <View style={{
            backgroundColor: theme.colors.white,
            flex:1
        }}>
            <Header />
            <Search />

            <ScrollView 
                style={{paddingTop:-20}}
            >
                
            <View style={{
                flexDirection:"row",
                paddingHorizontal:20,
                width:"100%",
                alignItems:"center",
                
            }}>
                
                <HeadingSection 
                    heading={{
                        headingTitle:'Recommended'
                    }}/>
                <View style={{width:"50%", alignItems:"flex-end"}}>
                    <ButtonSmall navigation={navigation}
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
                    <CardSmall 
                        navigation={ navigation }
                        card={{
                            productName:"Test",
                            productPrice:"100",
                            productImage:"4.png",
                            productCategory:"REEL"
                        }}
                    />
                    <CardSmall 
                        navigation={ navigation }
                        card={{
                            productName:"Test",
                            productPrice:"100",
                            productImage:"4.png",
                            productCategory:"REEL"
                        }}
                    />
                    <CardSmall 
                        navigation={ navigation }
                        card={{
                            productName:"Test",
                            productPrice:"100",
                            productImage:"4.png",
                            productCategory:"REEL"
                        }}
                    />
                    <CardSmall 
                        navigation={ navigation }
                        card={{
                            productName:"Test",
                            productPrice:"100",
                            productImage:"4.png",
                            productCategory:"REEL"
                        }}
                    />
                    <CardSmall 
                        navigation={ navigation }
                        card={{
                            productName:"Test",
                            productPrice:"100",
                            productImage:"4.png",
                            productCategory:"REEL"
                        }}
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
                    <HeadingSection 
                        heading={{
                            headingTitle:'Featured Gear'
                        }}/>
                    <View style={{width:"50%", alignItems:"flex-end"}}>
                        <ButtonSmall 
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