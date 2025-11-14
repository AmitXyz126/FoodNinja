import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  checked: boolean;
  onChange: () => void;
}

const CustomCheckBox: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange} activeOpacity={0.7}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && (
          <MaterialIcons name="check" size={18} color="#D73A00" />
        )}
      </View>

      <Text style={styles.label}>Remember me</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#D73A00",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  boxChecked: {
    backgroundColor: "#FFF3EE",
  },
  label: {
    fontSize: 16,
    color: "#4A4A4A",
    fontWeight: "500",
  },
});
