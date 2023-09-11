import { React, useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Switch } from 'react-native';
import { globalColors } from '../colors';

export default function Notifications({ isVisible, toggleModal }) {

    const [switchMessage, setSwitchMessage] = useState('');
    const [switchPost, setSwitchPost] = useState('');
    const [switchBuddyUp, setSwitchBuddyUp] = useState('');

    const handleSwitchMessage = (value) => {
        setSwitchMessage(value);
    };

    const handleSwitchPost = (value) => {
        setSwitchPost(value);
    };

    const handleSwitchBuddyUp = (value) => {
        setSwitchBuddyUp(value);
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
          height: 350, width: 300, borderRadius: 10 }}>
            <Text style={{fontWeight: '700', marginTop: 10}}>Manage Notifications</Text>
            <View style={{ flexDirection: 'row', marginTop:30 }}>
                <Text style={{ marginRight: 70, paddingTop: 8 }}>Message notifications</Text>
                <Switch
                    value={switchMessage}
                    onValueChange={handleSwitchMessage}
                />
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{ marginRight: 100, paddingTop: 8 }}>Post notifications</Text>
                <Switch
                    value={switchPost}
                    onValueChange={handleSwitchPost}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ marginRight: 67, paddingTop: 10 }}>Buddy up notifications</Text>
                <Switch
                    value={switchBuddyUp}
                    onValueChange={handleSwitchBuddyUp}
                />
            </View>
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
})