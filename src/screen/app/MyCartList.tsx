import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import Swiper from "react-native-swiper";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function MyCartList() {
     const navigation = useNavigation();
  const recommendData = [
    {
      id: 1,
      title: "Tasty Mexican Pizza",
      price: "$19.00",
      images: [
        require("../../../assets/images/swiperImg.png"),
        require("../../../assets/images/swiperImg.png"),
        require("../../../assets/images/swiperImg.png"),
      ],
    },
    {
      id: 2,
      title: "Hot Spicy Burger",
      price: "$15.00",
      images: [
        require("../../../assets/images/pizzaslide.png"),
        require("../../../assets/images/slidepizza.png"),
        require("../../../assets/images/swiperImg.png"),
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} style={styles.backBtn} />
        </TouchableOpacity>

        <Text style={styles.title}>My Cart List</Text>

        <Ionicons name="ellipsis-vertical" size={26} style={styles.menu} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* MAIN FOOD IMAGE */}
        <View style={styles.mainImageWrapper}>
          <Image
            source={require("../../../assets/images/swiperImg.png")}
            style={styles.mainImage}
          />
        </View>

        {/* ORDER DETAILS */}
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.sectionLabel}>Your Orders</Text>

          <View style={styles.orderRow}>
            <View>
              <Text style={styles.orderTitle}>Crispy Delight Platter</Text>
            </View>

            {/* QTY + BTN */}
            <View style={styles.qtyContainer}>
              <TouchableOpacity style={styles.qtyMinus}>
                <Text style={styles.minus}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>01</Text>

              <TouchableOpacity style={styles.qtyPlus}>
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* RECOMMEND */}
        <View style={styles.view}>
          <Text style={styles.recommendTitle}>Recommend</Text>
          <TouchableOpacity style={{}}>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          {recommendData.map((item) => (
            <View key={item.id} style={styles.recommendCard}>
              {/* Swiper */}
              <View style={styles.swiperBox}>
                <Swiper
                  autoplay
                  autoplayTimeout={2.5}
                  loop
                  showsPagination
                  dot={<View style={styles.dot} />}
                  activeDot={<View style={styles.activeDot} />}
                  paginationStyle={{ bottom: -15 }}
                >
                  {item.images.map((img, index) => (
                    <Image
                      key={index}
                      source={img}
                      style={styles.recImg}
                      resizeMode="cover"
                    />
                  ))}
                </Swiper>
              </View>

              {/* Text */}
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.recTitle}>{item.title}</Text>
                <Text style={styles.recPrice}>{item.price}</Text>
              </View>

              {/* ADD */}
              <TouchableOpacity style={styles.addButton}>
                {/* <Ionicons name="add" size={18} color="#fff" /> */}
                <Text style={styles.add}>Add</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* BOTTOM BAR */}
      <LinearGradient
        colors={["#FF1D1D", "#8F3300"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomBar}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/swiperImg.png")}
            style={styles.bottomImg}
          />
          <Text style={styles.bottomText}>2 items added</Text>
        </View>

        <TouchableOpacity    style={styles.viewCartBtn}>
          <Text style={styles.btnText}>View Cart</Text>
          <Ionicons
            style={{ color: "#FFF", fontSize: 12 }}
            name="chevron-forward"
            size={26}
          />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

/* ====================== STYLES ====================== */

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  backBtn: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
  },
  menu: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    color: "#B3B3B3",
  },
  title: { fontSize: 18, fontWeight: "600", color: "#B3B3B3" },

  mainImageWrapper: {
    marginTop: 5,
    alignItems: "center",
  },
  mainImage: {
    width: "90%",
    height: 260,
    borderRadius: 20,
  },

  sectionLabel: {
    color: "#777",
    marginTop: 12,
  },

  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  orderTitle: { fontSize: 16, fontWeight: "700", color: "#222" },

  qtyContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    alignItems: "center",
  },
  qtyMinus: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
  },
  qtyPlus: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 8,
  },
  qty: { paddingHorizontal: 10, fontSize: 16, fontWeight: "600" },
  minus: { fontSize: 20, color: "red" },
  plus: { fontSize: 18, color: "#fff" },

  viewMore: {
    marginTop: 4,
    fontSize: 12,
    color: "red",
    fontWeight: "600",
  },

  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 24,
    marginTop: 16,
  },

  recommendTitle: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 20,
    marginTop: 15,
  },

  recommendCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 14,
    marginTop: 15,
  },

  swiperBox: {
    width: 110,
    height: 110,
    borderRadius: 12,
    overflow: "hidden",
  },

  recImg: {
    width: "100%",
    height: "100%",
  },

  recTitle: { fontSize: 14, fontWeight: "600" },
  recPrice: { marginTop: 4, color: "#555", fontSize: 13 },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#bbb",
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "red",
  },

  addButton: {
    backgroundColor: "#F91F1C0F",
    width: 64,
    height: 40,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    
  },

  add: {
    color: "#FF1D1D",
    
  },

  bottomBar: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: "#FF1D1D",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
    borderRadius: 12,
    marginHorizontal: 20,
  },

  bottomImg: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  bottomText: { fontSize: 14, fontWeight: "600", color: "#FFF" },

  viewCartBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 12,
  },
  btnText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "700",
  },
});
