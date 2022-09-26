import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}


export const Fab = (props:Props) => {

    const {title, onPress, position} = props;

    return (
        <> 
         <TouchableOpacity
            // style={styles.fabLocationBL}
            style={
                (position === 'bl') ? styles.fabLocationBL : styles.fabLocationBR
            }
            onPress={onPress}
        >
            <View style={styles.button}>
                <Text style={styles.textButton}>{title}</Text>
            </View>
        </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
      justifyContent: 'center',
    },
    title: {
        fontSize: 55,
        top: -15,
        textAlign: 'center',
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
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,
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