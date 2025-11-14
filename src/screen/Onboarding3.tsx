import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../gradientbutton/GradientButton";
import { useNavigation } from "@react-navigation/native";
import OutlineButton from "@/gradientbutton/OutlineButton";

export default function Onboarding3() {
  const navigation = useNavigation();

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
        onPress={() => console.log("Create Account pressed")}
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
    paddingHorizontal: 24,
  },
  image: {
    width: 320,
    height: 320,
    marginBottom: 32,
  },
  title: {
    fontSize: 46,
    fontWeight: 700,
    color: "#FF4B3A",
    textAlign: "center",
    fontStyle: "normal",
    fontFamily: "Poppins",
    marginTop:20
  },
  titles: {
    color: "#000",
    fontSize: 24,
    fontWeight: 700,
    fontStyle: "normal",
  },
  subtitle: {
    color: "#333",
    textAlign: "center",
    marginTop: 12,
    fontSize: 13,
    lineHeight: 20,
    fontStyle:"normal",
    marginBottom:12,
  },
  button: {
    marginVertical: 10,
    width: "100%",
    alignSelf: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 70,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#FCA5A5",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FF4B3A",
    width: 34,
  },
});
