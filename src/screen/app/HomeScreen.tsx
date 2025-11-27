import FoodCard from "@/components/foodcard/FoodCard";
import SearchBar from "@/components/searchbar/SearchBar";
import SpecialDealCard from "@/components/specialdeal/SpecialDealCard";
import { Colors } from "constants/theme";
import { useNavigation } from "expo-router";
import React, { use } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Switch } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
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
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>Hello, Amit Thakur</Text>

            <View style={styles.Location}>
              <Image
                style={styles.locations}
                source={require("../../../assets/images/location.png")}
              />
              <Text style={styles.location}>Mohali</Text>
            </View>
          </View>
          <View style={styles.topbar}>
            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationScreen")}
            >
              <Image
                style={styles.notification}
                source={require("../../../assets/images/notification.png")}
              />
            </TouchableOpacity>

            <Image
              source={require("../../../assets/images/profile.png")}
              style={styles.profile}
            />
          </View>
        </View>

        {/* Search Bar */}
        <SearchBar />

        {/* Title + Switch Row */}
        <View style={styles.switchRow}>
          <Text style={styles.title}>
            <Text style={{ color: "#E53935" }}>Find Your</Text>
            Favorite Food
          </Text>

          {/* Right Side Veg  + Switch */}
          <View style={{ alignItems: "center" }}>
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

        {/* Categories */}
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

        {/* Special Deal */}
        <SpecialDealCard />

        {/* Top Food */}
        <View style={styles.topFoodRow}>
          <Text style={styles.sectionTitle}>Top Food</Text>
          <Text style={styles.viewMore}>View More</Text>
        </View>

        {/* Food Cards */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={() => <FoodCard />}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.foodCardList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 20,
  },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  hello: { fontSize: 22, fontWeight: "700" },

  Location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  locations: { width: 20, height: 22 },

  location: { color: "#777", marginLeft: 4, fontSize: 14 },

  topbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  notification: { width: 32, height: 32 },

  profile: { width: 38, height: 38, borderRadius: 10 },

  /* Title Row */
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  vegText: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#555",
  },
  listContainer: {
    paddingTop: 8,
    paddingBottom: 90,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    width: width * 0.7,
    lineHeight: 32,
  },

  /* Category Row */
  categoryRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
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

  /* Top Food Row */
  topFoodRow: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
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
