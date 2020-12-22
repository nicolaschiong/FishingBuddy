import React from 'react'
import {View, Text, Button} from 'react-native'

const Profile = ({navigation}) => {
    return(
        <View style={{
            justifyContent:"center",
            alignContent:"center",
            flex:1
        }}>
            <Text>Profile</Text>
            <Button title={"Go"} onPress={()=>navigation.navigate("Detail")}></Button>
        </View>
    )
}
export default Profile;