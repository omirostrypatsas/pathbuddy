import { React, useState } from 'react';
import { StyleSheet, Text, View, Alert } from "react-native";
import { globalColors } from "../colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'

export default function SignUp4({ route }) {
    const navigation = useNavigation();
    const {firstname, lastname, dob } = route.params
    const [pronoun, setPronoun] = useState('he/him');
    const handleLogin = () => {
      navigation.navigate('Login');
      console.log("Log in button pressed");
    };
    const handleSignUp5 = () => {
        if (pronoun.trim() !== '') {
            navigation.navigate('SignUp5', { firstname: firstname, lastname: lastname,dob: dob, pronoun: pronoun});
            console.log("Next button pressed:", firstname, lastname, dob, pronoun);
        } else {
            Alert.alert('Please enter your pronoun');
        }
    };
    
    const pronounOptions = ['he/him', 'she/her', 'they/them', 'other'];

    return(
      <View style={styles.bigbox}>
        <View style={styles.title}>
          <Text style={styles.text1}>What are your pronouns?</Text>
        </View>
        <View style={styles.placeholder}>
          <Text style={styles.text2}>Pronouns</Text>
            <Picker
                style={styles.picker}
                selectedValue={pronoun}
                onValueChange={(itemValue, itemIndex) => setPronoun(itemValue)}
            >
                {pronounOptions.map((pronounOption) => (
                    <Picker.Item key={pronounOption} label={pronounOption} value={pronounOption} />
                ))}
            </Picker>
        </View>
        <View style={styles.next}>
          <TouchableOpacity  onPress={handleSignUp5}>
            <Text style={styles.nexttext}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupLink}>Log in!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create ({
    bigbox: {
        flex: 1,
        backgroundColor: globalColors.orange.background.colour,
        marginBottom: 0 
      },
    title: {
      alignSelf: 'center',
      marginTop: 108,
      width: 261
    },
    text1: {
      fontSize: 28,
      color: globalColors.maincolors.white.colour,
      textAlign: 'center'
    },
    placeholder: {
      marginLeft: 21,
      marginTop: 142
    },
    text2: {
      color: globalColors.maincolors.black.color,
      fontSize: 20,
    },
    picker: {
      marginTop: 13,
      marginRight: 21,
      height: 48,
      paddingLeft: 16,
    },
    next: {
      marginLeft: 21,
      marginRight: 21,
      marginTop: 216,
      height: 50,
      borderRadius: 10,
      backgroundColor: globalColors.maincolors.white.colour,
      borderColor: globalColors.maincolors.white.colour,
      borderWidth: 2,
      fontSize: 16
    },
    nexttext: {
      textAlign: 'center',
      paddingTop: 13,
      fontSize: 14,
      fontWeight: '600',
      color: globalColors.orange.background.colour
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    signupText: {
      color: 'black',
      fontSize: 14,
    },
    signupLink: {
      color: globalColors.maincolors.white.colour,
      textDecorationLine: 'underline',
      fontSize: 14,
    },
  })