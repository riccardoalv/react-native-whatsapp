import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Colors from '@/constants/Colors';

import { ChatIcon, CommunitiesIcon, UpdatesIcon } from "../../assets/images/whatsapp/icons"
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import ThreeDotsMenu from '@/components/ThreeDotsMenu';
import { menuOptions } from '@/styles/threeDots/menuOption';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme ?? "dark"]

  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tabBar.activeTintColor,
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          backgroundColor: theme.background
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        headerShadowVisible: true,
        headerStyle: {
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowColor: theme.shadowColor,
          elevation: 1,
          backgroundColor: theme.background
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => <ChatIcon
            width={60}
            height={28}
            style={{
              color: focused ? theme.tabBar.iconFocused : theme.tabBar.icon,
              backgroundColor: focused ? theme.tabBar.backgroundFocused : theme.tabBar.background,
              borderRadius: 50,
            }}
          />,
          headerTitle: "WhatsApp",
          headerRight: () =>
            <View
              style={{
                flexDirection: "row",
              }}>
              <MaterialCommunityIcons style={{ marginHorizontal: 10 }} name="camera-outline" size={24} color={theme.header.icon} />
              <MaterialIcons name="search" style={{ marginHorizontal: 10 }} size={24} color={theme.header.icon} />
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
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: 'Updates',
          tabBarIcon: ({ focused }) => <UpdatesIcon
            width={60}
            height={28}
            style={{
              color: focused ? theme.tabBar.iconFocused : theme.tabBar.icon,
              backgroundColor: focused ? theme.tabBar.backgroundFocused : theme.tabBar.background,
              borderRadius: 50,
              padding: 2
            }}
          />,
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: 'Communities',
          tabBarIcon: ({ focused }) => <CommunitiesIcon
            width={60}
            height={28}
            style={{
              color: focused ? theme.tabBar.iconFocused : theme.tabBar.icon,
              backgroundColor: focused ? theme.tabBar.backgroundFocused : theme.tabBar.background,
              borderRadius: 50,
              padding: 2
            }}
          />
          ,
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: 'Calls',
          tabBarIcon: ({ focused }) => <MaterialIcons
            name="call"
            size={24}
            style={{
              color: focused ? theme.tabBar.iconFocused : theme.tabBar.icon,
              backgroundColor: focused ? theme.tabBar.backgroundFocused : theme.tabBar.background,
              borderRadius: 50,
              paddingHorizontal: 20,
              paddingVertical: 2,
            }} />
        }}
      />
    </Tabs >
  );
}
