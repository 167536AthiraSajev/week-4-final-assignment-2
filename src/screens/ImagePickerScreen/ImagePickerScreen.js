import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerScreen() {
    const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
      </View>
    );
  }
  return (
    <View  style={styles.container}>
      <Image source={{ uri:'data:image/jpeg;base64,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' }} style={styles.logo} />
      <Text style={styles.instructions}>
        
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Upload Your Image</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'black',
      padding: 20,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 20,
      color: 'pink',
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
  });