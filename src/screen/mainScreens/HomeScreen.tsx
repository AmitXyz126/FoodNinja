import FoodCard from "@/components/foodcard/FoodCard";
import SearchBar from "@/components/searchbar/SearchBar";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello, Kristin</Text>
          <View style={styles.Location}>
            <Image
              style={styles.locations}
              source={require("../../../assets/images/location.png")}
            ></Image>
            <Text style={styles.location}>Mohali</Text>
          </View>
        </View>
        <View style={styles.topbar}>
          <Image
            style={styles.notification}
            source={require("../../../assets/images/notification.png")}
          />
          <Image
            source={require("../../../assets/images/profile.png")}
            style={styles.profile}
          />
        </View>
      </View>

      <SearchBar />

      <Text style={styles.title}>
        Find Your <Text style={{ color: "#E53935" }}>Favorite Food</Text>
      </Text>

      {/* Categories for scrolling */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryRow}>
          <Text style={styles.catItem}>Pizza</Text>
          <Text style={styles.catItem}>Burger</Text>
          <Text style={styles.catItem}>Pasta</Text>
          <Text style={styles.catItem}>Tacos</Text>
        </View>
      </ScrollView>

      {/* Offer Box */}
      <View style={styles.offerBox}>
        <Text style={styles.offerTitle}>Special Deal For Today!</Text>
        <Text>Free Delivery For all Orders</Text>
        
      </View>

      <Text style={styles.sectionTitle}>Top Food</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notification: {
    width: 45,
    height: 45,
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  locations: {
    width: 25,
    height: 30,
  },
  Location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  hello: { fontSize: 18, fontWeight: "700" },
  location: { color: "#777", marginTop: 2 },

  profile: { width: 45, height: 45, borderRadius: 1 },

  title: { fontSize: 22, fontWeight: "700", marginTop: 15 },

  categoryRow: { flexDirection: "row", gap: 12, marginTop: 12 },

  catItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F4F4F4",
    borderRadius: 20,
    fontSize: 14,
  },

  offerBox: {
    marginTop: 20,
    backgroundColor: "#FA4C49",
    padding: 15,
    borderRadius: 18,
  },

  offerTitle: { fontWeight: "700", fontSize: 16 },

  offerImg: {
    width: "100%",
    height: 150,
    borderRadius: 14,
    marginTop: 10,
  },

  sectionTitle: { fontSize: 20, fontWeight: "700", marginTop: 20 },
});
