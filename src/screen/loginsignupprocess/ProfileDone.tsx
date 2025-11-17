import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileDone({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={{ color: "white", fontSize: 40 }}>✓</Text>
      </View>

      <Text style={styles.title}>Congrats!</Text>
      <Text style={styles.sub}>Your Profile is Ready to Use</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },

  circle: {
    width: 120,
    height: 120,
    backgroundColor: "#E53935",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: "700", color: "#E53935" },
  sub: { fontSize: 16, color: "#555", marginBottom: 40, marginTop: 8 },

  button: {
    backgroundColor: "#E53935",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "700" },
});
