import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const Counter = () => {

    const [counter, setCounter] = useState(10);


    return (
        <View style={styles.container}>
            <Text style={styles.tilte}>Counter  {counter}</Text>

            <Fab
                title='+1'
                onPress={() => { setCounter(counter + 1) }}
                position='bl'
            />
            <Fab
                title='-1'
                onPress={() => { setCounter(counter - 1) }}
                position='br'
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    tilte: {
        fontSize: 55,
        textAlign: 'center',
        // position: 'relative',
        top: -100,
    },
    button: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: -50,
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 0,
        left: 20,
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 0,
        right: 20,
    },
});