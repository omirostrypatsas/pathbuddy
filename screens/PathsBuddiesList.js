import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { globalColors } from "../colors";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../components/BottomBar';
import { Feather, Ionicons, Entypo } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

export default function PathsBuddiesList({ route }) {

    const {selected, username} = route.params
    const navigation = useNavigation();
    const [isSelected, setIsSelected] = useState(selected);
    const [showPaths, setShowPaths] = useState(selected === 'Paths');
    const [showBuddies, setShowBuddies] = useState(selected === 'Buddies');

    const handlePressCategory = (choice) => {
        setIsSelected(choice);
        setShowPaths(choice === 'Paths');
        setShowBuddies(choice === 'Buddies');
      };

    const buttonText = {
        Buddies: ['Unbuddy', 'Buddy Up'],
        Paths: ['Unfollow', 'Follow'],
    }

    const [isPressed, setIsPressed] = useState(0)

    const handleUnfollowButton = () => {
        setIsPressed((prevSelected) => {
            return prevSelected === 'Buddies' ? 'Paths' : 'Buddies';
        });
    };

    const handleUser = ({image, firstname, lastname, username, path}) => {
        if (path === 'true') {
            navigation.navigate('Pathprofile', {image: image, firstname: firstname, lastname: lastname, username:username})
        } else {
            navigation.navigate('BuddyProfile', {image: image, firstname: firstname, lastname: lastname, username:username})
        }
    };

    const UserProfile = ({ image, firstname, lastname, username }) => {
        const fullName = firstname + ' ' + lastname
        const [initial, setInitial] = useState(0);
        if (fullName.length > 26) { 
            newFullName = (fullName).substring(0, 25) + '...';
        } else {
            newFullName = firstname + ' ' + lastname
        }

        return (
        <TouchableOpacity style={styles.personbox} onPress={handleUser}>
            <Image source={image} style={styles.image}/>
            <View style={styles.buttontext}>
                <Text style={{fontWeight: '600', fontSize: 15}}>{username}</Text>
                <Text style={{ marginTop: 2}}>{fullName}</Text>
            </View> 
            <TouchableOpacity style={[styles.unfollowbutton, { borderColor: initial === 0 ? globalColors.maincolors.red.colour : globalColors.orange.background.colour }]} onPress={() => {if (initial === 0 ){setInitial(1)} else {setInitial(0)} }}>
                <Text style={ {color: initial === 0 ? globalColors.maincolors.red.colour : globalColors.orange.background.colour}}>{isSelected === 'Buddies' ? buttonText.Buddies[initial === 0 ? 0: 1] : buttonText.Paths[initial === 0 ? 0: 1]}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
        );
    }

    return(

        <View style={styles.bigbox}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <View style={styles.titlebox}>
                <Text style={styles.titletext}>{username}</Text>
            </View>
            <View style={styles.settings}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Feather name="settings" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            </View>
            <View style={styles.category}>
                <TouchableOpacity
                        onPress={() => { handlePressCategory('Buddies'); setShowBuddies(true); setShowPaths(false); }}
                        style={[styles.button1, isSelected === 'Buddies' ? {borderBottomColor: globalColors.orange.background.colour} : { borderBottomColor: globalColors.maincolors.white.colour }]}
                        >
                        <Text style={[(isSelected === 'Buddies' ? globalColors.orange.background.colour : globalColors.grey.buttontext.colour), { marginBottom: 12 }]}>Buddies</Text>     
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => { handlePressCategory('Paths'); setShowBuddies(false); setShowPaths(true); }} 
                        style={[styles.button2, isSelected === 'Paths' ? {borderBottomColor: globalColors.orange.background.colour} : { borderBottomColor: globalColors.maincolors.white.colour }]}
                        >
                        <Text style={[(isSelected === 'Paths' ? globalColors.orange.background.colour : globalColors.grey.buttontext.colour), { marginBottom: 12 }]}>Paths</Text>   
                </TouchableOpacity>
            </View>
            { showBuddies && (
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
              <View style={styles.scrollview}>
              {buddy.map((buddy, index) => (
              <UserProfile
                key={index}
                image={buddy.image}
                firstname={buddy.firstname}
                lastname={buddy.lastname}
                username={buddy.username}
              />
              ))}
              </View>
            </ScrollView>
          )}
          { showPaths && (
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
              <View style={styles.scrollview}>
              {path.map((path, index) => (
              <UserProfile
                key={index}
                image={path.image}
                firstname={path.firstname}
                lastname={path.lastname}
                username={path.username}
              />
              ))}
              </View>
            </ScrollView>
          )}
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
    category: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
        width: width,
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    button1: {
        borderBottomWidth: 2
    },
    button2: {
        borderBottomWidth: 2
    },
    image: {
        height: 50,
        width: 50,
        borderColor: globalColors.orange.background.colour,
        borderWidth: 2,
        borderRadius: 50
    },
    buttontext: {
        marginLeft: 21,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 200
        //marginRight: 28
    },
    unfollowbutton: {
        //display: '',
        flexDirection: 'row',
        alignItems: 'center',
        //right: -50,
        justifyContent: 'center',
        //alignItems: 'center',
        //paddingTop: 10,
        height: 32,
        gap: 4,
        marginTop: 5,
        marginRight: 24,
        borderWidth: 2,
        borderRadius: 5,
        width: 70,
    },
    scrollview: {
        //flexDirection: 'column',
        //alignItems: 'flex-start',
        marginTop: 4,
      },
    personbox: {
        height: 80,
        marginLeft: 21,
        marginRight: 21,
        flexDirection: 'row',
        width: width
        //marginTop: 15
    },
})

