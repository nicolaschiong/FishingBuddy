import React from 'react'
import {View, Text, Button} from 'react-native'

import { theme } from '../constants/'

import Map from '../components/Map'
import Heading from '../components/Heading';
import Card from '../components/Card';




const Trip = ({navigation}) => {
    return (
        
        <View style={{
            backgroundColor: theme.colors.white,
            flex:1
        }}>
            <Map/>
            <View style={{
                flexDirection:"row",
                paddingTop:20,
                paddingHorizontal:20,
                width:"100%",
                alignItems:"center",
                
            }}>
                
                <Heading 
                    heading={{
                        headingTitle:'Weather'
                    }}/>
                
                
            </View>  
            <View>
                <Card 
                    navigation={ navigation }
                    card={{
                        productName:"Test",
                        productPrice:"100",
                        productImage:"5.png",
                        productCategory:"LURE"
                    }}
                    type='large'
                />
            </View>
        </View>
    )
}
export default Trip;