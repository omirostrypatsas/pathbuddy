import { React } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { globalColors } from '../colors';
import { Feather } from '@expo/vector-icons';

export default function AboutPathbuddy({ isVisible, toggleModal }) {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: globalColors.orange.background.colour, 
          padding: 20, height: 300, width: 300, borderRadius: 10 }}>
          <TouchableOpacity style={styles.exit} onPress={toggleModal}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
            <Text style={{fontWeight: '700', marginTop: 10}}>About Pathbuddy</Text>
            <Text style={{marginTop:15}}>Pathbuddy is a social network application startup in the field 
            of education technology with the purpose of assisting young 
            people, of age 16-18 years and even younger, to discover 
            and prepare for the careers of the future. At the same time,
            Pathbuddy helps people to socialise by exchanging opinions and
            ideas on the crucial topic of feature career prospects. We value our
            users and we believe that everyone deserves to be part of
            the Pathbuddy community!</Text>
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
    },
    exit: {
      position: 'absolute',
      right: 8,
      marginTop: 8
    }
})