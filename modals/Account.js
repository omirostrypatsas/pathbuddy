import { React, useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Switch } from 'react-native';
import { globalColors } from '../colors';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Account({ isVisible, toggleModal }) {

    const navigation = useNavigation();
    const [switchPrivacy, setSwitchPrivacy] = useState('');
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');

    const handleSwitchPrivacy = (value) => {
        setSwitchPrivacy(value);
    };

    const handleNewFirstName = (value) => {
        setNewFirstName(value);
    };

    const handleNewLastName = (value) => {
        setNewLastName(value);
    };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: globalColors.orange.background.colour, padding: 20, 
          height: 420, width: 300, borderRadius: 10 }}>
            <Text style={{fontWeight: '700', marginTop: 10}}>Manage your account</Text>
            <View style={{ flexDirection: 'row', marginTop:20 }}>
                <Text style={{ marginRight: 70, paddingTop: 10 }}>Change to private mode</Text>
                <Switch
                    disabled={false}
                    value={switchPrivacy}
                    onValueChange={handleSwitchPrivacy}
                />
            </View>
            <Text style={{ marginTop: 20 }}>Change first name</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'George'
                placeholderTextColor={globalColors.grey.greyarrow.colour}
                value1={newFirstName}
                onChangeText={setNewFirstName}
                autoCapitalize='none'
            />
            <Text style={{ marginTop: 20 }}>Change last name</Text>
            <TextInput
                style={styles.textinput1}
                placeholder = 'Michael'
                placeholderTextColor={globalColors.grey.greyarrow.colour}
                value1={newLastName}
                onChangeText={setNewLastName}
                autoCapitalize='none'
            />
          <TouchableOpacity style={styles.enterbutton} onPress={toggleModal}>
            <Text style={styles.buttontext}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create ({
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
    },
    textinput1: {
        borderColor: globalColors.maincolors.white.colour,
        borderRadius: 8,
        borderWidth: 2,
        marginTop: 13,
        marginRight: 21,
        height: 48,
        paddingLeft: 16
    },
})