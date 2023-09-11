import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { globalColors } from "../colors";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../components/BottomBar';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

export default function Dashboard() {

    const navigation = useNavigation();

    const settingoption1 =({ icon, title, caption}) => (
        <TouchableOpacity style={styles.settingbutton}>
                <Ionicons name={icon} size={24} style={styles.icon}/>
                <View style={styles.buttontext}>
                    <Text style={[fontWeight= 'bold', fontSize=18]} >{title}</Text>
                    <Text>{caption}</Text>
                </View>
                <AntDesign name="right" size={24} color={globalColors.grey.greyarrow.colour} style={styles.arrow}/>
        </TouchableOpacity>
    );

    const settingoption2 =({ icon, title, caption}) => (
        <TouchableOpacity style={styles.settingbutton}>
                <AntDesign name={icon} size={24} style={styles.icon}/>
                <View style={styles.buttontext}>
                    <Text style={[fontWeight= 'bold', fontSize=18]} >{title}</Text>
                    <Text>{caption}</Text>
                </View>
                <AntDesign name="right" size={24} color={globalColors.grey.greyarrow.colour} style={styles.arrow}/>
        </TouchableOpacity>
    );

    return(

        <View style={styles.bigbox}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                    <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <View style={styles.titlebox}>
                <Text style={styles.titletext}>Dashboard</Text>
            </View>
            <View style={styles.settings}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Feather name="settings" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            </View>
            <ScrollView alwaysBounceVertical={true}>
                    {settingoption2({
                        icon: 'search1',
                        title: 'Options Tool',
                        caption: 'Search through a variety of options.'
                    })}
                    {settingoption1({
                        icon: 'pencil',
                        title: 'Skills Tool',
                        caption: 'Improve current skills, explore new skills.'
                    })}
                    {settingoption1({
                        icon: 'business-outline',
                        title: 'Explore Industries',
                        caption: 'Explore the industries of your choice.'
                    })}
                    {settingoption2({
                        icon: 'book',
                        title: 'Explore Careers',
                        caption: 'Find careers that suit you best.'
                    })}
                    <TouchableOpacity style={styles.pathbuddybutton}>
                        <Text style={styles.logouttext}>Pathbuddy+</Text>
                    </TouchableOpacity>
                
            </ScrollView>
            <View style={styles.bottombar}>
                <BottomBar activeRoute={'Dashboard'}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    bigbox: {
        flex: 1,
        backgroundColor: globalColors.maincolors.white.colour,
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
    titlebox: {
        alignItems: 'center',
        marginTop: -25,
        marginBottom: 30
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
    pathbuddybutton: {
        backgroundColor: globalColors.orange.background.colour,
        marginLeft: 23,
        marginRight: 23,
        height: 60,
        borderRadius: 10,
        marginTop: 25
    },
    logouttext: {
        color: globalColors.maincolors.white.colour,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingTop: 17,
        fontSize: 18
    },
    settingbutton: {
        height: 62,
        marginLeft: 21,
        marginRight: 21,
        borderBottomColor: globalColors.grey.outline.colour,
        borderBottomWidth: 2,
        flexDirection: 'row',
        marginTop: 55
    },
    buttontext: {
        marginLeft: 21,
    },
    icon: {
        marginLeft: 8,
        marginTop: 5
    },
    arrow: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 5,
        paddingTop: 10
    },
    settings: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 24,
        marginTop: 45
    },
})