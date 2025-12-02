import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import SearchBar from "@/components/searchbar/SearchBar";
import FoodCard from "@/components/foodcard/FoodCard";
import { FlatList, Switch } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "constants/theme";
import { useNavigation } from "expo-router";

const { width } = Dimensions.get("window");

const CategoriesScreen = () => {
  const navigation = useNavigation<any>();

  const [activeCat, setActiveCat] = React.useState("Pizza");
  const [isDefault, setIsDefault] = React.useState(false);

  const categories = [
    {
      id: 1,
      name: "Pizza",
      icon: require("../../../assets/images/small.png"),
    },

    {
      id: 2,
      name: "Burger",
      icon: require("../../../assets/images/burger.png"),
    },
    { id: 3, name: "Pasta", icon: require("../../../assets/images/pasta.png") },
    { id: 4, name: "Tacos", icon: require("../../../assets/images/tacos.png") },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Top Bar */}
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} />
          </TouchableOpacity>

          <Text style={styles.title}>Categories</Text>

          {/* Notification Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationScreen")}
          >
            <Ionicons name="notifications-outline" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchRow}>
          <View style={{ flex: 1 }}>
            <SearchBar />
          </View>

          <View style={styles.vegContainer}>
            <Text style={styles.vegText}>Veg</Text>
            <Switch
              value={isDefault}
              onValueChange={setIsDefault}
              thumbColor={"white"}
              trackColor={{ true: "#E53935", false: "#ccc" }}
              style={{ marginTop: -5 }}
            />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryRow}>
            {categories.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => setActiveCat(item.name)}
                style={[
                  styles.categoryItem,
                  activeCat === item.name && { backgroundColor: "#FED2D2" },
                ]}
              >
                <Image source={item.icon} style={styles.catIcon} />
                <Text
                  style={[
                    styles.catText,
                    activeCat === item.name && { color: "#E53935" },
                  ]}
                >
                  {item.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        {/* Top Food Row */}
        <View style={styles.topFoodRow}>
          <Text style={styles.sectionTitle}>Top Food</Text>
          <Text style={styles.viewMore}>View More</Text>
        </View>

        {/* Food Cards */}
        <FlatList
          data={[1, 2, 3, 4,5,6]}
          renderItem={() => <FoodCard />}
          keyExtractor={(item) => item.toString()}
          numColumns={2} // ← IMPORTANT
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 15,
          }}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: 10,
          }}
        />

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", paddingTop: 0 },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  title: { fontSize: 20, fontWeight: "700" },

  searchRow: {
    flexDirection: "row",
    marginBottom: 25,
    alignItems: "center",
    gap: 15,
  },

  vegContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 10,
    gap: 3,
    marginRight: 18,
  },

  vegText: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#555",
  },

  categoryRow: {
    flexDirection: "row",
    gap: 18,
    marginBottom: 25,
    paddingLeft: 20,
  },

  categoryItem: {
    backgroundColor: "#F7F7F7",
    width: width * 0.23,
    height: 60,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
    marginTop: 35,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  catIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: -20,
  },

  catText: {
    marginTop: 5,
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
  },

  topFoodRow: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  sectionTitle: { fontSize: 20, fontWeight: "700" },
  viewMore: { color: "#E53935", fontWeight: "600" },

  foodCardList: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20,
    justifyContent: "space-between",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
});
