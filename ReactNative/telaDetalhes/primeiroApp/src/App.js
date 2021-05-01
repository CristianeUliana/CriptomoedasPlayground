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
  return(
    <SafeAreaView>
       <View
        style={{
        height: '50%',
        width: '100%',
        padding: 20,
        backgroundColor: 'rgb(133, 142, 93)',
      }}
    >
      <Text style={{
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'futura',
        marginTop: 10,
      }}>BTC</Text>
      
      <Image style={{
        height: 60,
        width: 60,
        alignSelf: 'center',
        margin: 30,
       }} source={require('./bitcoin.png')} />

      <Text style={{
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'futura'
      }}>$ 21.345,20</Text>
        
      <View style={{
        alignItems: 'center'
      }}>
        <Text style={{
          marginTop: 20,
          textAlign: 'center',
          fontSize: 20,
          fontFamily: 'futura',
          color: 'white',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 8,
          width: 250,
          height: 60,
          padding: 15
        }}>ADICIONAR</Text>
      </View>  
    </View>
    <View
        style={{
        height: '40%',
        width: '100%',
        padding: 20,
        backgroundColor: 'black'
      }}>
      
      <Text style={{
        fontFamily: 'futura',
        fontSize: 23,
        color: 'white',
        textAlign: 'center'
      }}>volumes negociados</Text>

      <View style={{
        display: 'flex',
        flexDirection: 'row'
      }}>

        <Text style={{
        color: 'white',
        fontFamily: 'futura',
        fontSize: 20,
        marginTop: 30,
        }}>última hora</Text>

        <Text style={{
          color: 'white',
          fontFamily: 'futura',
          fontSize: 20,
          marginLeft: 'auto',
          marginTop: 30,
        }}>$ 321.345,45</Text>
      </View>

      <View style={{
        display: 'flex',
        flexDirection: 'row'
      }}>

        <Text style={{
        color: 'white',
        fontFamily: 'futura',
        fontSize: 20,
        marginTop: 30
        }}>último dia</Text>

        <Text style={{
          color: 'white',
          fontFamily: 'futura',
          fontSize: 20,
          marginLeft: 'auto',
          marginTop: 30
        }}>$ 1.321.345,45</Text>
      </View>

      <View style={{
        display: 'flex',
        flexDirection: 'row'
      }}>

        <Text style={{
        color: 'white',
        fontFamily: 'futura',
        fontSize: 20,
        marginTop: 30
        }}>último mês</Text>

        <Text style={{
          color: 'white',
          fontFamily: 'futura',
          fontSize: 20,
          marginLeft: 'auto',
          marginTop: 30
        }}>$ 12.321.345,45</Text>
      </View>
    </View>
    <View style={{
      height: '10%',
      width: '100%',
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'row',
      paddingRight: 50,
      paddingLeft: 50,
      paddingBottom: 10
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

export default App
  