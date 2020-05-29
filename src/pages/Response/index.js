import React from 'react';
import {
  View,
  FlatList,
  Image
} from 'react-native';
import {Container, Tab, Tabs,Text } from 'native-base';

import felizImg from '../../assets/feliz.png';
import tristeImg from '../../assets/triste.jpg';
import bravoImg from '../../assets/bravo.png';
import semPalavrasImg from '../../assets/sempalavras.png';

import styles from './styles';
import ProgressCircle from '../../components/ultils/progressiveCircle'

export default function Response(){

    return (
      <Container>
            <Tabs initialPage={0}>
              <Tab heading="Diário">
              <View style={styles.container}>
                <View style={styles.panel}>
                  <Text style={styles.diaryDataProperty}>01/01/2020</Text>
                <View style={styles.subpanel}>
                  <Image style={styles.emojis} source={felizImg} />
                  <Text style={styles.diaryProperty}>8 h</Text>
                  <ProgressCircle />
                </View>
                
                </View>

                <View style={styles.panel}>
                  <Text style={styles.diaryDataProperty}>03/01/2020</Text>
                  <View style={styles.subpanel}>
                  <Image style={styles.emojis} source={bravoImg} />
                  <Text style={styles.diaryProperty}>8 h</Text>
                  <Text style={styles.diaryProperty}>Sim</Text>
                  </View>
                </View>

                <View style={styles.panel}>
                  <Text style={styles.diaryDataProperty}>05/01/2020</Text>
                  <View style={styles.subpanel}>
                  <Image style={styles.emojis} source={semPalavrasImg} />
                  <Text style={styles.diaryProperty}>5 h</Text>
                  <Text style={styles.diaryProperty}>Não</Text>
                  </View>
                </View>
              </View>
              
              </Tab>
              <Tab heading="Semanal">
                <View style={styles.container}>
                      <Text>Diário semanal</Text>  
                </View>
              </Tab>
            </Tabs>
        </Container>
    );
}

