import { React, useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { globalColors } from '../colors';
import HandlingImageModal from '../components/HandlingImageModal';

export default function EditProfilePic({ isVisible, toggleModal }) {

    const [newimage, setNewImage] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: globalColors.orange.background.colour, padding: 20, 
          height: 300, width: 300, borderRadius: 10 }}>
            <Text>Change profile picture</Text>
            <HandlingImageModal style={styles.handleimage}/>
          <TouchableOpacity style={styles.enterbutton} onPress={toggleModal}>
            <Text style={styles.buttontext}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create ({
    enterbutton: {
        bottom: 5,
        backgroundColor: globalColors.maincolors.white.colour,
        marginTop: 70,
        borderRadius: 10,
        height: 50,
    },
    buttontext: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 16,
        fontWeight: '600',
    },
    handleimage: {
      alignItems: 'center',
  },
})