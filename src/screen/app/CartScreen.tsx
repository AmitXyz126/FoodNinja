import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
 
import GradientButton from "@/components/gradientbutton/GradientButton";
import { router, useNavigation } from "expo-router";

export default function CartScreen() {
  const navigation = useNavigation();
  const cartItems = [
    {
      id: 1,
      title: "Crispy Delight Platter",
      price: 49.99,
      img: require("../../../assets/images/swiperImg.png"),
    },
    {
      id: 2,
      title: "Pared Crab",
      price: 49.99,
      img: require("../../../assets/images/pizzaslide.png"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Order</Text>

        <TouchableOpacity>
          <Ionicons name="share-social-outline" size={22} color="#444" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* CART LIST */}
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartCard}>
            <Image source={item.img} style={styles.foodImg} />

            {/* MIDDLE CONTENT */}
            <View style={styles.middle}>
              <Text style={styles.foodTitle}>{item.title}</Text>
              <Text style={styles.notEligible}>not eligible for coupons</Text>

              <Text style={styles.foodPrice}>${item.price}</Text>

              {/* RATING ROW */}
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={16} color="#FFB800" />
                <Text style={styles.rate}>4.6</Text>

                <MaterialIcons
                  name="delivery-dining"
                  size={16}
                  color="#FF1D1D"
                  style={{ marginLeft: 14 }}
                />
                <Text style={styles.rate}>16 min</Text>

                <Ionicons
                  name="location-outline"
                  size={16}
                  color="#FF1D1D"
                  style={{ marginLeft: 14 }}
                />
                <Text style={styles.rate}>1.5KM</Text>
              </View>
            </View>

            {/* QTY RIGHT SIDE */}
            <View style={styles.qtyBox}>
              <TouchableOpacity style={styles.qtyMinusBtn}>
                <Ionicons name="remove-outline" size={20} color="#FF1D1D" />
              </TouchableOpacity>

              <Text style={styles.qtyNumber}>01</Text>

              <TouchableOpacity style={styles.qtyPlusBtn}>
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* DISCOUNT BOX */}
        <View style={styles.coupons}>
          <View style={styles.discountBox}>
            <Text style={styles.discountLabel}>
              Do you have any Discount Code?
            </Text>

            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.couponRow}>
            <Ionicons name="pricetags-outline" size={18} color="#FF1D1D" />
            <Text style={styles.couponText}>View All Coupons</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        </View>

        {/* DELIVERY INFO & TOTAL */}
        <View style={styles.delivery}>
          <View style={styles.deliveryBox}>
            <MaterialIcons name="delivery-dining" size={20} color="#FF1D1D" />
            <Text style={styles.deliveryText}>Delivery in 30–35 mins</Text>

            <Text
              style={styles.scheduleText}
              onPress={() => navigation.navigate("")}
            >
              Schedule it
            </Text>
          </View>

          <View style={styles.totalBox}>
            <Text style={styles.totalLabel}>Total Bill</Text>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.oldPrice}>$129.98</Text>
              <Text style={styles.newPrice}>$99.98</Text>
              <Text style={styles.save}>You save $30!</Text>
            </View>
          </View>
        </View>

        {/* NEXT STEP BUTTON */}
        <GradientButton
          title="Select address at next step"
          style={{ width: "90%", marginHorizontal: 16, marginTop: 20 }}
          onPress={() => navigation.navigate("Address")}
        />

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------- STYLES ----------
const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { fontSize: 20, fontWeight: "700", color: "#222" },

  cartCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,
    marginHorizontal: 16,
    marginTop: 14,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },

  foodImg: {
    width: 85,
    height: 85,
    borderRadius: 12,
    resizeMode: "cover",
    overflow: "hidden",
  },

  middle: { flex: 1, marginLeft: 12 },

  foodTitle: { fontSize: 16, fontWeight: "700", color: "#222" },

  notEligible: { fontSize: 12, color: "#999", marginTop: 2 },

  foodPrice: { fontSize: 16, fontWeight: "700", marginTop: 6, color: "#222" },

  ratingRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },

  rate: { marginLeft: 4, color: "#555", fontSize: 13 },

  qtyBox: { flexDirection: "row", gap: 8 },

  qtyMinusBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#FF1D1D",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyPlusBtn: {
    width: 28,
    height: 28,
    backgroundColor: "#FF1D1D",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  qtyNumber: { fontSize: 15, fontWeight: "700", marginVertical: 6 },

  coupons: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 6,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 18,
  },
  discountBox: {
    backgroundColor: "#FFF4F4",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountLabel: { fontSize: 14, color: "#444" },

  applyBtn: {
    backgroundColor: "#FF5B5B",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  applyText: { color: "#fff", fontWeight: "700" },

  couponRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 20,
  },

  couponText: { marginLeft: 8, color: "#444", fontWeight: "600" },

  delivery: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 6,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 18,
  },
  deliveryBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 14,
    marginTop: 20,
    marginBottom: 20,
  },
  deliveryText: { marginLeft: 10, fontWeight: "500" },

  scheduleText: { marginLeft: "auto", color: "#FF1D1D", fontWeight: "600" },

  totalBox: {
    backgroundColor: "#FFF8F2",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },

  totalLabel: { fontSize: 16, fontWeight: "700", marginBottom: 4 },

  oldPrice: { fontSize: 12, textDecorationLine: "line-through", color: "#aaa" },

  newPrice: { fontSize: 20, fontWeight: "800", marginTop: 2 },

  save: { color: "#28A745", marginTop: 2, fontWeight: "600" },
});
