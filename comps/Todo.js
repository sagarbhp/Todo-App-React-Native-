import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Todo({item, del}) {
    console.log(item);
    return (

        <View  style={styles.item}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={()=>del(item.key)}>
                <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>

            
    )
}


const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:"#ddd",
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})