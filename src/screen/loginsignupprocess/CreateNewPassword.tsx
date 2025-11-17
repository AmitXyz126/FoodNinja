import CustomInput from "@/customInput/CustomInput";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function CreateNewPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new{`\n`}password</Text>

      <Text style={styles.sub}>
        Enter a new password and try not to forget it
      </Text>

      <CustomInput placeholder="Password" type="password" />
      {/* <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} /> */}
      <CustomInput placeholder="Confirm Password" type="password" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ProfileDone")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "700", marginTop: 20 },
  sub: { fontSize: 14, color: "#777", marginVertical: 10 },

  //   input: {
  //     height: 50,
  //     backgroundColor: "#f3f3f3",
  //     borderRadius: 10,
  //     paddingHorizontal: 15,
  //     marginVertical: 10,
  //   },

  button: {
    backgroundColor: "#E53935",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
