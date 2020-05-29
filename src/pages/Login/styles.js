import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 23,
        justifyContent: 'center',
    },

    logo: {
        width: 80,
        height: 99,
        left:'38%',
       
    },

    header: {
        paddingTop: 15,
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

    inputs: {
        paddingTop:9,

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
        marginTop: 16,
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    actionEnter: {
        backgroundColor: '#000067',
        borderRadius: 8,
        height: 45,
        width: '40%',
        justifyContent:'center',
        alignItems: 'center',

    },

    actionRegister: {
        backgroundColor: '#e02041',
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

    actionCadastro: {
        color: '#000067',
        fontSize: 15,
        fontWeight: 'bold',

    }
});