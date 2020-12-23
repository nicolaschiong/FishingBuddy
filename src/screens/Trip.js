import React from 'react'
import {View, Text, Button} from 'react-native'

import { theme } from '../constants/'

import Map from '../components/Map'


const Trip = ({navigation}) => {
    return (
        
        <View style={{
            backgroundColor: theme.colors.white,
            flex:1
        }}>
            <Map/>
            <Text>Trip</Text>
            <Button title={"Go"} onPress={()=>navigation.navigate("Detail")}></Button>
        </View>
    )
}
export default Trip;