import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import GradientButton from "@/components/gradientbutton/GradientButton";
import { router } from "expo-router";
import CustomInput from "@/components/customInput/CustomInput";

export default function AddressScreen() {
  const [selected, setSelected] = useState(1);
  const [addresses, setAddresses] = useState([
    { id: 1, label: "PIZZA10", address: "Get 10% off on any pizza order." },
    { id: 2, label: "WELCOME50", address: "50% off your first order!" },
    { id: 3, label: "WEEKEND5", address: "20% off on orders above $30." },
  ]);

  const [newAddress, setNewAddress] = useState("");

  const handleAddAddress = () => {
    if (newAddress.trim() === "") {
      Alert.alert("Error", "Please enter an address");
      return;
    }
    const newId = addresses.length + 1;
    setAddresses((prev) => [
      ...prev,
      { id: newId, label: "Other", address: newAddress.trim() },
    ]);
    setNewAddress("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Coupon</Text>
        <View style={{ width: 28 }} />
      </View>
    {/* INPUT + ADD BUTTON */}
  <ScrollView showsVerticalScrollIndicator={false}>
<View style={styles.inputRow}>
  <CustomInput
    placeholder="Type coupon name"
    value={newAddress}
    onChangeText={setNewAddress}
    style={styles.inputField}
  />

  <TouchableOpacity
    onPress={handleAddAddress}
    disabled={!newAddress.trim()}
    style={[
      styles.addButton,
      {
        backgroundColor: newAddress.trim() ? "#FF1D1D" : "#FFB3B3",
        opacity: newAddress.trim() ? 1 : 0.6,
      },
    ]}
  >
    <Text style={styles.addButtonText}>Add</Text>
  </TouchableOpacity>
</View>


      <Text style={styles.select}>Select from these</Text>

      {/* ADDRESS LIST */}
        <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
          {addresses.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.card, selected === item.id && styles.cardActive]}
              onPress={() => setSelected(item.id)}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.cardTitle,
                    selected === item.id && styles.cardTitleActive,
                  ]}
                >
                  {item.label}
                </Text>
                <Text style={styles.cardAddress}>{item.address}</Text>
              </View>

              <Ionicons
                name={
                  selected === item.id ? "radio-button-on" : "radio-button-off"
                }
                size={22}
                color={selected === item.id ? "#FF3A31" : "#aaa"}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* BOTTOM BUTTON */}
      <View style={styles.footer}>
        <GradientButton
          title="Confirm and Continue"
          onPress={() => ("hello")}
          style={{ width: "90%" }}
        />
      </View>
    </SafeAreaView>
  );
}

// ------------ STYLES ---------------
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#B3B3B3",
  },
  select: {
    fontSize: 16,
    fontWeight: 600,
    fontStyle: "normal",
    color: "#70756B",
    paddingLeft: 30,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 5,
    borderWidth: 1.2,
    borderColor: "#eee",
  },
  cardActive: {
    borderColor: "#FF3A31",
    backgroundColor: "#FFF8F7",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  cardTitleActive: {
    color: "#FF3A31",
  },
  cardAddress: {
    color: "#666",
    fontSize: 13,
    marginTop: 4,
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  inputRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 16,
  marginTop: 10,
  gap: 10, 
 width: "78%"  
},

inputField: {
  flex: 1,
  height: 45,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 10,
  paddingHorizontal: 12,
},

addButton: {
  height: 45,
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginTop:14
},

addButtonText: {
  color: "#fff",
  fontWeight: "600",
  fontSize: 16,
},

});
