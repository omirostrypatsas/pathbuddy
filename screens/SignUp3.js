import { React, useState } from 'react';
import { StyleSheet, Text, View, Alert } from "react-native";
import { globalColors } from "../colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function SignUp3({ route }) {
    const navigation = useNavigation();
    const {firstname, lastname } = route.params
    const [dob, setDob] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShowDatePicker(false);
        setDob(currentDate);
      };
    const handleLogin = () => {
      navigation.navigate('Login');
      console.log("Log in button pressed");
    };
    const handleSignUp4 = () => {
        const currentDate = new Date();
        const twelveYearsAgo = new Date(currentDate.getFullYear() - 12, currentDate.getMonth(), currentDate.getDate());


        if (dob <= twelveYearsAgo) {
            const datePart = dob.toISOString().split('T')[0];;
            navigation.navigate('SignUp4', { firstname: firstname, lastname: lastname, dob: datePart });
            console.log("Next button pressed:", firstname, lastname, dob);
        } else {
            Alert.alert('You must be at least 12 years old to sign up.');
        }
    };
    const openDatePicker = () => {
        setShowDatePicker(true);
      };

    return(
      <View style={styles.bigbox}>
        <View style={styles.title}>
          <Text style={styles.text1}>When's your brithday?</Text>
        </View>
        <View style={styles.placeholder}>
          <Text style={styles.text2}>Date of birth</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={styles.dateText}>
                {dob ? dob.toLocaleDateString('en-GB') : 'Select Date'}
                </Text>
            </TouchableOpacity>
            {showDatePicker && (
          <DateTimePicker
              value={dob || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
          />
          )}
        </View>
        <View>
          <TouchableOpacity onPress={handleSignUp4}>
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

    },
    dateText: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginVertical: 20,
        color: globalColors.maincolors.black.colour,
        borderColor: globalColors.maincolors.white.colour,
        borderRadius: 8,
        borderWidth: 2,
        paddingLeft: 16,
        marginTop: 13,
        marginRight: 21,
        height: 48,
        textAlign: 'center'
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