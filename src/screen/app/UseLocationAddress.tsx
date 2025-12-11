import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UseLocationAddress({ route }: any) {
  const { address } = route.params;

  return (
    <View style={styles.container}>
      {/* Fake map image — you can replace with real map view */}
      {/* <Image
        source={require("./assets/map.png")}
        style={{ width: "100%", height: 250 }}
        resizeMode="cover"
      /> */}

      <View style={styles.box}>
        <View style={styles.row}>
          <Ionicons name="location" size={24} color="green" />
          <Text style={styles.title}>{address.title}</Text>
        </View>
        <Text style={styles.subtitle}>{address.address}</Text>

        <Text style={styles.label}>Address details*</Text>
        <TextInput placeholder="Floor, Flat no., Tower" style={styles.input} />

        <Text style={styles.label}>Receiver details</Text>

        <View style={styles.row}>
          <Ionicons name="person-outline" size={22} color="#444" />
          <Text style={{ marginLeft: 6 }}>
            Jon Roy, <Text style={{ color: "#444" }}>{address.phone}</Text>
          </Text>
        </View>

        <Text style={styles.label}>Save address as</Text>

        <View style={styles.typeRow}>
          <TouchableOpacity style={styles.tagActive}>
            <Text style={styles.tagTextActive}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>Work</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tag}>
            <Text style={styles.tagText}>Other</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  box: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  row: { flexDirection: "row", alignItems: "center" },
  title: { fontSize: 18, fontWeight: "700", marginLeft: 8 },
  subtitle: { color: "#555", marginLeft: 32, marginTop: -5 },

  label: { marginTop: 15, fontWeight: "600", fontSize: 14 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginTop: 6,
  },

  typeRow: { flexDirection: "row", marginTop: 10 },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginRight: 10,
  },
  tagActive: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#D7411E",
    marginRight: 10,
  },
  tagText: { color: "#444" },
  tagTextActive: { color: "#fff" },

  saveBtn: {
    backgroundColor: "#D7411E",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  saveText: { color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "700" },
});
