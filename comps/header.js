import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.header__title}>My Todos</Text>
        </View>

    );
}

const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:28,
        backgroundColor:"coral"

    },
    header__title:{
        textAlign:"center",
        color:"#fff",
        fontSize: 20,
        fontWeight:"bold",
    }
})
   
