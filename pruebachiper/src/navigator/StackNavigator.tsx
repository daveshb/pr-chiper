import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Hot } from '../screens/Hot';
import { New } from '../screens/New';
import { Popular } from '../screens/Popular';
import { Top } from '../screens/Top';
import { Details } from '../screens/Details';
// import { Detail } from '../screens/Detail';



const Stack = createStackNavigator();

export const StackNavigator =() => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent'
      },
      cardStyle:{
        backgroundColor: 'white'
      }
    }}
    >
      <Stack.Screen name="new" options={{title: "New"}} component={New} />
      <Stack.Screen name="top" options={{title: "Topp"}} component={Top} />
      <Stack.Screen name="popular" options={{title: "Popular"}} component={Popular} />
      <Stack.Screen name="hot" options={{title: "Hot"}} component={Hot} />
      <Stack.Screen name="detail" options={{title: "Details"}} component={Details} />
    </Stack.Navigator>
  );
}