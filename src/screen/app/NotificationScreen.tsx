import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationScreen({ navigation }) {
  const notifications = [
    {
      id: 1,
      title: "Rate Your Order",
      message: "How did we do? Let us know by rating your recent order and sharing your feedback.",
      time: "1 day ago",
    },
    {
      id: 2,
      title: "New Feature Feedback",
      message: "We recently launched new features. Tell us what you think and how they can improve your experience.",
      time: "3 days ago",
    },
    {
      id: 3,
      title: "Customer Support Rating",
      message: "Rate your experience with our customer support team and provide any suggestions for improvement.",
      time: "1 week ago",
    },
    {
      id: 4,
      title: "Product Review Request",
      message: "Have you tried our latest product? Share your thoughts and help others make informed decisions.",
      time: "2 weeks ago",
    },
    {
      id: 5,
      title: "Website Experience Survey",
      message: "How easy was it to navigate our website? Let us know your thoughts to enhance user experience.",
      time: "1 month ago",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Image source={require("../../../assets/images/notification.png")} style={styles.icon} />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
        <View style={{ width: 30 }} />
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 15 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },

  card: {
    flexDirection: "row",
    marginBottom: 20,
  },

  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#FFE5E5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  icon: {
    width: 28,
    height: 28,
    tintColor: "#E63946", // red like screenshot
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  message: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
    lineHeight: 18,
  },

  time: {
    marginTop: 6,
    fontSize: 12,
    color: "#999",
  },
});
