import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as Icon from "@expo/vector-icons";
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import Trip from '../screens/Trip'
import Marketplace from '../screens/Marketplace'
import Challenge from '../screens/Challenge'
import {Image} from 'react-native'
import { theme } from '../constants';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        initialRouteName='Home'
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:theme.colors.primary,
                    elevation:2
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
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:24 }} name={'human-greeting'} size={size} color={theme.colors.white} />;
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
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:29 }} name={'hook'} size={size} color={color} />;
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
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:24 }} name={'home'} size={size} color={color} />;
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
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:24 }} name={'star-face'} size={size} color={color} />;
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
                            return <Icon.MaterialCommunityIcons style={{ height:24, width:24 }} name={'weather-sunset'} size={size} color={color} />;
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
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;