const buddy = [
    {
      image: require('../assets/stick_man.jpg'),
      firstname: 'John',
      lastname: 'Doe',
      username: 'john_d',
    },
    {
      image: require('../assets/stick_man.jpg'),
      firstname: 'Jane',
      lastname: 'Smith',
      username: 'jane_s',
    },
    {
      image: require('../assets/stick_man.jpg'),
      firstname: 'Christos',
      lastname: 'Pingureiross',
      username: 'chris_pinguras',
    },
    {
      image: require('../assets/stick_man.jpg'),
      firstname: 'Panayiotis',
      lastname: 'Yiasemi',
      username: 'panayiotis_yiasemi',
    },
    {
      image: require('../assets/stick_man.jpg'),
      firstname: 'Jane',
      lastname: 'Lit',
      username: 'itslit',
    },
    {
      image: require('../assets/stick_man.jpg'),
      firstname: 'George',
      lastname: 'Loizou',
      username: 'g_loizou',
    },
    {
      image: require('../assets/stick_man.jpg'),
      firstname: 'Alexia',
      lastname: 'Anastasiadou',
      username: 'alex_anast',
    },
    {
      image: require('../assets/stick_man.jpg'),
      firstname: 'Omiros',
      lastname: 'Trypatsas',
      username: 'omiros_tr',
    },
  ];
  
  const path = [
    {
      image: require('../assets/no-profile-picture-icon-18.jpg'),
      firstname: 'Computer',
      lastname: 'Science',
      username: 'computerscience',
    },
    {
      image: require('../assets/no-profile-picture-icon-18.jpg'),
      firstname: 'Computer',
      lastname: 'Science',
      username: 'computerscience',
    },
    {
      image: require('../assets/no-profile-picture-icon-18.jpg'),
      firstname: 'Computer',
      lastname: 'Science',
      username: 'computerscience',
    },
    {
      image: require('../assets/no-profile-picture-icon-18.jpg'),
      firstname: 'Computer',
      lastname: 'Science',
      username: 'computerscience',
    },
    {
      image: require('../assets/no-profile-picture-icon-18.jpg'),
      firstname: 'Computer',
      lastname: 'Science',
      username: 'computerscience',
    },
    {
      image: require('../assets/no-profile-picture-icon-18.jpg'),
      firstname: 'Computer',
      lastname: 'Science',
      username: 'computerscience',
    },
    {
      image: require('../assets/no-profile-picture-icon-18.jpg'),
      firstname: 'Computer',
      lastname: 'Science',
      username: 'computerscience',
    },
    {
      image: require('../assets/no-profile-picture-icon-18.jpg'),
      firstname: 'Computer',
      lastname: 'Science',
      username: 'computerscience',
    },
  ];