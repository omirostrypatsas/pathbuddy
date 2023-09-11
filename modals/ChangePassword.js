import { React, useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Alert } from 'react-native';
import { globalColors } from '../colors';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ChangePassword({ isVisible, toggleModal }) {

    const navigation = useNavigation();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPassword2, setNewPassword2] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showNewPassword2, setShowNewPassword2] = useState(false);

    const toggleModel = () => {
      if (oldPassword.trim() !== '' || newPassword.trim() !== '' || newPassword2.trim() !== '') {
        if (newPassword.trim() == newPassword2.trim()){
            if (newPassword.trim().length >= 8) {
                navigation.navigate('Settings');
                console.log("Next button pressed:");
            } else {
                Alert.alert('Password should be at least 8 characters long');
            }
        } else {
            Alert.alert('The new password do not match with the one re-entered');
        }
    } else {
        Alert.alert('Password should not be empty!');
    }}

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
          <TouchableOpacity style={styles.exit} onPress={toggleModal}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
            <Text style={{fontWeight: '500', marginTop: 10}}>Change password</Text>
            <Text style={{marginTop:15}}>Enter your current password</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'Grammar School...'
                placeholderTextColor={globalColors.grey.greyarrow.colour}
                value1={oldPassword}
                onChangeText={setOldPassword}
                autoCapitalize='none'
                secureTextEntry={!showOldPassword}
            />
            <Text style={{ marginTop: 20 }}>Enter your new password</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'This is my new bio..'
                placeholderTextColor={globalColors.grey.greyarrow.colour}
                value1={newPassword}
                onChangeText={setNewPassword}
                autoCapitalize='none'
                secureTextEntry={!showNewPassword}
            />
            <Text style={{ marginTop: 20 }}>Re-enter your new password</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'This is my new bio..'
                placeholderTextColor={globalColors.grey.greyarrow.colour}
                value1={newPassword2}
                onChangeText={setNewPassword2}
                autoCapitalize='none'
                secureTextEntry={!showNewPassword2}
            />
          <TouchableOpacity style={styles.enterbutton} onPress={toggleModel}>
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
    },
    exit: {
      position: 'absolute',
      right: 8,
      marginTop: 8
    }
})