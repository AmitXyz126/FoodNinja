import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";

export default function LanguageScreen() {
  const navigation = useNavigation();
  const languages = [
    "English",
    "Hindi",
    "Sanskrit",
    "Urdu",
    "French",
    "Spanish",
    "Chinese",
    "Japanese",
    "Korean",
  ];

  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#444" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Language</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Card with perfect height */}
      <View style={styles.card}>
        <FlatList
          data={languages}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity
                style={styles.row}
                onPress={() => setSelectedLang(item)}
              >
                <Text
                  style={[
                    styles.langText,
                    selectedLang === item && {
                      color: "#000",
                      fontWeight: "600",
                    },
                  ]}
                >
                  {item}
                </Text>

                {/* Radio Button */}
                <View
                  style={[
                    styles.radioOuter,
                    selectedLang === item && { borderColor: "#E95555" },  
                  ]}
                >
                  {selectedLang === item && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>

              {/* Divider */}
              {index !== languages.length - 1 && (
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
              )}
            </View>
          )}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 45,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
  },

  /* Card */
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 18,
    elevation: 3,
    maxHeight: "70%",
    overflow: "hidden",
    boxShadow: "0 0 4px 1px #e0e0e080",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  langText: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Poppins",
    fontWeight: "400",
  },

  /* Gradient Divider */
  divider: {
    width: "100%",
    height: 1,
  },

  /* Radio Button */
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#E95555",
    justifyContent: "center",
    alignItems: "center",
  },
  radioInner: {
    width: 12,
    height: 12,
    backgroundColor: "#E95555",
    borderRadius: 12,
  },

  /* Save Button */
  saveBtn: {
    backgroundColor: "#F8F8F8",
    paddingVertical: 15,
    marginHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",

    marginTop: "auto",
    marginBottom: 15,
  },
  saveText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#777",
    fontFamily: "Poppins",
  },
});
