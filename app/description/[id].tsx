import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';

import { exampleChat, chatData } from '@/customData';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { ThreeDotsMenu, ProfileImage } from '@/components/';
import { MenuOption } from 'react-native-popup-menu';
import { menuOptions } from '@/styles/threeDots/menuOption';

export default function DescriptionScreen() {
  const defaultNumberPreview = 10;

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "dark"];

  const params = useLocalSearchParams()

  const user = chatData.find(item => item.id == Number(params.id))

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.background
      }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{
              flexDirection: "row",
              alignItems: "center"
            }}>
              <ThreeDotsMenu>
                <MenuOption text="Share" customStyles={menuOptions} />
                <MenuOption text="Edit" customStyles={menuOptions} />
                <MenuOption text="View in address boook" customStyles={menuOptions} />
                <MenuOption text="Verify security code" customStyles={menuOptions} />
              </ThreeDotsMenu>
            </View>
          ),
          headerStyle: {
            backgroundColor: theme.background,
          }
        }}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileImage image={user?.profileImage} size={128} />
        <Text style={{
          fontSize: 26,
        }}>{user?.name}</Text>
        <Text style={{
          fontSize: 18,
          color: theme.grey,
        }}>{user?.number}</Text>
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 20,
        paddingBottom: 20,
        elevation: 2
      }}>
        <TouchableOpacity
          style={[styles.button, { borderColor: theme.button.border }]}
        >
          <MaterialIcons name="call" size={24} color={theme.green} />
          <Text>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { borderColor: theme.button.border }]}
        >
          <MaterialCommunityIcons name="video-outline" size={24} color={theme.green} />
          <Text>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { borderColor: theme.button.border }]}
        >
          <MaterialIcons name="search" style={{ marginHorizontal: 10 }} size={24} color={theme.green} />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      {user?.description ? (
        <View
          style={{
            marginVertical: 10,
            elevation: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              marginHorizontal: 10,
              padding: 20,
            }}
          >{user?.description}</Text>
        </View>
      ) : ""}
      <View>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}>
          <Text>Media, links, and docs</Text>
          <Text>{user?.mediaCounter}</Text>
        </View>
      </View>
      <FlatList
        horizontal={true}
        disableIntervalMomentum={true}
        decelerationRate={0.1}
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        data={user?.media.slice(0, defaultNumberPreview)}
        renderItem={({ item }) => {
          return (
            <Image
              style={{
                borderRadius: 15,
                width: 128,
                height: 128,
                margin: 10,
              }}
              source={item}
            />
          );
        }}
      />
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
