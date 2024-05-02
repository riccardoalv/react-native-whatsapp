import { Text, View } from '@/components/Themed';
import { ReadIcon } from '@/assets/images/whatsapp/icons';
import { StyleSheet, useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

interface MessageProps {
  message: any
}

export default function Message({ message }: MessageProps) {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "dark"];

  return (
    <View
      style={{
        alignItems: message.system ? "center" : message.fromMe ? "flex-end" : "flex-start",
        backgroundColor: "transparent",
        marginBottom: 8,
      }}
    >
      <View
        style={[{
          borderRadius: message.system ? 10 : 12,
          borderTopLeftRadius: message.system ? 10 : message.fromMe ? 12 : 0,
          borderTopRightRadius: message.system ? 10 : message.fromMe ? 0 : 12,
          backgroundColor: message.system ? theme.messages.system.background : message.fromMe ? theme.messages.fromMe.background : theme.messages.background,
        }, styles.message]}
      >
        <Text style={[{
          color: message.system ? theme.messages.system.textColor : theme.messages.textColor,
          fontSize: message.system ? 14 : 16,
          maxWidth: message.system ? "80%" : "60%",
          textAlign: message.system ? "center" : "left",
        }, styles.text]}>{message.text}</Text>
        {message.system ? "" : (
          <View style={[{
            backgroundColor: message.system ? theme.messages.system.background : message.fromMe ? theme.messages.fromMe.background : theme.messages.background,
          }, styles.hourAndStatus]}>
            <Text style={{ fontSize: 12, color: theme.lightGrey }}>{message.hour}</Text>
            {message.fromMe ? (<ReadIcon color={theme.messages.readColor} />) : ""}
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 6,
    elevation: 1,
  },
  text: {
    flexWrap: "wrap",
    marginBottom: 3,
  },
  hourAndStatus: {
    marginLeft: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  }
});
