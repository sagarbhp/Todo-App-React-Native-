import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity,  TouchableWithoutFeedback, Keyboard, ClippingRectangle} from 'react-native';
import Header from "./comps/header"
import Todo from "./comps/Todo"
import TodoForm from "./comps/TodoForm"

export default function App() {
  const [todos, setTodos] = useState([
    {text:"Eat food", key:1},
    {text:"Sleep", key:2}
  ])

  const Delete = (key)=>{
    console.log(key);
    setTodos(prev=>prev.filter(item=>item.key!==key))
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          {/* Todo form */}
          <TodoForm setTodos={setTodos}/>
          <View style={styles.list}>
            <FlatList 
                data={todos}
                renderItem={({item})=>(
                  <Todo item={item} del={Delete}/>
                )
                }
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1
  },
  list:{
    marginTop: 20,
    flex:1
  }

});
