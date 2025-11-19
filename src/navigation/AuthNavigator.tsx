import Onboarding1 from "@/screen/auth/Onboarding1";
import Onboarding2 from "@/screen/auth/Onboarding2";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddAddressScreen from "../screen/auth/AddAddressScreen";
import BioScreen from "../screen/auth/BioScreen";
import CreateNewPassword from "../screen/auth/CreateNewPassword";
import ForgotPasswordOtp from "../screen/auth/ForgotPasswordOtp";
import LocationScreen from "../screen/auth/LocationScreen";
import LoginScreen from "../screen/auth/LoginScreen";
import MobileScreen from "../screen/auth/MobileScreen";
import Onboarding3 from "../screen/auth/Onboarding3";
import PasswordScreen from "../screen/auth/PasswordScreen";
import ProfileDone from "../screen/auth/ProfileDone";
import SplashScreen from "../screen/SplashScreen";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
  Splash: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Login: undefined;
  Signup: undefined;
  Bio: undefined;
  Mobile: undefined;
  PasswordScreen: undefined;
  location: undefined;
  forgotPassword: undefined;
  createNewPassword: undefined;
  AddAddressScreen: undefined;
  profileDone: undefined;
  MainTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, animation:'fade' }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Bio" component={BioScreen} />
      <Stack.Screen name="Mobile" component={MobileScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      <Stack.Screen name="location" component={LocationScreen} />
      <Stack.Screen name="forgotPassword" component={ForgotPasswordOtp} />
      <Stack.Screen name="createNewPassword" component={CreateNewPassword} />
      <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
      <Stack.Screen name="profileDone" component={ProfileDone} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />

    </Stack.Navigator>
  );
}
