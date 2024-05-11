import { FlatList, StyleSheet, TouchableOpacity, useColorScheme, } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { UnreadNotification, ProfileImage, UserModal } from "@/components/"

import Colors from '@/constants/Colors';

interface ChatProps {
  data: any;
  scroll: boolean;
}

export default function Chat({ data, scroll }: ChatProps) {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})

  const colorScheme = useColorScheme()

  const theme = Colors[colorScheme ?? "dark"];

  return (
    <View>
      <UserModal user={selectedUser} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <FlatList
        scrollEnabled={scroll}
        numColumns={1}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => { item.id }}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  router.push(`/chat/${item.id}`)
                }}
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingVertical: 10,
                }}>
                <View style={{
                  flexDirection: "row",
                }}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true)
                      setSelectedUser(item)
                    }
                    }
                  >
                    <ProfileImage image={item.profileImage} size={48} />
                  </TouchableOpacity>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
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
                    marginRight: 5,
                  }}
                >
                  <Text style={[styles.hour, { color: item.unreadNotifications ? theme.green : theme.grey }]}>{item.hour}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.silenced ? (<MaterialCommunityIcons style={{ marginLeft: 5 }} name="bell-off" size={18} color={theme.grey} />) : ""}
                    {item.pinned ? (<MaterialCommunityIcons style={{ marginLeft: 5 }} name="pin" size={20} color={theme.grey} />) : ""}
                    {item.unreadNotifications ? (<UnreadNotification notificationCount={item.unreadNotifications} />) : ""}
                  </View>
                </View>
              </TouchableOpacity >
            </>
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
