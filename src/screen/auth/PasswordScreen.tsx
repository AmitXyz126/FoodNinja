// screens/PasswordScreen.tsx
import CustomCheckBox from "@/components/customcheckbox/Checkbox";
import { MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../../navigation/AuthNavigator";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "PasswordScreen">;
};

export default function PasswordScreen({ navigation }: Props) {
  const [remember, setRemember] = useState(false);
  const step = 3;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Image
          source={require("../../../assets/images/backarrow.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      {/* PROGRESS BAR */}
      <View style={styles.progressContainer}>
        {[1, 2, 3, 4].map((item) => (
          <View
            key={item}
            style={[
              styles.progressLine,
              { backgroundColor: item <= step ? "#E53935" : "#D6D6D6" },
            ]}
          />
        ))}
      </View>

      {/* TITLE */}
      <Text style={styles.title}>Create a Secure Password</Text>
      <Text style={styles.sub}>
        Choose a strong password to keep your account safe.
      </Text>

      {/* INPUTS */}
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <View style={styles.row}>
          <CustomCheckBox
            label="I agree to terms & conditions"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
        </View>
      </View>

      {/* STEP + NEXT BUTTON */}
      <View style={styles.bottomRow}>
        <Text style={styles.step}>3/4</Text>

        <TouchableOpacity onPress={() => navigation.navigate("location")}>
          <LinearGradient
            colors={["#FF2D1D", "#8B1A05"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.nextBtn}
          >
            <MaterialIcons name="arrow-forward" size={26} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  backBtn: {
    marginTop: 40,
  },
  backIcon: { width: 28, height: 28, resizeMode: "contain" },

  progressContainer: {
    flexDirection: "row",
    gap: 8,
     marginTop: 20,
    marginBottom: 25,
  },
  progressLine: {
    flex: 1,
    height: 4,
    borderRadius: 10,
  },

  title: { fontSize: 26, fontWeight: "700" },
  sub: { fontSize: 14, color: "#555", marginTop: 10 },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 15,
  },

  bottomRow: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  forgot: { color: "#FF4C4C", fontWeight: "bold" },


  step: {
    fontSize: 25,
    fontWeight: "600",
    color: "#F91F1C",
    fontFamily:"Poppins",
    fontStyle:"normal"
  },

  nextBtn: {
    width: 55,
    height: 55,
    backgroundColor: "#E53935",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  arrow: { color: "#fff", fontSize: 22, fontWeight: "700" },
});
