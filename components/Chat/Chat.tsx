import { FlatList, StyleSheet, TouchableOpacity, useColorScheme, } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { UnreadNotification, ProfileImage, UserModal } from "@/components/"

import Colors from '@/constants/Colors';
import sizes from '@/constants/sizes';

interface ChatProps {
  data: any;
  scroll: boolean;
}

export default function Chat({ data, scroll }: ChatProps) {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false)
  const [modalUser, setModalUser] = useState({})

  const [selectedUser, setSelectedUser] = useState({})

  const colorScheme = useColorScheme()

  const theme = Colors[colorScheme ?? "dark"];

  return (
    <View>
      <UserModal user={modalUser} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <FlatList
        scrollEnabled={scroll}
        numColumns={1}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => { item.id }}
        renderItem={({ item }) => {
          return (
              <TouchableOpacity
              activeOpacity={0.5}
              onLongPress={() => {
                setSelectedUser(item)
              }}
              onPress={() => {
                router.push(`/chat/${item.id}`)
              }}
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                paddingVertical: 10,
                paddingHorizontal: sizes.chat.containerHorizontalPadding,
                backgroundColor: selectedUser === item ? "rgba(0, 128, 0, 0.2)" : "transparent",
              }}>
              <View style={{
                flexDirection: "row",
                backgroundColor: "transparent",
              }}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true)
                    setModalUser(item)
                  }}
                >
                  <ProfileImage image={item.profileImage} size={48} />
                </TouchableOpacity>
                <View style={{
                  backgroundColor: "transparent"
                }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "transparent"
                    }}>
                    <Text style={[styles.name, { color: theme.title }]}>{item.name}</Text>
                  </View>
                  <Text style={[styles.lastMessage, { color: theme.grey }]} numberOfLines={1} width={230}>{item.lastMessage}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  paddingRight: 5,
                  backgroundColor: "transparent"
                }}
              >
                <Text style={[styles.hour, { color: item.unreadNotifications ? theme.green : theme.grey }]}>{item.hour}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent"
                  }}
                >
                  {item.silenced ? (<MaterialCommunityIcons style={{ paddingLeft: 5 }} name="bell-off" size={18} color={theme.grey} />) : ""}
                  {item.pinned ? (<MaterialCommunityIcons style={{ paddingLeft: 5 }} name="pin" size={20} color={theme.grey} />) : ""}
                  {item.unreadNotifications ? (<UnreadNotification notificationCount={item.unreadNotifications} />) : ""}
                </View>
              </View>
            </TouchableOpacity >
          );
        }}
        contentContainerStyle={{
          paddingVertical: 10,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  lastMessage: {
    fontSize: 14,
  },
  hour: {
    fontWeight: "500",
    marginTop: 5,
    fontSize: 12,
  },
});
