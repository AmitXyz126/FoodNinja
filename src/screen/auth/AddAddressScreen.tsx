import CustomInput from "@/components/customInput/CustomInput";
import GradientButton from "@/components/gradientbutton/GradientButton";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
 
  
 
} from "react-native";

export default function AddAddressScreen({ navigation }) {
  const [isDefault, setIsDefault] = React.useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.formContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Image
            source={require("../../../assets/images/backarrow.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        {/* Switch Row */}
        <View style={styles.rows}>
          <Text style={styles.label}>Set as default</Text>
          <Switch
            value={isDefault}
            onValueChange={setIsDefault}
            thumbColor={"white"}
            trackColor={{ true: "#E53935", false: "#ccc" }}
          />
        </View>

        {/* Inputs */}
        <CustomInput placeholder="Address label (e.g. home, work, other)" />

        <CustomInput placeholder="Delivery instructions (optional)" />

        <CustomInput placeholder="Full Name" />

        {/* Phone Row */}
        <View style={styles.rowes}>
          <CustomInput
            placeholder="+91"
            type="number"
            style={{ flex: 0.35, marginRight: 10, width:40}}
          />
          <CustomInput
            placeholder="Phone number"
            type="number"
            style={{ flex: 1 }}
          />
        </View>

        {/* Street */}
        <CustomInput placeholder="Street address" />

        {/* City + State Row */}
        <View style={styles.row}>
          <CustomInput
            placeholder="City"
            style={{ flex: 1, marginRight: 10 }}
          />
          <CustomInput placeholder="State / province" style={{ flex: 1 }} />
        </View>

        {/* ZIP + Country Row */}
        <View style={styles.row}>
          <CustomInput
            placeholder="ZIP / postal code"
            type="number"
            style={{ flex: 1, marginRight: 10 }}
          />
          <CustomInput placeholder="Country" style={{ flex: 1 }} />
        </View>

        <View style={{ height: 130 }} />
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.bottomButtonContainer}>
        <GradientButton
          title="Continue"
          onPress={() => navigation.navigate("profileDone")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  formContainer: {
    padding: 20,
    paddingBottom: 160,
    marginTop: 40,
  },

  backBtn: { marginBottom: 12 },
  backIcon: { width: 28, height: 28, resizeMode: "contain" },

  label: { fontSize: 16, fontWeight: "600" },

  rows: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    backgroundColor: "#F8F8F8",
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  rowes: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "50%",
    gap: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "50%",
    gap: 3,
  },

  bottomButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
});
