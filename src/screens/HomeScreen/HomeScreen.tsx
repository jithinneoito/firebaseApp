import { Button, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import TodoList from '../TodoListSreen/TodoList';
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux';
import todoSlice from '../../redux/slices/todoList.slice';
import { SET_TODO_LIST } from '../../redux/actions/app.actions';
import { RootState } from '../../redux/store/rootReducer';

// import crashlytics from '@react-native-firebase/crashlytics'

const FirstScreen = () => {
  // const [todo, setTodo] = useState<Array<any>>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch({type: SET_TODO_LIST});
  }, []);
  

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
      dispatch({type: SET_TODO_LIST});
  };


  return (
    <View style={styles.container}>
      <Button title="Press me to LogOut" onPress={handleAppearanceChange} />
      <TodoList todos={data} onTodoPress={handleTodoPress} />
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
