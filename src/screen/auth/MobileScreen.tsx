// screens/MobileScreen.tsx
import { MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
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
  navigation: StackNavigationProp<RootStackParamList, "Mobile">;
};

export default function MobileScreen({ navigation }: Props) {
  const step = 2;

  return (
    <View style={styles.container}>
      {/* BACK ARROW */}
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

      {/* TITLE & SUBTEXT */}
      <Text style={styles.title}>Add Your Mobile Number</Text>
      <Text style={styles.sub}>
        We’ll use this number to verify your account and keep it secure
      </Text>

      {/* INPUT */}
      <TextInput
        style={styles.input}
        placeholder="Mobile number"
        keyboardType="phone-pad"
      />

      {/* 2/4 + NEXT BUTTON */}
      <View style={styles.bottomRow}>
        <Text style={styles.step}>2/4</Text>
        <TouchableOpacity onPress={() => navigation.navigate("PasswordScreen")}>
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
  container: { flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" },

  backBtn: {
    marginTop: 40,
    marginBottom: 10,
  },
  backIcon: { width: 28, height: 28, resizeMode: "contain" },

  progressContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
    marginBottom: 25,
  },
  progressLine: {
    flex: 1,
    height: 4,
    borderRadius: 10,
  },

  title: { fontSize: 26, fontWeight: "700", marginBottom: 8 },
  sub: { fontSize: 14, color: "#555", width: "90%", marginBottom: 20 },

  input: {
    width: "100%",
    height: 52,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
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


  step: {
    fontSize: 25,
    fontWeight: "600",
    color: "#F91F1C",
    fontFamily:"Poppins",
    fontStyle:"normal"
  },

  nextBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#E53935",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  arrow: { color: "#fff", fontSize: 22, fontWeight: "700" },
});
