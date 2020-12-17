import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text
} from "react-native";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Chat extends Component {

  render() {
    return (
      <View>
        <Text>Chat Screen</Text>
      </View>
    );
  }
}

Chat.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
  product: mocks.products[0]
};

export default Chat;

const styles = StyleSheet.create({
  
});
