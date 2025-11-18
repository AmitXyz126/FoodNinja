import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import GradientButton from "../components/gradientbutton/GradientButton";

const { height } = Dimensions.get("window");

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
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/images/enjoy.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Middle Text Section */}
      <View style={styles.middleSection}>
        <Text style={styles.title}>Find your</Text>
        <Text style={styles.titles}>Comfort Food here</Text>

        <Text style={styles.subtitle}>
          Here You Can find a chef or dish for every taste and color. Enjoy!
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <GradientButton
          onPress={() => navigation.navigate("Onboarding2")}
          title="Next"
          style={{ width: "100%" }}
        />

        {/* Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  /** Responsive Sections **/
  topSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  middleSection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  bottomSection: {
    flex: 1.3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  /** Responsive Image **/
  image: {
    width: "80%", // Responsive width
    height: height * 0.3, // Responsive height based on screen
  },

  /** Text Styles **/
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#F91F1C",
    fontFamily: "Poppins",
  },
  titles: {
    color: "#000",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins",
  },
  subtitle: {
    color: "#333",
    textAlign: "center",
    marginTop: 6,
    fontSize: 13,
    lineHeight: 20,
    fontFamily: "Poppins",
    paddingHorizontal: 20,
  },

  /** Dots **/
  dotsContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#FCA5A5",
    marginHorizontal: 4,
  },
  activeDot: {
    width: 34,
    backgroundColor: "#FF4B3A",
  },
});
