import { React, useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from "react-native";
import { globalColors } from "../colors";
import {TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native'
import { Feather, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

export default function ChatOneVsOne({ route }) {

    const navigation = useNavigation();
    const [message, setMessage] = useState('');
    const { image, firstName, lastName, online, lastMessage, dateAndTime } = route.params
    console.log(firstName, online, lastMessage)

    const fullName = firstName + ' ' + lastName
    if (fullName.length > 26) { 
        newFullName = (fullName).substring(0, 25) + '...';
    } else {
        newFullName = firstName + ' ' + lastName
    }

    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
            _id: 2,
            name: 'React Native',
            avatar: styles => <Image source={image} style={{width: 33, height: 33, marginBottom: 8, borderRadius:2, borderWidth: 2, borderColor: globalColors.orange.background.colour, borderRadius: 50}}/>,
            },
        },
        {
            _id: 2,
            text: 'Omg',
            createdAt: new Date(),
            user: {
            _id: 1,
            name: 'React Native',
            image: 'https://placeimg.com/140/140/any',
            },
        },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
        )
    }, [])

    const renderBubble = (props) => {
        return (
        <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: globalColors.orange.background.colour,
                },
                left: {

                }
            }}
            textStyle={{
                right: {
                    color: globalColors.maincolors.white.colour,
                    fontSize: 14,
                    fontWeight: '500'
                },
                left: {
                    color: globalColors.maincolors.black.colour,
                    fontSize: 14,
                    fontWeight: '500'
                }
            }}
        />
        );
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <Feather name="send" size={24} style={{marginBottom: 10, marginRight: 15}} color={globalColors.orange.background.colour} /> 
                </View>
            </Send>
        );
    }

    const scrollToBottomComponent = () => {
        return (
            <AntDesign name="down" size={24} color="black" />
        );
    }

    return(

        <View style={styles.bigbox}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                        <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 39}}>
                    <TouchableOpacity >
                        <Image style={styles.profilepic} source={image} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'column', marginLeft: 13}}>
                    <TouchableOpacity>
                        <Text style={styles.name}>{newFullName}</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <Entypo name="dot-single" size={24} color={online === "true" ? globalColors.maincolors.green.colour : globalColors.maincolors.red.colour } style={{marginLeft: -7}}/>
                        <Text style={{ fontSize: 11, marginTop: 4}}>{online === "true" ? "Online" : "Offline"}</Text>
                    </View>
                </View>
                <View style={styles.phonecall}>
                    <TouchableOpacity>
                        <Feather name="phone" size={24} color={globalColors.orange.background.colour} />
                    </TouchableOpacity>
                </View>
                <View style={styles.videocall}>
                    <TouchableOpacity>
                        <Feather name="video" size={24} color={globalColors.orange.background.colour} />
                    </TouchableOpacity>
                </View>
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={renderBubble}
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
            />
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
        marginTop: 5,
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
        marginLeft: 30,
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
        flex: 1,
    },
    scrollviewcontent: {
        paddingBottom: 60
    },
    profilepic: {
        width: 33,
        height: 33,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: globalColors.orange.background.colour,
    },
    header: {
        flexDirection:'row',
        marginTop: 45
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    phonecall: {
        position: 'absolute',
        right: 69,
        alignItems: 'flex-end',
    },
    videocall: {
        position: 'absolute',
        right: 20,
        alignItems: 'flex-end',
    },
    textinput: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: globalColors.grey.messagetextinput.colour,
        borderRadius: 25,
        height: 60,
        paddingLeft: 20,
        position: 'absolute',
        bottom: 30
    }
})