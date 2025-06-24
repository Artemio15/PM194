import * as SplashScreen from 'expo-splash-screen';
import { ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View,  Text } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appReady,setAppready] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setAppready(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return(
    <ImageBackground
      source={require('./assets/image2.jpeg')}
      style={styles.background}
      resizeMode="cover"
      >
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a mi App</Text>
        <Text style={styles.subtitle}>
          {appReady ? 'Carga Completa' : 'Cargando...'}
        </Text>
      </View>  
      
      </ImageBackground>

  );
}


// 4. Estilos simples
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
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