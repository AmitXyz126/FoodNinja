import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../gradientbutton/GradientButton";

export default function Onboarding1() {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={["#FED2D2", "#fff"]}
      locations={[0.4044, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* Image */}
      <Image
        source={require("../../assets/images/enjoy.png")}
        style={styles.image}
        resizeMode="contain"
      />
      {/* Title */}
      <Text style={styles.title}>Find your</Text>
      <Text style={styles.titles}>Comfort Food here</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Here You Can find a chef or dish for every taste and color. Enjoy!
      </Text>

      {/* Button */}
      <GradientButton
        onPress={() => navigation.navigate("Onboarding2")}
        title="Next"
        style={{ marginVertical: 12, width: "100%", alignSelf: "center" }}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
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
    paddingTop: 70,
  },
  image: {
    width: 320,
    height: 320,
    marginBottom: 71,
  },
  title: {
    fontSize: 46,
    fontWeight: "bold",
    color: "#F91F1C",
    textAlign: "center",
    marginTop: 38,
    fontFamily: "Poppins",
  },
  titles: {
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins",
    fontStyle: "normal",
  },
  subtitle: {
    color: "#333",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 10,
    fontSize: 13,
    lineHeight: 20,
    fontStyle: "normal",
    fontFamily: "Poppins",
  },

  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
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
