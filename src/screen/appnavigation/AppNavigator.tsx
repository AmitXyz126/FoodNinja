import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../SplashScreen";
import Onboarding1 from "../Onboarding1";
import Onboarding2 from "../Onboarding2";
import Onboarding3 from "../Onboarding3";

import LoginScreen from "../loginsignupprocess/LoginScreen";
import BioScreen from "../loginsignupprocess/BioScreen";
import MobileScreen from "../loginsignupprocess/MobileScreen";
import PasswordScreen from "../loginsignupprocess/PasswordScreen";
import LocationScreen from "../loginsignupprocess/LocationScreen";
import ForgotPasswordOtp from "../loginsignupprocess/ForgotPasswordOtp";
import CreateNewPassword from "../loginsignupprocess/CreateNewPassword";
import AddAddressScreen from "../loginsignupprocess/AddAddressScreen";
import ProfileDone from "../loginsignupprocess/ProfileDone";
import HomeScreen from "../mainScreens/HomeScreen";
import CategoriesScreen from "../mainScreens/CategoriesScreen";
 import  foodscreen from "../mainScreens/FoodListScreen"
import FoodListScreen from "../mainScreens/FoodListScreen";
 

export type RootStackParamList = {
  Splash: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Login: undefined;
  Signup: undefined;
  Bio: undefined;
  Mobile: undefined;
  passwordScreen: undefined;
  location: undefined;
  forgotpassword: undefined;
  createNewpassword: undefined;
  AddAddressScreen: undefined;
  profileDone: undefined;
  homeScreen: undefined;
  categoryscreen: undefined;
  foodscreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Bio" component={BioScreen} />
      <Stack.Screen name="Mobile" component={MobileScreen} />
      <Stack.Screen name="passwordScreen" component={PasswordScreen} />
      <Stack.Screen name="location" component={LocationScreen} />
      <Stack.Screen name="forgotpassword" component={ForgotPasswordOtp} />
      <Stack.Screen name="createNewpassword" component={CreateNewPassword} />
      <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
      <Stack.Screen name="profileDone" component={ProfileDone} />
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="categoryscreen" component={CategoriesScreen} />
      <Stack.Screen name="foodscreen" component={FoodListScreen} />
    </Stack.Navigator>
  );
}
