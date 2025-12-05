import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useLocalSearchParams } from "expo-router";

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  // if coming from categories details
  const item = {
    id: params?.id,
    title: params?.title || "Crispy Delight Platter",
    price: Number(params?.price) || 49.0,
    image: params?.image || require("../assets/images/FoodDetail.png"),
  };

  return ( 
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} />
        </TouchableOpacity>

        <Text style={styles.title}>Cart List</Text>

        <TouchableOpacity>
          <Ionicons name="heart-outline" size={26} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* IMAGE */}
        <View style={styles.imageBox}>
          <Image source={item.image} style={styles.foodImage} />
        </View>

        {/* TITLE */}
        <Text style={styles.foodTitle}>{item.title}</Text>

        {/* DESCRIPTION */}
        <Text style={styles.desc}>
          This delicious Fast Food Platter is a perfect combo of crispy fishy,
          juicy burgers, fried chicken, and fresh appetizers offering a treat
          for every craving!
        </Text>

        {/* STATS */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="add" size={14} color="#E53935" />
            <Text style={styles.infoText}>4 Add-ons</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="flame-outline" size={14} color="#E53935" />
            <Text style={styles.infoText}>124 kcal</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={14} color="#E53935" />
            <Text style={styles.infoText}>8-10 min</Text>
          </View>
        </View>

        {/* ADD ONS */}
        <Text style={styles.addOnsTitle}>Add Ons</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.addOnRow}>
            <Image
              source={require("../assets/images/fries.png")}
              style={styles.addOnItem}
            />
            <Image
              source={require("../assets/images/coldDrink.png")}
              style={styles.addOnItem}
            />
            <Image
              source={require("../assets/images/icecream.png")}
              style={styles.addOnItem}
            />
          </View>
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.addCartBtn}>
            <Text style={styles.addCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },

  title: { fontSize: 18, fontWeight: "700" },

  imageBox: {
    alignItems: "center",
  },

  foodImage: {
    width: "90%",
    height: 260,
    borderRadius: 20,
    resizeMode: "cover",
  },

  foodTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 15,
    paddingHorizontal: 20,
  },

  desc: {
    fontSize: 14,
    color: "#777",
    paddingHorizontal: 20,
    marginTop: 8,
    lineHeight: 20,
  },

  infoRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 15,
    gap: 15,
  },

  infoItem: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  infoText: { fontSize: 14, fontWeight: "500" },

  addOnsTitle: {
    paddingHorizontal: 20,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
  },

  addOnRow: {
    flexDirection: "row",
    gap: 15,
    marginTop: 15,
    paddingHorizontal: 20,
  },

  addOnItem: {
    width: 80,
    height: 80,
    borderRadius: 16,
    resizeMode: "cover",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 20,
    alignItems: "center",
  },

  price: {
    fontSize: 22,
    fontWeight: "800",
  },

  addCartBtn: {
    backgroundColor: "#E53935",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 15,
  },

  addCartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
