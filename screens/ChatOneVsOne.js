import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from "react-native";
import { globalColors } from "../colors";
import {TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native'
import BottomBar from '../components/BottomBar';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import SearchTab from '../components/SearchComponent';

const { width } = Dimensions.get('screen');

export default function ChatOneVsOne() {

    const navigation = useNavigation();

    const chatWithUser =({ image, firstName, lastName, lastMessage, dateAndTime}) => {
        const fullName = firstName + ' ' + lastName
        if (fullName.length > 26) { 
            newFullName = (fullName).substring(0, 25) + '...';
        } else {
            newFullName = firstName + ' ' + lastName
        }

        if (lastMessage.length > 76) {
            lastMessage = lastMessage.substring(0,75) + '...';
            console.log(lastMessage)
        }

        return(
        <TouchableOpacity style={styles.chatbutton} >
                <Image source={image} style={styles.image}/>
                <View style={styles.buttontext}>
                    <Text style={{fontWeight: '500', fontSize: 15}} >{newFullName}</Text>
                    <Text style={{marginRight: 60, marginTop: 8}}>{lastMessage}</Text>
                </View>
                <AntDesign name="right" size={24} color={globalColors.grey.greyarrow.colour} style={styles.arrow}/>
        </TouchableOpacity>
    );
    }

    return(

        <View style={styles.bigbox}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <View style={styles.titlebox}>
                <Text style={styles.titletext}>Chat</Text>
            </View>
            <View style={styles.settings}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Feather name="settings" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            </View>
            <ScrollView alwaysBounceVertical={true} style={styles.scrollview} contentContainerStyle={styles.scrollviewcontent}>

            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create ({
    bigbox: {
        flex: 1,
        backgroundColor: globalColors.maincolors.white.colour,
        //marginTop: 324,
        marginBottom: 0 
      },
    bottombar: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        height: 70,
        borderTopColor: globalColors.grey.greyborder.colour,
        borderTopWidth: 2,
        width: width
    },
    settings: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 24,
        marginTop: 45
    },
    titlebox: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 45
    },
    titletext:{
        fontSize: 20,
        color: globalColors.orange.title.colour,
        textAlign: 'center'
    },
    backarrow: {
        left: 20,
        marginTop: 45
    },
    image: {
        height: 50,
        width: 50,
        borderColor: globalColors.orange.background.colour,
        borderWidth: 2,
        borderRadius: 50
    },
    search: {
        marginTop: 30.3,
        backgroundColor: globalColors.grey.search.colour,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,
        height: 45,
        paddingLeft: 20.3,
        paddingTop: 8,
    },
    chatbutton: {
        height: 80,
        //marginTop: 50,
        marginLeft: 21,
        marginRight: 21,
        borderBottomColor: globalColors.grey.outline.colour,
        borderBottomWidth: 2,
        flexDirection: 'row',
        marginTop: 36
    },
    buttontext: {
        marginLeft: 21,
        marginRight: 28
    },
    arrow: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 5,
        paddingTop: 10
    },
    scrollview: {
        flex: 1
    },
    scrollviewcontent: {
        paddingBottom: 60
    }
})