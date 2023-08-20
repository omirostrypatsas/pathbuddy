import { React, useState, useEffect } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity} from "react-native";
import { globalColors } from '../colors';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AuthService from "../services/auth.service";
import Api from "../services/api";
import axios from 'axios';

export default function Login() {

    const { boxWidth } = Dimensions.get('screen');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState('');
    const navigation = useNavigation();
    const API_URL = "http://192.168.1.122:8081"

    const handleForgotPassword = () => {
        console.log("Forgot Password");
    };

    const handleLogin = (e) => {
      e.preventDefault();
      console.log('Log in button pressed')
      setMessage("");
      setLoading(true);
  
      if (email !== '' && password !== '' ) {
        console.log(email,password)
        AuthService.login(email, password).then(
          () => {
            navigation.navigate('Feed');
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            setLoading(false);
            setMessage(resMessage);
          }
        );
      } else {
        setLoading(false);
      }
    };

    const handleSignUp1 = () => {
        navigation.navigate('Feed');
        console.log("Sign Up button pressed");
    };

    const fetchApi = async () => {
      console.log('INsert api')
      try {
        const res = await axios.get(API_URL + "/test")
        console.log('api working');
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
      fetchApi();
    }, [])

    return(
        <View style={styles.bigbox}>
            <View style={styles.signupbutton}> 
            <TouchableOpacity onPress={handleSignUp1}>
              <Text style={styles.signupbuttontext}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.title}>Pathbuddy</Text>
            </View>
            <View style={[styles.loginbox, { width: boxWidth }]}>
              <Text style={styles.text1}>Log In</Text>
              <Text style={styles.text2}>Email</Text>
              <TextInput
                  style={styles.textinput1}
                  placeholder = 'You@Hossein Darda.com'
                  placeholderTextColor={globalColors.maincolors.black.colour}
                  value1={email}
                  onChangeText={setEmail}
                  autoCapitalize='none'
                  keyboardType='email-address'
              />
              <Text style={styles.text2}>Password</Text>
              <TextInput
                  style={styles.textinput2}
                  placeholder = '. . . . . . .'
                  placeholderTextColor={globalColors.maincolors.black.colour}
                  value1={password}
                  onChangeText={setPassword}
                  autoCapitalize='none'
                  secureTextEntry={true}
              />
              <View>
                <TouchableOpacity style={styles.button1} onPress={handleForgotPassword}>
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.login}>
                <TouchableOpacity onPress={handleLogin}>
                  <Text style={styles.logintext}>Log in</Text>
                </TouchableOpacity>
                </View>
              </View>
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <TouchableOpacity onPress={handleSignUp1}>
                  <Text style={styles.signupLink}>Sign Up!</Text>
                </TouchableOpacity>
              </View>
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
    signupbutton:{
      backgroundColor: globalColors.maincolors.white.colour,
      marginTop: 35,
      marginRight: 15,
      marginLeft: 300,
      borderRadius: 10,
      height:40,
    },
    signupbuttontext: {
      textAlignVertical: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      paddingTop: 9
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
        marginTop: 144,
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
      borderRadius: 10,
    },
    logintext: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: globalColors.maincolors.white.colour,
      fontSize: 16,
      paddingTop: 14
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