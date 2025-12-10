import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { KeyboardAwareScrollView } from "@pietile-native-kit/keyboard-aware-scrollview";

export default function ForgotPasswordOtp({ navigation }) {
  const [otp, setOtp] = useState("");

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

        {/* Title */}
        <Text style={styles.title}>Forgot your{"\n"}password</Text>

        {/* Subtitle */}
        <Text style={styles.sub}>
          Enter the verification code sent to your email{"\n"}
          <Text style={styles.email}>sample@example.com</Text>
        </Text>

        {/* OTP Input */}
        <OtpInput
          numberOfDigits={4}
          onTextChange={(code) => setOtp(code)}
          onFilled={(code) => console.log("OTP Completed:", code)}
          theme={{
            pinCodeContainerStyle: styles.otpBox,
            pinCodeTextStyle: { fontSize: 24, color: "#000" },
            focusStickStyle: { backgroundColor: "#E53935" },
            focusedPinCodeContainerStyle: {
              borderColor: "#E53935",
              borderWidth: 2,
            },
          }}
        />

        {/* Resend Row */}
        <View style={styles.resendRow}>
          <Text style={styles.grayText}>Didn’t receive the code?</Text>
          <Text style={styles.timer}>00:20</Text>
          <TouchableOpacity>
            <Text style={styles.resend}>Resend</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("createNewPassword")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  backBtn: { marginBottom: 20 },

  title: { fontSize: 28, fontWeight: "700", marginBottom: 20, color: "#000" },

  sub: { fontSize: 14, color: "#777", marginBottom: 30, lineHeight: 20 },

  email: { color: "red", fontWeight: "600" },

  otpBox: {
    width: 60,
    height: 60,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
  },

  resendRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20,
  },

  grayText: { color: "#777", fontSize: 14 },

  timer: {
    color: "red",
    fontSize: 14,
    marginHorizontal: 5,
    fontWeight: "600",
  },

  resend: { fontSize: 14, fontWeight: "600", color: "#000" },

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
