import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text
} from "react-native";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class FriendList extends Component {

  render() {
    return (
      <View>
        <Text>FriendList Screen</Text>
      </View>
    );
  }
}

FriendList.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
  product: mocks.products[0]
};

export default FriendList;

const styles = StyleSheet.create({
  
});
