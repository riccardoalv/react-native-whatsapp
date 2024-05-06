import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

const colorScheme = useColorScheme()
const theme = Colors[colorScheme ?? "dark"];

export const menuOptions = {
  optionText: {
    color: theme.text,
    fontSize: 16,
    paddingVertical: 10,
  }
}
