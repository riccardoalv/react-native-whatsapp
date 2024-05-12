import { FlatList, Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

import { Chat, HeaderButton, ThreeDotsMenu } from '@/components';
import { useEffect, useState } from 'react';

import { chatData } from "@/customData"
import sizes from '@/constants/sizes';
import { MenuOption } from 'react-native-popup-menu';
import { menuOptions } from '@/styles/threeDots/menuOption';

export default function ChatScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme ?? "dark"];

  const [hasArchivedMessages, sethasArchivedMessages] = useState(true)
  const newArchivedMessagesCount = 2

  const [selectedUser, setSelectedUser] = useState<number[]>([]);


  const [myData, setMyData] = useState(chatData)

  useEffect(() => {
    if (selectedUser.length > 0) {
      navigation.setOptions({
        headerTitle: "",
        headerRight: () =>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
            <HeaderButton iconName="pin-off-outline" onPress={() =>{
                setMyData(myData.map((item) => {
                  if (selectedUser.includes(item.id)) {
                    setSelectedUser([])
                    return { ...item, pinned: !item.pinned };
                  }
                  setSelectedUser([])
                  return item;
                }));
            }}/>
            <HeaderButton iconName="trash-can-outline" onPress={()=>{
                setMyData(myData.filter((item) => !selectedUser.includes(item.id)));
                setSelectedUser([])
            }}/>
            <HeaderButton iconName="bell-off-outline" onPress={() => {
                setMyData(myData.map((item) => {
                  if (selectedUser.includes(item.id)) {
                    setSelectedUser([])
                    return { ...item, silenced: !item.silenced };
                  }
                  setSelectedUser([])
                  return item;
                }));
            }}/>
            <HeaderButton iconName="archive" onPress={() => {}}/>
            <ThreeDotsMenu>
              <MenuOption text="Add chat shortcut" customStyles={menuOptions} />
              <MenuOption text="Add to contacts" customStyles={menuOptions} />
              <MenuOption text="Mark as unread" customStyles={menuOptions} />
              <MenuOption text="Select all" customStyles={menuOptions} />
              <MenuOption text="Lock chat" customStyles={menuOptions} />
            </ThreeDotsMenu>
          </View>,
        headerLeft: () =>
          <View style={{
            flexDirection: "row",
            alignItems: "center"
          }}>
            <TouchableOpacity onPress={() => {
              setSelectedUser([])
            }}
              style={{
                marginLeft: sizes.chat.containerHorizontalPadding + 12,
              }}>
              <MaterialIcons name="arrow-back" size={24} color={theme.tabBar.icon} />
            </TouchableOpacity>
            <Text style={{fontSize: 22, marginLeft: 20,}}>{selectedUser.length}</Text>
          </View>,
      });
    } else {
      navigation.setOptions({
        headerTitle: "WhatsApp",
        headerLeft: "",
        headerRight: () =>
          <View
            style={{
              flexDirection: "row",
            }}>
            <MaterialCommunityIcons style={styles.tabBarIcon} name="camera-outline" size={24} color={theme.header.icon} />
            <MaterialIcons name="search" style={styles.tabBarIcon} size={24} color={theme.header.icon} />
            <ThreeDotsMenu>
              <MenuOption text="New group" customStyles={menuOptions} />
              <MenuOption text="New broadcast" customStyles={menuOptions} />
              <MenuOption text="Linked devices" customStyles={menuOptions} />
              <MenuOption text="Starred Messages" customStyles={menuOptions} />
              <MenuOption
                onSelect={() => {
                  router.push('/settings/')
                }}
                text="Settings"
                customStyles={menuOptions} />
            </ThreeDotsMenu>
          </View>,
        headerTitleStyle: {
          color: theme.header.title,
          fontSize: 25,
        }
      })
    }
  }, [selectedUser]);


  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {hasArchivedMessages ? (
          <TouchableOpacity style={styles.archivedMessages} onPress={() => {
            router.push("/archived/")
          }}>
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
        <Chat data={myData} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  archivedMessages: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 1 + sizes.chat.containerHorizontalPadding,
    paddingHorizontal: 12 + sizes.chat.containerHorizontalPadding,
  },
  tabBarIcon: {
    marginHorizontal: 10,
  }
});
