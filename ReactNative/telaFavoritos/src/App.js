/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{
        paddingTop: 10, 
        paddingBottom: 10,
        paddingLeft: 20, 
        paddingRight: 20,
        backgroundColor: 'black',
        height: '90%'
        }}>
          <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 25,
          fontFamily: 'futura',
          marginTop: 10,
          }}>Moeda Digital</Text>
          <Text style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 15,
          fontFamily: 'futura',
          marginTop: 10,
          }}>30 abr 2021</Text>
          <View style={{
          backgroundColor: 'rgb(99, 97, 97)',
          height: 1,
          marginTop: 20,
          }}>
          </View>
          <View style={{
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'row'
            }}>
            <View style={styles.divCelulaMoeda}>
              <Image style={styles.imagem} source={require('./bitcoin.png')} />
              <Text style={styles.nomeMoeda}>Bitcoin</Text>
              <Text style={styles.siglaMoeda}>BTC</Text>
              <Text style={styles.valorMoeda}>$ 31.010,20</Text>
            </View>
            <View style={styles.divCelulaMoeda}>
              <Image style={styles.imagem} source={require('./litecoin.png')} />
              <Text style={styles.nomeMoeda}>Litecoin</Text>
              <Text style={styles.siglaMoeda}>LTC</Text>
              <Text style={styles.valorMoeda}>$ 262,06</Text>
            </View>
          </View>
          <View style={{
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'row'
            }}>
            <View style={styles.divCelulaMoeda}>
              <Image style={styles.imagem} source={require('./vechain.png')} />
              <Text style={styles.nomeMoeda}>VeChain</Text>
              <Text style={styles.siglaMoeda}>VEN</Text>
              <Text style={styles.valorMoeda}>$ 0,20</Text>
            </View>
            <View style={styles.divCelulaMoeda}>
              <Image style={styles.imagem} source={require('./ripple.png')} />
              <Text style={styles.nomeMoeda}>Ripple</Text>
              <Text style={styles.siglaMoeda}>XRP</Text>
              <Text style={styles.valorMoeda}>$ 1,40</Text>
            </View>
          </View>
      </View>
      <View style={{
        backgroundColor: 'black',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingLeft: 70,
        paddingRight: 70,
        }}>
          <View style={{
            alignItems: 'center'
            }}>
            <Image source={require('./moedas.png')}/>
            <Text style={{
              color: 'white',
              fontSize: 10,
              }}>Moedas</Text>
          </View>
          <View style={{
            alignItems: 'center',
            marginLeft: 'auto'
            }}>
            <Image source={require('./favoritos.png')}/>
            <Text style={{
              color: 'white',
              fontSize: 10,
              }}>Adicionadas</Text>
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  divCelulaMoeda: {
    backgroundColor: 'rgb(133, 142, 93)', 
    height: 140,
    width: 140,
    borderRadius: 10,
    padding: 5,
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
  },
  imagem: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: -10,
    right: -10,
  },
  nomeMoeda: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'futura',
    textAlign: 'center',
    marginTop: 10,
  },
  siglaMoeda: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'futura',
    textAlign: 'center',
    marginTop: 10,
  },
  valorMoeda: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'futura',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default App;
