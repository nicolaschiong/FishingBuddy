import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TextInput, ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../constants";

import CardSmall from '../components/CardSmall';
import ButtonSmall from '../components/ButtonSmall';
import Header from '../components/Header';
import Search from '../components/Search';

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
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61",
                            paddingBottom:5
                        }}>Recommended</Text>
                        <View style={{
                            height:4,
                            backgroundColor:theme.colors.tertiary,
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <ButtonSmall navigation={navigation}/>
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
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61",
                            paddingBottom:5
                        }}>Featured Gear</Text>
                        <View style={{
                            height:4,
                            backgroundColor:theme.colors.tertiary,
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <ButtonSmall navigation={navigation}/>
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