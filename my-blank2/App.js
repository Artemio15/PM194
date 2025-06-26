import * as SplashScreen from 'expo-splash-screen';
import { ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View,  Text, TextInput, Button, Alert, Switch } from 'react-native';



SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appReady,setAppready] = useState(false);

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [terminos, setTerminos] = useState(false)

   const handleRegister = () => {
    if (!nombre.trim() || !email.trim()) {
      Alert.alert('Completa todos los campos');
    } else if (!terminos) {
      Alert.alert('Acepta términos y condiciones');
    } else {
      Alert.alert('Registro exitoso',`Nombre:${nombre}\nCorreo:${email}`);
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      setAppready(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return(
    <ImageBackground
      source={require('./assets/imagen1.jpg')}
      style={styles.background}
      resizeMode="cover"
      >
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a mi App</Text>
        <Text style={styles.subtitle}>
          {appReady ? 'Carga Completa' : 'Cargando...'}
        </Text>

         <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View style={styles.switchContainer}>
          <Switch value={terminos} onValueChange={setTerminos} />
          <Text style={styles.switchLabel}>Aceptar terminos y condiciones</Text>
        </View>

        <Button title="Registrarse" onPress={handleRegister} />
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
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 15,
    width: '80%',
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  switchLabel: {
    color: 'white',
  },
});