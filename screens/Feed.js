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
                <Post profilepic= {dummydata.image1} firstName="Computer" lastName="Science" path="true" caption="New university rankings have been published, do you agree with this list or not..?" image={dummydata.image2} timeposted="2 minutes ago" username='computerscience'/>
                <Post profilepic= {dummydata2.image1} firstName="Tom" lastName="Watkins" path="false" caption="Look at this important information" image={dummydata2.image2} timeposted="1 hour ago" username='tom_watkins'/>
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
    image1: require('../assets/computer1.jpg'),
    image2: require('../assets/compstats.jpeg')
}

const dummydata2 = {
    image1: require('../assets/no-profile-picture-icon-18.jpg'),
    image2: require('../assets/comppost.jpg')
}