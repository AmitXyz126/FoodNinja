// MyOrdersScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GradientButton from "@/components/gradientbutton/GradientButton";
import { useNavigation } from "expo-router";

const mixpizza = require("../../../assets/images/mixpizza.png");

export default function MyOrdersScreen() {
  const navigation = useNavigation<any>();

  const [activeTab, setActiveTab] = useState<"ongoing" | "history">("ongoing");

  const ongoingOrders = [
    {
      id: "#162432",
      title: "Pared Crab",
      location: "Sector 01, Chandigarh",
      price: "$49.99",
      items: "Fries (M) + Pizza + Lemonade (Save $49)",
      image: mixpizza,
    },
    {
      id: "#162433",
      title: "Pared Crab",
      location: "Sector 01, Chandigarh",
      price: "$49.99",
      items: "Fries (M) + Pizza + Lemonade (Save $49)",
      image: mixpizza,
    },
  ];

  const historyOrders = [
    {
      title: "Chicken BBQ Pizza",
      location: "Sector 15, Chandigarh",
      price: "$39.99",
      date: "07 Sep, 4:30pm Delivered",
      image: mixpizza,
    },
  ];

  const showOrders = activeTab === "ongoing" ? ongoingOrders : historyOrders;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Order</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "ongoing" && styles.activeTab]}
          onPress={() => setActiveTab("ongoing")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "ongoing" && styles.activeTabText,
            ]}
          >
            Ongoing
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "history" && styles.activeTab]}
          onPress={() => setActiveTab("history")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "history" && styles.activeTabText,
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {showOrders.map((item, index) =>
          activeTab === "ongoing" ? (
            // ONGOING CARD UI
            <View key={index} style={styles.ongoingCard}>
              <View style={styles.rowTop}>
                <Image source={item.image} style={styles.foodImage} />

                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>

                  <Text style={styles.price}>{item.price}</Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 4,
                    }}
                  >
                    <View style={styles.greenDot} />
                    <Text style={styles.itemsText}>{item.items}</Text>
                  </View>
                </View>

                <Text style={styles.orderId}>{item.id}</Text>
              </View>

              {/* BUTTONS */}
              <View style={styles.buttonRow}>
                <GradientButton
                  onPress={() => {}}
                  title="Track Order"
                  style={styles.button}
                  textStyle={styles.trackText}
                />

                <TouchableOpacity
                  style={[styles.button, styles.cancelBtn]}
                  onPress={() => {}}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            // HISTORY CARD
            <View key={index} style={styles.historyCard}>
              <Image source={item.image} style={styles.foodImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.historyDate}>
                  Order placed on {item.date}
                </Text>
              </View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },

  // Tabs
  tabsRow: {
    flexDirection: "row",
    marginBottom: 15,
    gap: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: "#FFD7D7",
  },
  tabText: {
    fontSize: 15,
    color: "#555",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#E95353",
    fontWeight: "700",
  },

  // Ongoing Card
  ongoingCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  rowTop: {
    flexDirection: "row",
    marginBottom: 15,
  },

  foodImage: {
    width: 85,
    height: 85,
    borderRadius: 12,
    marginRight: 12,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },

  location: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  greenDot: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "green",
    marginRight: 6,
  },

  itemsText: {
    fontSize: 13,
    color: "#444",
    flexShrink: 1,
  },

  orderId: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
  },

  /* BUTTONS */
  buttonRow: {
    flexDirection: "row",
    marginTop: 5,
    gap: 1,
  },

  button: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  trackText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  cancelBtn: {
    backgroundColor: "#F5F5F5",
  },
  cancelText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
  },

  // HISTORY CARD
  historyCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 5,
    gap: 10,
  },

  historyDate: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
});
