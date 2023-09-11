import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from "react-native";
import { globalColors } from "../colors";
import {TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../components/BottomBar';
import { Feather, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

export default function Chat() {

    const navigation = useNavigation();

    const chatWithUser =({ image, firstName, lastName, lastMessage, dateAndTime, online, path, read, lastMessageSentBy}) => {
        const [isRead, setIsRead] = useState(read);
        const handleUser = () => {
            navigation.navigate('ChatOneVsOne', {image: image, firstName: firstName, lastName: lastName , 
                online: online, lastMessage: lastMessage, dateAndTime: dateAndTime, path: path });
            setIsRead(true);
        }
        const fullName = firstName + ' ' + lastName

        if (fullName.length > 26) { 
            newFullName = (fullName).substring(0, 25) + '...';
        } else {
            newFullName = firstName + ' ' + lastName
        }

        if (lastMessage.length > 76) {
            lastMessage = lastMessage.substring(0,70) + '...';
            console.log(lastMessage)
        }

        return(
        <TouchableOpacity style={styles.chatbutton} onPress={handleUser}>
                <Image source={image} style={styles.image}/>
                <View style={styles.buttontext}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: '500', fontSize: 15}} >{newFullName}</Text>
                        {path==='true' ? <Entypo name="graduation-cap" size={24} 
                        color={globalColors.orange.title.colour} style={{marginLeft: 5}}/> : null}
                    </View>
                    <Text style={{ marginRight: 60, marginTop: 8, 
                        fontWeight: read === 'false' ? 'bold' : 'normal' }}>{lastMessageSentBy === 'me' ? 'You: ' : ''}{lastMessage}</Text>
                </View>
                <Text style={styles.datetime}>{dateAndTime}</Text>
                <AntDesign name="right" size={24} color={globalColors.grey.greyarrow.colour} style={styles.arrow}/>
        </TouchableOpacity>
    )};

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
                {chatWithUser({
                    image: require('../assets/stick_man.jpg'),
                    firstName: 'Tom',
                    lastName: 'Watkins',
                    lastMessage: 'What happenned?',
                    dateAndTime: 'just now',
                    online: 'false',
                    path: 'false',
                    read: 'false',
                    lastMessageSentBy: 'them'

                })}
                    {chatWithUser({
                        image: require('../assets/computer1.jpg'),
                        firstName: 'Computer',
                        lastName: 'Science',
                        lastMessage: 'Can you please provide me with more information?',
                        dateAndTime: 'just now',
                        online: 'true',
                        path: 'true',
                        read: 'true',
                        lastMessageSentBy: 'them'

                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'George',
                        lastName: 'Loizou',
                        lastMessage: 'I see, lets talk tomorrow then',
                        dateAndTime: 'just now',
                        online: 'true',
                        path: 'false',
                        read: 'true',
                        lastMessageSentBy: 'me'
                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'Chris',
                        lastName: 'Antonio',
                        lastMessage: 'Sure I agree with you!',
                        dateAndTime: 'just now'
                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'Michael',
                        lastName: 'Rawat',
                        lastMessage: 'Taking in to consideration the above, I think that the best solution for you is to just keep going with what you have already selected',
                        dateAndTime: 'just now'
                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'Tim',
                        lastName: 'Barber',
                        lastMessage: 'Omg I cannot believe what she told you!',
                        dateAndTime: 'just now'
                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'Andrew',
                        lastName: 'Adler',
                        lastMessage: 'Fair enough will check it out in a bit',
                        dateAndTime: 'just now'
                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'Constantinos',
                        lastName: 'Hadjichristodoulou',
                        lastMessage: 'Based on the latest article published by New York Times, the global university rankings have changed and there is an unexpected change in the top 3 so check it out',
                        dateAndTime: 'just now'
                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'Tom',
                        lastName: 'Adams',
                        lastMessage: 'What do you mean?',
                        dateAndTime: 'just now'
                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'Imogen',
                        lastName: 'Masters',
                        lastMessage: 'I will text you as soon as I finish my tutoring lesson',
                        dateAndTime: 'just now'
                })}
                    {chatWithUser({
                        image: require('../assets/stick_man.jpg'),
                        firstName: 'Ava',
                        lastName: 'Trypatsas',
                        lastMessage: 'Are you sure about it or?',
                        dateAndTime: 'just now'
                })}
            </ScrollView>
            <View style={styles.bottombar}>
                <BottomBar activeRoute="Chat"/>
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
        marginLeft: 21,
        marginRight: 21,
        borderBottomColor: globalColors.grey.outline.colour,
        borderBottomWidth: 2,
        flexDirection: 'row',
        marginTop: 26
    },
    buttontext: {
        marginLeft: 21,
        marginRight: 28,
        flexDirection: 'column'
    },
    arrow: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 5,
        paddingTop: 28
    },
    scrollview: {
        flex: 1
    },
    scrollviewcontent: {
        paddingBottom: 60
    },
    datetime: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 5,
    }
})