/*Zona 1: Importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


const Texto=() => {
  const [contenido,setContenido]=useState('Hola Mundo RNative')
  const actualizaTexto=()=>{setContenido('Estado actualizado del Text')};
  return(
    <Text onPress={actualizaTexto}>{contenido}</Text>
  )
};

const Boton = () => {
  const [contenidoBoton, setContenidoBoton] = useState('Trabaja duro');
  const actualizaBoton=()=>{setContenidoBoton('No trabaja')};
  return (
    <Button title={contenidoBoton} onPress={actualizaBoton}> </Button>
  );
};


/*Zona 2: Main */

export default function App() {
  return (

    <View style={styles.container}>

      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Boton></Boton>
      <StatusBar style="auto" />

    </View>
  );
}


/*Zona 3: Estetica del screen */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
