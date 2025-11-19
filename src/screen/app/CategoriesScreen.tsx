import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
 
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "@/components/searchbar/SearchBar";
import FoodCard from "@/components/foodcard/FoodCard";
 

const CategoriesScreen = () => {
  return (
    <ScrollView style={styles.container}>

      {/* Top Bar */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={26} />
        <Text style={styles.title}>Categories</Text>
        <Ionicons name="notifications-outline" size={24} />
      </View>

      <SearchBar />

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryRow}>
          <Text style={styles.catItem}>Pizza</Text>
          <Text style={styles.catItem}>Burger</Text>
          <Text style={styles.catItem}>Tacos</Text>
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>Top Food</Text>

      {/* Grid */}
      <View style={styles.grid}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </View>

    </ScrollView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: { fontSize: 20, fontWeight: "700" },

  categoryRow: { flexDirection: "row", gap: 12, marginVertical: 15 },

  catItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F4F4F4",
    borderRadius: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
});
