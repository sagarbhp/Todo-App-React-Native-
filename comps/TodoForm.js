import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';


export default function TodoForm({setTodos}) {
    const [input, setInput] = useState("")

    const change=(value) =>{
        setInput(value);
    }

    function Clicked(){
        if(input.length>3){
            let k=Math.random();
            setTodos((prev)=>{
                return ([{text:input, key:String(k)}, ...prev]);
            })
            setInput("");
        }else{
            Alert.alert("Opps!","Min 4 charecters");
        }
     

        
    }
  
        
    
    return (
        <View>
            <TextInput
                style={styles.input} 
                placeholder="Enter new Todo"
                value={input}
                onChangeText={(value)=>change(value)}
            />
            <Button 
                title="Add"
                onPress={Clicked}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderColor:"#777",
        borderStyle:"solid",
        borderWidth:1,
        marginBottom:15,
        padding:10,
        backgroundColor:"#f4f4f4"
    }
})