import GradientButton from "@/components/gradientbutton/GradientButton";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";


const { height } = Dimensions.get("window");

export default function Onboarding2() {
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
          source={require("../../../assets/images/paneer.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        <Text style={styles.title}>Food Ninja</Text>

        <Text style={styles.titless}>
          is Where Your Comfort {"\n"} Food Lives
        </Text>

        <Text style={styles.subtitle}>
          Here you can find a chef or dish for every taste and color. Enjoy!
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <GradientButton
          onPress={() => navigation.navigate("Onboarding3")}
          title="Get Started"
          style={{ width: "100%" }}
        />

        {/* Dots */}
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
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

  /* Responsive Sections */
  topSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  middleSection: {
    flex: 2,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  bottomSection: {
    flex: 1.2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  /* Responsive Image */
  image: {
    width: "80%",
    height: height * 0.3, // Responsive
  },

  /* Text */
  title: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#FF4B3A",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  titless: {
    color: "#000",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "Poppins",
  },
  subtitle: {
    color: "#333",
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 12,
  },

  /* Dots */
  dotsContainer: {
    flexDirection: "row",
    marginTop: 18,
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
