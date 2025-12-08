import BaseBottomSheet, {
  BaseBottomSheetRef,
} from "@/components/bottomSheet/BaseBottomSheet";
import GradientButton from "@/components/gradientbutton/GradientButton";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Checkbox from "expo-checkbox";

import React, { useState } from "react";
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

export default function ProductDetailScreen() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [quantity, setQuantity] = React.useState(1);
  // const [isChecked, setChecked] = useState(false);
  


  const bottomSheetRef = React.useRef<BaseBottomSheetRef>(null);
  const [sheetQty, setSheetQty] = React.useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const [selectedOptions, setSelectedOptions] = useState(
    new Array(5).fill(false)
  );

  const item = {
    id: params?.id,
    heading: params?.title || "Your Orders",
    title: params?.title || "Crispy Delight Platter",
    price: Number(params?.price) || 49.0,
    image: params?.image || require("../../../assets/images/swiperImg.png"),
  };

  const toggleOption = (index: number) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
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
              autoplay
              autoplayTimeout={3}
              showsPagination
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

          {/* TITLE + QTY */}
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.foodTitles}>{item.heading}</Text>
              <Text style={styles.foodTitle}>{item.title}</Text>
            </View>

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

          <View style={styles.footer}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <GradientButton
              title="Add to Cart"
              style={{ width: "70%" }}
              onPress={() => bottomSheetRef.current?.present()}
            />
          </View>
        </ScrollView>

        {/* BOTTOM SHEET */}
        <BaseBottomSheet ref={bottomSheetRef}>
          {/* BOTTOM SHEET CONTENT */}
          <View style={styles.sheetHeader}>
            <Image source={item?.image} style={styles.sheetFoodImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.sheetTitle}>{item?.title}</Text>
            </View>

            <Ionicons
              style={styles.share}
              name="share-social-outline"
              size={22}
            />
            <Ionicons style={styles.share} name="save" size={22} />
          </View>

          <LinearGradient
            colors={[
              "rgba(17,17,17,0)",
              "rgba(180,186,197,1)",
              "rgba(17,17,17,0)",
            ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.divider}
          />

          <Text style={styles.sheetSubtitle}>Make it a Meal</Text>
          <Text style={styles.sheetSmallText}>Select up to 4 options</Text>
          <LinearGradient
            colors={[
              "rgba(17,17,17,0)",
              "rgba(180,186,197,1)",
              "rgba(17,17,17,0)",
            ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.divider}
          />
          <View style={{ marginTop: 15 }}>
            {[
              "Fries + Lemonade (Save ₹49)",
              "Burger + Fries + Drink (Save ₹80)",
              "Pizza (Medium) + Garlic Bread (Save ₹75)",
              "Pasta + Salad (Save ₹50)",
              "Sandwich + Coffee (Save ₹40)",
            ].map((opt, i) => (
              <View key={i} style={styles.optionRow}>
                <MaterialCommunityIcons
                  name="square-circle"
                  size={24}
                  color="green"
                />
                <Text style={styles.optionText}>{opt}</Text>
                <Text style={styles.optionPrice}>₹99</Text>

                <Checkbox
                  value={selectedOptions[i]}
                  onValueChange={() => toggleOption(i)}
                  color={selectedOptions[i] ? "#0E803C" : undefined}
                />
              </View>
            ))}
          </View>

          <LinearGradient
            colors={[
              "rgba(17,17,17,0)",
              "rgba(180,186,197,1)",
              "rgba(17,17,17,0)",
            ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.divider}
          />
          <View style={styles.sheetFooter}>
            <View style={styles.qtyBox}>
              <TouchableOpacity
                style={styles.minus}
                onPress={() => setSheetQty(sheetQty > 1 ? sheetQty - 1 : 1)}
              >
                <Text style={styles.minusTxt}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>
                {sheetQty.toString().padStart(2, "0")}
              </Text>
              <TouchableOpacity
                style={styles.plus}
                onPress={() => setSheetQty(sheetQty + 1)}
              >
                <Text style={styles.plusTxt}>+</Text>
                {/* <GradientButton
                title="+"
                
                style={{ width: "130%" }}
                // onPress={() => bottomSheetRef.current?.present()}
              /> */}
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addBtn}>
              <GradientButton
                title="Add to Cart"
                style={{ width: "130%" }}
                onPress={() => {
                  bottomSheetRef.current?.dismiss();
                  navigation.navigate("MyCartList");
                }}
              />
            </TouchableOpacity>
          </View>
        </BaseBottomSheet>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    marginTop: 20,
    marginBottom: 10,
  },
  // MAIN SCREEN STYLES
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  chevron: { backgroundColor: "#F8F8F8", padding: 10, borderRadius: 10 },
  ellipsis: { backgroundColor: "#F8F8F8", padding: 10, borderRadius: 10 },
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
  foodTitles: { fontSize: 14, color: "#B3B3B3" },
  foodTitle: { fontSize: 16, fontWeight: "500", marginTop: 4 },
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
  fire: { backgroundColor: "#D8442B29", padding: 10, borderRadius: 10 },
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
  addOnWrapper: { position: "relative" },
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

  // BOTTOM SHEET STYLES
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 5,
  },
  sheetFoodImage: { width: 55, height: 55, borderRadius: 12, marginRight: 12 },
  sheetTitle: { fontSize: 16, fontWeight: "500", width: 110 },

  share: {
    backgroundColor: "#F8F8F8",
    padding: 6,
    borderRadius: 5,
    marginRight: 8,
  },
  // save: {
  //   width: 18,
  //   height: 18,
  //   backgroundColor: "#F8F8F8"
  // },
  sheetSubtitle: { fontSize: 14, marginTop: 2, color: "#333", fontWeight: 500 },
  sheetSmallText: { fontSize: 12, color: "#777" },
  optionRow: { flexDirection: "row", alignItems: "center", marginVertical: 12 },
  optionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 11,
    fontWeight: "400",
    fontFamily: "Poppins",
  },
  optionPrice: { fontSize: 10, fontWeight: "600", marginRight: 10 },
  sheetFooter: {
    marginTop: 10,
    // padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  minus: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  minusTxt: { color: "red", fontSize: 22 },
  qty: { fontSize: 18, fontWeight: "700" },
  plus: {
    width: 32,
    height: 32,
    backgroundColor: "#D32F2F",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  plusTxt: { fontSize: 22, color: "#fff" },
  addBtn: {
    // backgroundColor: "#D32F2F",
    paddingHorizontal: 34,
    borderRadius: 12,
    justifyContent: "center",
  },
  addTxt: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
