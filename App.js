/**
 * My To Do List App
 *
 * @format
 */
"use client";
import React from 'react';
import TodoList from './Component/ToDoList.js';
import TodoForm from './Component/ToDoForm.js';
import {   SafeAreaView,StatusBar} from 'react-native';
import { useState} from 'react';
function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    const addTask = (task) => {
        for(let i=0;i<tasks.length;i++){
            if(tasks[i]===task){
                alert("Task Already Exists");
                return;
            }
        }
        setTasks([...tasks, task]);
    }
    return (
        
        <SafeAreaView>
            <TodoList items={tasks}/>
            <TodoForm addTask={addTask}/>
            <StatusBar style="auto" />
        </SafeAreaView>
        
    );
}



export default App;
