import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text
} from "react-native";
import * as Icon from "@expo/vector-icons";
import MapView, { Marker }  from "react-native-maps";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Join extends Component {

  render() {
    return (
      <View>
        <Text>Join Screen</Text>
      </View>
    );
  }
}

Join.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
  product: mocks.products[0]
};

export default Join;

const styles = StyleSheet.create({
  
});
