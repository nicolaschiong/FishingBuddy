import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import firebase from 'firebase';
import HomeStackNavigator from "./src/navigations/Navigator"
import * as Font from 'expo-font';


export default class App extends React.Component{
  state={
    isFontLoaded:false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'Bold':require('./src/fonts/Montserrat-ExtraBold.otf'),
      'Medium':require('./src/fonts/Montserrat-Medium.otf'),
      'Regular':require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({isFontLoaded:true})
    firebase.initializeApp({
      apiKey: "AIzaSyCvz1Hodkq4h3_jTC-jZvVpjG3RqspSGOk",
      authDomain: "fishingbuddy-d032a.firebaseapp.com",
      databaseURL: "https://fishingbuddy-d032a-default-rtdb.firebaseio.com",
      projectId: "fishingbuddy-d032a",
      storageBucket: "fishingbuddy-d032a.appspot.com",
      messagingSenderId: "941180061232",
      appId: "1:941180061232:web:be0d24fb88ba0da9694ff5",
      measurementId: "G-JL7ZM48Y82"
    });
  }

  render(){
    return (
      (this.state.isFontLoaded === true)
        ? (<NavigationContainer><HomeStackNavigator/></NavigationContainer>)
        : (<AppLoading/>)
    );
  }
}