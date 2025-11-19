import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
 
import SearchBar from "@/components/searchbar/SearchBar";
import { Ionicons } from "@expo/vector-icons";

const FoodListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={26} />
        <Text style={styles.title}>Categories</Text>
        <Ionicons name="options-outline" size={26} />
      </View>

      <SearchBar />

      <Text style={styles.sectionTitle}>Pizza</Text>

      {[1, 2, 3, 4, 5].map((i) => (
        <View key={i} style={styles.row}>
          <Image
            source={{ uri: "https://i.imgur.com/5Aqgz7o.png" }}
            style={styles.img}
          />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.name}>Tasty Mexican Pizza</Text>
            <Text style={styles.price}>$99</Text>
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Text style={{ color: "#fff" }}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default FoodListScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 20, fontWeight: "700" },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 14,
  },

  img: { width: 70, height: 70, borderRadius: 10 },

  name: { fontSize: 16, fontWeight: "700" },

  price: { color: "#E53935", fontWeight: "700", marginTop: 3 },

  addBtn: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
