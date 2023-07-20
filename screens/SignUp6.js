import { React, useState } from 'react';
import { StyleSheet, Text, View, Alert } from "react-native";
import { globalColors } from "../colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

export default function SignUp6({ route }) {
    const navigation = useNavigation();
    const {firstname, lastname, dob, pronoun, email } = route.params
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const handleLogin = () => {
      navigation.navigate('Login');
      console.log("Log in button pressed");
    };
    const handleSignUp7 = () => {
        if (password1.trim() !== '' || password2.trim() !== '') {
            if (password1.trim() == password2.trim()){
                navigation.navigate('Feed', { firstname: firstname, lastname: lastname, dob: dob, pronoun: pronoun, email: email});
                console.log("Next button pressed:", firstname, lastname, dob, pronoun, email);
            } else {
                Alert.alert('The passwords do not match');
            }
        } else {
            Alert.alert('Password should not be empty!');
        }
    };
    return(
      <View style={styles.bigbox}>
        <View style={styles.title}>
          <Text style={styles.text1}>Please enter a valid password.</Text>
        </View>
        <View style={styles.placeholder}>
          <Text style={styles.text2}>Password</Text>
          <TextInput
              style={styles.textinput1}
              placeholderTextColor={globalColors.maincolors.black.colour}
              value1={password1}
              onChangeText={setPassword1}
              autoCapitalize='none'
          />
          <Text style={styles.text3}>Password</Text>
          <TextInput
              style={styles.textinput1}
              placeholderTextColor={globalColors.maincolors.black.colour}
              value1={password2}
              onChangeText={setPassword2}
              autoCapitalize='none'
          />
        </View>
        <View>
          <TouchableOpacity onPress={handleSignUp7}>
            <Text style={styles.next}>Next</Text>
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
        //marginTop: 324,
        marginBottom: 0 
      },
    title: {
      alignSelf: 'center',
      marginTop:158,
      width: 261
    },
    text1: {
      fontSize: 28,
      color: globalColors.maincolors.white.colour,
      textAlign: 'center'
    },
    placeholder: {
      marginLeft: 21,
      marginTop: 121
    },
    text2: {
      color: globalColors.maincolors.black.color,
      fontSize: 20,
    },
    text3: {
        color: globalColors.maincolors.black.color,
        fontSize: 20,
        marginTop: 28        
    },
    textinput1: {
      borderColor: globalColors.maincolors.white.colour,
      borderRadius: 8,
      borderWidth: 2,
      marginTop: 13,
      marginRight: 21,
      height: 48,
      paddingLeft: 16,
    },
    next: {
      marginLeft: 21,
      marginRight: 21,
      marginTop: 74,
      height: 50,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 10,
      color: globalColors.orange.background.colour,
      backgroundColor: globalColors.maincolors.white.colour,
      borderColor: globalColors.maincolors.white.colour,
      borderWidth: 2,
      fontSize: 16
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
      //marginLeft: 5,
      fontSize: 14,
    },
  })