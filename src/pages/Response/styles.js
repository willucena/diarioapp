import { StyleSheet } from 'react-native';
import  Constants  from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 22,
        paddingTop: Constants.statusBarHeight + 22,
        backgroundColor: "#DFE2E5",
    },

    panel: {
        paddingTop:15,
        padding: 30,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        marginBottom: 16
    },
    
    subpanel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    diaryDataProperty : {
        fontSize: 22,
        color: '#0D0D0D',
        fontWeight: 'bold',
        paddingBottom: 15

    },

    diaryProperty : {
        fontSize: 18,
        color: '#0D0D0D',
        fontWeight: 'bold',
    },

    emojis: {
        width: 27,
        height: 27,
    },

});