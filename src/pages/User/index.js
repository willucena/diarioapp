import React, { useState } from 'react';
import {View, Image, Text, TextInput, TouchableOpacity   } from 'react-native';
import { useNavigation } from '@react-navigation/native'; //useRoute serve para pegar informações da pagina atual da app



import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function User(){

    const [nome, setNome] = React.useState('');
    const [matricula, setMatricula] = React.useState('');
    const [inclusao, setInclusao] = React.useState('');
    const [sexo, setSexo] = React.useState('');
    const [anoNascimento, setAnoNascimento] = React.useState('');
    const [posto, setPosto] = React.useState('');
    const [quadro, setQuadro] = React.useState('');
    const [nomeGuerra, setNomeGuerra] = React.useState('');

    const [unidade, setUnidade] = React.useState('');
    const [escala, setEscala] = React.useState('');
    const [situacaoFuncional, setSituacaoFuncional] = React.useState('');

    const navigation = useNavigation();

    function navigationLogin(){
      navigation.goBack();
    }

    return (
        <View style={styles.container}>

        <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.titleText}>CADASTRO DE USUÁRIO</Text>
        </View>
        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setNome(text)}
              placeholder='Nome completo'
              value={nome}
            />
        </View>
        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setNomeGuerra(text)}
              placeholder='Nome de guerra'
              value={nomeGuerra}
            />
        </View>
        <View style={styles.inputs}> 
            <TextInput
              style={styles.inputText}
              onChangeText={text => setMatricula(text)}
              placeholder='Matricula'
              value={matricula}
            />
        </View>
    
        <View style={styles.inputs}> 
            <TextInput
              style={styles.inputText}
              onChangeText={text => setInclusao(text)}
              placeholder='Inclusão'
              value={inclusao}
            />
        </View>

        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setSexo(text)}
              placeholder='Gênero'
              value={sexo}
            />
        </View>

        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setAnoNascimento(text)}
              placeholder='Ano de nascimento'
              value={anoNascimento}
            />
        </View>

        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setPosto(text)}
              placeholder='Posto/Graduação'
              value={posto}
            />
        </View>

        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setQuadro(text)}
              placeholder='Quadro'
              value={quadro}
            />
        </View>

        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setUnidade(text)}
              placeholder='Unidade'
              value={unidade}
            />
        </View>

        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setEscala(text)}
              placeholder='Escala'
              value={escala}
            />
        </View>

        <View style={styles.inputs}> 
          <TextInput
              style={styles.inputText}
              onChangeText={text => setSituacaoFuncional(text)}
              placeholder='Situação Funcional'
              value={situacaoFuncional}
            />
        </View>

        <View style={styles.actions}>
              <TouchableOpacity onPress={navigationLogin} style={styles.actionRegister} >
                  <Text style={styles.actionText}>CANCELAR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionEnter} >
                  <Text style={styles.actionText}>CADASTRAR</Text>
              </TouchableOpacity>

        
        </View>
      </View>
    );
}