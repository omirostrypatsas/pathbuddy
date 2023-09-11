import { React } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { globalColors } from '../colors';
import { useNavigation } from '@react-navigation/native';

export default function LogoutModal({ isVisible, toggleModal }) {

    const navigation = useNavigation();

    const logOut = () => {
        navigation.navigate('Login')
    }    

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: globalColors.orange.background.colour, 
            height: 100, paddingTop:20, width: 230, borderRadius: 10 }}>
            <Text style={styles.title}>Log out of your account?</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style= {styles.cancel} onPress={toggleModal}>
                    <Text style={styles.canceltext}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutbutton} onPress={logOut}>
                    <Text style={styles.buttontext}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create ({
    cancel: {
        height: 35,
        backgroundColor: globalColors.maincolors.white.colour,
        width: 115,
        borderWidth: 1,
        borderRightColor: globalColors.grey.greyborder.colour,
        borderBottomColor: globalColors.grey.greyborder.colour,
        borderBottomLeftRadius: 10,
        borderColor: globalColors.maincolors.white.colour
    },
    logoutbutton: {
        backgroundColor: globalColors.maincolors.white.colour,
        height: 35,
        width: 115,
        borderWidth: 1,
        borderLeftColor: globalColors.grey.greyborder.colour,
        borderBottomColor: globalColors.grey.greyborder.colour,
        borderBottomRightRadius: 10,
        borderColor: globalColors.maincolors.white.colour
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: globalColors.maincolors.black.colour,
        textAlign: 'center'
    },
    canceltext: {
        textAlign: 'center',
        paddingTop: 7,
        fontSize: 14,
        fontWeight: '300',
        color: globalColors.maincolors.black.colour,
    },
    buttontext: {
        textAlign: 'center',
        paddingTop: 7,
        fontSize: 14,
        fontWeight: '300',
        color: globalColors.maincolors.red.colour,
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 26,
        color: globalColors.maincolors.white.colour,
        alignContent: 'center'
    },
})