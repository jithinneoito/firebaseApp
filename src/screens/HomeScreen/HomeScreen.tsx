import { Button, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import TodoList from '../TodoListSreen/TodoList';
import { styles } from './styles';

// import crashlytics from '@react-native-firebase/crashlytics';

const FirstScreen = () => {
  const [todo, setTodo] = useState<Array<any>>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    fetchTodoList()
  }, []);

  //fetching collection of data from the firebase

  const fetchTodoList = async () => {
    try {
      const querySnapshot = await firestore().collection('todos').get();
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setTodo(newData);
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  };

  //user session logout

  const handleAppearanceChange = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  //Add a todo item with default complete status as false

  const handleAddTodo = async () => {
    if (newTodo) {
      await firestore()
        .collection('todos')
        .add({
          title: newTodo,
          complete: false,
        })
        .then(() => {
          setNewTodo('');
          fetchTodoList();
        })
        .catch((error) => {
          console.error('Error adding todo: ', error);
        });
    }
  };


  //This block of code for crashlytics test

  // useEffect(() => {
  //   crashlytics().log('App mounted.');
  //   crashlytics().crash()
  // }, []);

  // for complete the todo item

  const handleTodoPress = async (item: any) => {
    
    await firestore()
      .collection('todos')
      .doc(item?.id)
      .update({
        complete: !item.complete,
      });
    fetchTodoList()
  };


  return (
    <View style={styles.container}>
      <Button title="Press me to LogOut" onPress={handleAppearanceChange} />
      <TodoList todos={todo} onTodoPress={handleTodoPress} />
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Add a new task..."
      />
      <TouchableOpacity style={styles.buttonWrap}
        onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};


export default FirstScreen;
