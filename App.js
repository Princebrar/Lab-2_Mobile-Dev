/**
 * My To Do List App
 *
 * @format
 */
import React from 'react';
import Home from './Screens/Homescreen.jsx';
import About from './Screens/Aboutscreen.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }



export default App;
