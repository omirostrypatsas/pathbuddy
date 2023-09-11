import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { globalColors } from '../colors';

const { width } = Dimensions.get('screen');

const HandlingImage = () => {
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
      flexDirection: 'row',
      padding: 10,
    },
    image: {
        height: width,
        width: width,
      resizeMode: 'contain',
      marginTop: -200,
      marginLeft: -10
    },
    button1: {
      marginTop: 50,
      marginLeft: 15,
      backgroundColor: globalColors.orange.background.colour,
      borderColor: globalColors.orange.background.colour,
      borderWidth: 2,
      height: 60,
    },
    button2: {
      marginTop: 50,
      marginLeft: 15,
      right: 10,
      backgroundColor: globalColors.orange.background.colour,
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
  
export default HandlingImage;
  