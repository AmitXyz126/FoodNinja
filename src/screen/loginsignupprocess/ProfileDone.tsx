import GradientButton from "@/components/gradientbutton/GradientButton";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileDone({ navigation }) {
  return (
    <LinearGradient
      colors={["#FED2D2", "#fff"]}
      locations={[0.4044, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.centerContent}>
        <Image
          style={styles.circle}
          source={require("../../../assets/images/congrats.png")}
        />

        <Text style={styles.title}>Congrats!</Text>
        <Text style={styles.sub}>Your Profile is Ready to Use</Text>
      </View>

      <GradientButton
        title="Go to Home"
        style={styles.button}
        onPress={() => navigation.navigate("homeScreen")}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  circle: {
    width: 129,
    height: 132,
  },

  title: { fontSize: 28, fontWeight: "700", color: "#E53935", marginTop: 20 },
  sub: { fontSize: 16, color: "#555", marginBottom: 40, marginTop: 8 },

  button: {
    position: "absolute",
    bottom: 40,
    width: 350,
  },
});
