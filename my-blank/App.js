/*Zona 1: Importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


const Texto=({style}) => {
  const [contenido,setContenido]=useState('Hola Mundo RNative')
  const actualizaTexto=()=>{setContenido('Estado actualizado del Text')};
  return(
    <View style={{ margin: 10 }}>

      <Text style={[styles.text, style]}>{contenido}</Text>
      <Button title="Actualizar"onPress={actualizaTexto}color="purple"accessibilityLabel="Actualizar el contenido del texto"/>
    </View>

  )
};


/*Zona 2: Main */

export default function App() {
  return (

    <View style={styles.container}>

      <Texto style={styles.blue}></Texto>
      <Texto style={styles.red}></Texto>
      <Texto style={styles.green}></Texto>
      <StatusBar style="auto" />

    </View>
  );
}


/*Zona 3: Estetica del screen */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text:{
    color: 'white',
    fontSize: 27,
  
  },

  blue: {backgroundColor: 'blue'},
  red: {backgroundColor: 'red'},
  green: {backgroundColor: 'green'},
});