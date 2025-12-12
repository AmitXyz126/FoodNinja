import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

const FilterDrawer = ({ visible, onClose }) => {
  const slideAnim = React.useRef(new Animated.Value(width)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 280,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: width,
          duration: 240,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 180,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.parentContainer}>
      {/* BLUR BACKGROUND */}
      <Animated.View style={[styles.blurWrapper, { opacity: fadeAnim }]}>
        <BlurView intensity={60} tint="dark" style={styles.blurArea}>
          <Pressable style={{ flex: 1 }} onPress={onClose} />
        </BlurView>
      </Animated.View>

      {/* RIGHT SLIDING DRAWER */}
      <Animated.View
        style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.filterTitle}>
            Filters <Text style={styles.resultsText}>532 results</Text>
          </Text>

          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={28} color="#333" />
          </TouchableOpacity>
        </View>

        {/* CONTENT SCROLL */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 140 }}
        >
          <Text style={styles.sectionLabel}>Sort by</Text>

          <View style={styles.buttonsContainer}>
            {["Rating", "Price", "Delivery time", "Popularity"].map(
              (item, i) => (
                <TouchableOpacity key={i} style={styles.optionButton}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )
            )}
          </View>

          <Text style={[styles.sectionLabel, { marginTop: 25 }]}>
            Food type
          </Text>

          <View style={styles.buttonsContainer}>
            {[
              "Fast food",
              "Dessert",
              "Beverages",
              "Indian",
              "Chinese",
              "French",
              "Italian",
              "Mexican",
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.optionButton}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* FIXED FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Remove all</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default FilterDrawer;

const styles = StyleSheet.create({
  parentContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 999,
  },

  blurWrapper: { ...StyleSheet.absoluteFillObject },
  blurArea: { flex: 1 },

  drawer: {
    position: "absolute",
    right: 0,
    width: width * 0.75,
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingTop: 20,
    borderTopLeftRadius: 26,
    borderBottomLeftRadius: 26,
    elevation: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  filterTitle: { fontSize: 18, fontWeight: "700" },
  resultsText: { fontSize: 11, color: "#666" },

  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
  },

  buttonsContainer: { gap: 10 },

  optionButton: {
    backgroundColor: "#F4F4F4",
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
  },

  optionText: { fontSize: 14, fontWeight: "500", color: "#333" },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 18,
    paddingBottom: 25,
    backgroundColor: "#fff",
  },

  clearButton: {
    backgroundColor: "#ffe9e9",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  clearText: { fontWeight: "700", color: "#e53935" },

  saveButton: {
    backgroundColor: "#e53935",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  saveText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
