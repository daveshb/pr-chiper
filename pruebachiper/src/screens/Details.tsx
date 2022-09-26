import React, { useEffect } from 'react'
import { NavigatorIOS, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface RouterParams {
    id: number;
    name: string;
}

interface Props extends StackScreenProps<any, any>{};

export const Details = ({route, navigation}:Props) => {

 const params = route.params as RouterParams;


useEffect(() => {
 
    navigation.setOptions({
        title: params?.name
    })
    
}, [])


  return (
    <View>
        <Text>{params.name}</Text>
    </View>
  )
}
