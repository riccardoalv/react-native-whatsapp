import React from 'react';
import { TouchableOpacity, useColorScheme } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface HeaderButtonProps {
  onPress: () => void;
  iconName: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ onPress, iconName }) => {
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme ?? "dark"];

  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={24} color={theme.tabBar.icon} />
    </TouchableOpacity>
  );
}

export default HeaderButton;
