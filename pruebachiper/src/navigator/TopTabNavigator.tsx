import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { New } from '../screens/New';
import { Top } from '../screens/Top';
import { Popular } from '../screens/Popular';
import { Hot } from '../screens/Hot';
import { StackNavigator } from './StackNavigator';

const Tab = createMaterialTopTabNavigator();

 export const TopTabNavigator=()=> {



  return (
    <Tab.Navigator
    style={{paddingTop:10 }}
    sceneContainerStyle={{
      backgroundColor: 'white'
    }}

    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'rgba(107,193,254,1)',
      tabBarIndicatorStyle: {
        height: null,
        top: 0,
        backgroundColor: 'rgba(107,193,254,1)',
      },
      tabBarStyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowColor: 'transparent',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }
    }}
    >
      <Tab.Screen name="new"  component={New} />
      <Tab.Screen name="top"  component={Top} />
      <Tab.Screen name="popular"  component={Popular} />
      <Tab.Screen name="hot"  component={Hot} />
      
    </Tab.Navigator>
  );
}