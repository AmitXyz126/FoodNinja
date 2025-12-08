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
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { display: "none" },
        tabBarItemStyle: { flexBasis: "auto", width: "auto" },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#fff",
          height: 70,
          borderRadius: 30,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,
          boxShadow: "0 10px 10px 12px rgba(0,0,0,0.15)",
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
      <Tab.Screen
        name="HomeTab"
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Setting";
          const hideOnScreens = ["NotificationScreen"];

          return {
            tabBarStyle: hideOnScreens.includes(routeName)
              ? { display: "none" }
              : {
                  position: "absolute",
                  backgroundColor: "#fff",
                  height: 70,
                  borderRadius: 30,
                  paddingBottom: 10,
                  paddingTop: 10,
                  borderTopWidth: 0,
                  boxShadow: "0 10px 10px 12px rgba(0,0,0,0.15)",
                },
          };
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="CategoriesTab"
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Setting";
          const hideOnScreens = [
            "EditProfile",
            "myAddressesScreen",
            "myOrder",
            "CustomerSupport",
            "LanguageScreen",
            "DeleteAccountScreen",
            "NotificationScreen",
            "MyCartList"
          ];

          return {
            tabBarStyle: hideOnScreens.includes(routeName)
              ? { display: "none" }
              : {
                  position: "absolute",
                  backgroundColor: "#fff",
                  height: 70,
                  borderRadius: 30,
                  paddingBottom: 10,
                  paddingTop: 10,
                  borderTopWidth: 0,
                  boxShadow: "0 10px 10px 12px rgba(0,0,0,0.15)",
                },
          };
        }}
        component={CategoriesStackNavigator}
      />

      <Tab.Screen name="CartTab" component={CartStackNavigator} />
      <Tab.Screen
        name="SettingTab"
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "Setting";
          const hideOnScreens = [
            "EditProfile",
            "myAddressesScreen",
            "myOrder",
            "CustomerSupport",
            "LanguageScreen",
            "DeleteAccountScreen",
            "NotificationScreen",
          ];

          return {
            tabBarStyle: hideOnScreens.includes(routeName)
              ? { display: "none" }
              : {
                  position: "absolute",
                  backgroundColor: "#fff",
                  height: 70,
                  borderRadius: 30,
                  paddingBottom: 10,
                  paddingTop: 10,
                  borderTopWidth: 0,
                  boxShadow: "0 10px 10px 12px rgba(0,0,0,0.15)",
                },
          };
        }}
        component={SettingStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
