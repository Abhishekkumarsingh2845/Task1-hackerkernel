import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TodoListApp = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodoItems([...todoItems, { id: Date.now(), text: todoInput }]);
      setTodoInput('');
    }
  };

  const removeTodo = (id) => {
    setTodoItems(todoItems.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo..."
          value={todoInput}
          onChangeText={text => setTodoInput(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todoItems}
        renderItem={({ item }) => (
          <View style={styles.todoItemContainer}>
            <TouchableOpacity onPress={() => removeTodo(item.id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.todoItem}>{item.text}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  todoItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default TodoListApp;
