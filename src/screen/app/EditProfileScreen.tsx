import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EditProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Profile</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Banner */}
      <Image
        source={require("../../../assets/images/frame.png")}
        style={styles.banner}
      />

      {/* Profile Avatar */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../../../assets/images/profile.png")}
          style={styles.avatar}
        />

        {/* Edit icon */}
        <TouchableOpacity style={styles.editBtn}>
          <Ionicons name="camera" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <View style={styles.form}>
        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Manik Yadav" />

        {/* Mobile */}
        <Text style={styles.label}>Mobile number</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputInside} placeholder="8168000000" />
          <TouchableOpacity>
            <Text style={styles.insideChange}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputInside}
            placeholder="manikyadav2@gmail.com"
          />
          <TouchableOpacity>
            <Text style={styles.insideChange}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputInside} placeholder="Male" />
          <TouchableOpacity>
            <Text style={styles.insideChange}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* DOB */}
        <Text style={styles.label}>Date of birth</Text>
        <TextInput style={styles.input} placeholder="10/10/1994" />

        {/* Button */}
        <TouchableOpacity style={styles.updateBtn}>
          <Text style={styles.updateText}>Update profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    paddingTop: 55,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  banner: {
    width: "90%",
    height: 110,
    borderRadius: 36,
    alignSelf: "center",
    marginTop: 20,
  },

  profileContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: -55,
    justifyContent: "center",
    alignItems: "center",

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  editBtn: {
    position: "absolute",
    bottom: 6,
    right: 6,
    backgroundColor: "#FF3A31",
    padding: 6,
    borderRadius: 18,
    elevation: 4,
  },

  form: {
    paddingHorizontal: 22,
    marginTop: 40,
  },

  label: {
    marginTop: 14,
    fontSize: 14,
    color: "#3B3B3B",
    opacity: 0.3,
    marginBottom: 6,
  },

 
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    padding: 12,
    borderRadius: 10,
    fontSize: 14,
  },

  
  inputWrapper: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },

  inputInside: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 80,
    borderRadius: 10,
    fontSize: 14,
  },

  insideChange: {
    position: "absolute",
    right: 15,
    top: -27,
    color: "#666",
    fontWeight: "400",
    fontSize: 14,
    fontFamily: "poppins",
    fontStyle: "normal",
  },

  updateBtn: {
    marginTop: 35,
    backgroundColor: "#F8F8F8",
    padding: 16,
    borderRadius: 12,
  },

  updateText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
    color: "#666",
    fontStyle: "normal",
    fontFamily: "poppins",
  },
});
