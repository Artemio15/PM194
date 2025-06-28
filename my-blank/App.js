import * as SplashScreen from 'expo-splash-screen';
import { ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View,  Text, ScrollView } from 'react-native';
import { Overlay } from 'react-native-elements';



export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.background} showsVerticalScrollIndicator={false} horizontal={true}>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
    </ScrollView>
  );
}



// 4. Estilos simples
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  }
});