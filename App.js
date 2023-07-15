import { NavigationContainer } from '@react-navigation/native';
import { React, useState } from 'react';
import { Text, StyleSheet, View, Dimensions} from "react-native";
import { globalColors } from "./colors";
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const { boxWidth } = Dimensions.get('screen').width;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <NavigationContainer>
          <View style={styles.bigbox}>
            <View style={[styles.loginbox, { width: boxWidth }]}>
              <Text style={styles.text1}>Log In</Text>
              <Text style={styles.text2}>Email</Text>
              <TextInput
                  style={styles.textinput}
                  placeholder = 'You@Hossein Darda.com'
                  placeholderTextColor={globalColors.maincolors.black.colour}
                  value1={email}
                  onChangeText={setEmail}
                  autoCapitalize='none'
              />
              <Text style={styles.text2}>Password</Text>
              <TextInput
                  style={styles.textinput}
                  placeholder = '. . . . . . .'
                  placeholderTextColor={globalColors.maincolors.black.colour}
                  value1={password}
                  onChangeText={setPassword}
                  autoCapitalize='none'
              />
            </View>
          </View>
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
  loginbox:{
      flex: 2,
      backgroundColor: globalColors.maincolors.white.colour,
      marginBottom: 0,
      marginTop: 324,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
  },
  text1: {
    color: '#000000',
    fontSize: 30,
    letterSpacing: 0.8,
    //fontFamily: "Poppins_regular",
    textAlign: 'center',
    marginTop: 15
  },
  text2: {
    color: '#000000',
    fontSize: 16,
    letterSpacing: 0.4,
    //fontFamily: "Poppins_regular",
    marginLeft: 36,
    marginTop: 24
  },
  textinput: {
    borderColor: globalColors.orange.background.colour,
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 14.5,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'left',
    height: 48,
    paddingLeft: 16 
  }
})
