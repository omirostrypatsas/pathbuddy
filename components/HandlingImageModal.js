import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { globalColors } from '../colors';


const HandlingImageModal = () => {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
  
    const pickImage = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access media library is required!');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }};

    const takePicture = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera is required!');
        return;
      }
  
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4,3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage2(result.assets[0].uri);
      }};
  
    return (
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {image2 && <Image source={{ uri: image2 }} style={styles.image} />}
        {(image === null && image2 === null) && (
        <TouchableOpacity style={styles.button1} onPress={pickImage}>
            <View style={[styles.container]}>
                <FontAwesome name="photo" size={24} color="black" style={styles.icon}/>
                <Text style={styles.textbutton}>Photo and Video from Library</Text>
            </View>
        </TouchableOpacity>
        )}
        {(image === null && image2 === null) && (
        <TouchableOpacity style={styles.button2} onPress={takePicture}>
             <View style={styles.container}>
                <Feather name="camera" size={24} color="black" style={styles.icon}/>
                <Text style={styles.textbutton}>Camera</Text>
            </View>
        </TouchableOpacity>
        )}
      </View>
    )};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 10,
    },
    image: {
        position: 'absolute',
    height: 150,
    width: 150,
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    button1: {
      marginTop: 15,
      backgroundColor: globalColors.maincolors.white.colour,
      borderColor: globalColors.orange.background.colour,
      borderWidth: 2,
      height: 60,
    },
    button2: {
      marginTop: 5,
      backgroundColor: globalColors.maincolors.white.colour,
      borderColor: globalColors.orange.background.colour,
      borderWidth: 2,
      height: 60,
    },
    textbutton: {
      marginLeft:5,
      alignSelf: 'center'
    },
    icon: {
      alignSelf: 'center'
    }
  });
  
  export default HandlingImageModal;