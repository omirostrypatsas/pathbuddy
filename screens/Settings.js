import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { globalColors } from "../colors";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native'
import BottomBar from '../components/BottomBar';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import DeleteAccount from '../modals/DeleteAccount';
import LogoutModal from '../modals/LogoutModal';
import ChangePassword from '../modals/ChangePassword';
import AboutPathbuddy from '../modals/AboutPathbuddy';
import Notifications from '../modals/Notifications';
import Account from '../modals/Account';


const { width } = Dimensions.get('screen');

export default function Settings() {

    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);
    const [isModalVisible4, setModalVisible4] = useState(false);
    const [isModalVisible5, setModalVisible5] = useState(false);
    const [isModalVisible6, setModalVisible6] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    }

    const toggleModal3 = () => {
        setModalVisible3(!isModalVisible3);
    }

    const toggleModal4 = () => {
        setModalVisible4(!isModalVisible4);
    }

    const toggleModal5 = () => {
        setModalVisible5(!isModalVisible5);
    }

    const toggleModal6 = () => {
        setModalVisible6(!isModalVisible6);
    }

    const handleHelp = () => {
        navigation.navigate('HelpCenter')
    }

    const settingoption1 =({ icon, title, caption, onpress}) => (
        <TouchableOpacity style={styles.settingbutton} onPress={onpress}>
                <Ionicons name={icon} size={24} style={styles.icon}/>
                <View style={styles.buttontext}>
                    <Text style={[fontWeight= 'bold', fontSize=18]} >{title}</Text>
                    <Text>{caption}</Text>
                </View>
                <AntDesign name="right" size={24} color={globalColors.grey.greyarrow.colour} style={styles.arrow}/>
        </TouchableOpacity>
    );

    const settingoption2 =({ icon, title, caption, onpress}) => (
        <TouchableOpacity style={styles.settingbutton} onPress={onpress}>
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
                <Text style={styles.titletext}>Settings</Text>
            </View>
            <ScrollView alwaysBounceVertical={true}>
                    {settingoption1({
                        icon: 'person-outline',
                        title: 'Account',
                        caption: 'Privacy, Change Name',
                        onpress: toggleModal6
                    })}
                    {settingoption2({
                        icon: 'lock',
                        title: 'Security',
                        caption: 'Change password',
                        onpress: toggleModal3
                    })}
                    {settingoption1({
                        icon: 'notifications-outline',
                        title: 'Notifications',
                        caption: 'Message, post, buddy up',
                        onpress: toggleModal5
                    })}
                    {settingoption2({
                        icon: 'questioncircleo',
                        title: 'Help',
                        caption: 'Help center- FAQ and contact us',
                        onpress: handleHelp
                    })}
                    {settingoption1({
                        icon: 'people-outline',
                        title: 'About Pathbuddy',
                        caption: 'Information about Pathbuddy',
                        onpress: toggleModal4
                    })}
                    {settingoption2({
                        icon: 'deleteuser',
                        title: 'Delect Account',
                        caption: 'Permanently delete your account',
                        onpress: toggleModal
                    })}
                    <Account isVisible={isModalVisible6} toggleModal={toggleModal6}/>
                    <ChangePassword isVisible={isModalVisible3} toggleModal={toggleModal3}/>
                    <Notifications isVisible={isModalVisible5} toggleModal={toggleModal5}/>
                    <AboutPathbuddy isVisible={isModalVisible4} toggleModal={toggleModal4}/>
                    <DeleteAccount isVisible={isModalVisible} toggleModal={toggleModal} />
                    <TouchableOpacity onPress={toggleModal2} style={styles.logoutbutton}>
                    <LogoutModal isVisible={isModalVisible2} toggleModal={toggleModal2}/>
                        <Text style={styles.logouttext}>Log out</Text>
                    </TouchableOpacity>
                
            </ScrollView>
            <View style={styles.bottombar}>
                {isModalVisible3 ? null : <BottomBar />}
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    bigbox: {
        flex: 1,
        backgroundColor: globalColors.maincolors.white.colour,
        //marginTop: 324,
        marginBottom: 0, 
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
        flex: 1,
        alignItems: 'center',
        marginTop: -30
    },
    titletext:{
        fontSize: 20,
        color: globalColors.orange.title.colour,
        textAlign: 'center'
    },
    backarrow: {
        left: 20,
        marginTop: 35
    },
    logoutbutton: {
        backgroundColor: globalColors.orange.background.colour,
        marginLeft: 23,
        marginRight: 23,
        height: 60,
        borderRadius: 10,
        marginTop: 36
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
        //marginTop: 50,
        marginLeft: 21,
        marginRight: 21,
        borderBottomColor: globalColors.grey.outline.colour,
        borderBottomWidth: 2,
        flexDirection: 'row',
        marginTop: 16
    },
    buttontext: {
        marginLeft: 21,
    },
    icon: {
        marginLeft: 8,
        marginTop: 5
        //verticalAlign: 'center'
    },
    arrow: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 5,
        paddingTop: 10
    }
})