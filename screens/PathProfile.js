import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { globalColors } from "../colors";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../components/BottomBar';
import { Feather, Ionicons, Entypo } from '@expo/vector-icons';
import EditBioAndUni from '../modals/EditBioAndUni';
import EditProfilePic from '../modals/EditProfilePic';
import Post from '../components/ExistingPost';

const { width } = Dimensions.get('screen');

export default function PathProfile() {

    const navigation = useNavigation();
    let firstname = user.firstname
    let lastname = user.lastname
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };
    const handleBuddies = () => {
        navigation.navigate('PathsBuddiesList', { selected: 'Buddies', username: user.username} )
      };
    const handlePaths = () => {
        navigation.navigate('PathsBuddiesList', { selected: 'Paths', username: user.username })
    };


    return(

        <View style={styles.bigbox}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <View style={styles.titlebox}>
                <Text style={styles.titletext}>{firstname +' '+ lastname}</Text>
            </View>
            <View style={styles.settings}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Feather name="settings" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            <View style={styles.profileinfo}>
                <Image source={user.image} style={styles.image}/>
                <TouchableOpacity style={styles.button1} onPress={handleBuddies}>
                    <Text style={styles.number}>{user.buddies}</Text>
                    <Text style={styles.buttontext}>Buddies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={handlePaths}>
                    <Text style={styles.number}>{user.paths}</Text>
                    <Text style={styles.buttontext}>Paths</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.friendsinfo}>
                <View style={styles.userinfo}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.firstandlastnames}>{user.username}</Text>
                    <Entypo name="graduation-cap" size={24} color={globalColors.orange.title.colour} />
                </View>
                <View style={styles.uniinfo}>
                        {user.path && <Text style={styles.pupiltext}>Path: </Text>}
                        {user.path && <Text style={styles.unitext}>#{user.path}</Text>}
                </View>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.follow} onPress={toggleModal}>
                <EditBioAndUni isVisible={isModalVisible} toggleModal={toggleModal} />
                    <Text style={styles.followtext}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chat} onPress={toggleModal2}>
                <EditProfilePic isVisible={isModalVisible2} toggleModal={toggleModal2} />
                    <Text style={styles.chattext}>Chat</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.postsbox}>
                <Text style={styles.poststext}>Posts</Text>
            </View>
            <View style={{marginTop: 10}}>
                <Post profilepic= {user.image} firstname={user.firstname} lastname={user.lastname} path="true" caption="Pathbuddy is a mobile application that focuses on the future education and career prospects of young people. It is available to download from App Store and Play store and is a form of social media that consists of various components, such as Chat, Home Feed and Profile. It provides a mean of communication between the advisors and the users, who can have access to personalised career advise, explore new professional paths and also exchange ideas and opinions with their peers." image={dummydata.image} timeposted="2 minutes ago"/>
                <Post profilepic= {user.image} firstname={user.firstname} lastname={user.lastname} path="true" caption="Look at this important information" image={dummydata2.image} timeposted="1 hour ago"/>
            </View>
            </ScrollView>
            <View style={styles.bottombar}>
                <BottomBar activeRoute="MyProfile"/>
            </View>
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
    profileinfo: {
        marginTop: 40,
        marginLeft: 37,
        flexDirection: 'row'
    },
    image: {
        height: 92,
        width: 92,
        borderColor: globalColors.orange.background.colour,
        borderWidth: 2,
        borderRadius: 50
    },
    userinfo: {
        marginLeft: 13,
    },
    firstandlastnames: {
        fontSize: 19,
        fontWeight: '700',
        marginRight: 4
    },
    uniinfo: {
        flexDirection: 'row', 
        marginTop: 8
    },
    unitext: {
        fontWeight: '600'
    },
    biotext: {
        fontSize: 13,
        marginTop: 8
    },
    pupiltext: {
        color: globalColors.grey.profilepupil.colour
    },
    friendsinfo: {
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 27
    },
    buttontext: {
        fontSize: 14,
        color: globalColors.grey.buttontext.colour,
        textAlign: 'center'
    },
    number: {
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center'
    },
    button1: {
        width:100,
        marginLeft: 30,
        marginTop: 20
    },
    button2: {
        width:100,
        marginTop: 20
    },
    follow: {
        backgroundColor: globalColors.orange.background.colour,
        height: 45,
        width: 210,
        borderRadius: 10,
    },
    followtext: {
        color: globalColors.maincolors.white.colour,
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 10,
    },
    chat: {
        marginLeft: 15,
        backgroundColor: globalColors.grey.buttonchangeimage.colour,
        height: 45,
        width: 90,
        borderRadius: 10,
    },
    chattext: {
        color: globalColors.maincolors.black.colour,
        textAlign: 'center',
        paddingTop: 10
    },
    postsbox: {
        marginTop: 30,
        height: 40,
        borderBottomColor: globalColors.orange.background.colour,
        borderColor: globalColors.maincolors.white.color,
        borderBottomWidth: 2,
    },
    poststext: {
        color: globalColors.orange.background.colour,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 11
    },
    buttons: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20
    }
})

const user = {
    image: require('../assets/stick_man.jpg'),
    firstname: 'Computer',
    lastname: 'Science',
    username: 'computerscience',
    path: 'science',
    buddies: '<50',
    paths: 7
}

const dummydata = {
    image: require('../assets/stemprob.png')
}

const dummydata2 = {
    image: require('../assets/compstats.png')
}