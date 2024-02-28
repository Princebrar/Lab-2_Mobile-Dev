/**
 * My To Do List App
 *
 * @format
 */
"use client";
import React from 'react';
import TodoList from './ToDoList.js';
import TodoForm from './ToDoForm.js';
import {   SafeAreaView,StatusBar} from 'react-native';
import { useState} from 'react';
function App() {
    const [tasks, setTasks] = useState([]);
    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    }
    return (
        
        <SafeAreaView>
            <TodoList items={tasks}/>
            <TodoForm onAddItem={handleAddTask}/>
            <StatusBar style="auto" />
        </SafeAreaView>
        
    );
}



export default App;
