import React from "react";
import { View, ImageBackground, Dimensions, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { globalColors } from "../colors";
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('screen');
const { width } = Dimensions.get('screen');

export default function ImageFullScreen({route}) {

    const { image } = route.params
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <ImageBackground
                source={image}
                style={styles.imagefull}
                resizeMode='contain'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backarrow: {
        left: 20,
        marginTop: 45
    },
    imagefull: {
        height: height - 80, 
        width: width,
        flex: 1,
        alignSelf: 'center'
    }
})
