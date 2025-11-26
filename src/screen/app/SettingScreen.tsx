import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const SettingScreen = () => {
  const [vegMode, setVegMode] = useState(false);
  const [appearance, setAppearance] = useState(false);
  const navigation = useNavigation<any>();

  const Row = ({
    icon,
    label,
    right = null,
    onPress,
  }: {
    icon: React.ReactNode;
    label: string;
    right?: React.ReactNode | null;
    onPress?: () => void;
  }) => {
    const Container: any = onPress ? Pressable : View;
    return (
      <Container
        style={styles.row}
        onPress={onPress}
        android_ripple={{ color: "#eee" }}
      >
        <View style={styles.rowLeft}>{icon}</View>
        <Text style={styles.rowLabel}>{label}</Text>
        <View style={styles.rowRight}>
          {right ?? (
            <Image
              source={require("../../../assets/images/rightarrow.png")}
              style={{ width: 26, height: 26 }}
            />
          )}
        </View>
      </Container>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header / Back */}
        <View style={styles.headerRow}>
          {/* Left Back Button */}
          <Pressable
            onPress={() => navigation?.goBack?.()}
            style={styles.backBtn}
          >
            <Image
              source={require("../../../assets/images/back.png")}
              style={{ width: 26, height: 26 }}
            />
          </Pressable>

          {/* Center Title */}
          <Text style={styles.headerTitle}>Setting</Text>

          {/* Right Spacer (same size as back button) */}
          <View style={{ width: 36 }} />
        </View>

        {/* Profile card */}
        <View style={styles.card}>
          <View style={{ position: "relative" }}>
            <Image
              source={require("../../../assets/images/profile.png")}
              style={styles.avatar}
              resizeMode="cover"
            />

            {/* Edit Icon */}
            <TouchableOpacity style={styles.editIcon}>
              <Image
                source={require("../../../assets/images/editprofile.png")}
                style={{ width: 26, height: 26 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.name}>Manik Yadav</Text>
            <Text style={styles.email}>manikyadav2@gmail.com</Text>
          </View>
        </View>

        {/* Accounts section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Accounts</Text>

          <Row
            icon={
              <Image
                source={require("../../../assets/images/yourprofile.png")}
                style={styles.icon}
              />
            }
            label="Your profile"
            onPress={() => navigation?.navigate?.("EditProfile")}
          />

          <Divider />

          <Row
            icon={
              <Image
                source={require("../../../assets/images/location2.png")}
                style={styles.icon}
              />
            }
            label="Address details"
            onPress={() => navigation?.navigate?.("myAddressesScreen")}
          />

          <Divider />

          <Row
            icon={
              <Image
                source={require("../../../assets/images/cardbold.png")}
                style={styles.icon}
              />
            }
            label="My Order"
            onPress={() => navigation?.navigate?.("myOrder")}
          />

          <Divider />

          <Row
            icon={
              <Image
                source={require("../../../assets/images/veg.png")}
                style={styles.icon}
              />
            }
            label="Veg Mode"
            right={<Switch value={vegMode} onValueChange={setVegMode} />}
          />

          <Divider />

          <Row
            icon={
              <Image
                source={require("../../../assets/images/apprance.png")}
                style={styles.icon}
              />
            }
            label="Appearance"
            right={<Switch value={appearance} onValueChange={setAppearance} />}
          />

          <Divider />

          <Row
            icon={
              <Image
                source={require("../../../assets/images/language.png")}
                style={styles.icon}
              />
            }
            label="Language"
            onPress={() => navigation?.navigate?.("LanguageScreen")}
            right={<Text style={styles.smallText}>English</Text>}
          />

          <Divider />

          <Row
            icon={
              <Image
                source={require("../../../assets/images/delete.png")}
                style={styles.icon}
              />
            }
            label="Delete Account"
            onPress={() => navigation?.navigate?.("DeleteAccountScreen")}
          />
        </View>

        {/* Help section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Help</Text>

          <Row
            icon={
              <Image
                source={require("../../../assets/images/chat.png")}
                style={styles.icon}
              />
            }
            label="Customer Support"
            onPress={() => navigation?.navigate?.("CustomerSupport")}
          />

          <Divider />

          <Row
            icon={
              <Image
                source={require("../../../assets/images/notesbold.png")}
                style={styles.icon}
              />
            }
            label="Frequently Asked Questions"
            onPress={() => navigation?.navigate?.("Faq")}
          />
        </View>

        {/* Others */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Others</Text>

          <Row
            icon={
              <Image
                source={require("../../../assets/images/privacy.png")}
                style={styles.icon}
              />
            }
            label="Privacy Policy"
            onPress={() => navigation?.navigate?.("Privacy")}
          />

          <Divider />

          <Row
            icon={
              <Image
                source={require("../../../assets/images/termsconditions.png")}
                style={styles.icon}
              />
            }
            label="Terms & Conditions"
            onPress={() => navigation?.navigate?.("Terms")}
          />
        </View>

        {/* Logout */}
        <Pressable style={styles.logout} onPress={() => console.log("logout")}>
          <Image
            source={require("../../../assets/images/logout.png")}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const Divider = () => {
  return (
    <LinearGradient
      colors={["rgba(17,17,17,0)", "rgba(180,186,197,1)", "rgba(17,17,17,0)"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.divider}
    />
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fbfbfb" },
  scroll: { padding: 16 },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // important
    marginBottom: 12,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 16,
    boxShadow: "0 0 4px 1px #e0e0e080",
  },

  avatar: { width: 70, height: 70, borderRadius: 35 },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },

  name: { fontSize: 16, fontWeight: "700", color: "#222" },
  email: { fontSize: 12, color: "#666", marginTop: 4 },

  sectionCard: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2,
    boxShadow: "0 0 4px 1px #e0e0e080",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#888",
    marginBottom: 8,
  },

  row: { flexDirection: "row", alignItems: "center", paddingVertical: 12 },
  rowLeft: { width: 34, alignItems: "center" },
  rowLabel: { flex: 1, fontSize: 15, color: "#333" },
  rowRight: { minWidth: 60, alignItems: "flex-end" },

  smallText: { color: "#777" },

  divider: { width: "100%", height: 1, marginVertical: 8 },

  logout: {
    marginTop: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    elevation: 2,
    boxShadow: "0 0 4px 1px #e0e0e080",
  },
  logoutText: {
    color: "#ff3a31",
    fontWeight: "700",
    marginLeft: 8,
  },
});
