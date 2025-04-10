import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet, Platform, Text } from "react-native";

import colors from "../config/colors";
import HomeScreen from "../screens/TabScreens/HomeScreen";
import SavedScreen from "../screens/TabScreens/SavedScreen";
import MessagesScreen from "../screens/TabScreens/MessagesScreen";
import ProfileScreen from "../screens/TabScreens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: "#FFFFFF",
          height: Platform.OS==='android'?90:100,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.02,
          shadowRadius: 10,
          borderWidth: 0.96,
          borderColor: "rgba(0, 0, 0, 0)",
          paddingTop: Platform.OS === 'android' ? 20 : 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                width: 24,
                height: 24,
                resizeMode: "contain",
                tintColor: focused ? colors.purpleOne : colors.tabsGray,
              }}
              source={focused ? require("../assets/icons/homeA.png"):require("../assets/icons/home.png")}
            />
          ),
          tabBarLabel: 'Home', 
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            marginBottom:Platform.OS==='android' ? 24:6, 
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                  tintColor: focused ? colors.purpleOne : colors.tabsGray,
                }}
                source={focused ? require("../assets/icons/savedA.png"):require("../assets/icons/saved.png")}
              />
            </View>
          ),
          tabBarLabel: 'Saved',  
          tabBarShowLabel: true, 
          tabBarLabelStyle: {
            marginBottom:Platform.OS==='android' ? 24:6, 
          },
        }}
        name="Saved"
        component={SavedScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                  tintColor: focused ? colors.purpleOne : colors.tabsGray,
                }}
                source={focused ? require("../assets/icons/messagesA.png"):require("../assets/icons/messages.png")}
              />
            </View>
          ),
          tabBarLabel: 'Messages',  
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            marginBottom:Platform.OS==='android' ? 24:6, 
          },  
        }}
        name="Messages"
        component={MessagesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                }}
                source={
                  focused
                    ? require("../assets/icons/profileA.png")
                    : require("../assets/icons/profile.png")
                }
              />
            </View>
          ),
          tabBarLabel: 'Profile',  
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            marginBottom:Platform.OS==='android' ? 24:6, 
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
