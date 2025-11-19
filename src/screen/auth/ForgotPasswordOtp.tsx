import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function ForgotPasswordOtp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot your{`\n`}password</Text>

      <Text style={styles.sub}>
        Enter the verification code sent to your email{"\n"}
        <Text style={{ color: "red" }}>sample@example.com</Text>
      </Text>

      <View style={styles.otpRow}>
        {[1, 2, 3, 4].map((i) => (
          <TextInput key={i} style={styles.otpBox} maxLength={1} keyboardType="numeric" />
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("createNewpassword")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, fontWeight: "700", marginTop: 20 },
  sub: { fontSize: 14, color: "#777", marginVertical: 20 },

  otpRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 40 },

  otpBox: {
    width: 60,
    height: 60,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 22,
  },

  button: {
    backgroundColor: "#E53935",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: { textAlign: "center", color: "#fff", fontSize: 18, fontWeight: "700" },
});
