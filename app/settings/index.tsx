import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';

import { myProfile } from '@/customData';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProfileImage } from '@/components/';
import Colors from '@/constants/Colors';

interface FieldProps {
  title: String,
  description: String,
  icon: any,
}

function Field({ title, description, icon }: FieldProps) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "dark"];

  return (
    <TouchableOpacity style={{
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
      backgroundColor: theme.background,
      justifyContent: "center",
      marginLeft: 10,
    }}>
      {icon}
      <View style={{
        flex: 1,
        marginLeft: 20,
      }}>
        <Text style={{
          fontSize: 16,
          color: theme.text
        }}>{title}</Text>
        {description ?
          <Text style={{ fontSize: 16, color: theme.grey }}>
            {description}
          </Text> : ""
        }
      </View>
    </TouchableOpacity >
  )
}

export default function SettingsScreen() {
  const router = useRouter();

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "dark"];

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: "column",
        backgroundColor: theme.background,
      }}>
      <Stack.Screen
        options={{
          headerTitle: "Settings",
          headerShadowVisible: false,
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 22,
          },
          headerRight: () => (
            <View style={{
              flexDirection: "row",
              alignItems: "center"
            }}>
              <MaterialIcons name="search" size={24} color={theme.header.icon} />
            </View>
          ),
          headerStyle: {
            backgroundColor: theme.background,
          }
        }}
      />
      <TouchableOpacity
        onPress={() => {
          router.push("/settings/profile")
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 30,
        }}>
        <ProfileImage image={myProfile.profileImage} size={82} />
        <Text style={{
          fontSize: 20,
          marginLeft: 10,
        }}>{myProfile.name}</Text>
      </TouchableOpacity>
      <Field title="Account" description="Security notifications, change number" icon={
        <MaterialCommunityIcons name="key-outline" size={26} color={theme.grey} />
      } />
      <Field title="Privacy" description="Block contacts, disappearing messages" icon={
        <MaterialIcons name="lock-outline" size={26} color={theme.grey} />
      } />
      <Field title="Chats" description="Theme, wallapapers, chat history" icon={
        <MaterialIcons name="chat-bubble-outline" size={26} color={theme.grey} />
      } />
      <Field title="Notifications" description="Message, group & call tones" icon={
        <MaterialCommunityIcons name="bell-outline" size={26} color={theme.grey} />
      } />
      <Field title="Storage and data" description="Network usage, auto-download" icon={
        <MaterialCommunityIcons name="chart-donut" size={26} color={theme.grey} />
      } />
      <Field title="App language" description="English (device's language)" icon={
        <MaterialCommunityIcons name="earth" size={26} color={theme.grey} />
      } />
      <Field title="Help" description="Help center, contact us, privacy policy" icon={
        <MaterialIcons name="help-outline" size={26} color={theme.grey} />
      } />
      <Field title="Invite a friend" description="" icon={
        <MaterialIcons name="people-outline" size={26} color={theme.grey} />
      } />
      <Field title="App updates" description="" icon={
        <MaterialIcons name="smartphone" size={26} color={theme.grey} />
      } />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
});
