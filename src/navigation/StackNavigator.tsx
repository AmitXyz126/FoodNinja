import EditProfileScreen from "@/screen/app/EditProfileScreen";
import CartScreen from "@/screen/app/CartScreen";
import CategoriesScreen from "@/screen/app/CategoriesScreen";
import FoodListScreen from "@/screen/app/FoodListScreen";
import SingleFoodList from "@/screen/app/SingleFoodList";
import HomeScreen from "@/screen/app/HomeScreen";
import SettingScreen from "@/screen/app/SettingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MyAddressesScreen from "@/screen/app/MyAddressesScreen";
import OrdersHistoryScreen from "@/screen/app/OrdersHistoryScreen";
import CustomerSupportScreen from "@/screen/app/CustomerSupportScreen";
import LanguageScreen from "@/screen/app/LanguageScreen";
import DeleteAccountScreen from "@/screen/app/DeleteAccountScreen";
import NotificationScreen from "@/screen/app/NotificationScreen";
import ProductDetailScreen from "@/screen/app/ProductDetailScreen";
import MyCartList from "@/screen/app/MyCartList";
 import AddressScreen from "@/screen/app/AddressScreen";
import UseLocationAddress from "@/screen/app/UseLocationAddress";

const Stack = createNativeStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeMain"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
}

export function CategoriesStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="FoodList" component={FoodListScreen} />
      <Stack.Screen name="singleFoodList" component={SingleFoodList} />
      <Stack.Screen name="productDetail" component={ProductDetailScreen} />
      <Stack.Screen name="MyCartList" component={MyCartList} />
    </Stack.Navigator>
  );
}

export function CartStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="UseLocation" component={UseLocationAddress} />
    </Stack.Navigator>
  );
}

export function SettingStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="myAddressesScreen" component={MyAddressesScreen} />
      <Stack.Screen name="myOrder" component={OrdersHistoryScreen} />
      <Stack.Screen name="CustomerSupport" component={CustomerSupportScreen} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen
        name="DeleteAccountScreen"
        component={DeleteAccountScreen}
      />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
}
