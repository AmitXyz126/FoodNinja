import { View, Text, FlatList } from "react-native";
import React from "react";

const FoodListScreen = ({ route }) => {
  const { category } = route.params; // yaha selected category aa rahi hai

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 20 }}>
        {category}
      </Text>

      {/* Food List */}
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => (
          <View
            style={{
              backgroundColor: "#F7F7F7",
              padding: 15,
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <Text style={{ fontWeight: "700" }}>Tasty Mexican Pizza</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FoodListScreen;
