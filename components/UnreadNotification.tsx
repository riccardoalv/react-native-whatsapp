import Colors from "@/constants/Colors";
import { Text, View, useColorScheme } from "react-native";

const UnreadNotification = (data: any) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "dark"]

  return <View
    style={{
      width: 20 + (data.notificationCount > 99 ? 5 : 0),
      height: 20 + (data.notificationCount > 99 ? 5 : 0),
      borderRadius: 11,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.green,
      marginLeft: 5,
      marginTop: 5,
    }}>
    <Text
      style={{
        textAlign: "center",
        color: theme.unreadTextColor,
        fontSize: 12,
      }}>{data.notificationCount > 99 ? "99+" : data.notificationCount}
    </Text>
  </View>
}

export default UnreadNotification
