import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 15,
    },


    headerLogo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 30
    },

    headerTitle: {
        paddingTop: 80,
        flexDirection: 'row',
        justifyContent:'center'
    },

    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000067",
        lineHeight: 30,
        justifyContent:'center'
    },

    fellings: {
        paddingTop:35,
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    emojis: {
        width: 55,
        height: 55,
    },

    inputText: {
         height: 40, 
         borderColor: '#000067', 
         borderRadius: 5,
         borderWidth: 1,
         padding: 8,
         fontSize: 15,
    },

    actions: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent:'center'
    },

    actionEnter: {
        backgroundColor: '#000067',
        borderRadius: 8,
        height: 45,
        width: '40%',
        justifyContent:'center',
        alignItems: 'center',

    },

    actionText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

});