import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
} from "react-native";

export default function AddAddressScreen({ navigation }) {
  const [isDefault, setIsDefault] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add address</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Set as default</Text>
        <Switch
          value={isDefault}
          onValueChange={(val) => setIsDefault(val)}
          thumbColor={"white"}
          trackColor={{ true: "#E53935", false: "#ccc" }}
        />
      </View>

      <TextInput placeholder="Address label" style={styles.input} />
      <TextInput
        placeholder="Delivery instructions (optional)"
        style={styles.input}
      />
      <TextInput placeholder="Full name" style={styles.input} />

      <View style={styles.row}>
        <TextInput
          placeholder="+91"
          style={[styles.input, { flex: 0.3, marginRight: 10 }]}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Phone number"
          style={[styles.input, { flex: 0.7 }]}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="City"
          style={[styles.input, { flex: 1, marginRight: 10 }]}
        />
        <TextInput placeholder="State" style={[styles.input, { flex: 1 }]} />
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="Postal code"
          style={[styles.input, { flex: 1, marginRight: 10 }]}
          keyboardType="numeric"
        />
        <TextInput placeholder="Country" style={[styles.input, { flex: 1 }]} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("profileDone")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 20 },

  label: { fontSize: 16, fontWeight: "600" },
  input: {
    height: 50,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 12 },

  button: {
    backgroundColor: "#E53935",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
