import { React, useState } from 'react';
import { StyleSheet, Text, View, Alert, KeyboardAvoidingView } from "react-native";
import { globalColors } from "../colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function SignUp6({ route }) {
    const navigation = useNavigation();
    const {firstname, lastname, dob, pronoun, email } = route.params
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleLogin = () => {
      navigation.navigate('Login');
      console.log("Log in button pressed");
    };
    const togglePasswordVisibility1 = () => {
        setShowPassword1((prevState) => !prevState);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2((prevState) => !prevState);
    };
    const handleSignUp7 = () => {
        if (password1.trim() !== '' || password2.trim() !== '') {
            if (password1.trim() == password2.trim()){
                if (password1.trim().length >= 8) {
                    navigation.navigate('Feed', { firstname: firstname, lastname: lastname, dob: dob, pronoun: pronoun, email: email});
                    console.log("Next button pressed:", firstname, lastname, dob, pronoun, email);
                } else {
                    Alert.alert('Password should be at least 8 characters long');
                }
            } else {
                Alert.alert('The passwords do not match');
            }
        } else {
            Alert.alert('Password should not be empty!');
        }
    };
    return(
      <KeyboardAvoidingView style={styles.bigbox} behavior="padding">
        <View style={styles.title}>
          <Text style={styles.text1}>Please enter a valid password.</Text>
        </View>
        <View style={styles.placeholder}>
          <Text style={styles.text2}>Password</Text>
          <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textinput1}
                placeholderTextColor={globalColors.maincolors.black.colour}
                value1={password1}
                onChangeText={setPassword1}
                autoCapitalize='none'
                secureTextEntry={!showPassword1}
            />
            <TouchableOpacity onPress={togglePasswordVisibility1} style={styles.iconContainer}>
                <Ionicons
                name={showPassword1 ? 'eye-off' : 'eye'}
                size={24}
                color={globalColors.maincolors.black.colour}
            />
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.placeholder1}>
          <Text style={styles.text3}>Password</Text>
          <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textinput1}
                placeholderTextColor={globalColors.maincolors.black.colour}
                value1={password2}
                onChangeText={setPassword2}
                autoCapitalize='none'
                secureTextEntry={!showPassword2}
            />
            <TouchableOpacity onPress={togglePasswordVisibility2} style={styles.iconContainer}>
                <Ionicons
                name={showPassword2 ? 'eye-off' : 'eye'}
                size={24}
                color={globalColors.maincolors.black.colour}
                style={styles.ionicons}
                />
          </TouchableOpacity>
          </View>
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
      </KeyboardAvoidingView>
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
      marginTop: 50
    },
    placeholder1: {
        marginLeft: 21,
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
      height: 48,
      paddingLeft: 16,
      flex: 1
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
        marginRight: 21
    },
    iconContainer: {
        //position: 'absolute',
        right: 0,
        marginLeft: 5,
        marginTop: 10
    },
    next: {
      marginLeft: 21,
      marginRight: 21,
      marginTop: 145,
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