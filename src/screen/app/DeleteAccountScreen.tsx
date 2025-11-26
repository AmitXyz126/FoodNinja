import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function DeleteAccountScreen({ navigation }) {
  const [confirmText, setConfirmText] = useState("");

  const isValid = confirmText === "CONFIRM";

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Delete account</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Content */}
      <View style={styles.body}>
        <Text style={styles.title}>You are going to delete your account.</Text>

        <Text style={styles.subtitle}>
          We are very sorry to see you leaving. Deleting your account will permanently
          delete all of the data plus any active subscriptions and this action 
          be undone!
        </Text>

        <Text style={styles.subtitle}>
          If you still want to delete your account, enter  to proceed.
        </Text>

        <TextInput
          style={styles.input}
          placeholder='Enter "CONFIRM"'
          value={confirmText}
          onChangeText={setConfirmText}
          autoCapitalize="characters"
        />
      </View>

      {/* Delete Button */}
      <TouchableOpacity
        disabled={!isValid}
        style= {styles.button}
      >
        <Text style={styles.buttonText}>Delete account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },

  body: {
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 14,
    color: "#6b6b6b",
    marginBottom: 12,
    lineHeight: 20,
  },

  input: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },

//   button: {
//     marginTop: "auto",
//     backgroundColor: "#f44336",
//     paddingVertical: 16,
//     borderRadius: 12,
//     marginBottom: 20,
//   },

    button: {
    backgroundColor: "#F8F8F8",
    paddingVertical: 15,
    marginTop: "auto",
    borderRadius: 16,
    alignItems: "center", 
    marginBottom: 10,
 

  },

  buttonText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    fontWeight: "600",
  },
});
