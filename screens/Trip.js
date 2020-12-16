import React, { Component } from "react";
import {
  View,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as Icon from "@expo/vector-icons";
import MapView, { Marker }  from "react-native-maps";
import { setLocation, setFilters, setCampings } from "../modules/maps";
import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Trip extends Component {

  // getInitialState() {
  //   return {
  //     region: {
  //       latitude: 10.266143,
  //       longitude: 123.875043,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     },
  //   };
  // }

  // onRegionChange(region){
  //   this.setState({ region})
  // }
  
  render() {
    const { product } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>

        <Block>
          <Text h2 bold style={styles.product}>
            Plan a Fishing Trip
          </Text>
          <Block>
            <View style={styles.map}>
            
            <MapView
              style={{ flex: 1, height: height * 0.5, width }}
              initialRegion={{
                latitude: 10.266143,
                longitude: 123.875043,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={{ latitude: 10.266143, longitude: 123.875043 }} />

              
            </MapView>
              
            

          </View>
          </Block>
          
        </Block>
      </ScrollView>
    );
  }
}

Trip.defaultProps = {
  product: mocks.products[0]
};

export default Trip;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  },
  map: {
    flex: 1,
    paddingHorizontal: 0
  }
});
