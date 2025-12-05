import React, { useMemo, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { Portal } from "@gorhom/portal";

export default function ProductAddOnBottomSheet({ sheetRef, item }) {
  const snapPoints = useMemo(() => ["55%", "85%"], []);

  const [qty, setQty] = useState(1);

  const increase = () => setQty((p) => p + 1);
  const decrease = () => setQty((p) => (p > 1 ? p - 1 : 1));

  return (
    <Portal>
      <BottomSheet
        ref={sheetRef}
        index={-1} // VERY IMPORTANT
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={{ borderTopLeftRadius: 28, borderTopRightRadius: 28 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Image source={item.image} style={styles.foodImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>Make it a Meal</Text>
            <Text style={styles.smallText}>Select up to 4 options</Text>
          </View>

          <Ionicons name="share-social-outline" size={22} />
        </View>

        {/* OPTIONS */}
        <View style={{ paddingHorizontal: 20, marginTop: 15 }}>
          {[
            "Fries + Lemonade (Save ₹49)",
            "Burger + Fries + Drink (Save ₹80)",
            "Pizza (Medium) + Garlic Bread (Save ₹75)",
            "Pasta + Salad (Save ₹50)",
            "Sandwich + Coffee (Save ₹40)",
          ].map((opt, i) => (
            <View key={i} style={styles.optionRow}>
              <Ionicons name="checkbox-outline" size={22} color="green" />
              <Text style={styles.optionText}>{opt}</Text>
              <Text style={styles.optionPrice}>₹99</Text>
            </View>
          ))}
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View style={styles.qtyBox}>
            <TouchableOpacity style={styles.minus} onPress={decrease}>
              <Text style={styles.minusTxt}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qty}>{qty.toString().padStart(2, "0")}</Text>

            <TouchableOpacity style={styles.plus} onPress={increase}>
              <Text style={styles.plusTxt}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addTxt}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </Portal>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  foodImage: {
    width: 55,
    height: 55,
    borderRadius: 12,
    marginRight: 12,
  },
  title: { fontSize: 16, fontWeight: "700" },
  subtitle: { fontSize: 14, marginTop: 2, color: "#444" },
  smallText: { fontSize: 12, color: "#777" },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  optionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "500",
  },
  optionPrice: { fontSize: 14, fontWeight: "600" },

  footer: {
    marginTop: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.3,
    borderColor: "#ccc",
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 10,
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
    backgroundColor: "red",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  plusTxt: { fontSize: 22, color: "#fff" },

  addBtn: {
    backgroundColor: "#D32F2F",
    paddingHorizontal: 30,
    borderRadius: 12,
    justifyContent: "center",
  },
  addTxt: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
