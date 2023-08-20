import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from "react-native";
import { globalColors } from "../colors";
import {TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native'
import BottomBar from '../components/BottomBar';
import { Feather, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

export default function HelpCenter() {

    const navigation = useNavigation();
    const [isSelected, setIsSelected] = useState('FAQ');
    const [showFAQ, setShowFAQ] = useState(true);
    const [showContactUs,setShowContactUs] = useState(false);

    const handlePress = (button) => {
        setIsSelected(button);
        setShowFAQ(button === 'FAQ');
        setShowContactUs(button === 'Contact Us');
      };

    const QuestionAndAnswer = ({ question, answer }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        return (
            <View style={styles.qabox}>
                <TouchableOpacity style={styles.questionandarrow} onPress={() => setIsExpanded(!isExpanded)}>
                    <Text style={[styles.questiontext]}>{question}</Text>
                    <MaterialIcons name="arrow-drop-down" size={36} color="black" style={styles.icon}/>
                </TouchableOpacity>
                {isExpanded && <Text style={styles.answertext}>{answer}</Text>}
            </View>
        );
    };

    return(

        <View style={styles.bigbox}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <View style={styles.titlebox}>
                <Text style={styles.titletext}>Help Center</Text>
            </View>
            <View style={styles.privacypolicy}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Feather name="settings" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => { handlePress('FAQ'); setShowFAQ(true); setShowContactUs(false); }} 
                style={[styles.faqbutton, isSelected === 'FAQ' ? {backgroundColor: globalColors.orange.background.colour} : { backgroundColor: globalColors.maincolors.white.colour }]}>
                    <Text style={styles.buttontext}>FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { handlePress('Contact Us'); setShowFAQ(false); setShowContactUs(true); }} 
                style={[styles.contactusbutton, isSelected === 'Contact Us' ? {backgroundColor: globalColors.orange.background.colour} : { backgroundColor: globalColors.maincolors.white.color }]}>
                    <Text style={styles.buttontext}>Contact us</Text>
                </TouchableOpacity>
            </View>
            { showFAQ && (
                <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                    <View>
                        <QuestionAndAnswer question="What is Pathbuddy?" answer="Pathbuddy is a mobile application that focuses on the future education and career prospects of young people. It is available to download from App Store and Play store and is a form of social media that consists of various components, such as Chat, Home Feed and Profile. It provides a mean of communication between the advisors and the users, who can have access to personalised career advise, explore new professional paths and also exchange ideas and opinions with their peers." />
                        <QuestionAndAnswer question="What is a Path?" answer="A Path is a profile account in the mobile app that is managed by professional career counselors and represents a specific career path of an industry." />
                        <QuestionAndAnswer question="What is a Buddy?" answer="A Buddy is a profile account in the app that belongs to a user of the app, who uses the mobile app to get career advice from Paths." />
                        <QuestionAndAnswer question="How can I distinguish a Buddy from a Path?" answer="We know that distinguishing between a Path and a Buddy might be difficult, but at the same time is so easy. Only for Paths, next to the name found at a profile page, there is a verification icon, which is an orange graduation cap (or gown hat). If the name at a profile page only includes the first name and last name, it means that it belongs to a user of the app, the so called Buddy." />
                        <QuestionAndAnswer question="Is there only a free version of the app?" answer="No, the free version of the app is just a hint of what you can get by using our app. There is a premium version, available for $60/year and can be found at the dashboard page." />
                        <QuestionAndAnswer question="What are the benefits of a premium subscription?" answer="Unlimited, personalised high-quality career advice via chatting with the Path of your choice." />
                        <QuestionAndAnswer question="Can I change my personal data?" answer="Yes, you can amend your profile pictuere, bio and uni through the profile page. The name and password can be changed through settings. You cannot change your email adress assocciated with the account, but you can delete it from a system and create an entirely new account using another email, all done through settings page." />
                    </View>
                </ScrollView>
            )}
            { showContactUs && (
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom:150 }}>
                <View>
                    <TouchableOpacity style={[styles.contactbox, {backgroundColor: globalColors.blue.facebook.colour}]}>
                        <AntDesign name="facebook-square" size={24} color="black"/>
                        <Text style={styles.contactboxtext}>Find us on Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.contactbox, {backgroundColor: globalColors.maincolors.green.colour}]}>
                        <Ionicons name="logo-whatsapp" size={24} color="black" />
                        <Text style={styles.contactboxtext}>Find us on Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.contactbox, {backgroundColor: globalColors.blue.twitter.colour}]}>
                        <Feather name="twitter" size={24} color={globalColors.maincolors.black.colour} />
                        <Text style={styles.contactboxtext}>Find us on Twitter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.contactbox, {backgroundColor: globalColors.orange.background.colour}]}>
                        <Feather name="phone" size={24} color={globalColors.maincolors.black.colour} />
                        <Text style={styles.contactboxtext}>Call us on 07777777777</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.contactbox, {backgroundColor: globalColors.maincolors.white.colour}, {borderWidth: 2}, {borderColor: globalColors.orange.background.colour}]}>
                        <MaterialIcons name="email" size={24} color={globalColors.maincolors.black.colour} />
                        <Text style={styles.contactboxtext}>Send us an email</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            )}
            <View style={styles.bottombar}>
                <BottomBar />
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
    backarrow: {
        left: 20,
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
    buttons: {
        flexDirection: 'row',
        marginTop: 30,
        alignSelf: 'center'
    },
    privacypolicy: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 24,
        marginTop: 45
    },
    faqbutton: {
        width:150,
        height: 50,
        borderWidth: 2,
        borderColor: globalColors.orange.background.colour,
        borderRadius: 50
    },
    contactusbutton: {
        width:150,
        height: 50,
        marginLeft: 45,
        borderWidth: 2,
        borderColor: globalColors.orange.background.colour,
        borderRadius: 50
    },
    buttontext: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 8,
        fontSize: 20
    },
    contactbox: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 40,
        height: 60,
        flexDirection: 'row',
        //paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        paddingTop: 18,
        position: 'absolute',
        alignItems: 'flex-end',
        right: 5,
    },
    contactboxtext: {
        marginLeft: 15,
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center'
    },
    qabox: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 24,
        backgroundColor: globalColors.orange.background.colour,
        borderRadius: 20,
        marginLeft: 24,
        marginRight: 24,
    },
    questiontext: {
        display: 'flex',
        alignItems: 'center',
        color: globalColors.maincolors.black.colour,
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15,
        paddingTop: 25,
        marginBottom: 24,
        maxWidth: width - 100,
        //marginTop: 24,
      },
    questionandarrow: {
        flexDirection: 'row',
    },
    answertext: {
        fontWeight: '500', 
        display:'flex', 
        alignItems: 'center', 
        marginBottom: 24,
        paddingLeft: 15,
        paddingRight: 15,
        //marginBottom: 24,
        paddingBottom: 10,
        fontSize: 16
    }
})