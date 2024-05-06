import { Text, View } from '@/components/Themed';
import { ReadIcon } from '@/assets/images/whatsapp/icons';
import { Image, StyleSheet, useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';
import { exampleChat } from '@/customData';

interface MessageProps {
  message: any
  index: number
}

export default function Message({ message, index }: MessageProps) {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "dark"];

  let sizes = {}

  message.image ? sizes = Image.resolveAssetSource(message.image) : ""
  console.log(sizes.width)

  return (
    <View
      style={{
        alignItems: message.system ? "center" : message.fromMe ? "flex-end" : "flex-start",
        backgroundColor: "transparent",
        marginBottom: index === exampleChat.length - 1 ? 70 : 8,
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
        {message.image ? (
          <>
            <Image
              style={{
                maxWidth: 256,
                maxHeight: 256,
                borderRadius: 12,
              }}
              source={message.image}
            />
            <View style={[{
              backgroundColor: "transparent",
              position: "absolute",
              justifyContent: "flex-end",
            }, styles.hourAndStatus]}>
              <Text style={{
                fontSize: 13,
                fontWeight: "500",
                color: "white",
                marginLeft: Math.min(sizes.width, 256) - 35,
                marginBottom: 10,
              }}>{message.hour}</Text>
              {message.fromMe ? (<ReadIcon color={theme.messages.readColor} />) : ""}
            </View>
          </>
        ) : (
          <Text style={[{
            color: message.system ? theme.messages.system.textColor : theme.messages.textColor,
            fontSize: message.system ? 14 : 16,
            maxWidth: message.system ? "80%" : "60%",
            textAlign: message.system ? "center" : "left",
          }, styles.text]}>{message.text}
          </Text>
        )}
        {message.system || message.image ? "" : (
          <View style={styles.hourAndStatus}>
            <Text style={{ fontSize: 12, color: theme.lightGrey }}>{message.hour}</Text>
            {message.fromMe ? (<ReadIcon color={theme.messages.readColor} />) : ""}
          </View>
        )}
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  message: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 6,
    paddingHorizontal: 10,
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
    backgroundColor: "transparent",
  }
});
