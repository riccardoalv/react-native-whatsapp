import React from "react";
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

interface ThreeDotsMenuProps {
  children: React.ReactNode
}

const ThreeDotsMenu: React.FC<ThreeDotsMenuProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "dark"];

  return (
    <Menu>
      <MenuTrigger>
        <MaterialCommunityIcons name="dots-vertical" style={{ marginHorizontal: 10 }} size={24} color={theme.header.icon} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            marginTop: 26,
            backgroundColor: theme.popupMenu.background,
            paddingHorizontal: 19,
            elevation: 5,
            borderRadius: 10,
          }
        }}
      >
        {children}
      </MenuOptions>
    </Menu >
  );
}

export default ThreeDotsMenu;
