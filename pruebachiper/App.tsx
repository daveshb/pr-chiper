import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Counter } from './src/screens/Counter'
import { StackNavigator } from './src/navigator/StackNavigator';
import { TopTabNavigator } from './src/navigator/TopTabNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <TopTabNavigator/>
    </NavigationContainer>
  )
}