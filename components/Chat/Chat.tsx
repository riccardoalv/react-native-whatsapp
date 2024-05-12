import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UnreadNotification, ProfileImage, UserModal } from "@/components/";
import Colors from '@/constants/Colors';
import sizes from '@/constants/sizes';

interface ChatProps {
  data: any[];
}

export default function Chat({ data }: ChatProps) {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "dark"];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number[]>([]);
  const [modalUser, setModalUser] = useState<any>({});

  const handleLongPress = (itemId: number) => {
    setSelectedUser(prev => [...prev, itemId]);
  };

  const handlePress = (itemId: number) => {
    if (selectedUser.length === 0) {
      router.push(`/chat/${itemId}`);
    } else {
      if (selectedUser.includes(itemId)) {
        setSelectedUser(prev => prev.filter(id => id !== itemId));
      } else {
        setSelectedUser(prev => [...prev, itemId]);
      }
    }
  };

  return (
    <View>
      <UserModal user={modalUser} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <FlatList
        numColumns={1}
        scrollEnabled={false}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onLongPress={() => handleLongPress(item.id)}
            onPress={() => handlePress(item.id)}
            style={[
              styles.container,
              {
                backgroundColor: selectedUser.includes(item.id) ? "rgba(0, 128, 0, 0.2)" : "transparent",
              },
            ]}
          >
            <View style={styles.content}>
              <TouchableOpacity onPress={() => { setModalVisible(true); setModalUser(item); }}>
                <ProfileImage image={item.profileImage} size={48} />
              </TouchableOpacity>
              <View style={styles.userInfo}>
                <Text style={[styles.name, { color: theme.title }]}>{item.name}</Text>
                <Text style={[styles.lastMessage, { color: theme.grey }]} numberOfLines={1} width={230}>{item.lastMessage}</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={[styles.hour, { color: item.unreadNotifications ? theme.green : theme.grey }]}>{item.hour}</Text>
              <View style={styles.icons}>
                {item.silenced && <MaterialCommunityIcons style={styles.icon} name="bell-off" size={18} color={theme.grey} />}
                {item.pinned && <MaterialCommunityIcons style={styles.icon} name="pin" size={20} color={theme.grey} />}
                {item.unreadNotifications ? (<UnreadNotification notificationCount={item.unreadNotifications} />) : ""}
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: sizes.chat.containerHorizontalPadding,
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  content: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  userInfo: {
    marginLeft: 10,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  info: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5,
    backgroundColor: "transparent",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  icon: {
    paddingLeft: 5,
  },
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
