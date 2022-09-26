import { StyleSheet, TouchableOpacity } from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    flexItem: {
        // backgroundColor: 'red',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    img: {
        // width: 90,
        // height: 90,
        // backgroundColor: 'blue',
        // marginRight: 10,
    },
    labelTime: {
        fontSize: 12,
        position: 'absolute',
        top: -15,
        right: -150,
    },
    flexLabelBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginLeft: 5,
    },
    labelTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 2,
        marginRight: 30,
        width: 340,

    },
    labelBottom: {
        fontSize: 12,
        marginRight: 15,
    },

});