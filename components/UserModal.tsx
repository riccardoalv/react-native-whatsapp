import { Modal, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from 'react';
import { ChatIcon } from '@/assets/images/whatsapp/icons';
import { useRouter } from 'expo-router';

interface UserModalProps {
  user: any
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}


export default function UserModal({ user, modalVisible, setModalVisible }: UserModalProps) {
  const router = useRouter();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPressOut={() => { setModalVisible(false) }}
      >
        <TouchableWithoutFeedback>
          <View>
            <TouchableOpacity>
              <ImageBackground style={{
                width: 280,
                height: 280,
                elevation: 20,
              }}
                source={user.profileImage}>
                <Text
                  style={{
                    fontSize: 18,
                    paddingVertical: 5,
                    paddingLeft: 10,
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {user.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false)
                  router.push(`/chat/${user.id}`)
                }}
              ><ChatIcon width={28} color="green" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="call" size={28} color="green" /></TouchableOpacity>
              <TouchableOpacity><MaterialCommunityIcons name="video-outline" size={28} color="green" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="info-outline" size={28} color="green" /></TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingBottom: 270
  },
});
