import { StyleSheet, TextInput, useColorScheme } from 'react-native';
import { View } from '@/components/Themed';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function TextInputBar() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "dark"]

  return <View style={styles.container}>
    <View
      style={styles.textInput} >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
        <MaterialCommunityIcons name="emoticon-happy-outline" size={24} color={theme.lightGrey} />
        <TextInput style={{
          marginLeft: 5,
          width: 200,
          fontSize: 17,
          fontWeight: "400",
          color: theme.text,
        }} placeholder="Message"
          placeholderTextColor={theme.lightGrey}
        />
      </View>
      <View style={{
        flexDirection: "row",
      }}>
        <MaterialCommunityIcons name="paperclip" size={24} color={theme.lightGrey} />
        <MaterialCommunityIcons style={{ marginLeft: 20 }} name="camera-outline" size={24} color={theme.lightGrey} />
      </View>
    </View>
    <View style={{ backgroundColor: theme.green, width: 50, height: 50, borderRadius: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 4, elevation: 2 }}>
      <MaterialIcons name="mic" size={24} color="white" />
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "transparent"
  },
  textInput: {
    flexDirection: "row",
    elevation: 1,
    padding: 8,
    borderRadius: 40,
    alignItems: "center",
  },
});
