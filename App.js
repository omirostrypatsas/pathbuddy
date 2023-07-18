import { NavigationContainer } from '@react-navigation/native';
import { React, useState } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity} from "react-native";
import { globalColors } from "./colors";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import  SignUp1  from './screens/SignUp1.js';
import Login from './screens/Login';
import AppNavigator from './navigation/AppNavigator';

export default function App() {


  return (
    <NavigationContainer>
          <AppNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
  bigbox: {
      flex: 1,
      backgroundColor: globalColors.orange.background.colour,
      //marginTop: 324,
      marginBottom: 0 
    },
  signupbutton:{
    backgroundColor: globalColors.maincolors.white.colour,
    marginTop: 25,
    marginRight: 15,
    marginLeft: 300,
    borderRadius: 10,
    height:40,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  title: {
    marginTop: 60,
    color: globalColors.maincolors.white.colour,
    fontSize: 43,
    textAlign: 'center'
  },
  loginbox:{
      flex: 2,
      backgroundColor: globalColors.maincolors.white.colour,
      marginBottom: 0,
      marginTop: 154,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
  },
  text1: {
    color: '#000000',
    fontSize: 30,
    letterSpacing: 0.8,
    //fontFamily: "Poppins_regular",
    textAlign: 'center',
    marginTop: 15,
  },
  text2: {
    color: '#000000',
    fontSize: 16,
    letterSpacing: 0.4,
    //fontFamily: "Poppins_regular",
    marginLeft: 36,
    marginTop: 24,
    fontWeight: 'bold',
  },
  textinput1: {
    borderColor: globalColors.orange.background.colour,
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 14.5,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'left',
    height: 48,
    paddingLeft: 16 
  },
  textinput2: {
    borderColor: globalColors.orange.background.colour,
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 14.5,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'left',
    height: 48,
    paddingLeft: 16,
    paddingBottom: 8
  },
  button1:{
    marginRight:35
  },
  forgotPassword: {
    color: globalColors.maincolors.black.colour,
    textDecorationLine: 'underline',
    marginTop: 5,
    marginLeft: 35,
  },
  login: {
    backgroundColor: globalColors.orange.background.colour,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 39,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    color: globalColors.maincolors.white.colour,
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
    color: globalColors.orange.background.colour,
    textDecorationLine: 'underline',
    //marginLeft: 5,
    fontSize: 14,
  },
})
