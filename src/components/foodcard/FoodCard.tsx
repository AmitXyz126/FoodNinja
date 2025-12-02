import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FoodCard: React.FC = () => {
  return (
    <View style={styles.card}>
      {/* IMAGE + BADGES */}
      <View style={styles.imgWrapper}>
        <Image
          source={require("../../../assets/images/FoodDetail.png")}
          style={styles.img}
        />

        {/* Rating Badge */}
        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={14} color="#0AB451" />
          <Text style={styles.ratingText}>4/5</Text>
        </View>

        {/* Heart Badge */}
        <View style={styles.heartBadge}>
          <Ionicons name="heart" size={15} color="red" />
        </View>
      </View>

      {/* TITLE + PRICE */}
      <View style={styles.row}>
        <Text style={styles.title}>Tasty Mexican Pizza</Text>
        <Text style={styles.price}>$99</Text>
      </View>

      {/* CALORIES + TIME */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Ionicons name="flame" size={16} color="#FF5722" />
          <Text style={styles.infoText}>124 Kcal</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={16} color="#FFA000" />
          <Text style={styles.infoText}>8–10 min</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    padding: 12,
    marginRight: 15,

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android shadow
    elevation: 4,
  },

  imgWrapper: {
    position: "relative",
    width: "100%",
  },

  img: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },

  ratingBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    elevation: 3,
  },

  ratingText: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: "600",
  },

  heartBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 50,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
  },

  price: {
    fontWeight: "700",
    color: "#000",
    fontSize: 14,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#6D6D6D",
  },
});
