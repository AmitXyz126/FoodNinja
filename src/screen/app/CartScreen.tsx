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
import BaseBottomSheet, {
  BaseBottomSheetRef,
} from "@/components/bottomSheet/BaseBottomSheet";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// --- Navigation Types ---
type RootStackParamList = {
  Cart: undefined;
  Address: undefined;
  UseLocation: undefined;
};

type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Cart"
>;

export default function CartScreen() {
  const navigation = useNavigation<CartScreenNavigationProp>();
  const bottomSheetRef = React.useRef<BaseBottomSheetRef>(null);

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
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

            <View style={styles.middle}>
              <Text style={styles.foodTitle}>{item.title}</Text>
              <Text style={styles.notEligible}>not eligible for coupons</Text>
              <Text style={styles.foodPrice}>${item.price}</Text>

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

          <TouchableOpacity
            onPress={() => navigation.navigate("Address")}
            style={styles.couponRow}
          >
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
            <Text style={styles.scheduleText} onPress={() => {}}>
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
          onPress={() => bottomSheetRef.current?.present()}
        />

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* BASEBOTTOMSHEET */}
      <BaseBottomSheet ref={bottomSheetRef}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 14 }}>
            Select an address
          </Text>

          {/* ADD ADDRESS BUTTON */}
          <TouchableOpacity
            onPress={() => navigation.navigate("UseLocation")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F4FFF4",
              padding: 16,
              borderRadius: 16,
              marginBottom: 18,
            }}
          >
            <Ionicons name="add-circle-outline" size={22} color="#28A745" />
            <Text style={{ marginLeft: 10, fontSize: 15, color: "#28A745" }}>
              Add address
            </Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>

          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
            Saved addresses
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: 350 }}
          >
            {[...Array(6)].map((_, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: 16,
                  borderRadius: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 14,
                  elevation: 3,
                  shadowColor: "#000",
                  shadowOpacity: 0.08,
                  shadowRadius: 5,
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: "#F3F3F3",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <Ionicons name="home-outline" size={20} color="#FF1D1D" />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontWeight: "700", fontSize: 15 }}>
                      Home
                    </Text>
                    <Text
                      style={{
                        marginLeft: "auto",
                        color: "#777",
                        fontSize: 12,
                        fontWeight: "500",
                      }}
                    >
                      2.1Km
                    </Text>
                  </View>
                  <Text style={{ color: "#555", fontSize: 13, marginTop: 4 }}>
                    3200, Sector 01, Chandigarh
                  </Text>
                  <Text style={{ color: "#888", fontSize: 12, marginTop: 3 }}>
                    Phone number: +91-8168400000
                  </Text>
                </View>
                <Ionicons
                  name="ellipsis-vertical"
                  size={18}
                  color="#888"
                  style={{ marginLeft: 10 }}
                />
              </View>
            ))}
          </ScrollView>

          <GradientButton
            title="Please Order"
            style={{ width: "90%", marginHorizontal: 16, marginTop: 20 }}
            onPress={() => bottomSheetRef.current?.present()}
          />
        </View>
      </BaseBottomSheet>
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
