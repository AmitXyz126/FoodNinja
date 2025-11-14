import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface CustomInputProps extends TextInputProps {
  type?: "text" | "password";   // text = normal, password = eye wala
}

export default function CustomInput({ type = "text", ...rest }: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <View style={styles.inputWrap}>
      <TextInput
        {...rest}
        secureTextEntry={isPassword ? !showPassword : false}
        style={styles.input}
      />

      {/* Only password input will show eye */}
      {isPassword && (
        <TouchableOpacity
          onPress={() => setShowPassword((prev) => !prev)}
          style={styles.eyeBtn}
        >
          <Text style={styles.eyeIcon}>
            {showPassword ? "🙈" : "👁️"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    paddingHorizontal: 14,
    marginTop: 15,
  },

  input: {
    flex: 1,
    paddingVertical: 14,
  },

  eyeBtn: {
    paddingLeft: 10,
  },

  eyeIcon: {
    fontSize: 20,
    color: "#777",
  },
});
