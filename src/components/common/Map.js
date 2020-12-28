import React from 'react'
import { View, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


import { theme } from "../../constants";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Map = ({navigation, map}) => {
    return (
        <View style={{ position: 'relative', height: windowHeight*0.4}}>
            <MapView
                style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
                initialRegion={{
                    latitude: 10.208790,
                    longitude: 123.761127,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}
export { Map };