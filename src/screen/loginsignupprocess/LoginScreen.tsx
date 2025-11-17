// screens/Login.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "@/gradientbutton/GradientButton";
import CustomInput from "@/customInput/CustomInput";

import CustomCheckBox from "@/customcheckbox/Checkbox";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";

export default function Login({ navigation }) {
  const [remember, setRemember] = useState(false);

  return (
    <LinearGradient
      colors={["#FFF4F4", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={styles.heading}>
          <Text style={styles.logo}>FoodNinja</Text>
          <Text style={styles.sub}>Deliver Favorite Food</Text>
          <Image
            source={require("../../../assets/images/Vector.png")}
            style={styles.cross}
          ></Image>
        </View>

        <View style={styles.box}>
          <View style={styles.headingLogin}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.desc}>Welcome back you’ve been missed!</Text>
          </View>

          <CustomInput placeholder="Email" type="text" />
          <CustomInput placeholder="Password" type="password" />
          <View style={styles.row}>
            <CustomCheckBox
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("forgotpassword")}
            >
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <GradientButton
            title="Login"
            onPress={() => navigation.navigate("")}
          />

          <View style={styles.orWrap}>
            <View style={styles.line} />
            <Text style={styles.or}>Or</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialBtn}>
            <Text style={styles.socialText}>Continue with</Text>
            <Image
              source={require("../../../assets/images/Path.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.text}>Continue with </Text>
            <Image
              source={require("../../../assets/images/super-g.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text>Need an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Bio")}>
              <Text style={styles.signupText}> Create one</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  cross: {
    width: 44,
    height: 44,
    position: "absolute",
    right: 70,
    top: 55,
  },
  headingLogin: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 60,
    fontFamily: "Viga",
  },
  sub: {
    color: "#5A5A5A",
    marginBottom: 40,
  },
  box: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 25,
  },
  title: { fontSize: 22, fontWeight: "700" },
  desc: {
    color: "#666",
    fontSize: 12,
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    marginBottom: 20,
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#E5E5E5",
  //   borderRadius: 12,
  //   padding: 14,
  //   marginTop: 15,
  // },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  remember: { color: "#888" },
  forgot: { color: "#FF4C4C", fontWeight: "bold" },
  orWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  or: { marginHorizontal: 10 },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    gap: 6,
    padding: 12,
    borderRadius: 12,
    marginVertical: 5,
    backgroundColor: "#F8F8F8",
  },

  socialText: {
    fontSize: 15,
  },

  text: {
    fontSize: 15,
    color: "#000",
    fontWeight: 400,
    fontStyle: "normal",
  },

  socialIcon: {
    width: 22,
    height: 22,
    color: "#0B0B0A",
  },

  // socialBtn: {
  //   borderWidth: 1,
  //   padding: 12,
  //   borderRadius: 12,
  //   alignItems: "center",
  //   marginVertical: 5,
  // },
  signupText: { color: "#F91F1C", fontWeight: "600" },
});
