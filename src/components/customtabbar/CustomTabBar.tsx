import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const iconName =
          route.name === "HomeTab"
            ? "home"
            : route.name === "CategoriesTab"
            ? "document-text"
            : route.name === "CartTab"
            ? "cart"
            : "settings";

        const onPress = (e: GestureResponderEvent) => {
          if (!isFocused) navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabButton}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconContainer,
                isFocused && styles.activeIconContainer,
              ]}
            >
              <Ionicons
                name={iconName}
                size={26}
                color={isFocused ? "#FF1D1D" : "#666"}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 1,
    marginHorizontal: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 12,
    justifyContent: "space-around",
    elevation: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
  },

  tabButton: {
    flex: 1,
    alignItems: "center",
  },

  iconContainer: {
    padding: 10,
    borderRadius: 7,
  },

  activeIconContainer: {
    backgroundColor: "#FFE6EA",
  },
});
