import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Pressable } from "react-native";

 
import HomeScreen from "../mainScreens/HomeScreen";
import CategoriesScreen from "../mainScreens/CategoriesScreen";
import FoodListScreen from "../mainScreens/FoodListScreen"; 
 
// import ProfileScreen from "../mainScreens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        // BOTTOM TAB CONTAINER STYLING
        tabBarStyle: {
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          height: 64,
          borderRadius: 40,
          backgroundColor: "#ffffff",
          elevation: 10,
          paddingHorizontal: 20,
        },

        // Custom touch area
        tabBarButton: (props) => (
          <Pressable
            {...props}
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 8,
            }}
          >
            {props.children}
          </Pressable>
        ),
      }}
    >
      {/* HOME TAB */}
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/homeFill.png")
                  : require("../../assets/icons/home.png")
              }
              style={{ width: 26, height: 26, opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
      />

      {/* CATEGORIES */}
      <Tab.Screen
        name="CategoriesTab"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/categoryFill.png")
                  : require("../../assets/icons/category.png")
              }
              style={{ width: 26, height: 26, opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
      />

      {/* FOOD LIST */}
      <Tab.Screen
        name="FoodListTab"
        component={FoodListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/menuFill.png")
                  : require("../../assets/icons/menu.png")
              }
              style={{ width: 26, height: 26, opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/profileFill.png")
                  : require("../../assets/icons/profile.png")
              }
              style={{ width: 28, height: 28, opacity: focused ? 1 : 0.5 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
