// screens/LocationScreen.tsx
import GradientButton from "@/components/gradientbutton/GradientButton";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";

export default function LocationScreen({ navigation }) {
  const step = 4;
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
      <Text style={styles.title}>Set Your Location</Text>
      <Text style={styles.sub}>
        This data will be displayed in your account profile for security
      </Text>

      <MapView style={styles.map} />

      <Text style={styles.step}>4/4</Text>
      <GradientButton
      style={styles.locationBtn}
        title="Use Location"
        onPress={() => navigation.navigate("AddAddressScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  backIcon: { width: 28, height: 28, resizeMode: "contain" },
  backBtn: {
    marginTop: 20,
    marginBottom: 10,
  },

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
  title: { fontSize: 26, fontWeight: "700", marginTop: 40 },
  sub: { fontSize: 14, color: "#555", marginVertical: 10 },
  map: { height: 390, width: "100%", borderRadius: 20, marginTop: 20,  },
  button: {
    backgroundColor: "#E53935",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
 
  step: {
    fontSize: 25,
    fontWeight: "600",
    color: "#F91F1C",
    fontFamily:"Poppins",
    fontStyle:"normal"
  },
  locationBtn: {
   
    marginTop:100
  }
});
