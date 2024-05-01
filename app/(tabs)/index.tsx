import { FlatList, Image, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

import Chat from '@/components/Chat';
import { useState } from 'react';

import chatData from "@/customData"

export default function ChatScreen() {
  const router = useRouter();

  const [hasArchivedMessages, sethasArchivedMessages] = useState(true)
  const newArchivedMessagesCount = 2

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {hasArchivedMessages ? (
          <TouchableOpacity
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialIcons name="archive" size={24} color="black" />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                  marginLeft: 20,
                }}
              >Archived</Text>
            </View>
            <Text style={{ color: "#1DAB5F", fontSize: 12 }}>{newArchivedMessagesCount ? newArchivedMessagesCount : ""}</Text>
          </TouchableOpacity>
        ) : ""}
        <Chat data={chatData} scroll={false} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    color: "#1E2428"
  },
  lastMessage: {
    fontSize: 14,
    color: "#7E858B"
  },
  hour: {
    marginTop: 5,
    fontSize: 12,
    color: "#7E858B"
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    marginRight: 10,
  },
});
