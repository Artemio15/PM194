import { StyleSheet, View,  Text, ActivityIndicator, Button } from 'react-native';
import React, { useState, useEffect } from 'react';




export default function App() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState();


const simularCarga = () => {
  setLoading(true);
  setMensaje('');

  setTimeout(() => {
    setLoading(false);
    setMensaje('Carga completada');
  }, 3000);
};

return (
  <View style ={styles.container}>
    <Text style={styles.title}>Carga</Text>
    {loading ? (
      <>
      <ActivityIndicator size="large" color="blue" />
      <Text style={styles.text}>Cargando...</Text>
      </>
    ) : (
      <>
      <Button title='Iniciar Craga' onPress={simularCarga} />
      {mensaje !== '' && <Text style={styles.exito}>{mensaje}</Text>}
      </>
      
    )}
  </View>
);
}





// 4. Estilos simples
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo:{
    marginBottom: 20,
    fontSize: 22,
  },
  texto: {
    marginTop: 15,
    color: 'gray',
  },
  exito: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
  },
});