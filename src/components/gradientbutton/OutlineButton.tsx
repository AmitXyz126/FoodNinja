import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface OutlineButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#FF1D1D",
    paddingVertical: 14,
    paddingHorizontal: 25,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "#8F3300",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OutlineButton;
