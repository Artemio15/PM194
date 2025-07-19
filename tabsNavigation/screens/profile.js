import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) { 
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Text style={styles.title}>Perfil de usuario</Text>
        <Button title="Detalles de Usuario" onPress={() => navigation.navigate('Detalle')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'green',
  },
});
