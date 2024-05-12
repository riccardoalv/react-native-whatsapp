import { ScrollView, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { View } from '@/components/Themed';
import { Stack, useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

import { Chat, ThreeDotsMenu } from '@/components';
import { useState } from 'react';

import { archivedMessages } from "@/customData"
import sizes from '@/constants/sizes';
import { MenuOption } from 'react-native-popup-menu';
import { menuOptions } from '@/styles/threeDots/menuOption';

export default function ArchivedScreen() {
  const router = useRouter();

  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme ?? "dark"];


  const [selectedUser, setSelectedUser] = useState<number[]>([]);


  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Archived",
          headerShadowVisible: false,
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 22,
          },
          headerRight: () => (
            <ThreeDotsMenu>
              <MenuOption text="Archive settings" customStyles={menuOptions}/>
            </ThreeDotsMenu>
          ),
          headerStyle: {
            backgroundColor: theme.background,
          }
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Chat data={archivedMessages} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
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
