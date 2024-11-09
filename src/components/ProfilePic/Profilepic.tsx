import { View, Text, Image, StyleSheet } from 'react-native';



export default function Profile() {
  return (
    <View style={s.imageContainer}>
      <Image
        source={require('../../assets/images/image.png')}
        style={s.image} />
    </View>
  );
}



const s = StyleSheet.create({
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: 243,
    height: 180,
    objectFit: 'cover'
  },
})
