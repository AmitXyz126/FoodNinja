import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

type AddressItem = {
  title: string;
  subtitle: string;
  phone: string;
  distance: string;
  tag?: string;
  icon: keyof typeof Ionicons.glyphMap;
  
};

export default function MyAddressesScreen() {
  const navigation = useNavigation<any>();
  const addresses: AddressItem[] = [
    {
      title: "Home",
      subtitle: "3200, Sector 01, Chandigarh",
      phone: "+91-8186400000",
      distance: "2.1Km",
      tag: "current using",
      icon: "home-outline",
    },
    {
      title: "Office",
      subtitle: "142, Industrial Area, Chandigarh",
      phone: "+91-9876500000",
      distance: "5.3Km",
      icon: "briefcase-outline",
    },
    {
      title: "Warehouse",
      subtitle: "25, Phase 2, Mohali",
      phone: "+91-9988770000",
      distance: "10.0Km",
      icon: "home-outline",
    },
    {
      title: "Warehouse",
      subtitle: "25, Phase 2, Mohali",
      phone: "+91-9988770000",
      distance: "10.0Km",
      icon: "home-outline",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Delete account</Text>

        <View style={{ width: 26 }} />
      </View>

      {/* Add Address */}
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-circle-outline" size={24} color="#4CAF50" />
        <Text style={styles.addText}>Add address</Text>
        <Ionicons name="chevron-forward" size={22} color="#000" />
      </TouchableOpacity>

      <Text style={styles.savedTitle}>Saved addresses</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {addresses.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.row}>
              <Ionicons name={item.icon} size={26} color="#4CAF50" />

              <View style={{ flex: 1, marginLeft: 12 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.title}>{item.title}</Text>
                  {item.tag && <Text style={styles.tag}>{item.tag}</Text>}
                </View>

                <Text style={styles.subText}>{item.subtitle}</Text>
                <Text style={styles.subText}>Phone number: {item.phone}</Text>
              </View>

              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color="#777"
              />
            </View>

            <View style={styles.distanceBox}>
              <Text style={styles.distanceText}>{item.distance}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f7f7f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  addBtn: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "500",
    padding: 11,
    color: "#3CAA00",
  },
  savedTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  tag: {
    backgroundColor: "#E8F5E9",
    color: "#4CAF50",
    marginLeft: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 11,
    borderRadius: 6,
  },
  subText: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  distanceBox: {
    marginTop: 10,
    backgroundColor: "#f0f0f0",
    alignSelf: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  distanceText: {
    fontSize: 12,
    color: "#444",
  },
});
