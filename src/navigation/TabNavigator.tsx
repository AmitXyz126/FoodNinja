import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  CartStackNavigator,
  CategoriesStackNavigator,
  HomeStackNavigator,
  SettingStackNavigator,
} from "./StackNavigator";
import CustomTabBar from "@/components/customtabbar/CustomTabBar";

 

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 0 },  
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="CategoriesTab" component={CategoriesStackNavigator} />
      <Tab.Screen name="CartTab" component={CartStackNavigator} />
      <Tab.Screen name="SettingTab" component={SettingStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
