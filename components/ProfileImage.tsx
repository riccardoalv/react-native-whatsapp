import { Image, StyleSheet } from "react-native";

export default function ProfileImage(data: any){
  console.log(data.image)
  return <Image source={data.image} style={styles.profileImage} />
}

const styles = StyleSheet.create({
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    marginRight: 10,
  },
});

