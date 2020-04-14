import React  from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; //useRoute serve para pegar informações da pagina atual da app

import logoImg from '../../assets/logo1.png';

import styles from './styles';

export default function Login () {

    const navigation = useNavigation();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    function navigationUser(){
      navigation.navigate('User');
    }

    function navigationFelling(){
      navigation.navigate('Felling');
    }


    return (
        <View style={styles.container}>

          <Image style={styles.logo} source={logoImg} />

          <View style={styles.header}>

            <Text style={styles.titleText}>LOGIN DO USUÁRIO</Text>
          </View>

          <View style={styles.inputs}> 
              <TextInput
                style={styles.inputText}
                onChangeText={text => setUsername(text)}
                placeholder='Matricula'
                value={username}
              />
          </View>
          <View style={styles.inputs}> 
            <TextInput
                style={styles.inputText}
                secureTextEntry={true} 
                onChangeText={text => setPassword(text)}
                placeholder='Senha'
                value={password}
              />
          </View>

          <View style={styles.actions}>
                <TouchableOpacity onPress={navigationFelling} style={styles.actionEnter} >
                    <Text style={styles.actionText}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={navigationUser} style={styles.actionRegister} >
                    <Text style={styles.actionText}>CADASTRAR</Text>
                </TouchableOpacity>
          </View>
        </View>
    );
}