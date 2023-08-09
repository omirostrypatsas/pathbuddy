import React, {useState } from 'react';
import { StyleSheet, Text, View, Alert } from "react-native";
import { globalColors } from "../colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

export default function SignUp1() {
  const navigation = useNavigation();
  const [firstname, setFirstName] = useState('');
  const handleLogin = () => {
    navigation.navigate('Login');
    console.log("Log in button pressed");
  };
  const handleSignUp2 = () => {
    if (firstname.trim() !== '') {
      navigation.navigate('SignUp2', { firstname: firstname });
      console.log('Next button pressed:', firstname);
    } else {
      Alert.alert('Please enter your first name');
    }
  };
  const validateFirstName = () => {
    const lettersPattern = /^[A-Za-z]+$/;
    if (!firstname.match(lettersPattern)) {
      Alert.alert('Please enter only letters in the first name field');
    }
  };
  return(
    <View style={styles.bigbox}>
      <View style={styles.title}>
        <Text style={styles.text1}>Please enter your first name.</Text>
      </View>
      <View style={styles.placeholder}>
        <Text style={styles.text2}>First Name</Text>
        <TextInput
            style={styles.textinput1}
            placeholder = 'Hossein'
            placeholderTextColor={globalColors.maincolors.black.colour}
            value1={firstname}
            onChangeText={setFirstName}
            autoCapitalize='none'
            onEndEditing={validateFirstName}
        />
      </View>
      <View>
        <TouchableOpacity onPress={handleSignUp2}>
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
    marginTop: 142
  },
  text2: {
    color: globalColors.maincolors.black.color,
    fontSize: 20,
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
  next: {
    marginLeft: 21,
    marginRight: 21,
    marginTop: 166,
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