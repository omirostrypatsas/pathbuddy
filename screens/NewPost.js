import { React, useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Keyboard, Platform, ScrollView } from "react-native";
import { globalColors } from "../colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import HandlingImage from '../components/HandlingImage';

const { width } = Dimensions.get('screen');

export default function NewPost() {

    const navigation = useNavigation();
    const [caption, setCaption] = useState(null);
    const textInputRef = useRef(null);
    useEffect(() => {
        textInputRef.current.focus();

        if (Platform.OS === 'android') {
            const timeoutId = setTimeout(() => {
                Keyboard.dismiss();
                textInputRef.current.focus();
            }, 100);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, []);

    return(
        <View style={styles.bigbox}>
            <ScrollView keyboardShouldPersistTaps="handled">
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <View style={styles.titlebox}>
                <Text style={styles.titletext}>New Post</Text>
            </View>
            <View style={styles.postbutton}>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                <Text style={styles.posttext}>Post</Text>
            </TouchableOpacity>
            </View>
                <TextInput
                    style={styles.textinput}
                    placeholder = 'Tell people what you think...'
                    placeholderTextColor={globalColors.maincolors.black.colour}
                    value1={caption}
                    onChangeText={setCaption}
                    autoCapitalize='none'
                    ref={textInputRef}
                    multiline={true}
                />
            <HandlingImage style={styles.handleimage}/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create ({
    bigbox: {
        flex: 1,
        backgroundColor: globalColors.maincolors.white.colour,
        marginBottom: 0 
    },
    backarrow: {
        left: 20,
        marginTop: 45
    },
    titlebox: {
        flex: 1,
        alignItems: 'center',
        marginTop: -25
    },
    titletext:{
        fontSize: 20,
        color: globalColors.orange.title.colour,
        textAlign: 'center'
    },
    postbutton: {
        position: 'absolute',
        right: 15,
        marginTop: 40,
        height: 35,
        backgroundColor: globalColors.orange.background.colour,
        borderRadius: 10,
        width: 60,
        justifyContent: 'center',
    },
    posttext: {
        textAlign: 'center',
        color: globalColors.maincolors.white.colour,
        fontSize: 16,
      },
    handleimage: {
        alignItems: 'center',
    },
    textinput: {
        marginTop: 20,
        left: 10,
        maxWidth: width - 20,
        marginBottom: 250
    },
})