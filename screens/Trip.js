import React, { Component } from "react";
import {
  View,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import * as Icon from "@expo/vector-icons";
import MapView, { Marker }  from "react-native-maps";
import { setLocation, setFilters, setCampings } from "../modules/maps";
import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

const generatedMapStyle = [];

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

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <View style={styles.settings}>
              <View style={styles.location}>
                <Icon.FontAwesome
                  name="location-arrow"
                  size={15}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.options}>
              <Text style={{ fontSize: 12, color: "#A5A5A5", marginBottom: 5 }}>
                Detected Location
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "300" }}>
                Cebu City
              </Text>
            </View>
          </View>
          <View style={styles.settings}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Settings")}
            >
              <Icon.Ionicons name="ios-settings" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {this.renderTabs()}
      </View>
    );
  }

  renderTabs() {
    // const { filters } = this.props;

    return (
      <View style={styles.tabs}>
        <View
          style={styles.tab}
        >
          <Text
            style={[
              styles.tabTitle,
              
            ]}
            onPress={() => this.handleTab("all")}
          >
            All Spots
          </Text>
        </View>
        <View
          style={[
            styles.tab,
          ]}
        >
          <Text
            style={[
              styles.tabTitle,
            ]}
            onPress={() => this.handleTab("tent")}
          >
            Recommended
          </Text>
        </View>
        <View
          style={styles.tab}
        >
          <Text
            style={[
              styles.tabTitle,
            ]}
            onPress={() => this.handleTab("rv")}
          >
            Favorite
          </Text>
        </View>
      </View>
    );
  }

  renderMap(){
    return (
      <View style={styles.map}>
        <MapView
          style={{ flex: 1, height: height * 0.5, width }}
          initialRegion={{
            latitude: 10.266143,
            longitude: 123.875043,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider = { MapView.PROVIDER_GOOGLE }
          customMapStyle = { generatedMapStyle }
          // mapType = "satellite"
          showsCompass = { true }
          >
          <Marker coordinate={{ latitude: 10.266143, longitude: 123.875043 }} />
          <Marker coordinate={{ latitude: 20.266143, longitude: 123.875043 }} />
        </MapView>
      </View>
    );
  }

  
  render() {
    const { profile, product } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={styles.container}>
          {this.renderMap()}
          {/* {this.renderList()} */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Trip.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
  product: mocks.products[0]
};

export default Trip;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding
  },
  map: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerContainer: {
    top: 0,
    height: height * 0.15,
    width: width
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.15,
    paddingHorizontal: 14
  },
  location: {
    height: 24,
    width: 24,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0084d3"
  },
  marker: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFF"
  },
  rvMarker: {
    backgroundColor: "#FFBA5A"
  },
  tentMarker: {
    backgroundColor: "#FF7657"
  },
  settings: {
    alignItems: "center",
    justifyContent: "center"
  },
  options: {
    flex: 1,
    paddingHorizontal: 14
  },
  tabs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  tab: {
    paddingHorizontal: 14,
    marginHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: "transparent"
  },
  tabTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10
  },
  activeTab: {
    borderBottomColor: "#FF7657"
  },
  activeTabTitle: {
    color: "#FF7657"
  },
  map: {
    flex: 1
  },
  camping: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "#A5A5A5",
    borderBottomWidth: 0.5,
    padding: 20
  },
  campingDetails: {
    flex: 2,
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  campingInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14
  },
  campingImage: {
    width: width * 0.3,
    height: width * 0.25,
    borderRadius: 6
  },
  myMarker: {
    zIndex: 2,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(51, 83, 251, 0.2)"
  },
  myMarkerDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: "#3353FB"
  }
});
