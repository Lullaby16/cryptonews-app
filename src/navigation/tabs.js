import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { News, Market, Profile, DetailNews } from "../screens"
import { COLORS, icons } from "../constants"
import { TabIcons } from "../components";

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 70,
                    backgroundColor: COLORS.primary,
                    borderTopColor: "trasparent"
                },
                headerShown: false
            }}
        >
            <Tab.Screen
                name="News"
                component={News}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcons 
                                focused={focused}
                                icon={icons.home}
                                label="News"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcons 
                                focused={focused}
                                icon={icons.market}
                                label="Market"
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <TabIcons 
                                focused={focused}
                                icon={icons.profile}
                                label="Profile"
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'MainLayout'}>
            <Stack.Screen name="MainLayout" component={Tabs} />
            <Stack.Screen name="DetailNews" component={DetailNews} />
        </Stack.Navigator>
    )
}

export default Navigation;