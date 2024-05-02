import { Image, ImageSourcePropType, StyleSheet } from "react-native";

interface ProfileImageProps {
  image: ImageSourcePropType;
  size: number;
}

export default function ProfileImage({ image, size }: ProfileImageProps) {
  const styles = StyleSheet.create({
    profileImage: {
      width: size,
      height: size,
      borderRadius: 48 * size / 2,
      marginRight: 10,
    },
  });

  return <Image source={image} style={styles.profileImage} />
}


