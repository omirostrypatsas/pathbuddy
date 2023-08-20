import { React } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { globalColors } from "../colors";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../components/BottomBar';
import { Feather, Entypo } from '@expo/vector-icons';
import Post from '../components/ExistingPost';

const { width } = Dimensions.get('screen');

export default function Feed() {

    const navigation = useNavigation();

    return(

        <View style={styles.bigbox}>
            <View style={styles.titlebox}>
                <Text style={styles.titletext}>Feed</Text>
            </View>
                <View style={styles.settings}>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Feather name="settings" size={24} colour={globalColors.maincolors.black.color}/>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={styles.scroll}>
                <Post profilepic= {dummydata.image1} firstname="Computer" lastname="Science" path="true" caption="Pathbuddy is a mobile application that focuses on the future education and career prospects of young people. It is available to download from App Store and Play store and is a form of social media that consists of various components, such as Chat, Home Feed and Profile. It provides a mean of communication between the advisors and the users, who can have access to personalised career advise, explore new professional paths and also exchange ideas and opinions with their peers." image={dummydata.image2} timeposted="2 minutes ago"/>
                <Post profilepic= {dummydata2.image1} firstname="Omiros" lastname="Trypatsas" path="false" caption="Look at this important information" image={dummydata2.image2} timeposted="1 hour ago"/>
            </ScrollView>
            <View style={styles.bottombar}>
                <BottomBar activeRoute="Feed"/>
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
        marginTop: 45,
        alignItems: 'center'
    },
    titletext:{
        fontSize: 20,
        color: globalColors.orange.title.colour,
        textAlign: 'center'
    },
    userinfo: {
        marginLeft: 13,
    },
    scroll: {
        marginTop: 16
    },
    profilepic: {
        height: 65,
        width: 65,
        borderColor: globalColors.orange.background.colour,
        borderWidth: 2,
        borderRadius: 50
    },
})

const dummydata = {
    image1: require('../assets/stick_man.jpg'),
    image2: require('../assets/stemprob.png')
}

const dummydata2 = {
    image1: require('../assets/no-profile-picture-icon-18.jpg'),
    image2: require('../assets/compstats.png')
}