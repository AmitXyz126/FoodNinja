import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React from "react";
import {
  CartStackNavigator,
  CategoriesStackNavigator,
  HomeStackNavigator,
  SettingStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        sceneStyle: { backgroundColor: "#344" },
        tabBarStyle: {
          flexDirection: "row",
          backgroundColor: "#000",
          marginBottom: 1,
          marginHorizontal: 1,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          paddingVertical: 12,
          justifyContent: "space-around",
          elevation: 15,
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowRadius: 10,
          shadowOffset: { width: 5, height: 5 },
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CategoriesTab") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "CartTab") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "SettingTab") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
         tabBarActiveTintColor: "#FF1D1D",
          tabBarInactiveTintColor: "#666",
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="CategoriesTab" component={CategoriesStackNavigator} />
      <Tab.Screen name="CartTab" component={CartStackNavigator} />
      <Tab.Screen
        name="SettingTab"
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Setting";
          const hideOnScreens = ["EditProfile"];
          console.log("Current Route Name:", routeName);
          return {
            tabBarStyle: {
              display: hideOnScreens.includes(routeName) ? "none" : "flex",
            },
          };
        }}
        component={SettingStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
