import { StyleSheet, TouchableOpacity, TextInput, useColorScheme } from 'react-native';
import { View } from '@/components/Themed';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useRef, useState } from 'react';
import PaperPlaneIcon from '@/assets/images/whatsapp/icons/PaperPlane';

export default function TextInputBar() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "dark"]

  const [value, setValue] = useState('')

  return <View style={styles.container}>
    <View
      style={styles.textInput} >
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          alignItems: "center"
        }}>
        <MaterialCommunityIcons name="emoticon-happy-outline" size={24} color={theme.lightGrey} />
        <TextInput style={{
          flex: 1,
          marginLeft: 5,
          fontSize: 17,
          fontWeight: "400",
          color: theme.text,
        }} placeholder="Message"
          placeholderTextColor={theme.lightGrey}
          onChangeText={(text) => {
            setValue(text)
          }}
          value={value}
        />
      </View>
      <View style={{
        flexDirection: "row",
      }}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="paperclip"
            size={24}
            color={theme.lightGrey}
            style={{
              paddingHorizontal: 10,
            }}
          />
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="camera-outline"
          size={24}
          color={theme.lightGrey}
          style={{
            paddingHorizontal: 10,
          }}
        />
      </View>
    </View>
    <View style={{
      backgroundColor: theme.green,
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 4,
      elevation: 2,
      flex: 1,
    }}>
      {String(value).trim() !== '' ? (
        <PaperPlaneIcon color={theme.sendIconColor} />
      ) : (
        <MaterialIcons name="mic" size={24} color={theme.sendIconColor} />
      )}
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "transparent",
    elevation: 5,
  },
  textInput: {
    flex: 6,
    flexDirection: "row",
    elevation: 1,
    padding: 8,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-between"
  },
});
