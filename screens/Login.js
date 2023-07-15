import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalColors } from "../colors";

export const LogIn = () => {
    <View style={styles.loginbox}>
        <Text style={styles.text}>Login Screen</Text>
    </View>
}

const style = StyleSheet.create ({
    loginbox: {
        flex: 1,
        backgroundColor: globalColors.orange.background.colour,
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 324,
        marginBottom: 0 
      },
      text: {
        color: '#000000',
        fontSize: 20,
      },
})