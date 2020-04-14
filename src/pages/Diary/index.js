import React, { useState } from 'react';
import {View, Image, Text, TextInput, TouchableOpacity   } from 'react-native';
import { Slider } from 'react-native-elements';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Diary(){

  const [observacoes, setObservacoes] = React.useState('');
  const [qtdHoraTrabalhada, setQtdHoraTrabalhada] = React.useState(8);



    return (
        <View style={styles.container}>

        <View style={styles.headerLogo}>
          <Image source={logoImg} />
        </View>

        <View style={styles.headerTitle}>
            <Text style={styles.titleText}>Conte me sobre o seu dia ?</Text>
        </View>
        <View style={styles.inputs}> 
          <Text style={{ fontSize:18 , color:'#000067', fontWeight: 'bold' }}>Horas trabalhadas: {qtdHoraTrabalhada} hs</Text>
          <View style={styles.sliderHoras}>
            <Slider
              value={qtdHoraTrabalhada}
              minimumTrackTintColor='#000067'
              maximumTrackTintColor='#ff0000'
              thumbTintColor='#000067'
              animationType={'number'}
              maximumValue={24}
              onValueChange={value => setQtdHoraTrabalhada(parseInt(value))}
            />
          </View>
        </View>
        <View style={styles.inputs}> 
            <TextInput
                style={styles.inputTextArea}
                underlineColorAndroid="transparent"
                placeholder="Notas ou Observações"
                multiline={true}
                numberOfLines={10}
                onChangeText={text => setObservacoes(text)}
                value={observacoes}

            />
        </View>

        <View style={styles.actions}>
              <TouchableOpacity style={styles.actionEnter} >
                  <Text style={styles.actionText}>CONCLUIR</Text>
              </TouchableOpacity>
        </View>
      </View>
    );
}