/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import TodoList from './ToDoList.js';
import TodoForm from './ToDoForm.js';
import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
    TextInput,
    Button
} from 'react-native';


function App() {
    return (
        <SafeAreaView>
            <TodoList />
            <TodoForm />
        </SafeAreaView>
    );
}



export default App;
