import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";
import CustomInput from "@/components/customInput/CustomInput";

export default function CreateNewPassword({ navigation }) {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Image
            source={require("../../../assets/images/backarrow.png")}
            style={{ width: 26, height: 26, resizeMode: "contain" }}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Create a new{`\n`}password</Text>

        <Text style={styles.sub}>
          Enter a new password and try not to forget it
        </Text>

        {/* Inputs */}
        <CustomInput placeholder="Password" type="password" />
        <CustomInput placeholder="Confirm Password" type="password" />

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ProfileDone")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  backBtn: { marginBottom: 20, marginTop: 30 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 20 },
  sub: { fontSize: 14, color: "#777", marginBottom: 30 },

  button: {
    backgroundColor: "#F8F8F8",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: "auto",
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#666",
    fontSize: 18,
    fontWeight: "700",
  },
});
