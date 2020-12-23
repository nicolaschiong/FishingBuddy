import React from 'react'
import {View, Text, Button} from 'react-native'


const Marketplace = ({navigation}) => {
    return (
        <View style={{
            justifyContent:"center",
            alignContent:"center",
            flex:1
        }}>
            <Text>Marketplace</Text>
            <Button title={"Go"} onPress={()=>navigation.navigate("Detail")}></Button>
        </View>
    )
}
export default Marketplace;