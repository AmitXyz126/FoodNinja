import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding1");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={["#FF1D1D", "#8F3300"]}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 2, y: 0 }}
      style={styles.container}
    >
      {/* Top Pizza Image */}
      <Image
        source={require("../../assets/images/pizza.png")}
        style={styles.topImage}
        resizeMode="contain"
      />

      {/* Center Logo & Text */}
      <View style={styles.centerContent}>
        <Image
          source={require("../../assets/images/centerimg.png")}  
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Bottom Pizza Image */}
      <Image
        source={require("../../assets/images/pizzadeal.png")}  
        style={styles.bottomImage}
        resizeMode="contain"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  topImage: {
    position: "absolute",
    top: 0,
    left: -6,
    width: 180,
    height: 180,
  },
  bottomImage: {
    position: "absolute",
    bottom: -7,
    right: 0,
    width: 180,
    height: 180,
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 260,
    height: 141,
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 4,
    textAlign: "center",
  },
});
