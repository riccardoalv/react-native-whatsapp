import React from 'react';
import { Tabs, useRouter } from 'expo-router';
import { View, useColorScheme } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Colors from '@/constants/Colors';

import { ChatIcon, CommunitiesIcon, UpdatesIcon } from "../../assets/images/whatsapp/icons"
import { MenuOption } from 'react-native-popup-menu';
import { ThreeDotsMenu } from '@/components/';
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
