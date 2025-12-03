import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const foodItems = [
  {
    id: 1,
    name: "Tasty Mexican Pizza",
    oldPrice: 120,
    price: 99,
    rating: 4.5,
    image: require("../../../assets/images/FoodDetail.png"),
  },
  // duplicate items for list
  ...Array(6).fill({
    id: Math.random().toString(),
    name: "Tasty Mexican Pizza",
    oldPrice: 120,
    price: 99,
    rating: 4.5,
    image: require("../../../assets/images/FoodDetail.png"),
  }),
];

export default function CategoriesList() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Categories</Text>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          placeholder="What do you want to order?"
          placeholderTextColor="#999"
          style={{ flex: 1, marginLeft: 10 }}
        />
        <Ionicons name="filter-outline" size={22} color="#444" />
      </View>

      {/* Section Title */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Pizza</Text>
        <Text style={styles.viewMore}>View More</Text>
      </View>

      {/* Food Cards */}
      <View style={{ marginTop: 5 }}>
        {foodItems.map((item) => (
          <View style={styles.card} key={item.id}>
            <Image source={item.image} style={styles.foodImg} />

            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.rating}>⭐ {item.rating}/5</Text>
              <Text style={styles.foodName}>{item.name}</Text>

              <View style={styles.priceRow}>
                <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                <Text style={styles.newPrice}>${item.price}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.addBtn}>
              <Text style={{ color: "#4CAF50", fontWeight: "600" }}>Add</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },

  headerRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 12,
    padding: 12,
    marginTop: 20,
  },

  sectionHeader: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  viewMore: {
    color: "red",
    fontWeight: "600",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 14,
    padding: 10,
    marginVertical: 6,
  },

  foodImg: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },

  rating: {
    fontSize: 13,
    color: "#2ecc71",
    marginBottom: 2,
  },

  foodName: {
    fontSize: 15,
    fontWeight: "600",
  },

  priceRow: {
    flexDirection: "row",
    marginTop: 4,
  },

  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    marginRight: 8,
  },

  newPrice: {
    backgroundColor: "#FFEB3B",
    paddingHorizontal: 6,
    borderRadius: 6,
    fontWeight: "700",
  },

  addBtn: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 12,
    justifyContent: "center",
  },
});
