import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { globalColors } from "../colors";
import { Entypo } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const Post = ({ profilepic, firstname, lastname, path, caption, image, timeposted }) => {
    return (
        <View style={styles.post}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={profilepic} style={styles.image}/>
                        <Text style={styles.firstandlastnames}>{firstname +' '+ lastname}</Text>
                        {path==='true' ? <Entypo name="graduation-cap" size={24} color={globalColors.orange.title.colour} /> : null}
                    </View>
                    <Text style={styles.time}>{timeposted}</Text>
                </View>
            </View>
            <Text style={{marginTop: 12}}>{caption}</Text>
            <Image source={image} style={styles.postimage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    post: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: globalColors.grey.postborder.colour,
        marginTop: 10
    },
    image: {
        height: 35,
        width: 35,
        borderColor: globalColors.orange.background.colour,
        borderWidth: 2,
        borderRadius: 50
    },
    postimage: {
        //right: 20,
        height: 235,
        marginTop: 10,
        width: width - 40,
        //marginLeft: 20,
        marginBottom: 26,
        resizeMode: 'contain'
    },
    time: {
        marginTop: -10,
        fontSize: 11,
        color: globalColors.grey.profilepupil.colour,
        marginLeft: 47
    },
    firstandlastnames: {
        fontSize: 16,
        fontWeight: '600',
        marginRight: 4,
        marginLeft: 13
    },
})

export default Post;