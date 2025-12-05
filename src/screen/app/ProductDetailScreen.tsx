import GradientButton from "@/components/gradientbutton/GradientButton";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";

import BottomSheet from "@gorhom/bottom-sheet";

import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import ProductAddOnBottomSheet from "@/components/bottomsheet/ProductAddOnBottomSheet";

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [quantity, setQuantity] = React.useState(1);

  const bottomSheetRef = React.useRef<BottomSheet>(null);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const item = {
    id: params?.id,
    heading: params?.title || "Your Orders",
    title: params?.title || "Crispy Delight Platter",
    price: Number(params?.price) || 49.0,
    image: params?.image || require("../../../assets/images/swiperImg.png"),
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons style={styles.chevron} name="chevron-back" size={26} />
            </TouchableOpacity>

            <Text style={styles.title}>Cart List</Text>

            <TouchableOpacity style={styles.ellipsis}>
              <Ionicons
                style={styles.threeDot}
                name="ellipsis-vertical"
                size={26}
              />
            </TouchableOpacity>
          </View>

          {/* IMAGE SWIPER */}
          <View style={styles.imageBox}>
            <Swiper
              autoplay={true}
              autoplayTimeout={3}
              showsPagination={true}
              paginationStyle={{ bottom: -20 }}
              dot={<View style={styles.dot} />}
              activeDot={<View style={styles.activeDot} />}
              style={{ height: 260 }}
            >
              {[1, 2, 3].map((x) => (
                <View key={x} style={styles.slide}>
                  <Image source={item.image} style={styles.foodImage} />
                </View>
              ))}
            </Swiper>
          </View>

          <View style={styles.titleRow}>
            <View>
              <Text style={styles.foodTitles}>{item.heading}</Text>
              <Text style={styles.foodTitle}>{item.title}</Text>
            </View>

            {/* QUANTITY */}
            <View style={styles.qtyBox}>
              <TouchableOpacity style={styles.minusBtn} onPress={decreaseQty}>
                <Text style={styles.minusText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qtyText}>
                {quantity.toString().padStart(2, "0")}
              </Text>

              <TouchableOpacity style={styles.plusBtn} onPress={increaseQty}>
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* DESCRIPTION */}
          <Text style={styles.desc}>
            This delicious Fast Food Platter is a perfect combo of crispy fishy,
            juicy burgers, fried chicken, and fresh appetizers offering a treat
            for every craving!
          </Text>

          {/* INFO STATS */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons
                style={styles.star}
                name="star"
                size={14}
                color="#E53935"
              />
              <Text style={styles.infoText}>4 Add-ons</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons
                style={styles.fire}
                name="flame-outline"
                size={14}
                color="#E53935"
              />
              <Text style={styles.infoText}>124 kcal</Text>
            </View>

            <View style={styles.infoItem}>
              <Ionicons
                style={styles.time}
                name="time-outline"
                size={14}
                color="#E53935"
              />
              <Text style={styles.infoText}>8-10 min</Text>
            </View>
          </View>

          {/* ADD ONS */}
          <Text style={styles.addOnsTitle}>Add Ons</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.addOnRow}>
              {[
                require("../../../assets/images/fires.png"),
                require("../../../assets/images/suoce.png"),
                require("../../../assets/images/food.jpg"),
              ].map((img, i) => (
                <View style={styles.addOnWrapper} key={i}>
                  <Image source={img} style={styles.addOnItem} />
                  <View style={styles.addButton}>
                    <Ionicons name="add" size={16} color="#fff" />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>

          {/* FOOTER */}
          <View style={styles.footer}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>

            <GradientButton
              onPress={() => bottomSheetRef.current?.expand()}
              title="Add to Cart"
              style={{ width: "70%" }}
            />
          </View>

          <View style={{ height: 30 }} />
        </View>
      </ScrollView>

      {/* BOTTOM SHEET */}
      <ProductAddOnBottomSheet sheetRef={bottomSheetRef} item={item} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  chevron: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
  },
  ellipsis: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
  },
  threeDot: { color: "#B3B3B3" },
  title: { fontSize: 18, fontWeight: "500", color: "#B3B3B3" },

  imageBox: { alignItems: "center", marginTop: 1 },
  slide: { alignItems: "center" },
  dot: {
    backgroundColor: "#FFCDD2",
    width: 12,
    height: 12,
    borderRadius: 10,
    margin: 3,
    marginTop: 10,
  },
  activeDot: {
    backgroundColor: "red",
    width: 12,
    height: 12,
    borderRadius: 12,
    margin: 3,
    marginTop: 10,
  },

  foodImage: {
    width: "90%",
    height: 260,
    borderRadius: 20,
    resizeMode: "cover",
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 30,
    gap: 6,
  },

  foodTitles: {
    fontSize: 14,
    color: "#B3B3B3",
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 4,
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 10,
  },
  minusBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#E57373",
    justifyContent: "center",
    alignItems: "center",
  },
  minusText: { fontSize: 20, color: "#D32F2F", fontWeight: "600" },
  qtyText: { fontSize: 18, fontWeight: "600", color: "#444" },

  plusBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  plusText: { fontSize: 22, color: "#fff", fontWeight: "600" },

  desc: {
    fontSize: 14,
    color: "#666",
    paddingHorizontal: 20,
    marginTop: 8,
    lineHeight: 20,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 15,
    gap: 15,
  },
  infoItem: { flexDirection: "row", gap: 4, alignItems: "center" },
  time: {
    backgroundColor: "#FF901229",
    color: "#FF9012",
    padding: 10,
    borderRadius: 10,
  },
  fire: {
    backgroundColor: "#D8442B29",
    padding: 10,
    borderRadius: 10,
  },
  star: {
    backgroundColor: "#FCBF1629",
    color: "#FCBF16",
    borderRadius: 10,
    padding: 10,
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
    gap: 50,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  addOnItem: {
    width: 80,
    height: 70,
    borderRadius: 16,
    resizeMode: "cover",
    backgroundColor: "#0000001A",
  },

  addOnWrapper: {
    position: "relative",
  },

  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#1E7B34",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -6,
    bottom: 0,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
    margin: 17,
    alignItems: "center",
    backgroundColor: "#0000001F",
    borderRadius: 12,
  },
  price: { fontSize: 20, fontWeight: "700" },
});
