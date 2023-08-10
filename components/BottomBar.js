import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import { globalColors } from '../colors.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from 'react';

const { width } = Dimensions.get('screen');

const BottomBar = ({ activeRoute }) => {

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')} style={styles.firsticon}>
                <Ionicons name="home-outline" size={40} color={activeRoute === 'Feed' ? globalColors.orange.title.colour : globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.othericon}>
                <Ionicons name="chatbox-ellipses-outline" size={40} color={activeRoute === 'Chat' ? globalColors.orange.title.colour : globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('NewPost')} style={styles.othericon}>
                <AntDesign name="pluscircleo" size={40} color={activeRoute === 'NewPost' ? globalColors.orange.title.colour : globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.othericon}>
                <MaterialCommunityIcons name="atom" size={40} color={activeRoute === 'Dashboard' ? globalColors.orange.title.colour : globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
                <Ionicons name="person-circle-outline" size={40} color={activeRoute === 'MyProfile' ? globalColors.orange.title.colour : globalColors.maincolors.black.color}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 70,
        color: globalColors.maincolors.white.color,
        marginBottom: 0,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 20
    },
    firsticon: {
        marginRight: 36
    },
    othericon: {
        marginRight: 36,
    }
});

export default BottomBar;