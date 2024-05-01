import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import { ChatIcon, CommunitiesIcon, UpdatesIcon } from "../../assets/images/whatsapp/icons"

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "PTSansBold"
        },
        headerShadowVisible: true,
        headerStyle: {
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowColor: 'black',
          elevation: 1,
        },
      }}>
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => <ChatIcon
            width={60}
            height={28}
            style={{
              color: focused ? "#185F3F" : "#14171B",
              borderRadius: 50,
              backgroundColor: focused ? "#D1FDD6" : "white",
            }}
          />,
          headerTitle: "WhatsApp",
          headerRight: () => <View
            style={{
              flexDirection: "row",
            }}>
            <MaterialCommunityIcons style={{marginHorizontal:10}} name="camera-outline" size={24} color="black" />
            <MaterialIcons name="search" style={{marginHorizontal:10}} size={24} color="black" />
            <MaterialCommunityIcons name="dots-vertical" style={{marginHorizontal:10}} size={24} color="black" />
          </View>,
          headerTitleStyle: {
            color: "#1DAA5C",
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
              color: focused ? "#185F3F" : "#14171B",
              borderRadius: 50,
              backgroundColor: focused ? "#D1FDD6" : "white",
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
              color: focused ? "#185F3F" : "#14171B",
              borderRadius: 50,
              backgroundColor: focused ? "#D1FDD6" : "white",
            }}
          />
          ,
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: 'Calls',
        }}
      />
    </Tabs>
  );
}
