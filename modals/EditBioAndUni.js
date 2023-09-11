import { React, useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { globalColors } from '../colors';
import { TextInput } from 'react-native-gesture-handler';

export default function EditBioAndUni({ isVisible, toggleModal }) {

    const [newUsername, setNewUsername] = useState('');
    const [newSchool, setNewSchool] = useState('');
    const [newBio, setNewBio] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: globalColors.orange.background.colour, padding: 20, 
          height: 450, width: 300, borderRadius: 10 }}>
            <Text style={{ marginTop: 20 }}>Change username</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'mike_123'
                placeholderTextColor={globalColors.grey.border.colour}
                value1={newUsername}
                onChangeText={setNewUsername}
                autoCapitalize='none'
            />
            <Text style={{ marginTop: 20 }}>Change school name</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'Grammar School...'
                placeholderTextColor={globalColors.grey.border.colour}
                value1={newSchool}
                onChangeText={setNewSchool}
                autoCapitalize='none'
            />
            <Text style={{ marginTop: 20 }}>Change your bio</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'This is my new bio..'
                placeholderTextColor={globalColors.grey.border.colour}
                value1={newBio}
                onChangeText={setNewBio}
                autoCapitalize='none'
            />
          <TouchableOpacity style={styles.enterbutton} onPress={toggleModal}>
            <Text style={styles.buttontext}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )};

const styles = StyleSheet.create ({
    textinput1: {
        borderColor: globalColors.maincolors.white.colour,
        borderRadius: 8,
        borderWidth: 2,
        marginTop: 13,
        marginRight: 21,
        height: 48,
        paddingLeft: 16
    },
    enterbutton: {
        bottom: 30,
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
    }
})