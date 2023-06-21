import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TodoItemProps {
  title: string;
  completed: boolean;
  onPress: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, completed, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.complete, { color: completed ? 'green' : 'red' }]}>
          {completed ? 'Completed' : 'Not Completed'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
  complete: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TodoItem;
