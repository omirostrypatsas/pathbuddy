import React from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { globalColors } from '../colors';
import { TextInput } from 'react-native-gesture-handler';

export default function EditProfilePic({ isVisible, toggleModal }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: globalColors.orange.background.colour, padding: 20 }}>
            <TextInput
                style={styles.textinput1}
                placeholder = 'Hossein'
                placeholderTextColor={globalColors.maincolors.black.colour}
                value1={firstname}
                onChangeText={setFirstName}
                autoCapitalize='none'
                onEndEditing={validateFirstName}
            />
          <Button title="Enter" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  );
}