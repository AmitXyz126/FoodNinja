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
import { router } from "expo-router";

export default function CartScreen() {
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
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartCard}>
            <Image source={item.img} style={styles.foodImg} />

            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.foodTitle}>{item.title}</Text>

              <Text style={styles.foodPrice}>${item.price}</Text>

              <View style={styles.ratingRow}>
                <Ionicons name="star" size={16} color="#FFB800" />
                <Text style={styles.rate}>4.6</Text>

                <MaterialIcons
                  name="delivery-dining"
                  size={16}
                  color="#FF1D1D"
                  style={{ marginLeft: 10 }}
                />
                <Text style={styles.rate}>16 min</Text>

                <Ionicons
                  name="location-outline"
                  size={16}
                  color="#FF1D1D"
                  style={{ marginLeft: 10 }}
                />
                <Text style={styles.rate}>1.5KM</Text>
              </View>
              <View style={styles.addmore}>
                <TouchableOpacity>
                  <Text style={styles.addMore}>+ Add more items</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.addNote}>
                    Add a note for the restaurant
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* QTY */}
            <View style={styles.qtyBox}>
              <TouchableOpacity style={styles.minusBtn}>
                <Text style={styles.minusText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>01</Text>

              <TouchableOpacity style={styles.plusBtn}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* DISCOUNT */}
        <View style={styles.discountBox}>
          <Text style={styles.discountLabel}>
            Do you have any Discount Code?
          </Text>
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>

        {/* COUPONS */}
        <TouchableOpacity style={styles.couponRow}>
          <Ionicons name="pricetags-outline" size={18} color="#FF1D1D" />
          <Text style={styles.couponText}>View All Coupons</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        {/* DELIVERY */}
        <View style={styles.deliveryBox}>
          <MaterialIcons name="delivery-dining" size={20} color="#FF1D1D" />
          <Text style={styles.deliveryText}>Delivery in 30–35 mins</Text>
          <Text style={styles.later}>Schedule it</Text>
        </View>

        {/* TOTAL */}
        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Total Bill</Text>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.oldPrice}>$129.98</Text>
            <Text style={styles.newPrice}>$99.98</Text>
            <Text style={styles.save}>You save $30!</Text>
          </View>
        </View>

        {/* NEXT STEP */}
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Select address at next step</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  headerText: { fontSize: 18, fontWeight: "600" },

  cartCard: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 14,
    marginHorizontal: 16,
    marginTop: 14,
    elevation: 2,
  },

  foodImg: { width: 80, height: 80, borderRadius: 12 },
  foodTitle: { fontSize: 16, fontWeight: "700" },
  foodPrice: { fontSize: 15, color: "#333", marginTop: 6 },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  rate: { marginLeft: 4, color: "#444" },
addmore:{
flexDirection:"row",  
},
  addMore: {
    marginTop: 8,
    color: "#28A745",
    fontWeight: "600",
  },
  addNote: {
    color: "#777",
    marginTop: 6,
    fontSize: 12,
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  minusBtn: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#FF1D1D",
    alignItems: "center",
    justifyContent: "center",
  },
  minusText: { fontSize: 22, color: "#FF1D1D" },
  plusBtn: {
    width: 28,
    height: 28,
    backgroundColor: "#FF1D1D",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: { fontSize: 20, color: "#fff" },
  qty: { fontSize: 16, fontWeight: "700", marginHorizontal: 8 },

  discountBox: {
    backgroundColor: "#FFF5F5",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 14,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountLabel: { fontSize: 14, color: "#444" },
  applyBtn: {
    backgroundColor: "#FF1D1D",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  applyText: { color: "#fff" },

  couponRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    marginHorizontal: 16,
  },
  couponText: { marginLeft: 8, fontWeight: "600", color: "#444" },

  deliveryBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  deliveryText: { marginLeft: 10, fontWeight: "500" },
  later: {
    marginLeft: "auto",
    color: "#FF1D1D",
    fontWeight: "600",
  },

  totalBox: {
    backgroundColor: "#FFF8F2",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 14,
    marginTop: 20,
  },
  totalLabel: { fontSize: 16, fontWeight: "700" },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  newPrice: { fontSize: 20, fontWeight: "700", marginTop: 2 },
  save: { color: "#28A745", marginTop: 2 },

  nextBtn: {
    backgroundColor: "#FF1D1D",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center",
  },
  nextText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
