import { TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Stack, useLocalSearchParams, useNavigation, useRouter } from 'expo-router';

import { myProfile } from '@/customData';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProfileImage } from '@/components/';
import Colors from '@/constants/Colors';


interface FieldProps {
  title: String,
  value: String,
  icon: any,
}

function Field({ title, value, icon }: FieldProps) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "dark"];

  return (
    <TouchableOpacity style={{
      flexDirection: "row",
      alignItems: "center",
      margin: 20,
    }}>
      {icon}
      <View style={{
        flex: 1,
        marginLeft: 20,
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Text style={{
            fontSize: 14,
            color: theme.grey
          }}>{title}</Text>
          <MaterialCommunityIcons name="pencil-outline" size={24} color={theme.green} />
        </View>
        <Text style={{ fontSize: 18, color: theme.text }}>
          {value}
        </Text>
      </View>
    </TouchableOpacity >
  )
}

export default function ProfileScreen() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "dark"];

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center"
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "Profile",
          headerShadowVisible: false,
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 22,
          },
          headerStyle: {
            backgroundColor: theme.background,
          }
        }}
      />
      <TouchableOpacity>
        <ProfileImage image={myProfile.profileImage} size={150} />
      </TouchableOpacity>
      <Field title="Name" value={myProfile.name} icon={
        <MaterialIcons name="person-outline" size={24} color={theme.grey} />
      } />
      <Field title="About" value={myProfile.about} icon={
        <MaterialIcons name="info-outline" size={28} color={theme.grey} />
      } />
      <Field title="Phone" value={myProfile.phone} icon={
        <MaterialIcons name="call" size={24} color={theme.grey} />
      } />
    </View >
  );
}
