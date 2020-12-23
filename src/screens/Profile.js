import React from 'react'
import {View, Text, Button} from 'react-native'

import { theme } from "../constants";

import Header from '../components/Header';


const Profile = ({navigation}) => {
    return(
        <View style={{
            backgroundColor: theme.colors.white,
            flex:1
        }}>
            <Header />
            <Text>Profile</Text>
            <Button title={"Go"} onPress={()=>navigation.navigate("Detail")}></Button>
        </View>
    )
}
export default Profile;