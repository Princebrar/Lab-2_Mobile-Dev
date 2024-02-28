"use client";
import React from 'react';
import {ScrollView, Pressable, View, Text, StyleSheet,Array,ArrayList} from 'react-native';
function TodoList({items}) { 
    const items_copy = items.map((item) => {
        return ( item );
      });
    return (
<ScrollView>
                <Pressable>
                    
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Do laundry</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>Go to gym</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Walk dog</Text>
                    </View>
                </Pressable>
                {items_copy.length > 0 ? items_copy.map((task, index) => (
                    <Pressable key={index}>
                        <View style={styles.task}>
                            <Text style={styles.taskText}>{task}</Text>
                        </View>
                    </Pressable>
                )) : null}
                <>
                
            </>
</ScrollView>
    );
}
const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});

export default TodoList;