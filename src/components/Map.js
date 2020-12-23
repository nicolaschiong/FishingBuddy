import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


import { theme } from "../constants";


const Map = ({navigation, map}) => {
    return (
        <View style={{ position: 'relative', height: 500}}>
            <MapView
                style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}
export default Map;