import { FlatList, Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

import {Chat} from '@/components';
import { useState } from 'react';

import { chatData } from "@/customData"

export default function ChatScreen() {
  const router = useRouter();

  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme ?? "dark"];

  const [hasArchivedMessages, sethasArchivedMessages] = useState(true)
  const newArchivedMessagesCount = 2

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {hasArchivedMessages ? (
          <TouchableOpacity style={styles.archivedMessages}>
            <View style={{ flexDirection: "row", }} >
              <MaterialIcons name="archive" size={24} color={theme.icon} />
              <Text style={{
                fontSize: 16,
                fontWeight: "500",
                marginLeft: 20,
              }}
              >Archived</Text>
            </View>
            <Text style={{ color: theme.green, fontSize: 12 }}>{newArchivedMessagesCount ? newArchivedMessagesCount : ""}</Text>
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
  archivedMessages: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
