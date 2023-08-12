import { React, useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import { globalColors } from '../colors';
import { TextInput } from 'react-native-gesture-handler';

export default function EditBioAndUni({ isVisible, toggleModal }) {

    const [newuni, setNewUni] = useState('');
    const [newbio, setNewBio] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: globalColors.orange.background.colour, padding: 20, height: 300, width: 300, borderRadius: 10 }}>
            <Text>Change university name</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'Grammar School...'
                placeholderTextColor={globalColors.grey.greyarrow.colour}
                value1={newuni}
                onChangeText={setNewUni}
                autoCapitalize='none'
            />
            <Text style={{ marginTop: 20 }}>Change your bio</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'This is my new bio..'
                placeholderTextColor={globalColors.grey.greyarrow.colour}
                value1={newuni}
                onChangeText={setNewBio}
                autoCapitalize='none'
            />
          <TouchableOpacity style={styles.enterbutton} onPress={toggleModal}>
            <Text style={styles.buttontext}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

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