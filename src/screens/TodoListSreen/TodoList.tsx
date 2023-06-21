import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import TodoItem from '../../components/TodoItem';
import {styles} from './styles'

interface Todo {
  id: string;
  title: string;
  complete: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onTodoPress: (item?: object) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onTodoPress }) => {
  const renderItem: ListRenderItem<Todo> = ({ item }) => (
    <TodoItem title={item.title} completed={item.complete} onPress={() => onTodoPress(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<>
        <Text style={{alignSelf: 'center', marginTop: 10}}>No Data Found..</Text>
        </>}
      />
    </View>
  );
};

export default TodoList;
