import React from 'react'
import {View, Text, Button} from 'react-native'


const Equipment = ({navigation}) => {
    return (
        <View style={{
            justifyContent:"center",
            alignContent:"center",
            flex:1
        }}>
            <Text>Trip</Text>
            <Button title={"Go"} onPress={()=>navigation.navigate("Detail")}></Button>
        </View>
    )
}
export { Equipment };