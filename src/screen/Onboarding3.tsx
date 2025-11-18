import OutlineButton from "@/components/gradientbutton/OutlineButton";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import GradientButton from "../components/gradientbutton/GradientButton";

const { width, height } = Dimensions.get("window");

export default function Onboarding3() {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={["#FED2D2", "#fff"]}
      locations={[0.4044, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <Image
        source={require("../../assets/images/panner2.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Discover</Text>
      <Text style={styles.titles}>Your Dream Food here</Text>

      <Text style={styles.subtitle}>
        Find the best dishes, cafes, and restaurants near you. Order what you
        love — fresh, fast, and hassle-free.
      </Text>

      <GradientButton
        title="Login"
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      />

      <OutlineButton
        title="Create an Account"
        onPress={() => navigation.navigate("Bio")}
        style={styles.button}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.06,
  },

  image: {
    width: width * 0.75,
    height: width * 0.75,
    marginBottom: height * 0.03,
    marginTop: height * 0.08,
  },

  title: {
    fontSize: width * 0.1,
    fontWeight: "700",
    color: "#FF4B3A",
    textAlign: "center",
    fontFamily: "Poppins",
  },

  titles: {
    fontSize: width * 0.06,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    marginTop: height * 0.005,
  },

  subtitle: {
    color: "#333",
    textAlign: "center",
    marginTop: height * 0.015,
    marginBottom: height * 0.03,
    fontSize: width * 0.035,
    lineHeight: width * 0.045,
    fontFamily: "Poppins",
    paddingHorizontal: width * 0.03,
  },

  button: {
    marginVertical: height * 0.015,
    width: "100%",
  },

  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: height * 0.07,
  },

  dot: {
    height: width * 0.02,
    width: width * 0.02,
    borderRadius: width * 0.02,
    backgroundColor: "#FCA5A5",
    marginHorizontal: width * 0.01,
  },

  activeDot: {
    backgroundColor: "#FF4B3A",
    width: width * 0.09,
  },
});
