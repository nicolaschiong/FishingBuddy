import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import * as Icon from "@expo/vector-icons";

import { Challenge, Detail, Equipment, Favourite, Home, Login, Marketplace, Profile, Register, Trip } from '../screens/';
import { theme } from '../constants';

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            shifting={false}
            initialRouteName='Home'
                tabBarOptions={{
                    style:{
                        height:50,
                        justifyContent:"center",
                        paddingVertical:15,
                        backgroundColor:theme.colors.primary,
                        elevation:2,
                    }
                }}
        >
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({ focused, size}) => {{
                        let color;
                        focused===true?color=theme.colors.secondary:color=theme.colors.white;
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:24 }} name={'human-greeting'} size={24} color={color} />;
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Marketplace"
                component={Marketplace}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({ focused, size}) => {{
                        let color;
                        focused===true?color=theme.colors.secondary:color=theme.colors.white;
                            return <Icon.MaterialIcons style={{ height:24, width:29 }} name={'store-mall-directory'} size={24} color={color} />;
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({ focused, size}) => {{
                        let color;
                        focused===true?color=theme.colors.secondary:color=theme.colors.white;
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:24 }} name={'home'} size={24} color={color} />;
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Challenge"
                component={Challenge}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({ focused, color, size}) => {{
                        let color;
                        focused===true?color=theme.colors.secondary:color=theme.colors.white;
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:24 }} name={'fish'} size={24} color={color} />;
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Trip"
                component={Trip}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({ focused, size}) => {{
                        let color;
                        focused===true?color=theme.colors.secondary:color=theme.colors.white;
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:24 }} name={'weather-sunset'} size={24} color={color} />;
                        }
                    }
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;