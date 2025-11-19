import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SpecialDealCard = () => {
  return (
    <LinearGradient
      colors={["#FF3A31", "#8F1D00"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* LEFT TEXT */}
      <View style={{ width: "65%" }}>
        <Text style={styles.title}>Special Deal For Today!</Text>
        <Text style={styles.subTitle}>Free Delivery For all Orders</Text>

        <View style={styles.orderBtn}>
          <Text style={styles.btnText}>Order Now</Text>
        </View>
      </View>

      {/* RIGHT IMAGE + BADGE */}
      <View style={styles.imageWrap}>
        <Image
          source={require("../../../assets/images/pizzadeal.png")}
          style={styles.pizza}
        />

        {/* BADGE */}
        <View style={styles.badge}>
          <Image
            source={require("../../../assets/images/Group.png")}
            style={styles.badgeBg}
          />
          <Text style={styles.badgeText}>60%{"\n"}OFF</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SpecialDealCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    borderRadius: 26,
    padding: 18,
    marginTop: 20,
    flexDirection: "row",
    overflow: "hidden",
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  subTitle: {
    color: "#FFECEC",
    marginTop: 6,
    fontSize: 15,
  },

  orderBtn: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 14,
    alignSelf: "flex-start",
  },

  btnText: {
    color: "#FF3A31",
    fontWeight: "700",
    fontSize: 15,
  },

  imageWrap: {
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  pizza: {
    width: 152,
    height: 157,
    position: "absolute",
    bottom: -20,
    right: -20,
    // borderRadius: 90,
  },

  badge: {
    position: "absolute",
    right: 10,
    top: 10,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeBg: {
    width: 55,
    height: 55,
    position: "absolute",
  },

  badgeText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 12,
  },
});
