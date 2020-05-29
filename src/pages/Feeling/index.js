import React, { useState } from 'react';
import {View, Image, Text, TextInput, TouchableOpacity   } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


import logoImg from '../../assets/logo.png';

import felizImg from '../../assets/feliz.png';
import tristeImg from '../../assets/triste.jpg';
import bravoImg from '../../assets/bravo.png';
import semPalavrasImg from '../../assets/sempalavras.png';


import styles from './styles';

export default function Felling(){


    const navigation = useNavigation();

    function navigationAbout(){
      navigation.navigate('Diary');
    }

    return (
        <View style={styles.container}>

        <View style={styles.headerLogo}>
          <Image source={logoImg} />
        </View>

        <View style={styles.headerTitle}>
            <Text style={styles.titleText}>Como se sente ?</Text>
        </View>

        <View style={styles.fellings}>
            <Image style={styles.emojis} source={felizImg} />
            <Image style={styles.emojis} source={semPalavrasImg} />
            <Image style={styles.emojis} source={tristeImg} />
            <Image style={styles.emojis} source={bravoImg} />
        </View>


        <View style={styles.actions}>
              <TouchableOpacity onPress={navigationAbout}  style={styles.actionEnter} >
                  <Text style={styles.actionText}>PRÓXIMA</Text>
              </TouchableOpacity>
        </View>
      </View>
    );
}