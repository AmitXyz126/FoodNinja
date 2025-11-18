import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FoodCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://i.imgur.com/5Aqgz7o.png" }}
        style={styles.img}
      />
      <Text style={styles.title}>Tasty Mexican Pizza</Text>
      <Text style={styles.price}>$99</Text>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    marginRight: 15,
  },
  img: {
    width: "100%",
    height: 100,
    borderRadius: 12,
  },
  title: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "600",
  },
  price: {
    marginTop: 3,
    fontWeight: "700",
    color: "#E53935",
  },
});
