import { FlatList, Image, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';

import { exampleChat, chatData } from '@/customData';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileImage from '@/components/ProfileImage';
import Message from '@/components/Message';
import TextInputBar from '@/components/TextInputBar';
import Colors from '@/constants/Colors';
import { useRef, useState } from 'react';

export default function ChatScreen() {

  const router = useRouter();

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "dark"];

  const navigation = useNavigation();

  const params = useLocalSearchParams()

  const chat = chatData.find(item => item.id == Number(params.id))

  const [data, setData] = useState(exampleChat)

  const flatListRef = useRef(null);

  const background = colorScheme == "dark" ?
    require("../../assets/images/whatsapp/background/background-dark.jpg") :
    require("../../assets/images/whatsapp/background/background-light.png")

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerLeft: () => (
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: "100%",
            }}>
              <TouchableOpacity onPress={() => {
                navigation.goBack()
              }} style={{ paddingRight: 12 }}>

                <MaterialIcons name="arrow-back" size={24} color={theme.tabBar.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push(`/description/${params.id}`)
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "50%",
                }}>
                <ProfileImage image={chat?.profileImage} size={38} />
                <Text style={{
                  fontSize: 18,
                }}>{chat?.name}</Text>
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{
              flexDirection: "row",
              alignItems: "center"
            }}>
              <TouchableOpacity><MaterialCommunityIcons style={{ paddingRight: 20 }} name="video-outline" size={24} color={theme.tabBar.icon} /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons style={{ paddingRight: 20 }} name="call" size={24} color={theme.tabBar.icon} /></TouchableOpacity>
              <TouchableOpacity><MaterialCommunityIcons name="dots-vertical" size={24} color={theme.tabBar.icon} /></TouchableOpacity>
            </View>
          )
        }}
      />
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
        source={background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={{
          flex: 1,
        }}>
          <FlatList
            ref={flatListRef}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() => flatListRef.current.scrollToEnd() }
            numColumns={1}
            data={data}
            keyExtractor={(item) => { item.id }}
            renderItem={({ item, index }) => {
              return (
                <Message data={data} message={item} index={index}/>
              );
            }}
            contentContainerStyle={{
              marginTop: 40,
            }}
          />
        </KeyboardAvoidingView>
        <TextInputBar data={data} setData={setData}/>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
