// screens/BioScreen.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../appnavigation/AppNavigator";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Bio">;
};

export default function BioScreen({ navigation }: Props) {
  const step = 1;

  return (
    <View style={styles.container}>
            
      {/*  BACK ARROW */}
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

      {/* TITLE & TEXT */}
      <Text style={styles.title}>Fill in your Bio to get started</Text>
      <Text style={styles.sub}>
        This data will be displayed in your account profile for security
      </Text>


      {/* INPUTS */}
      <View style={{ marginTop: 20 }}>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.step}>1/4</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Mobile")}>
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
  sub: { fontSize: 14, color: "#555", width: "90%" },

  input: {
    width: "100%",
    height: 52,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 15,
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
