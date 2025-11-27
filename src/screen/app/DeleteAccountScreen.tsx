import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function DeleteAccountScreen({ navigation }) {
  const [confirmText, setConfirmText] = useState("");
  const [showModal, setShowModal] = useState(false);

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
          We are very sorry to see you leaving. Deleting your account will
          permanently delete all of the data plus any active subscriptions and
          this action can’t be undone!
        </Text>

        <Text style={styles.subtitle}>
          If you still want to delete your account, enter “CONFIRM” to proceed.
        </Text>

        <TextInput
          style={styles.input}
          placeholder='Enter "CONFIRM"'
          value={confirmText}
          onChangeText={(text) => setConfirmText(text.toUpperCase())}  
          autoCapitalize="none" 
        />
      </View>

      {/* Bottom Delete Button */}
      <TouchableOpacity
        onPress={() => {
          if (isValid) setShowModal(true);
        }}
        style={[
          styles.button,
          {
            backgroundColor: isValid ? "#f44336" : "#F2F2F2",
          },
        ]}
      >
        <Text
          style={[styles.buttonText, { color: isValid ? "#fff" : "#7a7a7a" }]}
        >
          Delete account
        </Text>
      </TouchableOpacity>

      {/* Confirmation Modal */}
      <Modal
        visible={showModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Are you sure?</Text>

            <Text style={styles.modalSubtitle}>
              Are you sure you want to delete this account?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => {
                  setShowModal(false);
                  console.log("Account deleted dummy");
                }}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },

  header: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: { fontSize: 18, fontWeight: "600", color: "#000" },

  body: { marginTop: 30 },

  title: { fontSize: 24, fontWeight: "700", color: "#000", marginBottom: 15 },

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

  button: {
    paddingVertical: 16,
    marginTop: "auto",
    borderRadius: 14,
    marginBottom: 10,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "82%",
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 18,
  },

  modalTitle: { fontSize: 20, fontWeight: "700", marginBottom: 8 },

  modalSubtitle: { fontSize: 14, color: "#555", marginBottom: 20 },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  cancelBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#F1F1F1",
    marginRight: 10,
  },

  cancelText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 14,
  },

  deleteBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#D32F2F",
  },

  deleteText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
