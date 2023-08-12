import { React, useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import { globalColors } from '../colors';
import { TextInput } from 'react-native-gesture-handler';

export default function DeleteAccount({ isVisible, toggleModal }) {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: globalColors.orange.background.colour, padding: 20, height: 300, width: 300, borderRadius: 10 }}>
            <TouchableOpacity style= {styles.cancel} onPress={toggleModal}>
                <Text>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.textbox}>
                <Text style={styles.text}>We are sorry to see you go!</Text>
            </View>
            <View style={{marginTop: 10, marginBottom: 5}}>
                <Text>Just so you know, by deleting your account, all your data will be permanently deleted and you will not be able to retrieve it even if you sign up again with the same email.</Text>
            </View>
          <TouchableOpacity style={styles.enterbutton}>
            <Text style={styles.buttontext}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create ({
    cancel: {
        alignSelf: 'flex-end',
        right: 5,
        height: 20,
    },
    enterbutton: {
        bottom: 30,
        backgroundColor: globalColors.maincolors.red.colour,
        marginTop: 70,
        borderRadius: 10,
        height: 50,
    },
    buttontext: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 16,
        fontWeight: '600',
        color: globalColors.maincolors.white.colour,
    },
    textbox: {
        marginTop: 25
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    },
})