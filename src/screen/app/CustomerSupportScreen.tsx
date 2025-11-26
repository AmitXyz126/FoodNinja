import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Message = {
  id: string;
  sender: "me" | "support";
  text?: string;
  image?: any;
};

export default function CustomerSupportChatScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Good morning! We're from Bobo Foods, how may I help you?",
      sender: "support",
    },
    {
      id: "2",
      text: "I have ordered for a pepperoni cheese pizza but I received a different one. Please replace it.",
      sender: "me",
    },
    {
      id: "3",
      text: "We are very sorry to hear that. Please send a picture of the pizza for confirmation.",
      sender: "support",
    },
  ]);

  const flatListRef = useRef<any>(null);

  // Send Text Message
  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "me",
    };

    setMessages((prev) => [...prev, newMsg]);
    setMessage("");

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  // Send Image Message
  const sendImage = () => {
    const newMsg: Message = {
      id: Date.now().toString(),
      image: require("../../../assets/images/mixpizza.png"),
      sender: "me",
    };

    setMessages((prev) => [...prev, newMsg]);

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  // Render Message Bubble
  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.chatBubble,
        item.sender === "me" ? styles.rightBubble : styles.leftBubble,
      ]}
    >
      {item.image ? (
        <Image source={item.image} style={styles.chatImage} />
      ) : (
        <Text
          style={[
            styles.msgText,
            item.sender === "me" ? styles.msgRightText : styles.msgLeftText,
          ]}
        >
          {item.text}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={26} color="#444" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Customer Support</Text>

        <View style={{ width: 26 }} />
      </View>

      {/* Chat Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Bar */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputRow}
      >
        <TouchableOpacity onPress={sendImage}>
          <Ionicons name="image" size={28} color="#E95555" />
        </TouchableOpacity>

        <TextInput
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />

        <TouchableOpacity onPress={sendMessage}>
          <Ionicons name="send" size={26} color="#E95555" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    paddingTop: 45,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
  },

  // Chat Bubbles
  chatBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  leftBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#f4f4f4",
  },
  rightBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#FFD7D7",
  },

  msgText: {
    fontSize: 14,
  },
  msgLeftText: {
    color: "#444",
  },
  msgRightText: {
    color: "#333",
    fontWeight: "500",
  },

  chatImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  // Input Bar
  inputRow: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },

  input: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    marginHorizontal: 10,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
});
